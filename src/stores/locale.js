import {defineStore} from "pinia";
import {ref} from "vue";

export const useLocaleStore = defineStore('locale', () => {
    const locale = ref('ru');


    return {
        locale
    }
})