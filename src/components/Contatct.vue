<template>
  <div class="w-full py-10">

    <!-- Title -->
    <h3
      class="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center"
      data-aos="fade-up"
    >
      {{ translate.t('contact.bigTitle') }}
    </h3>

    <div class="flex flex-col md:flex-row gap-10">

      <!-- LEFT: Contact Info -->
      <div class="w-full md:w-1/2 space-y-5" data-aos="fade-right">

        <!-- Email -->
        <div
          class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="text-blue-500 text-xl">
            <i class="fa-regular fa-envelope"></i>
          </div>

          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
              {{ translate.t('contact.block1.title') }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              menghoung262006@gmail.com
            </p>
          </div>
        </div>

        <!-- Phone -->
        <div
          class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="text-green-500 text-xl">
            <i class="fa-solid fa-phone"></i>
          </div>

          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
              {{ translate.t('contact.block2.title') }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              +855 000 000 000
            </p>
          </div>
        </div>

        <!-- Location -->
        <div
          class="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="text-red-500 text-xl">
            <i class="fa-solid fa-location-dot"></i>
          </div>

          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
              {{ translate.t('contact.block3.title') }}
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>

      </div>

      <!-- RIGHT: Contact Form -->
      <div
        class="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        data-aos="fade-left"
      >

        <form class="space-y-5">

          <!-- Email -->
          <div data-aos="fade-up" data-aos-delay="100">
            <label class="text-sm text-gray-700 dark:text-gray-300">
              {{translate.t('contact.contactField.block1.title')}}
            </label>

            <input
              type="email"
              class="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="translate.t('contact.contactField.block1.placeHolder')"
            />
          </div>

          <!-- Message -->
          <div data-aos="fade-up" data-aos-delay="200">
            <label class="text-sm text-gray-700 dark:text-gray-300">
              {{ translate.t('contact.contactField.block2.title') }}
            </label>

            <textarea
              rows="5"
              class="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              :placeholder="translate.t('contact.contactField.block2.placeHolder')"
            ></textarea>
          </div>

          <!-- Button -->
          <div data-aos="fade-up" data-aos-delay="300">
            <button
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
            >
              {{ translate.t('contact.button') }}
            </button>
          </div>

        </form>

      </div>

    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage';

    const translate=useLanguage();
</script>