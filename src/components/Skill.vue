<template>
  <div id="skills" class="w-full flex flex-col md:flex-row gap-16 text-gray-900 dark:text-white">

    <!-- LEFT: Technical Skills -->
    <div
      class="w-full md:w-1/2"
      data-aos="fade-right"
    >
      <h3 class="text-3xl font-bold mb-6">
        {{ translate.t('skill.title') }}
      </h3>

      <div class="space-y-5">
        <div
          v-for="(skill, index) in MytechnicalSkills"
          :key="skill.id"
          class="space-y-2"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >

          <!-- name + percent -->
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <i :class="skill.icon"></i>
              <p class="font-medium">{{ skill.name }}</p>
            </div>

            <p class="text-sm text-gray-500 dark:text-gray-300">
              {{ skill.knowledge }}
            </p>
          </div>

          <!-- progress bar background -->
          <div class="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">

            <!-- progress fill -->
            <div
              class="h-full bg-blue-500 rounded-full transition-all duration-700"
              :style="{ width: skill.knowledge }"
            ></div>

          </div>

        </div>
      </div>
    </div>

    <!-- RIGHT: Work Experience -->
    <div
      class="w-full md:w-1/2"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <h3 class="text-3xl font-bold mb-6">
        {{ translate.t('skill.experience.title') }}
      </h3>

      <div
        class="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-sm space-y-4"
        data-aos="zoom-in-left"
        data-aos-delay="300"
      >

        <div>
          <h4 class="font-semibold">
            {{ translate.t('skill.project1.title') }}
          </h4>

          <p class="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {{ translate.t('skill.project1.description') }}
          </p>
        </div>

        <div class="border-t border-gray-300 dark:border-gray-700 pt-4">
          <h4 class="font-semibold">
            {{ translate.t('skill.project2.title') }}
          </h4>

          <p class="text-sm text-gray-500 dark:text-gray-300">
            {{ translate.t('skill.project2.description') }}
          </p>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage';
import { technicalSkills } from '../Data/data';

const MytechnicalSkills = technicalSkills;
const translate=useLanguage()
</script>