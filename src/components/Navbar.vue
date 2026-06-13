```vue
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettings } from '../composables/useSettings'

const isOpen = ref(false)

// Theme
const { isDark, toggleTheme } = useSettings()

// Language
const { locale, t } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 border-b border-gray-200/20 bg-white/80 backdrop-blur-md dark:bg-gray-900/80"
  >
    <nav class="max-w-7xl mx-auto px-6 border-b border-b-gray-500">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold text-gray-900 dark:text-white"> Menghoung<span class="text-blue-600">.</span></a>
        <div class="flex items-center gap-4">
          <!-- Desktop Menu -->
          <ul class="hidden md:flex items-center gap-8">
            <li>
              <a href="#about" class="text-gray-600 khmer dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400">
                {{ t('nav.about') }}
              </a>
            </li>
            <li>
              <a href="#skills" class="text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400">
                {{ t('nav.skills') }}
              </a>
            </li>
            <li>
              <a href="#works" class="text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400">
                {{ t('nav.works') }}
              </a>
            </li>
            <li>
              <a href="#contact" class="text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400">
                {{ t('nav.contact') }}
              </a>
            </li>
          </ul>
          <!-- Language Select -->
          <select
            :value="locale"
            @change="changeLanguage($event.target.value)"
            class="hidden md:block px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none"
          >
            <option value="en">🇬🇧 English</option>
            <option value="km">🇰🇭 ខ្មែរ</option>
          </select>
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>
          <!-- Mobile Menu Button -->
          <button
            @click="isOpen = !isOpen"
            class="md:hidden text-gray-900 dark:text-white"
          >
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isOpen"
        class="md:hidden py-4 border-t border-gray-200/20 space-y-4"
      >
        <ul class="flex flex-col gap-4">
          <li>
            <a
              href="#about"
              @click="isOpen = false"
              class="block text-gray-600 dark:text-gray-300"
            >
              {{ t('nav.about') }}
            </a>
          </li>

          <li>
            <a
              href="#skills"
              @click="isOpen = false"
              class="block text-gray-600 dark:text-gray-300"
            >
              {{ t('nav.skills') }}
            </a>
          </li>

          <li>
            <a
              href="#works"
              @click="isOpen = false"
              class="block text-gray-600 dark:text-gray-300"
            >
              {{ t('nav.works') }}
            </a>
          </li>

          <li>
            <a
              href="#contact"
              @click="isOpen = false"
              class="block text-gray-600 dark:text-gray-300"
            >
              {{ t('nav.contact') }}
            </a>
          </li>
        </ul>

        <select
          :value="locale"
          @change="changeLanguage($event.target.value)"
          class="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 outline-none"
        >
          <option value="en">🇬🇧 English</option>
          <option value="km">🇰🇭 ខ្មែរ</option>
        </select>
      </div>
    </nav>
  </header>
</template>
```
