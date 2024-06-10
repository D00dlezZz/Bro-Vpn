<script setup>
import FirstSection from '@/components/landing/FirstSection.vue';
import SecondSection from '@/components/landing/SecondSection.vue';
</script>

<template>
<div class="landing">
  <FirstSection/>
  <SecondSection/>
</div>
</template>

<style scoped lang="scss">
.landing {
  @include flex-container(column, center, center);
  gap: 140px;
}
</style>