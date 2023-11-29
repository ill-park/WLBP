<template>
  <aside class="flex">
    <LeftLayout></LeftLayout>
    <div class="min-h-screen bg-gray-100 w-full">
      <HeaderLayout></HeaderLayout>
      <router-view></router-view>
      <!-- <FooterLayout></FooterLayout> -->
    </div>
  </aside>
</template>

<style lang="scss"></style>

<script setup>
import HeaderLayout from './HeaderLayout.vue'
import LeftLayout from './LeftLayout.vue'
//import FooterLayout from './FooterLayout.vue'
</script>