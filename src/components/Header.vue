<script setup>
import Logo from '@/components/Logo.vue'
import LangSwitcher from "@/components/ui/LangSwitcher.vue";
</script>

<template>
<header class="header">
  <Logo/>
  <div class="header__nav-links">
    <a>Google Play</a>
    <a>Galaxy Store</a>
    <a>App Store</a>
  </div>
  <LangSwitcher/>
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
      cursor: pointer;
      text-decoration: none;
      color: var(--primary);
      @include text-property(26px, 32px, 600);
    }
  }
}
</style>