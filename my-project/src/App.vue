<template>
  <div id="app">
    <!-- <m-header></m-header> -->
    <!-- <tab></tab> -->
    <!-- <keep-alive> -->
      <!-- <router-view/> -->
      <MHeader/>
    <!-- </keep-alive> -->
    <!-- <player></player> -->
  </div>
</template>


<script>

import MHeader from './components/m-header/m-header'


export default {
  name: 'App',
  components : {
       MHeader
  }
}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
