<script setup>


import IconChevron from "@/components/icons/IconChevron.vue";

const privacyPolicy = ref([
  {
    title: 'Введение',
    text: 'Данная политика конфиденциальности предоставляет информацию о том, как приложение BroVPN собирает, использует и предоставляет доступ к личным данным пользователей. Пожалуйста, внимательно ознакомьтесь с содержанием этой политики и обратитесь к ней, если у вас есть вопросы или требуется дополнительная информация.',
    isOpen: true
  },
  {
    title: 'Введение',
    text: 'Данная политика конфиденциальности предоставляет информацию о том, как приложение BroVPN собирает, использует и предоставляет доступ к личным данным пользователей. Пожалуйста, внимательно ознакомьтесь с содержанием этой политики и обратитесь к ней, если у вас есть вопросы или требуется дополнительная информация.',
    isOpen: false
  },
  {
    title: 'Введение',
    text: 'Данная политика конфиденциальности предоставляет информацию о том, как приложение BroVPN собирает, использует и предоставляет доступ к личным данным пользователей. Пожалуйста, внимательно ознакомьтесь с содержанием этой политики и обратитесь к ней, если у вас есть вопросы или требуется дополнительная информация.',
    isOpen: false
  },
  {
    title: 'Введение',
    text: 'Данная политика конфиденциальности предоставляет информацию о том, как приложение BroVPN собирает, использует и предоставляет доступ к личным данным пользователей. Пожалуйста, внимательно ознакомьтесь с содержанием этой политики и обратитесь к ней, если у вас есть вопросы или требуется дополнительная информация.',
    isOpen: false
  },
])
</script>

<template>
<div class="privacy-policy">
  <h2>Политика конфиденциальности</h2>
  <div class="privacy-policy__container">
      <div class="item" v-for="item in privacyPolicy" @click="() => item.isOpen = !item.isOpen">
        <div class="item__header">
          <h6>{{item.title}}</h6>
          <icon-chevron/>
        </div>
        <div v-if="item.isOpen">
          <p>{{item.text}}</p>
        </div>
      </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.privacy-policy {
  @include flex-container(column, flex-start, flex-start);
  gap: 48px;
  h2 {
    @include text-property(64px, 88px, 700);
  }
  &__container {
    width: 100%;
    background: #EBECF3;
    border-radius: 28px;
    & > :last-child {
      border-bottom: unset !important;
    }
    .item {
      @include flex-container(column, center, flex-start);
      padding: 20px 40px;
      gap: 12px;
      border-bottom: 2px solid #767680;

      &__header {
        @include flex-container(row, space-between, center);
        width: 100%;
        h6 {
          @include text-property(32px, 40px, 500)
        }
      }
    }
  }
}
</style>