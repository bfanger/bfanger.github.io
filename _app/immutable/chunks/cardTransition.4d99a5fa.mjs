import{S as k,i as q,s as C,C as N,k as v,l as y,m as b,h,n as f,a0 as _,b as S,M as x,D as B,E as D,F as I,G as O,g as A,d as F,a1 as G,a2 as g}from"./index.6879f64f.mjs";import{w as M}from"./index.ae1453d7.mjs";function T(e){const t=e-1;return t*t*t+1}function d(e,{delay:t=0,duration:o=400,easing:n=T,x:l=0,y:u=0,opacity:i=0}={}){const a=getComputedStyle(e),s=+a.opacity,r=a.transform==="none"?"":a.transform,c=s*(1-i);return{delay:t,duration:o,easing:n,css:(p,E)=>`
			transform: ${r} translate(${(1-p)*l}px, ${(1-p)*u}px);
			opacity: ${s-c*E}`}}function V(e){let t,o,n,l,u;const i=e[3].default,a=N(i,e,e[2],null);return{c(){t=v("a"),o=v("div"),a&&a.c(),this.h()},l(s){t=y(s,"A",{href:!0,"data-sveltekit:prefetch":!0,class:!0});var r=b(t);o=y(r,"DIV",{class:!0});var c=b(o);a&&a.l(c),c.forEach(h),r.forEach(h),this.h()},h(){f(o,"class","label svelte-17yqtex"),f(t,"href",e[0]),f(t,"data-sveltekit:prefetch",""),f(t,"class","nav-button svelte-17yqtex"),_(t,"next",e[1]==="next"),_(t,"previous",e[1]==="previous")},m(s,r){S(s,t,r),x(t,o),a&&a.m(o,null),n=!0,l||(u=B(t,"mousedown",e[4]),l=!0)},p(s,[r]){a&&a.p&&(!n||r&4)&&D(a,i,s,s[2],n?O(i,s[2],r,null):I(s[2]),null),(!n||r&1)&&f(t,"href",s[0]),(!n||r&2)&&_(t,"next",s[1]==="next"),(!n||r&2)&&_(t,"previous",s[1]==="previous")},i(s){n||(A(a,s),n=!0)},o(s){F(a,s),n=!1},d(s){s&&h(t),a&&a.d(s),l=!1,u()}}}function j(e,t,o){let{$$slots:n={},$$scope:l}=t,{href:u}=t,{type:i}=t;function a(s){G.call(this,e,s)}return e.$$set=s=>{"href"in s&&o(0,u=s.href),"type"in s&&o(1,i=s.type),"$$scope"in s&&o(2,l=s.$$scope)},[u,i,l,n,a]}class L extends k{constructor(t){super(),q(this,t,j,V,C,{href:0,type:1})}}const m={left:{in:(e,t)=>d(e,{x:100,delay:50,...t}),out:(e,t)=>d(e,{x:-100,...t})},right:{in:(e,t)=>d(e,{x:-100,delay:50,...t}),out:(e,t)=>d(e,{x:100,...t})}},{set:z,subscribe:H}=M(m.left),w={subscribe:H,set(e){if(!m[e])throw new Error("invalid direction");z(m[e])}};function P(e,t){return g(w).out(e,t)}function Q(e,t){return g(w).in(e,t)}export{L as N,Q as a,P as b,w as c,d as f};
