import{S as X,i as Y,s as W,a as E,k as K,w as y,K as Z,h as _,c as I,l as A,m as q,x as j,n as z,b as d,y as V,D as H,t as $,d as C,f as p,z as D,a4 as x,H as ee,q as L,r as O,g as S,B as te,$ as re,a0 as oe,N as ne}from"../../../../chunks/index-67a0a24c.js";import{P as ae}from"../../../../chunks/Page-c5e3c880.js";import{P as se}from"../../../../chunks/ProjectCard-4e366ccd.js";import{N as R,c as N,a as le,b as fe}from"../../../../chunks/cardTransition-1fee34ed.js";import{D as ie}from"../../../../chunks/Disclaimer-de46ef1b.js";import{c as g}from"../../../../chunks/singletons-6309439a.js";g.disable_scroll_handling;const M=g.goto;g.invalidate;g.invalidateAll;const ce=g.prefetch;g.prefetch_routes;g.before_navigate;g.after_navigate;const{window:ue}=ee;function _e(s){let e,r,t,a,f;return r=new se({props:{project:s[0]}}),{c(){e=K("div"),y(r.$$.fragment)},l(n){e=A(n,"DIV",{});var l=q(e);j(r.$$.fragment,l),l.forEach(_)},m(n,l){d(n,e,l),V(r,e,null),f=!0},p(n,l){const i={};l&1&&(i.project=n[0]),r.$set(i)},i(n){f||(p(r.$$.fragment,n),re(()=>{a&&a.end(1),t=oe(e,le,{}),t.start()}),f=!0)},o(n){$(r.$$.fragment,n),t&&t.invalidate(),a=ne(e,fe,{}),f=!1},d(n){n&&_(e),D(r),n&&a&&a.end()}}}function Q(s){let e,r;return e=new ae({props:{$$slots:{default:[_e]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,a){V(e,t,a),r=!0},p(t,a){const f={};a&33&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function pe(s){let e,r;return e=new R({props:{href:"/portfolio",type:"previous",$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,a){V(e,t,a),r=!0},p(t,a){const f={};a&32&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function me(s){let e,r;return e=new R({props:{href:s[0].before,type:"previous",$$slots:{default:[de]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,a){V(e,t,a),r=!0},p(t,a){const f={};a&1&&(f.href=t[0].before),a&32&&(f.$$scope={dirty:a,ctx:t}),e.$set(f)},i(t){r||(p(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){D(e,t)}}}function $e(s){let e;return{c(){e=L("Portfolio")},l(r){e=O(r,"Portfolio")},m(r,t){d(r,e,t)},d(r){r&&_(e)}}}function de(s){let e;return{c(){e=L("Vorige")},l(r){e=O(r,"Vorige")},m(r,t){d(r,e,t)},d(r){r&&_(e)}}}function U(s){let e,r,t,a,f;return r=new R({props:{href:s[0].after,type:"next",$$slots:{default:[ve]},$$scope:{ctx:s}}}),{c(){e=K("div"),y(r.$$.fragment),this.h()},l(n){e=A(n,"DIV",{class:!0});var l=q(e);j(r.$$.fragment,l),l.forEach(_),this.h()},h(){z(e,"class","project-page__next svelte-ktylb9")},m(n,l){d(n,e,l),V(r,e,null),t=!0,a||(f=H(e,"mousedown",s[4]),a=!0)},p(n,l){const i={};l&1&&(i.href=n[0].after),l&32&&(i.$$scope={dirty:l,ctx:n}),r.$set(i)},i(n){t||(p(r.$$.fragment,n),t=!0)},o(n){$(r.$$.fragment,n),t=!1},d(n){n&&_(e),D(r),a=!1,f()}}}function ve(s){let e;return{c(){e=L("Volgende")},l(r){e=O(r,"Volgende")},m(r,t){d(r,e,t)},d(r){r&&_(e)}}}function ge(s){let e,r,t=s[0],a,f,n,l,i,k,b,h,P,B,T;document.title=e=s[0].title;let m=Q(s);const F=[me,pe],v=[];function G(o,u){return o[0].before?0:1}n=G(s),l=v[n]=F[n](s);let c=s[0].after&&U(s);return h=new ie({}),{c(){r=E(),m.c(),a=E(),f=K("div"),l.c(),i=E(),c&&c.c(),k=E(),b=K("div"),y(h.$$.fragment),this.h()},l(o){Z("svelte-1cx8lxk",document.head).forEach(_),r=I(o),m.l(o),a=I(o),f=A(o,"DIV",{class:!0});var w=q(f);l.l(w),w.forEach(_),i=I(o),c&&c.l(o),k=I(o),b=A(o,"DIV",{class:!0});var J=q(b);j(h.$$.fragment,J),J.forEach(_),this.h()},h(){z(f,"class","project-page__previous svelte-ktylb9"),z(b,"class","project-page__disclaimer svelte-ktylb9")},m(o,u){d(o,r,u),m.m(o,u),d(o,a,u),d(o,f,u),v[n].m(f,null),d(o,i,u),c&&c.m(o,u),d(o,k,u),d(o,b,u),V(h,b,null),P=!0,B||(T=[H(ue,"keydown",s[1]),H(f,"mousedown",s[3])],B=!0)},p(o,[u]){(!P||u&1)&&e!==(e=o[0].title)&&(document.title=e),u&1&&W(t,t=o[0])?(S(),$(m,1,1,te),C(),m=Q(o),m.c(),p(m,1),m.m(a.parentNode,a)):m.p(o,u);let w=n;n=G(o),n===w?v[n].p(o,u):(S(),$(v[w],1,1,()=>{v[w]=null}),C(),l=v[n],l?l.p(o,u):(l=v[n]=F[n](o),l.c()),p(l,1),l.m(f,null)),o[0].after?c?(c.p(o,u),u&1&&p(c,1)):(c=U(o),c.c(),p(c,1),c.m(k.parentNode,k)):c&&(S(),$(c,1,1,()=>{c=null}),C())},i(o){P||(p(m),p(l),p(c),p(h.$$.fragment,o),P=!0)},o(o){$(m),$(l),$(c),$(h.$$.fragment,o),P=!1},d(o){o&&_(r),m.d(o),o&&_(a),o&&_(f),v[n].d(),o&&_(i),c&&c.d(o),o&&_(k),o&&_(b),D(h),B=!1,x(T)}}}function be(s,e,r){let t,{data:a}=e;function f(i){i.altKey||i.shiftKey||i.metaKey||(i.key==="ArrowLeft"&&t.before?(N.set("right"),M(t.before)):i.key==="ArrowRight"&&t.after&&(N.set("left"),M(t.after)))}const n=()=>{N.set("right")},l=()=>{N.set("left")};return s.$$set=i=>{"data"in i&&r(2,a=i.data)},s.$$.update=()=>{s.$$.dirty&4&&r(0,t=a.project),s.$$.dirty&1&&t.before&&typeof window<"u"&&ce(t.before)},[t,f,a,n,l]}class De extends X{constructor(e){super(),Y(this,e,be,ge,W,{data:2})}}export{De as default};