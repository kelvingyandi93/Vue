import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

// import 'bootstrap' // ←

// Vue.component('font-awesome-icon', FontAwesomeIcon)

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app")
