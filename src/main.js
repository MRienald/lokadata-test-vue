import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Modal from "vue-bs-modal";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App)

app.use(router)
// app.mount('#app')
app.use(Modal).mount("#app");
