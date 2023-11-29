import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ACCESS_TOKEN } from '../../config'
import { AUTH_USER_ID } from '../../config'
import axios from 'axios';

export const useLoginStore = defineStore('login', () => {

  const lgnId = ref('test')
  const pw = ref('test')

  async function login() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }

    const requestData = {
      lgnId: lgnId.value,
      pw: pw.value
    };

    axios.post('/api/proxy/user-service/login', requestData, requestOptions)
      .then(response => {
        console.log('Response:', response.data);
        localStorage.setItem(ACCESS_TOKEN, response.headers['access-token']);
        localStorage.setItem(AUTH_USER_ID, response.headers['token-id']);

        window.location.href = "/adminMainPage";
        console.log('Logging in with:', this.lgnId, this.pw);
      })
      .catch(error => {
        console.error('Login Error:', error);
      });

    //const resp = await EgovNet.requestFetch(`/user-service/login`, requestOptions);
  }

  return { lgnId, pw, login }
})
