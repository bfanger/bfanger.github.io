import{J as u,S as c,i as g,s as p,w as m,x as b,y as f,f as l,t as d,z as _,K as $}from"../../chunks/index-01eae1af.js";import{E as v}from"../../chunks/ErrorPage-a701946a.js";import"../../chunks/Card-30ca7bfc.js";const h=()=>{const e=u("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},get session(){return k(),{}},updated:e.updated}},E={subscribe(e){return h().page.subscribe(e)}};function k(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function w(e){let t,r;return t=new v({props:{title:e[2],message:e[1],stack:e[0]}}),{c(){m(t.$$.fragment)},l(s){b(t.$$.fragment,s)},m(s,n){f(t,s,n),r=!0},p(s,[n]){const o={};n&4&&(o.title=s[2]),n&2&&(o.message=s[1]),n&1&&(o.stack=s[0]),t.$set(o)},i(s){r||(l(t.$$.fragment,s),r=!0)},o(s){d(t.$$.fragment,s),r=!1},d(s){_(t,s)}}}function S(e,t,r){let s,n,o,a;return $(e,E,i=>r(3,a=i)),e.$$.update=()=>{e.$$.dirty&8&&r(2,s=a.status>=400?a.status:"Error"),e.$$.dirty&8&&r(1,n=a.error.message||"Oops"),e.$$.dirty&8&&r(0,o=void 0)},[o,n,s,a]}class q extends c{constructor(t){super(),g(this,t,S,w,p,{})}}export{q as default};
