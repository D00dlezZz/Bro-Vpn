<script setup>
import IconLogo from '@/components/icons/IconLogo.vue';
import {useRouter} from "vue-router";
const router = useRouter();

const homeRoute = () => router.push({name: 'landing'})
</script>

<template>
<div class="logo" @click="homeRoute">
  <IconLogo class="icon"/>
  <div class="text">
    <span>Bro!</span>
    <p>VPN</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.logo {
  @include flex-container(row, center, center);
  gap: 16px;
  cursor: pointer;
  .text {
    @include flex-container(row, flex-start, center);
    gap: 6px;
    @include text-property(24px, 32px, 400);
    span {
      @include text-property(24px, 32px, 600);
    }
  }
}
</style>