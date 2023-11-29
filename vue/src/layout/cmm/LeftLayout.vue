<template>
  <div
    class="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-gray-900 dark:border-gray-700 bg-gray-50">
    <a href="/adminMainPage">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    </a>
    <!-- <template v-for="(menuItem) in menuStore.menuList" v-bind:key="menuItem.menuInnb">
      <a v-if="menuItem.upMenuInnb == 0" href="#"
        @click="menuStore.leftMenuSideVisiable = !menuStore.leftMenuSideVisiable , menuStore.targetMenuInnb = menuItem.menuInnb"
        class="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6" :class="menuItem.menuInnb == menuStore.targetMenuInnb ? 'bg-green-400' : ''">
          <path stroke-linecap="round" stroke-linejoin="round" :d=menuItem.menuDc />
        </svg>
      </a>
    </template> -->
  </div>
  <!-- <template v-for="(menuItem) in menuStore.menuList" v-bind:key="menuItem.menuInnb">
    <div v-if="menuItem.upMenuInnb == 0" v-show="menuStore.targetMenuInnb == menuItem.menuInnb && menuStore.leftMenuSideVisiable"
      class="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700 bg-gray-50">
      <h2 class="px-5 text-lg font-medium text-gray-800 dark:text-white">{{ menuItem.menuNm }}
        <div class="float-right cursor-pointer" @click="menuStore.targetMenuInnb = ''">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </h2>
      <template v-for="(subMenuItem, index) in menuStore.menuList" v-bind:key="subMenuItem.menuInnb+index+'_sub'">
        <div class="mt-8 space-y-4" v-if="menuItem.menuInnb == subMenuItem.upMenuInnb && subMenuItem.upMenuInnb != 0">

          <a class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none hover:bg-red-400"
            :class="subMenuItem.menuUrlAddr == menuStore.targetMenuAddr ? 'bg-green-400' : ''" :href=subMenuItem.menuUrlAddr>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            <div class="text-left rtl:text-right">
              <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">1
              </h1>
              <p class="text-xs text-gray-500 dark:text-gray-400">2</p>
            </div>
          </a>
        </div>
      </template>
    </div>
  </template> -->
</template>

<style lang="scss"></style>

<script setup>


</script>