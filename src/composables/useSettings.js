import { ref, onMounted } from 'vue'

const isDark = ref(false)
const currentLanguage = ref('en')

export function useSettings() {
  // Theme
  const applyTheme = (dark) => {
    isDark.value = dark

    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  // Language
  const changeLanguage = (lang) => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  onMounted(() => {
    // Theme
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      applyTheme(savedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      applyTheme(prefersDark)
    }

    // Language
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage) {
      currentLanguage.value = savedLanguage
    }
  })

  return {
    isDark,
    toggleTheme,
    currentLanguage,
    changeLanguage,
  }
}