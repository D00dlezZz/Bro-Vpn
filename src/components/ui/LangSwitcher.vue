<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import IconFlagRu from "@/components/icons/flags/IconFlagRu.vue";
import IconFlagEn from "@/components/icons/flags/IconFlagEn.vue";

const {locale} = useI18n();

const showDropdown = ref(false);

const currentLocale = ref({
  title: 'Русский',
  iso: 'ru',
  icon: markRaw(IconFlagRu)
})

const languages = ref([
  {
    title: 'Русский',
    iso: 'ru',
    icon: markRaw(IconFlagRu)
  },
  {
    title: 'English',
    iso: 'en',
    icon: markRaw(IconFlagEn)
  },
])
const changeLocale = (lang) => {
  if (currentLocale.value.iso !== lang.iso) {
    currentLocale.value = lang;
    locale.value = lang.value;
  }
}
</script>

<template>
  <div class="language-switcher">
    <div class="language-switcher__wrap">
      <div class="current-language-con" @click="() => showDropdown = !showDropdown">
        <component :is="currentLocale.icon"/>
        <p>{{currentLocale.title}}</p>
      </div>
      <div v-if="showDropdown">
        <p>h1</p>
        <p>h1</p>
        <p>h1</p>
        <p>h1</p>
        <p>h1</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-switcher {
  width: 208px;
  height: 60px;
  position: relative;

  &__wrap {
    position: absolute;
    top: 0;
    left: 0;
    background: #FFFFFF;
    border-radius: 40px;
    filter: drop-shadow(2px 4px 15px rgb(0 0 0 / 10%));
    cursor: pointer;
    width: 208px;

    .current-language-con {
      @include flex-container(row, center, center);
      gap: 8px;
      padding: 12px 20px;
    }
  }
}
</style>