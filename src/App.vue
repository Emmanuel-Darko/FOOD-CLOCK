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
  background: var(--background-color);
  position: relative;
}

@media screen and (min-width: 425px) {
  .food-clock{
    max-width: 425px;
    max-height: 900px;
  }
  
}
</style>
