import{S as O,i as T,s as G,j as g,v as k,L as M,d as _,l as b,w as E,f as d,x as I,p as w,n as j,A as P,$ as U,e as p,c as $,a as v,b as H,V as W,W as Y,N as z,t as y,g as B,M as D,F as J,h as F,a0 as N,E as K,G as Q,H as R,I as X}from"../chunks/vendor-2bb50eba.js";import{a as Z,D as x}from"../chunks/Disclaimer-1ac92f75.js";import{P as ee,C as te}from"../chunks/Card-6b92d0ad.js";import{N as se,c as L,a as le,b as ae}from"../chunks/cardTransition-c22edfa6.js";function S(f,l,a){const i=f.slice();return i[7]=l[a],i}function V(f,l,a){const i=f.slice();return i[10]=l[a],i}function q(f){let l,a,i=f[10].title+"",n,c;return{c(){l=p("li"),a=p("a"),n=y(i),this.h()},l(u){l=$(u,"LI",{});var r=v(l);a=$(r,"A",{href:!0});var m=v(a);n=B(m,i),m.forEach(_),r.forEach(_),this.h()},h(){H(a,"href",c="projects/"+f[10].slug)},m(u,r){d(u,l,r),D(l,a),D(a,n)},p(u,r){r&3&&i!==(i=u[10].title+"")&&F(n,i),r&3&&c!==(c="projects/"+u[10].slug)&&H(a,"href",c)},d(u){u&&_(l)}}}function A(f){let l,a=f[7]+"",i,n,c,u,r,m=f[0][f[7]],o=[];for(let e=0;e<m.length;e+=1)o[e]=q(V(f,m,e));return{c(){l=p("h2"),i=y(a),n=g(),c=p("ul");for(let e=0;e<o.length;e+=1)o[e].c()},l(e){l=$(e,"H2",{});var t=v(l);i=B(t,a),t.forEach(_),n=b(e),c=$(e,"UL",{});var s=v(c);for(let h=0;h<o.length;h+=1)o[h].l(s);s.forEach(_)},m(e,t){d(e,l,t),D(l,i),d(e,n,t),d(e,c,t);for(let s=0;s<o.length;s+=1)o[s].m(c,null);u||(r=J(c,"mousedown",f[4]),u=!0)},p(e,t){if(t&2&&a!==(a=e[7]+"")&&F(i,a),t&3){m=e[0][e[7]];let s;for(s=0;s<m.length;s+=1){const h=V(e,m,s);o[s]?o[s].p(h,t):(o[s]=q(h),o[s].c(),o[s].m(c,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=m.length}},d(e){e&&_(l),e&&_(n),e&&_(c),N(o,e),u=!1,r()}}}function re(f){let l,a,i,n,c,u=f[1],r=[];for(let e=0;e<u.length;e+=1)r[e]=A(S(f,u,e));const m=f[3].default,o=K(m,f,f[6],null);return{c(){l=p("h1"),a=y("Portfolio van Bob Fanger"),i=g();for(let e=0;e<r.length;e+=1)r[e].c();n=g(),o&&o.c()},l(e){l=$(e,"H1",{});var t=v(l);a=B(t,"Portfolio van Bob Fanger"),t.forEach(_),i=b(e);for(let s=0;s<r.length;s+=1)r[s].l(e);n=b(e),o&&o.l(e)},m(e,t){d(e,l,t),D(l,a),d(e,i,t);for(let s=0;s<r.length;s+=1)r[s].m(e,t);d(e,n,t),o&&o.m(e,t),c=!0},p(e,t){if(t&3){u=e[1];let s;for(s=0;s<u.length;s+=1){const h=S(e,u,s);r[s]?r[s].p(h,t):(r[s]=A(h),r[s].c(),r[s].m(n.parentNode,n))}for(;s<r.length;s+=1)r[s].d(1);r.length=u.length}o&&o.p&&(!c||t&64)&&Q(o,m,e,e[6],c?X(m,e[6],t,null):R(e[6]),null)},i(e){c||(w(o,e),c=!0)},o(e){j(o,e),c=!1},d(e){e&&_(l),e&&_(i),N(r,e),e&&_(n),o&&o.d(e)}}}function ne(f){let l;return{c(){l=y("Home")},l(a){l=B(a,"Home")},m(a,i){d(a,l,i)},d(a){a&&_(l)}}}function oe(f){let l,a,i,n,c,u,r,m,o,e;return a=new te({props:{$$slots:{default:[re]},$$scope:{ctx:f}}}),r=new se({props:{href:"/",type:"previous",$$slots:{default:[ne]},$$scope:{ctx:f}}}),r.$on("mousedown",f[5]),o=new x({}),{c(){l=p("div"),k(a.$$.fragment),c=g(),u=p("div"),k(r.$$.fragment),m=g(),k(o.$$.fragment),this.h()},l(t){l=$(t,"DIV",{});var s=v(l);E(a.$$.fragment,s),s.forEach(_),c=b(t),u=$(t,"DIV",{class:!0});var h=v(u);E(r.$$.fragment,h),h.forEach(_),m=b(t),E(o.$$.fragment,t),this.h()},h(){H(u,"class","portfolio-page__previous svelte-1jwhvx3")},m(t,s){d(t,l,s),I(a,l,null),d(t,c,s),d(t,u,s),I(r,u,null),d(t,m,s),I(o,t,s),e=!0},p(t,s){const h={};s&67&&(h.$$scope={dirty:s,ctx:t}),a.$set(h);const C={};s&64&&(C.$$scope={dirty:s,ctx:t}),r.$set(C)},i(t){e||(w(a.$$.fragment,t),W(()=>{n&&n.end(1),i=Y(l,le,{}),i.start()}),w(r.$$.fragment,t),w(o.$$.fragment,t),e=!0)},o(t){j(a.$$.fragment,t),i&&i.invalidate(),n=z(l,ae,{}),j(r.$$.fragment,t),j(o.$$.fragment,t),e=!1},d(t){t&&_(l),P(a),t&&n&&n.end(),t&&_(c),t&&_(u),P(r),t&&_(m),P(o,t)}}}function ie(f){let l,a,i;return a=new ee({props:{$$slots:{default:[oe]},$$scope:{ctx:f}}}),{c(){l=g(),k(a.$$.fragment),this.h()},l(n){M('[data-svelte="svelte-141aa9b"]',document.head).forEach(_),l=b(n),E(a.$$.fragment,n),this.h()},h(){document.title="Bob Fanger's portfolio"},m(n,c){d(n,l,c),I(a,n,c),i=!0},p(n,[c]){const u={};c&67&&(u.$$scope={dirty:c,ctx:n}),a.$set(u)},i(n){i||(w(a.$$.fragment,n),i=!0)},o(n){j(a.$$.fragment,n),i=!1},d(n){n&&_(l),P(a,n)}}}const de=async({fetch:f})=>({props:{teasers:await Z.get("portfolio.json",{fetch:f})}});function fe(f){const l=f.released.toString().match(/^[0-9]+/);return l===null?(console.warn(`Project[${f.slug}].released is invalid`),2e3):parseInt(l[0],10)}function ce(f,l,a){let i,n,{$$slots:c={},$$scope:u}=l,{teasers:r}=l;const m=()=>{L.set("left")},o=()=>{L.set("right")};return f.$$set=e=>{"teasers"in e&&a(2,r=e.teasers),"$$scope"in e&&a(6,u=e.$$scope)},f.$$.update=()=>{f.$$.dirty&4&&a(0,i=U(r,fe)),f.$$.dirty&1&&a(1,n=Object.keys(i).sort().reverse())},[i,n,r,c,m,o,u]}class pe extends O{constructor(l){super();T(this,l,ce,ie,G,{teasers:2})}}export{pe as default,de as load};
