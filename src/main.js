let Bootstrap = require('bootstrap')
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fas, faTwitter, faInstagram, faSquareCheck)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
