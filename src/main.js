import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/reset.css'
import './assets/styles/colors.css'
import './assets/styles/main.css'
import './assets/styles/typography.css'
import './assets/styles/button.css'
import './assets/styles/input.css'
import './assets/styles/blockquote.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
