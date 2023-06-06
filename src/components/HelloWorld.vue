<script setup lang="ts">
// import { ref } from 'vue'
// const photoCards = ref([

// ])
</script>

<template>
  <div class="photo-card">
    <div class="photo-card__header">
      <div class="flex space-between container">
        <div class="photo-card__name flex">
          <img src="../assets/vue.svg" alt="" />
          <p>Minh Tuan</p>
        </div>
        <div class="photo-card__button">
          <button>Indie Game</button>
          <button>Entry Game</button>
          <button>Community</button>
        </div>
      </div>
    </div>
    <div class="photo-card__main">
      <div class="container">
        <h2>Photo Cards:</h2>
        <div class="flex wrap photo-card__content">
          <div v-for="arr in 18" :key="arr" class="photo-card__block">
            <div class="photo-card__img">
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
// var
$primary-clg: rgb(104, 200, 209);
// global
p {
  color: #fff;
}
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
.wrap {
  flex-wrap: wrap;
}
.container {
  margin: 0 20%;
}
button {
  border-radius: 2px;
  border: 1px solid #ffff;
  padding: 0.6em 1.2em;
  transition: border-color 0.25s;
  margin: 20px auto;
  color: #ffff;
  background: $primary-clg;
}
// primary
.photo-card {
  &__header {
    background-color: $primary-clg;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__button {
    button:nth-child(-n + 2) {
      margin-right: 12px;
    }
  }
  &__name {
    align-self: center;
    p {
      margin: auto;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
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
}
</style>
