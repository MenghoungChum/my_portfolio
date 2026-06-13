import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n.js'
const savedLang = localStorage.getItem('language')

if (savedLang) {
  i18n.global.locale.value = savedLang
}
createApp(App).use(i18n).mount('#app')
