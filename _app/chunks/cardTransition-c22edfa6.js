var I=Object.defineProperty;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(t,e,a)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&g(t,a,e[a]);if(m)for(var a of m(e))k.call(e,a)&&g(t,a,e[a]);return t};import{S as B,i as C,s as S,E as q,e as p,c as y,a as j,d as h,b as u,f as A,M as D,F,G,H,I as M,p as O,n as T,Z as V,X as d,C as X,_ as w}from"./vendor-2bb50eba.js";function Z(t){let e,a,i,l,o,f;const _=t[3].default,s=q(_,t,t[2],null);return{c(){e=p("a"),a=p("div"),s&&s.c(),this.h()},l(n){e=y(n,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var r=j(e);a=y(r,"DIV",{class:!0});var b=j(a);s&&s.l(b),b.forEach(h),r.forEach(h),this.h()},h(){u(a,"class","nav-button__label svelte-dgjjnn"),u(e,"href",t[0]),u(e,"sveltekit:prefetch",""),u(e,"class",i="nav-button nav-button--"+t[1]+" svelte-dgjjnn")},m(n,r){A(n,e,r),D(e,a),s&&s.m(a,null),l=!0,o||(f=F(e,"mousedown",t[4]),o=!0)},p(n,[r]){s&&s.p&&(!l||r&4)&&G(s,_,n,n[2],l?M(_,n[2],r,null):H(n[2]),null),(!l||r&1)&&u(e,"href",n[0]),(!l||r&2&&i!==(i="nav-button nav-button--"+n[1]+" svelte-dgjjnn"))&&u(e,"class",i)},i(n){l||(O(s,n),l=!0)},o(n){T(s,n),l=!1},d(n){n&&h(e),s&&s.d(n),o=!1,f()}}}function z(t,e,a){let{$$slots:i={},$$scope:l}=e,{href:o}=e,{type:f}=e;function _(s){V.call(this,t,s)}return t.$$set=s=>{"href"in s&&a(0,o=s.href),"type"in s&&a(1,f=s.type),"$$scope"in s&&a(2,l=s.$$scope)},[o,f,l,i,_]}class Q extends B{constructor(e){super();C(this,e,z,Z,S,{href:0,type:1})}}const v={left:{in:(t,e)=>d(t,c({x:100,delay:50},e)),out:(t,e)=>d(t,c({x:-100},e))},right:{in:(t,e)=>d(t,c({x:-100,delay:50},e)),out:(t,e)=>d(t,c({x:100},e))}},{set:J,subscribe:K}=X(v.left),E={subscribe:K,set(t){if(!v[t])throw new Error("invalid direction");J(v[t])}};function R(t,e){return w(E).out(t,e)}function U(t,e){return w(E).in(t,e)}export{Q as N,U as a,R as b,E as c};
