import{S as B,i as F,s as G,a as p,y as S,V as H,h as u,c as $,z as k,b as _,A as z,g as d,d as g,B as A,C as M,k as E,q as C,l as P,m as v,r as w,M as b,u as q,E as V,F as j,G as D}from"./index.6879f64f.mjs";import{P as I}from"./Page.f5760c3b.mjs";import{C as J}from"./Card.fd1b3d21.mjs";function K(f){let s,n,t,l,a,r,o;const c=f[2].default,i=M(c,f,f[3],null);return{c(){s=E("h1"),n=C(f[0]),t=p(),l=E("p"),a=C(f[1]),r=p(),i&&i.c()},l(e){s=P(e,"H1",{});var m=v(s);n=w(m,f[0]),m.forEach(u),t=$(e),l=P(e,"P",{});var h=v(l);a=w(h,f[1]),h.forEach(u),r=$(e),i&&i.l(e)},m(e,m){_(e,s,m),b(s,n),_(e,t,m),_(e,l,m),b(l,a),_(e,r,m),i&&i.m(e,m),o=!0},p(e,m){(!o||m&1)&&q(n,e[0]),(!o||m&2)&&q(a,e[1]),i&&i.p&&(!o||m&8)&&V(i,c,e,e[3],o?D(c,e[3],m,null):j(e[3]),null)},i(e){o||(d(i,e),o=!0)},o(e){g(i,e),o=!1},d(e){e&&u(s),e&&u(t),e&&u(l),e&&u(r),i&&i.d(e)}}}function L(f){let s,n;return s=new J({props:{$$slots:{default:[K]},$$scope:{ctx:f}}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,l){z(s,t,l),n=!0},p(t,l){const a={};l&11&&(a.$$scope={dirty:l,ctx:t}),s.$set(a)},i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){g(s.$$.fragment,t),n=!1},d(t){A(s,t)}}}function N(f){let s,n,t,l;return document.title=s=f[0],t=new I({props:{$$slots:{default:[L]},$$scope:{ctx:f}}}),{c(){n=p(),S(t.$$.fragment)},l(a){H("svelte-1258swp",document.head).forEach(u),n=$(a),k(t.$$.fragment,a)},m(a,r){_(a,n,r),z(t,a,r),l=!0},p(a,[r]){(!l||r&1)&&s!==(s=a[0])&&(document.title=s);const o={};r&11&&(o.$$scope={dirty:r,ctx:a}),t.$set(o)},i(a){l||(d(t.$$.fragment,a),l=!0)},o(a){g(t.$$.fragment,a),l=!1},d(a){a&&u(n),A(t,a)}}}function O(f,s,n){let{$$slots:t={},$$scope:l}=s,{title:a}=s,{message:r}=s;return f.$$set=o=>{"title"in o&&n(0,a=o.title),"message"in o&&n(1,r=o.message),"$$scope"in o&&n(3,l=o.$$scope)},[a,r,t,l]}class U extends B{constructor(s){super(),F(this,s,O,N,G,{title:0,message:1})}}export{U as E};
