var e=Object.defineProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,r=(e,r)=>{for(var o in r||(r={}))s.call(r,o)&&n(e,o,r[o]);if(t)for(var o of t(r))a.call(r,o)&&n(e,o,r[o]);return e};import{S as o,i as l,s as c,D as i,e as u,c as f,a as p,d as b,b as h,f as v,J as d,E as y,F as j,v as $,r as m,U as g,T as w,C as x,V as O}from"./vendor-a21ed053.js";function E(e){let t,s,a,n,r,o;const l=e[3].default,c=i(l,e,e[2],null);return{c(){t=u("a"),s=u("div"),c&&c.c(),this.h()},l(e){t=f(e,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var a=p(t);s=f(a,"DIV",{class:!0});var n=p(s);c&&c.l(n),n.forEach(b),a.forEach(b),this.h()},h(){h(s,"class","nav-button__label svelte-dgjjnn"),h(t,"href",e[0]),h(t,"sveltekit:prefetch",""),h(t,"class",a="nav-button nav-button--"+e[1]+" svelte-dgjjnn")},m(a,l){v(a,t,l),d(t,s),c&&c.m(s,null),n=!0,r||(o=y(t,"mousedown",e[4]),r=!0)},p(e,[s]){c&&c.p&&(!n||4&s)&&j(c,l,e,e[2],s,null,null),(!n||1&s)&&h(t,"href",e[0]),(!n||2&s&&a!==(a="nav-button nav-button--"+e[1]+" svelte-dgjjnn"))&&h(t,"class",a)},i(e){n||($(c,e),n=!0)},o(e){m(c,e),n=!1},d(e){e&&b(t),c&&c.d(e),r=!1,o()}}}function P(e,t,s){let{$$slots:a={},$$scope:n}=t,{href:r}=t,{type:o}=t;return e.$$set=e=>{"href"in e&&s(0,r=e.href),"type"in e&&s(1,o=e.type),"$$scope"in e&&s(2,n=e.$$scope)},[r,o,n,a,function(t){g(e,t)}]}class k extends o{constructor(e){super(),l(this,e,P,E,c,{href:0,type:1})}}const D={left:{in:(e,t)=>w(e,r({x:100,delay:50},t)),out:(e,t)=>w(e,r({x:-100},t))},right:{in:(e,t)=>w(e,r({x:-100,delay:50},t)),out:(e,t)=>w(e,r({x:100},t))}},{set:I,subscribe:S}=x(D.left),V={subscribe:S,set(e){if(!D[e])throw new Error("invalid direction");I(D[e])}};function _(e,t){return O(V).out(e,t)}function A(e,t){return O(V).in(e,t)}export{k as N,A as a,_ as b,V as c};
