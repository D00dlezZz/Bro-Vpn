import { createI18n } from 'vue-i18n'
import ru from '@/i18n/locale/ru.json'
import en from '@/i18n/locale/en.json'
export const i18n = createI18n({
    locale: 'ru',
    allowComposition: true, // you need to specify that!
    messages:  {
        ru: ru,
        en: en
    },
    legacy: false,
    fallbackLocale: 'en'
})