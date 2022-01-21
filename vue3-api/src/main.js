import { createApp } from 'vue'
import App from './App.vue'
import * as utils from './libs/utils'

const app = createApp(App)

// 添加全局的属性
app.config.globalProperties.utils = utils;

app.mount('#app');

