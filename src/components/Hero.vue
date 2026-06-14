<template>
    <div>
        <div class="w-full md:h-167 h-auto flex flex-wrap justify-center items-center">

            <!-- Left Content -->
            <div
                class="md:w-[50%] w-full min-w-0 py-10 md:py-0"
                data-aos="fade-right"
                data-aos-duration="1000"
            >
                <h1 class="text-4xl font-bold dark:text-white typewriter-loop">
                    {{ translate.t('home.title') }}
                </h1>

                <p class="my-8 leading-7 dark:text-white">
                    {{ translate.t('home.subtitle') }}
                </p>

                <div
                    class="flex items-center gap-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <p
                        class="text-lg px-5 py-2 rounded-full border-2 border-black cursor-pointer dark:text-white dark:border-white"
                    >
                        {{ translate.t("homeButton.hire") }}
                    </p>

                    <button
                        type="button"
                        class="dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black text-lg px-5 py-2 rounded-full border-2 border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                    >
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                        {{ translate.t('homeButton.download') }}
                    </button>
                </div>
            </div>

            <!-- Right Image -->
            <div
                class="md:w-[50%] w-full min-w-0 h-full flex justify-center"
                data-aos="fade-left"
                data-aos-duration="1200"
            >
                <img
                    :src="currentImage"
                    class="h-full"
                    alt=""
                >
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