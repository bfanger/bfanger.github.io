import{S as e,i as t,s as n,D as s,e as a,c as i,a as o,d as r,b as l,f as c,E as d,F as u,v as w,r as h,z as g,G as m,H as p}from"../chunks/vendor-d7d6bc8e.js";"undefined"!=typeof window&&function(e,t,n,s,a){e[s]=e[s]||[],e[s].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var i=t.getElementsByTagName(n)[0],o=t.createElement(n);o.async=!0,o.src="https://www.googletagmanager.com/gtm.js?id=GTM-M38LTD8",i.parentNode.insertBefore(o,i)}(window,document,"script","dataLayer");const{window:v}=m;function f(e){let t,n,g,m,p;const f=e[4].default,$=s(f,e,e[3],null);return{c(){t=a("div"),$&&$.c(),this.h()},l(e){t=i(e,"DIV",{class:!0,style:!0});var n=o(t);$&&$.l(n),n.forEach(r),this.h()},h(){l(t,"class","layout svelte-1k8wdr7"),l(t,"style",n=e[1]?"min-height: "+e[1]:"")},m(n,s){c(n,t,s),$&&$.m(t,null),e[5](t),g=!0,m||(p=d(v,"sveltekit:navigation-end",e[2]),m=!0)},p(e,[s]){$&&$.p&&(!g||8&s)&&u($,f,e,e[3],g?s:-1,null,null),(!g||2&s&&n!==(n=e[1]?"min-height: "+e[1]:""))&&l(t,"style",n)},i(e){g||(w($,e),g=!0)},o(e){h($,e),g=!1},d(n){n&&r(t),$&&$.d(n),e[5](null),m=!1,p()}}}function $(e,t,n){let s,{$$slots:a={},$$scope:i}=t,o="";function r(){window.removeEventListener("resize",l)}function l(){n(1,o=window.innerHeight+"px")}return g((()=>(s.clientHeight!==window.innerHeight&&(window.addEventListener("resize",l),l()),r))),e.$$set=e=>{"$$scope"in e&&n(3,i=e.$$scope)},[s,o,function(){var e;e={event:"VirtualPageview",virtualPageUrl:location.pathname,virtualPageTitle:document.title},window.dataLayer.push(e)},i,a,function(e){p[e?"unshift":"push"]((()=>{s=e,n(0,s)}))}]}export default class extends e{constructor(e){super(),t(this,e,$,f,n,{})}}