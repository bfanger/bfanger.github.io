import{S as F,i as H,s as J,a as p,v as S,J as K,h as m,c as $,w as k,b as _,x as B,f as d,t as g,y as D,B as j,k as E,q as v,l as w,m as P,r as q,K as C,u as b,D as y,E as z,F as A}from"./index-2bd1a8eb.js";import{P as G}from"./Page-e847808c.js";import{C as I}from"./Card-f4b852c3.js";function L(f){let s,n,t,l,a,r,o;const c=f[2].default,i=j(c,f,f[3],null);return{c(){s=E("h1"),n=v(f[0]),t=p(),l=E("p"),a=v(f[1]),r=p(),i&&i.c()},l(e){s=w(e,"H1",{});var u=P(s);n=q(u,f[0]),u.forEach(m),t=$(e),l=w(e,"P",{});var h=P(l);a=q(h,f[1]),h.forEach(m),r=$(e),i&&i.l(e)},m(e,u){_(e,s,u),C(s,n),_(e,t,u),_(e,l,u),C(l,a),_(e,r,u),i&&i.m(e,u),o=!0},p(e,u){(!o||u&1)&&b(n,e[0]),(!o||u&2)&&b(a,e[1]),i&&i.p&&(!o||u&8)&&y(i,c,e,e[3],o?A(c,e[3],u,null):z(e[3]),null)},i(e){o||(d(i,e),o=!0)},o(e){g(i,e),o=!1},d(e){e&&m(s),e&&m(t),e&&m(l),e&&m(r),i&&i.d(e)}}}function M(f){let s,n;return s=new I({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,l){B(s,t,l),n=!0},p(t,l){const a={};l&11&&(a.$$scope={dirty:l,ctx:t}),s.$set(a)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){g(s.$$.fragment,t),n=!1},d(t){D(s,t)}}}function N(f){let s,n,t,l;return document.title=s=f[0],t=new G({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),{c(){n=p(),S(t.$$.fragment)},l(a){K('[data-svelte="svelte-1258swp"]',document.head).forEach(m),n=$(a),k(t.$$.fragment,a)},m(a,r){_(a,n,r),B(t,a,r),l=!0},p(a,[r]){(!l||r&1)&&s!==(s=a[0])&&(document.title=s);const o={};r&11&&(o.$$scope={dirty:r,ctx:a}),t.$set(o)},i(a){l||(d(t.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),l=!1},d(a){a&&m(n),D(t,a)}}}function O(f,s,n){let{$$slots:t={},$$scope:l}=s,{title:a}=s,{message:r}=s;return f.$$set=o=>{"title"in o&&n(0,a=o.title),"message"in o&&n(1,r=o.message),"$$scope"in o&&n(3,l=o.$$scope)},[a,r,t,l]}class U extends F{constructor(s){super(),H(this,s,O,N,J,{title:0,message:1})}}export{U as E};