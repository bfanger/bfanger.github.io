import{S as G,i as H,s as K,a as p,w as S,K as L,h as u,c as $,x as k,b as _,y as z,f as d,t as g,z as F,C as j,k as E,q as w,l as C,m as P,r as v,L as b,u as q,E as A,F as B,G as D}from"./index-67a0a24c.js";import{P as I}from"./Page-c5e3c880.js";import{C as J}from"./Card-49122f5b.js";function M(f){let s,n,t,l,a,r,o;const c=f[2].default,i=j(c,f,f[3],null);return{c(){s=E("h1"),n=w(f[0]),t=p(),l=E("p"),a=w(f[1]),r=p(),i&&i.c()},l(e){s=C(e,"H1",{});var m=P(s);n=v(m,f[0]),m.forEach(u),t=$(e),l=C(e,"P",{});var h=P(l);a=v(h,f[1]),h.forEach(u),r=$(e),i&&i.l(e)},m(e,m){_(e,s,m),b(s,n),_(e,t,m),_(e,l,m),b(l,a),_(e,r,m),i&&i.m(e,m),o=!0},p(e,m){(!o||m&1)&&q(n,e[0]),(!o||m&2)&&q(a,e[1]),i&&i.p&&(!o||m&8)&&A(i,c,e,e[3],o?D(c,e[3],m,null):B(e[3]),null)},i(e){o||(d(i,e),o=!0)},o(e){g(i,e),o=!1},d(e){e&&u(s),e&&u(t),e&&u(l),e&&u(r),i&&i.d(e)}}}function N(f){let s,n;return s=new J({props:{$$slots:{default:[M]},$$scope:{ctx:f}}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,l){z(s,t,l),n=!0},p(t,l){const a={};l&11&&(a.$$scope={dirty:l,ctx:t}),s.$set(a)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){g(s.$$.fragment,t),n=!1},d(t){F(s,t)}}}function O(f){let s,n,t,l;return document.title=s=f[0],t=new I({props:{$$slots:{default:[N]},$$scope:{ctx:f}}}),{c(){n=p(),S(t.$$.fragment)},l(a){L("svelte-1258swp",document.head).forEach(u),n=$(a),k(t.$$.fragment,a)},m(a,r){_(a,n,r),z(t,a,r),l=!0},p(a,[r]){(!l||r&1)&&s!==(s=a[0])&&(document.title=s);const o={};r&11&&(o.$$scope={dirty:r,ctx:a}),t.$set(o)},i(a){l||(d(t.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),l=!1},d(a){a&&u(n),F(t,a)}}}function Q(f,s,n){let{$$slots:t={},$$scope:l}=s,{title:a}=s,{message:r}=s;return f.$$set=o=>{"title"in o&&n(0,a=o.title),"message"in o&&n(1,r=o.message),"$$scope"in o&&n(3,l=o.$$scope)},[a,r,t,l]}class V extends G{constructor(s){super(),H(this,s,Q,O,K,{title:0,message:1})}}export{V as E};