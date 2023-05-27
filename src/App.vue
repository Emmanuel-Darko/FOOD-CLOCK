<script setup>
// import { RouterLink, RouterView } from 'vue-router';
import FooterComponent from './components/FooterComponent.vue';


</script>

<template>
  <div class="food-clock flex-center light-mode">

    <RouterView />
   <FooterComponent/>
  </div>
</template>

<style scoped>
.food-clock{
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  /* background: var(--background-color); */
  position: relative;
  border-radius: 22px;
  overflow: hidden;
background: linear-gradient(145deg, #f3f9e0, #ccd2bc);
box-shadow:  6px 6px 12px #8d9082,
             -6px -6px 12px #ffffff;
}

@media screen and (min-width: 425px) {
  .food-clock{
    max-width: 425px;
    max-height: 900px;
  }
  
}
</style>
