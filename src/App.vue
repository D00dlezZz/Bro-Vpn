<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header/>
  <main>
    <router-view/>
    <Footer/>
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
