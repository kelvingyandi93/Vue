<template>
  <Navbar/>
  <Carousel/>
  <font-awesome-icon icon="fa-solid fa-user-secret" />
</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import Carousel from './components/Carousel.vue';
</script>

<style>
.navbar {
  margin-top: 0px; /* adjust this value to position the navbar where you want it */
}
</style>