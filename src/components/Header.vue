<script setup>
import Logo from '@/components/Logo.vue'
import Locale from '@/components/Locale.vue'
</script>

<template>
<header class="header">
  <Logo/>
  <div class="header__nav-links">
    <a href="">Google Play</a>
    <a href="">Galaxy Store</a>
    <a href="">App Store</a>
  </div>
  <Locale/>
</header>
</template>

<style scoped lang="scss">
.header {
  @include flex-container(row, space-between, center);
  width: 100%;
  padding: 32px 48px;
  margin-bottom: 72px;
  &__nav-links {
    @include flex-container(row, center, center);
    gap: 24px;
    a {
      text-decoration: none;
      color: var(--primary);
      @include text-property(26px, 32px, 600);
    }
  }
}
</style>