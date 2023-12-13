<script setup lang="ts"></script>

<template>
  <div class="header container">
    <div class="header__menu flex">
      <p class="header__content">SunFlower</p>
      <img src="@/assets/img/images.png" alt="img" class="header__icon" />
      <p class="header__content">Broccoli</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hc-ma-sm {
  margin: 12px;
}
.header {
  &__icon {
    flex-grow: 1;
    height: 82px;
    object-fit: contain;
  }
  &__content {
    flex-grow: 1;
  }
  &__menu {
    justify-content: center;
    align-items: center;
    & > div {
      margin-right: 8px;
    }
  }
}
</style>
