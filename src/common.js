// Import vendor scripts here to speed up compilation.
import 'vue'
import 'vue-rx'
import 'rxjs/Observable'
import 'rxjs/Subscription'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/merge'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/catch'

if (process.env.NODE_ENV !== 'development') {
    // Import styles (with large assets) that slow down the compilation.
    // require('./sass/main.scss')
}