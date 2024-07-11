<script setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import IconFlagRu from "@/components/icons/flags/IconFlagRu.vue";
import IconFlagEn from "@/components/icons/flags/IconFlagEn.vue";
import IconBlueChevron from "@/components/icons/IconBlueChevron.vue";

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
    showDropdown.value = false;
    currentLocale.value = lang;
    locale.value = lang.value;
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <div class="language-switcher">
    <div class="language-switcher__wrap">
      <div class="current-language-con" @click="toggleDropdown">
        <component :is="currentLocale.icon"/>
        <p>{{currentLocale.title}}</p>
        <icon-blue-chevron :class="{'rotate': showDropdown}" class="chevron"/>
      </div>
      <div
          v-show="showDropdown"
          v-for="lang in languages"
          :key="lang.iso"
          class="language-selector"
      >
        <div
            v-if="currentLocale.iso !== lang.iso"
            class="language-option"
            @click="changeLocale(lang)"
        >
          <component :is="lang.icon"/>
          <p>{{lang.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.language-switcher {
  width: 208px;
  height: 60px;
  position: relative;
  @include text-property(18px, 32px, 500);

  &__wrap {
    position: absolute;
    top: 0;
    left: 0;
    background: #FFFFFF;
    border-radius: 24px;
    filter: drop-shadow(2px 4px 15px rgb(0 0 0 / 10%));
    cursor: pointer;
    width: 208px;

    .current-language-con {
      @include flex-container(row, center, center);
      gap: 8px;
      padding: 12px 20px;
      .chevron {
        transition: transform .3s;
        margin-left: 27px;
      }
      .rotate {
        transform: rotate(180deg);
        transition: transform .3s;
      }
    }
    .language-selector {
      .language-option {
        @include flex-container(row, flex-start, center);
        gap: 8px;
        padding: 12px 20px;
        border-top: 1px solid rgb(118 118 128 / 12%);
      }
    }
  }
}
</style>