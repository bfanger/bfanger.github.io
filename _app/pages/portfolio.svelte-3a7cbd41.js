import{S as t,i as e,s as o,k as n,j as s,K as r,d as a,n as l,m as c,f,o as i,x as $,u as h,v as u,e as p,c as d,a as m,b as g,T as v,U as x,M as j,t as w,g as y,L as E,E as b,h as k,Z as D,D as H,F,G as P,H as B}from"../chunks/vendor-313de97a.js";import{P as I,C as L}from"../chunks/Card-1150f1b4.js";import{N as C,c as N,a as T,b as U}from"../chunks/cardTransition-ffda0a2f.js";import{D as V}from"../chunks/Disclaimer-d16dda0f.js";function _(t,e,o){const n=t.slice();return n[6]=e[o],n}function A(t,e,o){const n=t.slice();return n[9]=e[o],n}function G(t){let e,o,n,s,r=t[9].title+"";return{c(){e=p("li"),o=p("a"),n=w(r),this.h()},l(t){e=d(t,"LI",{});var s=m(e);o=d(s,"A",{href:!0});var l=m(o);n=y(l,r),l.forEach(a),s.forEach(a),this.h()},h(){g(o,"href",s="projects/"+t[9].slug)},m(t,s){f(t,e,s),E(e,o),E(o,n)},p(t,e){1&e&&r!==(r=t[9].title+"")&&k(n,r),1&e&&s!==(s="projects/"+t[9].slug)&&g(o,"href",s)},d(t){t&&a(e)}}}function K(t){let e,o,s,r,c,i,$=t[6]+"",h=t[0][t[6]],u=[];for(let n=0;n<h.length;n+=1)u[n]=G(A(t,h,n));return{c(){e=p("h2"),o=w($),s=n(),r=p("ul");for(let t=0;t<u.length;t+=1)u[t].c()},l(t){e=d(t,"H2",{});var n=m(e);o=y(n,$),n.forEach(a),s=l(t),r=d(t,"UL",{});var c=m(r);for(let e=0;e<u.length;e+=1)u[e].l(c);c.forEach(a)},m(n,a){f(n,e,a),E(e,o),f(n,s,a),f(n,r,a);for(let t=0;t<u.length;t+=1)u[t].m(r,null);c||(i=b(r,"mousedown",t[3]),c=!0)},p(t,e){if(3&e){let o;for(h=t[0][t[6]],o=0;o<h.length;o+=1){const n=A(t,h,o);u[o]?u[o].p(n,e):(u[o]=G(n),u[o].c(),u[o].m(r,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=h.length}},d(t){t&&a(e),t&&a(s),t&&a(r),D(u,t),c=!1,i()}}}function M(t){let e,o,s,r,c,i=t[1],u=[];for(let n=0;n<i.length;n+=1)u[n]=K(_(t,i,n));const g=t[2].default,v=H(g,t,t[5],null);return{c(){e=p("h1"),o=w("Portfolio van Bob Fanger"),s=n();for(let t=0;t<u.length;t+=1)u[t].c();r=n(),v&&v.c()},l(t){e=d(t,"H1",{});var n=m(e);o=y(n,"Portfolio van Bob Fanger"),n.forEach(a),s=l(t);for(let e=0;e<u.length;e+=1)u[e].l(t);r=l(t),v&&v.l(t)},m(t,n){f(t,e,n),E(e,o),f(t,s,n);for(let e=0;e<u.length;e+=1)u[e].m(t,n);f(t,r,n),v&&v.m(t,n),c=!0},p(t,e){if(3&e){let o;for(i=t[1],o=0;o<i.length;o+=1){const n=_(t,i,o);u[o]?u[o].p(n,e):(u[o]=K(n),u[o].c(),u[o].m(r.parentNode,r))}for(;o<u.length;o+=1)u[o].d(1);u.length=i.length}v&&v.p&&(!c||32&e)&&F(v,g,t,t[5],c?B(g,t[5],e,null):P(t[5]),null)},i(t){c||($(v,t),c=!0)},o(t){h(v,t),c=!1},d(t){t&&a(e),t&&a(s),D(u,t),t&&a(r),v&&v.d(t)}}}function O(t){let e;return{c(){e=w("Home")},l(t){e=y(t,"Home")},m(t,o){f(t,e,o)},d(t){t&&a(e)}}}function S(t){let e,o,r,w,y,E,b,k,D,H;return o=new L({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),b=new C({props:{href:"/",type:"previous",$$slots:{default:[O]},$$scope:{ctx:t}}}),b.$on("mousedown",t[4]),D=new V({}),{c(){e=p("div"),s(o.$$.fragment),y=n(),E=p("div"),s(b.$$.fragment),k=n(),s(D.$$.fragment),this.h()},l(t){e=d(t,"DIV",{});var n=m(e);c(o.$$.fragment,n),n.forEach(a),y=l(t),E=d(t,"DIV",{class:!0});var s=m(E);c(b.$$.fragment,s),s.forEach(a),k=l(t),c(D.$$.fragment,t),this.h()},h(){g(E,"class","portfolio-page__previous svelte-1jwhvx3")},m(t,n){f(t,e,n),i(o,e,null),f(t,y,n),f(t,E,n),i(b,E,null),f(t,k,n),i(D,t,n),H=!0},p(t,e){const n={};33&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),b.$set(s)},i(t){H||($(o.$$.fragment,t),v((()=>{w&&w.end(1),r=x(e,T,{}),r.start()})),$(b.$$.fragment,t),$(D.$$.fragment,t),H=!0)},o(t){h(o.$$.fragment,t),r&&r.invalidate(),w=j(e,U,{}),h(b.$$.fragment,t),h(D.$$.fragment,t),H=!1},d(t){t&&a(e),u(o),t&&w&&w.end(),t&&a(y),t&&a(E),u(b),t&&a(k),u(D,t)}}}function Z(t){let e,o,p;return o=new I({props:{$$slots:{default:[S]},$$scope:{ctx:t}}}),{c(){e=n(),s(o.$$.fragment),this.h()},l(t){r('[data-svelte="svelte-141aa9b"]',document.head).forEach(a),e=l(t),c(o.$$.fragment,t),this.h()},h(){document.title="Bob Fanger's portfolio"},m(t,n){f(t,e,n),i(o,t,n),p=!0},p(t,[e]){const n={};33&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){p||($(o.$$.fragment,t),p=!0)},o(t){h(o.$$.fragment,t),p=!1},d(t){t&&a(e),u(o,t)}}}var q=function(t,e,o,n){return new(o||(o=Promise))((function(s,r){function a(t){try{c(n.next(t))}catch(e){r(e)}}function l(t){try{c(n.throw(t))}catch(e){r(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,l)}c((n=n.apply(t,e||[])).next())}))};const z=({fetch:t})=>q(void 0,void 0,void 0,(function*(){const e=yield t("/portfolio.json");return{props:{portfolio:yield e.json()}}}));function J(t,e,o){let{$$slots:n={},$$scope:s}=e,{portfolio:r}=e;const a=Object.keys(r).sort().reverse();return t.$$set=t=>{"portfolio"in t&&o(0,r=t.portfolio),"$$scope"in t&&o(5,s=t.$$scope)},[r,a,n,()=>{N.set("left")},()=>{N.set("right")},s]}class Q extends t{constructor(t){super(),e(this,t,J,Z,o,{portfolio:0})}}export{Q as default,z as load};
