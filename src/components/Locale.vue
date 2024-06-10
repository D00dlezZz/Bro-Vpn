<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";

const {locale} = useI18n()

const currentLocale = ref({
  title: 'Русский',
  value: 'ru'
})

const languages = ref([
  {
    title: 'Русский',
    value: 'ru'
  },
  {
    title: 'English',
    value: 'en'
  },
])
const changeLocale = (lang) => {
  currentLocale.value = lang;
  locale.value = lang.value
}
</script>

<template>
<div class="language-wrap">
  <p>{{currentLocale.title}}</p>
  <div class="language-wrap__selector">
    <p v-for="lang in languages" @click="changeLocale(lang)">
      {{lang.title}}
    </p>
  </div>
</div>
</template>

<style scoped lang="scss">
.language-wrap {
  padding: 12px 20px;
  position: relative;
  &__selector {
    position: absolute;
  }
}
</style>