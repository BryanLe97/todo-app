<script setup lang="ts">
import dateConvert from "../composables/concertDate";
</script>
<template>
  <div class="footer">
    <div class="container flex">
      <p>copy right {{ dateConvert(new Date()) }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  transform: scale(1);
  background: linear-gradient(90deg, #e77026 0%, #f3a846 100%);
  div {
    height: 128px;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
