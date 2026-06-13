import { useI18n } from "vue-i18n"

export function useLanguage() {
  const { locale, t,tm } = useI18n()

  const changeLanguage = (lang) => {
    locale.value = lang
    localStorage.setItem('language', lang)
  }

  const initLanguage = () => {
    const savedLang = localStorage.getItem('language')
    if (savedLang) {
      locale.value = savedLang
    }
  }

  return {
    locale,
    t,
    tm,
    changeLanguage,
    initLanguage,
  }
}