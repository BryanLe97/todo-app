<script setup lang="ts">
import HomeBanner from './component/HomeBanner.vue'
</script>
<template>
  <div class="content">
    <div class="content__main">
      <home-banner />
      <div class="container">
        <div class="flex wrap content__content">
          <div v-for="arr in 18" :key="arr" class="content__block">
            <div class="content__img">
              <img src="/src/assets/img.jpg" alt="" />
            </div>
            <p>this is a long test</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  &__block {
    width: calc(20% - 20px);
    margin: 0 10px;
    border-radius: 2px;
    p {
      margin: 12px 0;
      color: #000;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  &__content {
    margin: 0 -10px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__img {
    position: relative;
    display: block;
    padding-top: 60%;
    img {
      // display: block;
      // max-width: 100%;
      // height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__main{
    & div {
      margin-bottom: 2vw;
    }
  }
}
</style>
