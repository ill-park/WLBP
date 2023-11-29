import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as EgovNet from '@/api/egovFetch'
import * as ErrorCode from '@/stores/cmm/errorCodeStore'
import { usePaginationStore } from '@/stores/cmm/paginationStore';

export const useCodeStore = defineStore('codeStore', () => {
  const table = ref({
    serachKey: '',
    title: '공통코드 관리',
    columns: ['lclsfCd', 'lclsfCdNm', 'rgtrInnb', 'regDt', 'updusrInnb', 'updtDt'],
    columnsName: ['분류코드', '분류코드명', '등록자', '등록일시', '수정자', '수정일시', '관리'],
    itemList: null,

  })

  const paginationStore = usePaginationStore()

  const model = ref({})
  const editVisible = ref(false)

  async function getTableData() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          lclsfCd: table.value.serachKey,
          pageIndex: paginationStore.paginationInfo.currentPageNo
        })
      }
      const resp = await EgovNet.requestFetch(`/user-service/selectCodeList.do`, requestOptions)
      paginationStore.paginationInfo = resp.result.paginationInfo
      table.value.itemList = resp.result.itemList
      editVisible.value = false
    } catch (error) {
      console.error(ErrorCode.SELECT_ERR)
    }
  }

  async function getDataOne() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          lclsfCd: model.value.lclsfCd
        })
      }
      const resp = await EgovNet.requestFetch(`/user-service/selectCodeOne.do`, requestOptions)
      model.value = resp.result.item
      editVisible.value = true
    } catch (error) {
      console.error(ErrorCode.SELECT_ERR)
    }
  }

  async function insertData() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          lclsfCd: model.value.lclsfCd,
          lclsfCdNm: model.value.lclsfCdNm
        })
      }
      await EgovNet.requestFetch(`/user-service/insertCode.do`, requestOptions)
      editVisible.value = false
      getTableData()
    } catch (error) {
      console.error(ErrorCode.INSERT_ERR)
    }
  }

  async function updateData() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          lclsfCd: model.value.lclsfCd,
          lclsfCdNm: model.value.lclsfCdNm
        })
      }
      await EgovNet.requestFetch(`/user-service/updateCodeOne.do`, requestOptions)
      editVisible.value = false
      getTableData()
    } catch (error) {
      console.error(ErrorCode.UPDATE_ERR)
    }
  }

  async function deleteData() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          lclsfCd: model.value.lclsfCd
        })
      }
      await EgovNet.requestFetch(`/user-service/deleteCodeOne.do`, requestOptions)
      editVisible.value = false
      getTableData()
    } catch (error) {
      console.error(ErrorCode.DELETE_ERR)
    }
  }

  async function getChildData() {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          lclsfCd: model.value.lclsfCd,
          pageIndex : paginationStore.paginationInfo.currentPageNo
        })
      }
      const resp = await EgovNet.requestFetch(`/user-service/selectChildCodeList.do`, requestOptions)
      paginationStore.paginationInfo = resp.result.paginationInfo
      table.value.itemList = resp.result.itemList
      
    } catch (error) {
      console.error(ErrorCode.DELETE_ERR)
    }
  }

  
  return {
    table,
    model,
    editVisible,
    getTableData,
    getDataOne,
    insertData,
    updateData,
    deleteData,
    getChildData
  }
})
