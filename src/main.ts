import './assets/main.css'
import './styles/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import inViewport from './directives/InViewport'
import textDisplay from './directives/TextDisplay'
import hover from './directives/Hover'

const app = createApp(App)

app.use(createPinia())
app.directive('in-viewport', inViewport)
app.directive('text-display', textDisplay)
app.directive('hover', hover)
app.use(router)

app.mount('#app')
