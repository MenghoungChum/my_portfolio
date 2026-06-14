<template>
    <div>
        <h2
            class="text-4xl font-bold my-3 dark:text-white"
            data-aos="fade-up"
        >
            {{translate.t('educationTitle')}}
        </h2>

        <div class="w-full md:h-162.5 h-auto flex flex-wrap items-center justify-between">

            <!-- Image -->
            <div
                class="md:w-[35%] w-full h-full flex items-center justify-center"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
            >
                <img
                    :src="graduation_image"
                    class="h-full object-contain mt-10"
                    alt=""
                >
            </div>

            <div class="md:w-[60%] w-full space-y-8">

                <!-- University -->
                <div
                    class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            <i class="fa-solid fa-graduation-cap text-2xl text-blue-600"></i>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                                {{translate.t('education.university.title')}}
                            </h3>

                            <p class="text-gray-500 dark:text-gray-400 mt-1">
                                {{translate.t('education.university.universityName')}} • 2022 - 2024
                            </p>

                            <ul class="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                                <li class="flex gap-3">
                                    <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                                    <span>
                                        {{translate.t('education.university.statment1')}}
                                    </span>
                                </li>

                                <li class="flex gap-3">
                                    <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                                    <span>
                                        {{translate.t('education.university.statment2')}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- High School -->
                <div
                    class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300"
                    data-aos="fade-left"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                >
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                            <i class="fa-solid fa-school text-2xl text-yellow-500"></i>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                                {{translate.t('education.highSchool.title')}}
                            </h3>

                            <p class="text-gray-500 dark:text-gray-400 mt-1">
                                {{translate.t('education.highSchool.SchoolName')}} • {{translate.t('education.present')}}
                            </p>

                            <ul class="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                                <li class="flex gap-3">
                                    <i class="fa-solid fa-award text-yellow-500 mt-1"></i>
                                    <span>
                                        {{translate.t('education.highSchool.statment1')}}
                                    </span>
                                </li>

                                <li class="flex gap-3">
                                    <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                                    <span>
                                        {{translate.t('education.highSchool.statment2')}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
    import graduation_image from '../assets/graduatioin_image.png'
import { useLanguage } from '../composables/useLanguage';
    const translate=useLanguage()

</script>
<style lang="">
    
</style>