<script setup lang="ts">
import FooterPage from './components/TodoFooter.vue'
import HeaderPage from './components/TodoHeader.vue';
</script>

<template>
    <div class="layout">
		<div class="main">
      <div class="main-header"> 
        <header-page />
      </div>
      <div class="main-content"> 
        <router-view />
      </div>
      <div class="main-footer"> 
        <footer-page />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  .main{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .main-header {
      position: fixed;
      height: 85px;
      top: 0;
      width: 100%;
      z-index: 100;
      background: #ffffff;
      -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
      box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    }
    .main-content {
      flex: 1;
      margin-top: 95px;
    }
  }
}
</style>
