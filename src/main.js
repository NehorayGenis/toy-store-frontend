import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css';
import VueGoogleMaps from '@fawmi/vue-google-maps'

import './styles/styles.scss'

const app = createApp(App)

app.use(VueGoogleMaps, {
   load: {
      key: 'AIzaSyAxYW_FjuUgnuOXRQY7Re8yde2lPtht1Qk',
   },
})

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
