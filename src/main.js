import { createApp } from 'vue'
import App from './App.vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
})

createApp(App).mount('#app')
