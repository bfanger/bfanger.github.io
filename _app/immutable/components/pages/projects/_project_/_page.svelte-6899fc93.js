import{S as U,i as W,s as Q,a as D,k as N,v as w,J as X,h as _,c as E,l as q,m as A,w as y,n as S,b as d,x as j,C as T,t as $,d as K,f as m,y as V,Y as Z,G as x,q as B,r as G,g as R,A as ee,R as te,T as re,M as oe}from"../../../../chunks/index-aadf5176.js";import{P as ne}from"../../../../chunks/Page-782a8abb.js";import{P as ae}from"../../../../chunks/ProjectCard-3ba76178.js";import{N as J,c as I,a as se,b as le}from"../../../../chunks/cardTransition-832f1aa5.js";import{D as fe}from"../../../../chunks/Disclaimer-73c41442.js";import{p as ie,g as z}from"../../../../chunks/navigation-91c0e731.js";const{window:ue}=x;function ce(s){let e,r,t,a,f;return r=new ae({props:{project:s[0]}}),{c(){e=N("div"),w(r.$$.fragment)},l(n){e=q(n,"DIV",{});var l=A(e);y(r.$$.fragment,l),l.forEach(_)},m(n,l){d(n,e,l),j(r,e,null),f=!0},p(n,l){const i={};l&1&&(i.project=n[0]),r.$set(i)},i(n){f||(m(r.$$.fragment,n),te(()=>{a&&a.end(1),t=re(e,se,{}),t.start()}),f=!0)},o(n){$(r.$$.fragment,n),t&&t.invalidate(),a=oe(e,le,{}),f=!1},d(n){n&&_(e),V(r),n&&a&&a.end()}}}function F(s){let e,r;return e=new ne({props:{$$slots:{default:[ce]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){j(e,t,a),r=!0},p(t,a){const f={};a&33&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){V(e,t)}}}function _e(s){let e,r;return e=new J({props:{href:"/portfolio",type:"previous",$$slots:{default:[pe]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){j(e,t,a),r=!0},p(t,a){const f={};a&32&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){V(e,t)}}}function me(s){let e,r;return e=new J({props:{href:s[0].before,type:"previous",$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){w(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){j(e,t,a),r=!0},p(t,a){const f={};a&1&&(f.href=t[0].before),a&32&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){V(e,t)}}}function pe(s){let e;return{c(){e=B("Portfolio")},l(r){e=G(r,"Portfolio")},m(r,t){d(r,e,t)},d(r){r&&_(e)}}}function $e(s){let e;return{c(){e=B("Vorige")},l(r){e=G(r,"Vorige")},m(r,t){d(r,e,t)},d(r){r&&_(e)}}}function H(s){let e,r,t,a,f;return r=new J({props:{href:s[0].after,type:"next",$$slots:{default:[de]},$$scope:{ctx:s}}}),{c(){e=N("div"),w(r.$$.fragment),this.h()},l(n){e=q(n,"DIV",{class:!0});var l=A(e);y(r.$$.fragment,l),l.forEach(_),this.h()},h(){S(e,"class","project-page__next svelte-ktylb9")},m(n,l){d(n,e,l),j(r,e,null),t=!0,a||(f=T(e,"mousedown",s[4]),a=!0)},p(n,l){const i={};l&1&&(i.href=n[0].after),l&32&&(i.$$scope={dirty:l,ctx:n}),r.$set(i)},i(n){t||(m(r.$$.fragment,n),t=!0)},o(n){$(r.$$.fragment,n),t=!1},d(n){n&&_(e),V(r),a=!1,f()}}}function de(s){let e;return{c(){e=B("Volgende")},l(r){e=G(r,"Volgende")},m(r,t){d(r,e,t)},d(r){r&&_(e)}}}function ve(s){let e,r,t=s[0],a,f,n,l,i,h,g,b,P,C,L;document.title=e=s[0].title;let p=F(s);const M=[me,_e],v=[];function O(o,c){return o[0].before?0:1}n=O(s),l=v[n]=M[n](s);let u=s[0].after&&H(s);return b=new fe({}),{c(){r=D(),p.c(),a=D(),f=N("div"),l.c(),i=D(),u&&u.c(),h=D(),g=N("div"),w(b.$$.fragment),this.h()},l(o){X('[data-svelte="svelte-1cx8lxk"]',document.head).forEach(_),r=E(o),p.l(o),a=E(o),f=q(o,"DIV",{class:!0});var k=A(f);l.l(k),k.forEach(_),i=E(o),u&&u.l(o),h=E(o),g=q(o,"DIV",{class:!0});var Y=A(g);y(b.$$.fragment,Y),Y.forEach(_),this.h()},h(){S(f,"class","project-page__previous svelte-ktylb9"),S(g,"class","project-page__disclaimer svelte-ktylb9")},m(o,c){d(o,r,c),p.m(o,c),d(o,a,c),d(o,f,c),v[n].m(f,null),d(o,i,c),u&&u.m(o,c),d(o,h,c),d(o,g,c),j(b,g,null),P=!0,C||(L=[T(ue,"keydown",s[1]),T(f,"mousedown",s[3])],C=!0)},p(o,[c]){(!P||c&1)&&e!==(e=o[0].title)&&(document.title=e),c&1&&Q(t,t=o[0])?(R(),$(p,1,1,ee),K(),p=F(o),p.c(),m(p,1),p.m(a.parentNode,a)):p.p(o,c);let k=n;n=O(o),n===k?v[n].p(o,c):(R(),$(v[k],1,1,()=>{v[k]=null}),K(),l=v[n],l?l.p(o,c):(l=v[n]=M[n](o),l.c()),m(l,1),l.m(f,null)),o[0].after?u?(u.p(o,c),c&1&&m(u,1)):(u=H(o),u.c(),m(u,1),u.m(h.parentNode,h)):u&&(R(),$(u,1,1,()=>{u=null}),K())},i(o){P||(m(p),m(l),m(u),m(b.$$.fragment,o),P=!0)},o(o){$(p),$(l),$(u),$(b.$$.fragment,o),P=!1},d(o){o&&_(r),p.d(o),o&&_(a),o&&_(f),v[n].d(),o&&_(i),u&&u.d(o),o&&_(h),o&&_(g),V(b),C=!1,Z(L)}}}function ge(s,e,r){let t,{data:a}=e;function f(i){i.altKey||i.shiftKey||i.metaKey||(i.key==="ArrowLeft"&&t.before?(I.set("right"),z(t.before)):i.key==="ArrowRight"&&t.after&&(I.set("left"),z(t.after)))}const n=()=>{I.set("right")},l=()=>{I.set("left")};return s.$$set=i=>{"data"in i&&r(2,a=i.data)},s.$$.update=()=>{s.$$.dirty&4&&r(0,t=a),s.$$.dirty&1&&t.before&&typeof window<"u"&&ie(t.before)},[t,f,a,n,l]}class Ve extends U{constructor(e){super(),W(this,e,ge,ve,Q,{data:2})}}export{Ve as default};
