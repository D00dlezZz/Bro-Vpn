<script setup>
const props = defineProps({
  title: String,
  icon: String
})
</script>

<template>
<div class="e-button">
  <div class="e-button__text">
    <p>Available in</p>
    <h3>{{title}}</h3>
  </div>
</div>
</template>

<style scoped lang="scss">
.e-button {
  @include flex-container(row, space-between, center);
  background-color: var(--primary);
  width: 100%;
  max-width: 294px;
  padding: 13px 24px;
  border-radius: 20px;
  color: var(--secondary-container);
  &__text {
    @include flex-container(column, center, flex-start);
    gap: 2px;
    @include text-property(14px, 16px, 400);
    h3 {
      @include text-property(24px, 32px, 500);
    }
  }
}
</style>