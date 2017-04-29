import Vue from 'vue'
import VueRx from 'vue-rx'
import {Observable} from 'rxjs/Observable'
import {Subscription} from 'rxjs/Subscription'
import Page from './components/Page'
import './sass/main.scss'

Vue.use(VueRx, {Observable, Subscription})

const page = new Vue(Page)
page.$mount('bf-page')

// Inject webpack's livereload script, when it's not embedded into the bundle but the dev-server is running.
// if (INJECT_WEBPACK_DEV_SERVER_SCRIPT && location.hostname === 'localhost') {
//     const s = document.createElement('script')
//     s.async = true
//     s.src = 'http://localhost:8080/webpack-dev-server.js'
//     document.head.appendChild(s)
// }
