<script setup>
const props = defineProps({
  icon: String,
  title: String,
  subtitle: String,
  background: String
})
console.log(props.icon)
</script>

<template>
<div class="info-block">
  <div class="info-block__icon">
    <component :is="icon"/>
  </div>
  <div class="info-block__text">
    <h4>{{title}}</h4>
    <p>{{subtitle}}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.info-block {
  @include flex-container(column, flex-start, center);
  width: 403px;
  height: 348px;
  gap: 20px;
  &__icon {
    @include flex-container(row, center, center);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    //background: v-bind(background);
  }
  &__text {
    @include flex-container(column, center, center);
    gap: 12px;
    h4 {
      @include text-property(40px, 48px, 600);
    }
    p {
      @include text-property(24px, 36px, 400);
      text-align: center;
    }
  }
}
</style>