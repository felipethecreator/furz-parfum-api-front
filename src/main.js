import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)

app.use(router)

app.use(Toast, {
    position: POSITION.TOP_RIGHT,
  });
  

app.mount('#app')