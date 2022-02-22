import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/base.scss';
const app = createApp(App);
app.use(store).use(router).use(ElementPlus);
app.config.globalProperties.baseUrl = 'http://localhost:8081/'

app.mount('#app')
