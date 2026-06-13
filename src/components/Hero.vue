<template lang="">
    <div>
        <div class="w-full h-167  flex justify-center items-center">
            <div class="w-[50%]">
                <h1 class="text-4xl font-bold dark:text-white">{{translate.t('home.title')}}</h1>
                <p class="my-8 leading-7 dark:text-white">{{translate.t('home.subtitle')}}</p>
                <div class=" flex items-center gap-4">
                    <p class="text-lg px-5 py-2 rounded-full border-2 border-black cursor-pointer dark:text-white dark:border-white">{{translate.t("homeButton.hire")}}</p>
                    <button type="button" class="dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black text-lg px-5 py-2 rounded-full border-2 border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out"><i class="fa-solid fa-cloud-arrow-down "></i> {{translate.t('homeButton.download')}}</button>
                </div>
            </div>
            <div class="w-[50%] h-full flex justify-center">
                <img :src="currentImage"  class="h-full" alt="">
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useLanguage } from '../composables/useLanguage';
    import My_Image from '../assets/Image.jpg'
    import My_Image1 from '../assets/Image1.jpg'
    import { useSettings } from '../composables/useSettings';
import { computed } from 'vue';



    const translate=useLanguage()
    const isDarkMode=useSettings();
    const currentImage = computed(() => {
        return isDarkMode.isDark.value ? My_Image : My_Image1
    })
</script>
<style lang="">
    
</style>