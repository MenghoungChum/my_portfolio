import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n.js'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 800,
  once: true
})

const savedLang = localStorage.getItem('language')

if (savedLang) {
  i18n.global.locale.value = savedLang
}
createApp(App).use(i18n).mount('#app')
