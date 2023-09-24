<script setup lang="ts">
import "swiper/css";
</script>
<template>
  <div class="banner">
    <div class="banner__main">
      <div class="banner_banner">
        <swiper>
          <swiper-slide v-for="val in 5" :key="val">
            <div class="banner__banner-img">
              <img src="../asset/banner-1.webp" alt="img" class="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  &__banner-img {
    position: relative;
    display: block;
    padding-top: 36vw;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
