<script setup lang="ts">
import { ref } from "vue";
import HcDropdown from "../components/global/TodoDropdown.vue";
const isNew = ref<number>(0);
</script>

<template>
  <div class="header container">
    <div class="header__menu flex">
      <p class="header__content">SunFlower</p>
      <img src="../assets/images.png" alt="img" class="header__icon" />
      <p class="header__content">Broccoli</p>
      <div style="align-self: center">
        <hc-dropdown>
          <template #dropdown-toggle>
            <div class="header__menu__toggle" />
          </template>
          <template #dropdown-items>
            <a class="hc-ma-sm" href="#">自分の記録</a>
            <a class="hc-ma-sm" href="#">体重グラフ</a>
            <a class="hc-ma-sm" href="#">目標</a>
            <a class="hc-ma-sm" href="#">選択中のコース</a>
            <a class="hc-ma-sm" href="#">コラム一覧</a>
            <a class="hc-ma-sm" href="#">設定</a>
          </template>
        </hc-dropdown>
      </div>
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
    height: 85px;
    object-fit: cover;
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
