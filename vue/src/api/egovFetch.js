import { SERVER_URL } from '../config'
import { PROXY_URL } from '../config'
import { ACCESS_TOKEN } from '../config'
import { AUTH_USER_ID } from '../config'

import CODE from '@/constants/code'
import { getSessionItem } from '@/api/storage'
import { getLocalItem } from '@/api/storage'

export function getQueryString(params) {
  return `?${Object.entries(params)
    .map((e) => e.join('='))
    .join('&')}`
}
export function requestFetch(url, requestOptions) {
  console.groupCollapsed('requestFetch')
  console.log('requestFetch [URL] : ', SERVER_URL + PROXY_URL + url)
  console.log('requestFetch [requestOption] : ', requestOptions)

  // Login 했을경우 JWT 설정
  const sessionUser = getLocalItem(AUTH_USER_ID)
  //const sessionUserId = sessionUser?.id || null
  const jToken = getLocalItem(ACCESS_TOKEN)
  if (sessionUser != null && sessionUser !== undefined) {
    if (!requestOptions['headers'])
      requestOptions['headers'] = {}
    if (!requestOptions['headers']['Authorization'])
      requestOptions['headers']['Authorization'] = null
    requestOptions['headers']['Authorization'] = jToken
    console.log('로그인함')
  }

  // CORS ISSUE 로 인한 조치 - origin 및 credentials 추가
  // origin 추가
  if (!requestOptions['origin']) {
    requestOptions = { ...requestOptions, origin: SERVER_URL }
  }
  // credentials 추가
  if (!requestOptions['credentials']) {
    requestOptions = { ...requestOptions, credentials: 'include' }
  }

  return new Promise((resolve, reject) => {
    fetch(SERVER_URL + PROXY_URL + url, requestOptions)
      .then((response) => response.json())
      .then((resp) => {
        if (Number(resp.resultCode) === Number(CODE.RCV_ERROR_AUTH)) {
          reject(new Error('Authentication error'))
        } else {
          resolve(resp)
        }
      })
      .catch((error) => {
        console.error('Error in requestFetch:', error)
        reject(error)
      })
      .finally(() => {
        console.log("requestFetch finally end");
        console.groupEnd("requestFetch");
      })
  })
}

export function changeJsonTOForm(jsonString, multipartFile) {
  const resultFormData = new FormData()

  let json = JSON.parse(jsonString)

  var keys = Object.keys(json)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    resultFormData.append(key, json[key])
  }
  if (multipartFile) {
    resultFormData.append('multipartfile', multipartFile)
  }

  return resultFormData
}
