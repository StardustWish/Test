import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import './style.css'
import './styles/global.scss'

const app = createApp(App)

app.use(createPinia())
   .use(router)
   .use(ElementPlus)
   .mount('#app')
