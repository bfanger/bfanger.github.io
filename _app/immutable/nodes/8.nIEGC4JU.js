import{s as j}from"../chunks/scheduler.173kFitQ.js";import{S as h,i as $,j as g,s as u,c as y,x as d,h as b,l as v,e as c,f as _,a as x,u as f,p as P,g as p,m as S,t as q,b as w,d as C}from"../chunks/index.vzDccf9I.js";import{P as E}from"../chunks/ProjectCard.ba5pezeT.js";async function M({params:r,fetch:e}){return{project:await(await e(`/projects/${r.project}.json`)).json()}}const B=Object.freeze(Object.defineProperty({__proto__:null,load:M},Symbol.toStringTag,{value:"Module"}));function O(r){let e,o,a,s,i,m;return a=new E({props:{project:r[0].project}}),{c(){e=g("meta"),o=u(),y(a.$$.fragment),s=u(),i=d(),this.h()},l(t){const n=b("svelte-1m6jots",document.head);e=v(n,"META",{name:!0,content:!0}),n.forEach(c),o=_(t),x(a.$$.fragment,t),s=_(t),i=d(),this.h()},h(){f(e,"name","robots"),f(e,"content","noindex")},m(t,n){P(document.head,e),p(t,o,n),S(a,t,n),p(t,s,n),p(t,i,n),m=!0},p(t,[n]){const l={};n&1&&(l.project=t[0].project),a.$set(l)},i(t){m||(q(a.$$.fragment,t),m=!0)},o(t){w(a.$$.fragment,t),m=!1},d(t){t&&(c(o),c(s),c(i)),c(e),C(a,t)}}}function T(r,e,o){let{data:a}=e;return r.$$set=s=>{"data"in s&&o(0,a=s.data)},[a]}class D extends h{constructor(e){super(),$(this,e,T,O,j,{data:0})}}export{D as component,B as universal};
