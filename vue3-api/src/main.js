import { createApp } from 'vue'
import App from './App.vue'
import * as utils from './libs/utils';
import store from './store/index'

const app = createApp(App)
app.use(store)

// 添加全局的属性
app.config.globalProperties.utils = utils;

app.mount('#app');

