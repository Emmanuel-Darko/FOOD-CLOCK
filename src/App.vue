<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   <nav>
      <ul>
        <li><router-link to="/">Landing</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Register</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
      </ul>
   </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
