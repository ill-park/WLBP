import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('paginationStore', () => {
  const paginationInfo = ref({
    currentPageNo: 1, // 현재페이지
    firstPageNo: 1,
    firstPageNoOnPageList: 1,
    firstRecordIndex: 0,
    lastPageNo: 1,
    lastPageNoOnPageList: 1,
    lastRecordIndex: 20,
    pageSize: 10,
    recordCountPerPage: 20,
    totalPageCount: 1,
    totalRecordCount: 0
  })

  function initPaginationInfo(){
    paginationInfo.value = {
      currentPageNo: 1, // 현재페이지
      firstPageNo: 1,
      firstPageNoOnPageList: 1,
      firstRecordIndex: 0,
      lastPageNo: 1,
      lastPageNoOnPageList: 1,
      lastRecordIndex: 20,
      pageSize: 10,
      recordCountPerPage: 20,
      totalPageCount: 1,
      totalRecordCount: 0
    }
  }
  return {
    paginationInfo,
    initPaginationInfo
  }
})
