<template lang="">
    <div>
        <h2 class="text-4xl font-bold my-3">About my eductation</h2>
        <div class="w-full h-162.5 flex items-center justify-between">
            <div class="w-[35%] h-full flex items-center justify-center">
                <img
                    :src="graduation_image"
                    class="h-full object-contain mt-10"
                    alt=""
                >
            </div>

            <div class="w-[60%] space-y-8">

    <!-- University -->
                <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300">
                    <div class="flex items-start gap-4">
                        <div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                            <i class="fa-solid fa-graduation-cap text-2xl text-blue-600"></i>
                        </div>

                        <div>
                            <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                                Bachelor of Information Technology
                            </h3>

                            <p class="text-gray-500 dark:text-gray-400 mt-1">
                                University Name • 2022 - Present
                            </p>

                            <ul class="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                                <li class="flex gap-3">
                                    <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                                    <span>
                                        Currently pursuing a degree in Information Technology
                                        with a strong interest in Web Development and modern technologies.
                                    </span>
                                </li>

                                <li class="flex gap-3">
                                    <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                                    <span>
                                        Developed knowledge in programming, networking,
                                        and software development through academic projects
                                        and self-learning.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                    <!-- High School -->
                <div class="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border-l-4 border-yellow-500 hover:shadow-xl transition-all duration-300">
                        <div class="flex items-start gap-4">
                            <div class="w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                                <i class="fa-solid fa-school text-2xl text-yellow-500"></i>
                            </div>

                            <div>
                                <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
                                    High School Diploma
                                </h3>

                                <p class="text-gray-500 dark:text-gray-400 mt-1">
                                    High School Name • 2022
                                </p>

                                <ul class="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
                                    <li class="flex gap-3">
                                        <i class="fa-solid fa-award text-yellow-500 mt-1"></i>
                                        <span>
                                            Successfully completed high school education with
                                            <strong>Grade A</strong> in the national examination.
                                        </span>
                                    </li>

                                    <li class="flex gap-3">
                                        <i class="fa-solid fa-circle-check text-green-500 mt-1"></i>
                                        <span>
                                            Demonstrated strong academic performance,
                                            responsibility, and dedication to learning.
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

</script>
<style lang="">
    
</style>