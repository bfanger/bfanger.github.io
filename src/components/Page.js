import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { compile } from 'vue'
import NotFound from './NotFound.vue'

const element = document.querySelector('bf-page')
let Content = compile('<span>' + element.innerHTML + '</span>')
Content.title = document.title

const cache = {
    [location.href]: Content
}

export default {
    name: 'Page',
    render(h) {
        return <Content />
    },
    mounted() {
        // const url$ = new Subject()
        const link$ = Observable.fromEvent(window, 'click')
            .filter(e => e.target.tagName === 'A' && e.target.href) // clicked on a link?
            .filter(e => e.target.href.substr(0, document.baseURI.length) === document.baseURI) // local url?
            .map(e => {
                e.preventDefault();
                history.pushState({}, null, e.target.href)
                return e.target.href
            })

        const navigation$ = Observable.fromEvent(window, 'popstate', e => location.href)

        this.$subscribeTo(Observable.merge(link$, navigation$).switchMap(this.componentFor), this.display)
    },
    methods: {
        extract(tag, html) {
            const startMatch = (new RegExp( '<' + tag + '(>| [^>]*>)','i')).exec(html)
            const endPos = html.indexOf('</' + tag + '>', startMatch.index)
            return html.substring(startMatch.index + startMatch[0].length, endPos)
        },
        componentFor(url) {
            if (cache[url]) {
                return Observable.of(cache[url])
            }
            return this.loadComponent(url).do(Component => {
                cache[url] = Component
            })
        },
        loadComponent(url) {
            return Observable.ajax({
                url: url,
                responseType: 'text'
            }).map( ({response}) => {
                const Component = compile('<span>' + this.extract('bf-page', response) + '</span>')
                Component.title = this.extract('title', response)
                return Component
            }).catch(error => {
                return Observable.of(NotFound)
            })
        },
        display(Component) {
            document.title = Component.title
            Content = Component
            this.$forceUpdate()
        }
    }
}
