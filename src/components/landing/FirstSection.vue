<script setup>
import IconPhones from '@/components/icons/IconPhones.vue';
import GooglePlayButton from '@/components/ui/GooglePlayButton.vue';
</script>

<template>
<section class="preview-section">
  <div class="preview-section__text-block">
    <h1 class="title">Bro!</h1>
    <p class="subtitle">Fast. Safe. Yours.</p>
    <p class="by-text">by Shidotemoru</p>
    <GooglePlayButton/>
  </div>
  <IconPhones/>
</section>
</template>

<style scoped lang="scss">
.preview-section {
  @include flex-container(row, space-between, flex-start);
  width: 100%;
  &__text-block {
    @include flex-container(column, center, flex-start);
    gap: 12px;
    .title {
      @include text-property(80px, 100px, 600);
    }
    .subtitle {
      @include text-property(40px, 48px, 500);
    }

    .by-text {
      @include text-property(24px, 36px, 400);
      margin-bottom: 40px;
    }
  }
}
</style>