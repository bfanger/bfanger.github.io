import{S as W,i as z,s as L,l as P,m as V,p as w,W as Y,b,G,E as F,h as p,L as ne,D as se,w as H,x as M,y as T,f as v,t as j,B,r as U,a as N,_ as oe,n as A,u as q,c as C,$ as le,N as S,v as Z,g as O,d as R,M as ie,a0 as fe,K as ce,T as ue,U as _e,O as pe}from"../../chunks/index-0e9f797d.js";import{a as me}from"../../chunks/api-aa2aec57.js";import{C as he,P as de}from"../../chunks/Card-529c8d01.js";import{N as Q,c as J,a as ge,b as $e}from"../../chunks/cardTransition-3140a0e5.js";import{D as ve}from"../../chunks/Disclaimer-82e55230.js";import{c as K}from"../../chunks/singletons-eca981c1.js";import"../../chunks/index-826ee533.js";function we(a){let e,r,t,s;return{c(){e=P("img"),this.h()},l(n){e=V(n,"IMG",{class:!0,style:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){w(e,"class","project-image svelte-ovcjtx"),w(e,"style",a[5]),Y(e.src,r=a[0])||w(e,"src",r),w(e,"width",a[1]),w(e,"height",a[2]),w(e,"alt",a[3])},m(n,o){b(n,e,o),a[8](e),t||(s=G(e,"load",a[6]),t=!0)},p(n,[o]){o&32&&w(e,"style",n[5]),o&1&&!Y(e.src,r=n[0])&&w(e,"src",r),o&2&&w(e,"width",n[1]),o&4&&w(e,"height",n[2]),o&8&&w(e,"alt",n[3])},i:F,o:F,d(n){n&&p(e),a[8](null),t=!1,s()}}}function be(a,e,r){let t,{src:s}=e,{width:n}=e,{height:o}=e,{alt:i="Een screenshot van het project"}=e,g,m;const c={height:"auto",opacity:1,duration:"0s"};async function k(h){if(!m)return;if(!m.parentElement)throw new Error("Unexpected");const $=Math.ceil(m.parentElement.getBoundingClientRect().width/(n/o)),y=window.innerHeight/2;$<y?r(7,c.height=`${$}px`,c):r(7,c.height=`${y}px`,c),r(7,c.opacity=0,c),r(7,c.duration="0s",c),g=Date.now(),await se(),m.complete&&E()}function E(){Date.now()-g<150?r(7,c.duration="0.2s",c):r(7,c.duration="0.5s",c),r(7,c.opacity=1,c),r(7,c.height="auto",c)}function D(h){ne[h?"unshift":"push"](()=>{m=h,r(4,m)})}return a.$$set=h=>{"src"in h&&r(0,s=h.src),"width"in h&&r(1,n=h.width),"height"in h&&r(2,o=h.height),"alt"in h&&r(3,i=h.alt)},a.$$.update=()=>{a.$$.dirty&1&&k(),a.$$.dirty&128&&r(5,t=`max-width: 100%; height: ${c.height}; opacity: ${c.opacity}; transition-duration: ${c.duration};`)},[s,n,o,i,m,t,E,c,D]}class je extends W{constructor(e){super(),z(this,e,be,we,L,{src:0,width:1,height:2,alt:3})}}const ke=["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];function x(a){const e=a.match(/^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/);if(e===null)throw new Error(`Unexpected data format: ${a}`);const[,r,,t]=e;return t?`${ke[parseInt(t,10)-1]} ${r}`:r}function ee(a){let e,r;return e=new je({props:{src:a[1].src,width:a[1].width,height:a[1].height,alt:a[1].alt}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const n={};s&2&&(n.src=t[1].src),s&2&&(n.width=t[1].width),s&2&&(n.height=t[1].height),s&2&&(n.alt=t[1].alt),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function ye(a){let e,r=a[0].title+"",t,s,n,o,i=a[0].content+"",g,m,c,k,E,D,h=x(a[0].released)+"",$,y,_=a[1]&&ee(a);return{c(){e=P("h1"),t=U(r),s=N(),_&&_.c(),n=N(),o=new oe(!1),g=N(),m=P("div"),c=P("a"),k=U("< Terug naar portfolio"),E=N(),D=P("span"),$=U(h),this.h()},l(u){e=V(u,"H1",{});var f=A(e);t=q(f,r),f.forEach(p),s=C(u),_&&_.l(u),n=C(u),o=le(u,!1),g=C(u),m=V(u,"DIV",{class:!0});var l=A(m);c=V(l,"A",{href:!0});var d=A(c);k=q(d,"< Terug naar portfolio"),d.forEach(p),E=C(l),D=V(l,"SPAN",{class:!0});var I=A(D);$=q(I,h),I.forEach(p),l.forEach(p),this.h()},h(){o.a=g,w(c,"href","/portfolio"),w(D,"class","project-card__release-date svelte-1p9lkhc"),w(m,"class","project-card__footer svelte-1p9lkhc")},m(u,f){b(u,e,f),S(e,t),b(u,s,f),_&&_.m(u,f),b(u,n,f),o.m(i,u,f),b(u,g,f),b(u,m,f),S(m,c),S(c,k),S(m,E),S(m,D),S(D,$),y=!0},p(u,f){(!y||f&1)&&r!==(r=u[0].title+"")&&Z(t,r),u[1]?_?(_.p(u,f),f&2&&v(_,1)):(_=ee(u),_.c(),v(_,1),_.m(n.parentNode,n)):_&&(O(),j(_,1,1,()=>{_=null}),R()),(!y||f&1)&&i!==(i=u[0].content+"")&&o.p(i),(!y||f&1)&&h!==(h=x(u[0].released)+"")&&Z($,h)},i(u){y||(v(_),y=!0)},o(u){j(_),y=!1},d(u){u&&p(e),u&&p(s),_&&_.d(u),u&&p(n),u&&o.d(),u&&p(g),u&&p(m)}}}function Ee(a){let e,r;return e=new he({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,[s]){const n={};s&7&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function De(a,e,r){let t,{project:s}=e;return a.$$set=n=>{"project"in n&&r(0,s=n.project)},a.$$.update=()=>{a.$$.dirty&1&&r(1,t=s.image)},[s,t]}class Ie extends W{constructor(e){super(),z(this,e,De,Ee,L,{project:0})}}K.disable_scroll_handling;const te=K.goto;K.invalidate;const Pe=K.prefetch;K.prefetch_routes;K.before_navigate;K.after_navigate;const{window:Ve}=ce;function Ne(a){let e,r,t,s,n;return r=new Ie({props:{project:a[0]}}),{c(){e=P("div"),H(r.$$.fragment)},l(o){e=V(o,"DIV",{});var i=A(e);M(r.$$.fragment,i),i.forEach(p)},m(o,i){b(o,e,i),T(r,e,null),n=!0},p(o,i){const g={};i&1&&(g.project=o[0]),r.$set(g)},i(o){n||(v(r.$$.fragment,o),ue(()=>{s&&s.end(1),t=_e(e,ge,{}),t.start()}),n=!0)},o(o){j(r.$$.fragment,o),t&&t.invalidate(),s=pe(e,$e,{}),n=!1},d(o){o&&p(e),B(r),o&&s&&s.end()}}}function re(a){let e,r;return e=new de({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const n={};s&17&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ae(a){let e,r;return e=new Q({props:{href:"/portfolio",type:"previous",$$slots:{default:[He]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const n={};s&16&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ce(a){let e,r;return e=new Q({props:{href:a[0].before,type:"previous",$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,s){T(e,t,s),r=!0},p(t,s){const n={};s&1&&(n.href=t[0].before),s&16&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function He(a){let e;return{c(){e=U("Portfolio")},l(r){e=q(r,"Portfolio")},m(r,t){b(r,e,t)},d(r){r&&p(e)}}}function Me(a){let e;return{c(){e=U("Vorige")},l(r){e=q(r,"Vorige")},m(r,t){b(r,e,t)},d(r){r&&p(e)}}}function ae(a){let e,r,t,s,n;return r=new Q({props:{href:a[0].after,type:"next",$$slots:{default:[Te]},$$scope:{ctx:a}}}),{c(){e=P("div"),H(r.$$.fragment),this.h()},l(o){e=V(o,"DIV",{class:!0});var i=A(e);M(r.$$.fragment,i),i.forEach(p),this.h()},h(){w(e,"class","project-page__next svelte-ktylb9")},m(o,i){b(o,e,i),T(r,e,null),t=!0,s||(n=G(e,"mousedown",a[3]),s=!0)},p(o,i){const g={};i&1&&(g.href=o[0].after),i&16&&(g.$$scope={dirty:i,ctx:o}),r.$set(g)},i(o){t||(v(r.$$.fragment,o),t=!0)},o(o){j(r.$$.fragment,o),t=!1},d(o){o&&p(e),B(r),s=!1,n()}}}function Te(a){let e;return{c(){e=U("Volgende")},l(r){e=q(r,"Volgende")},m(r,t){b(r,e,t)},d(r){r&&p(e)}}}function Be(a){let e,r,t=a[0],s,n,o,i,g,m,c,k,E,D,h;document.title=e=a[0].title;let $=re(a);const y=[Ce,Ae],_=[];function u(l,d){return l[0].before?0:1}o=u(a),i=_[o]=y[o](a);let f=a[0].after&&ae(a);return k=new ve({}),{c(){r=N(),$.c(),s=N(),n=P("div"),i.c(),g=N(),f&&f.c(),m=N(),c=P("div"),H(k.$$.fragment),this.h()},l(l){ie('[data-svelte="svelte-1cx8lxk"]',document.head).forEach(p),r=C(l),$.l(l),s=C(l),n=V(l,"DIV",{class:!0});var I=A(n);i.l(I),I.forEach(p),g=C(l),f&&f.l(l),m=C(l),c=V(l,"DIV",{class:!0});var X=A(c);M(k.$$.fragment,X),X.forEach(p),this.h()},h(){w(n,"class","project-page__previous svelte-ktylb9"),w(c,"class","project-page__disclaimer svelte-ktylb9")},m(l,d){b(l,r,d),$.m(l,d),b(l,s,d),b(l,n,d),_[o].m(n,null),b(l,g,d),f&&f.m(l,d),b(l,m,d),b(l,c,d),T(k,c,null),E=!0,D||(h=[G(Ve,"keydown",a[1]),G(n,"mousedown",a[2])],D=!0)},p(l,[d]){(!E||d&1)&&e!==(e=l[0].title)&&(document.title=e),d&1&&L(t,t=l[0])?(O(),j($,1,1,F),R(),$=re(l),$.c(),v($,1),$.m(s.parentNode,s)):$.p(l,d);let I=o;o=u(l),o===I?_[o].p(l,d):(O(),j(_[I],1,1,()=>{_[I]=null}),R(),i=_[o],i?i.p(l,d):(i=_[o]=y[o](l),i.c()),v(i,1),i.m(n,null)),l[0].after?f?(f.p(l,d),d&1&&v(f,1)):(f=ae(l),f.c(),v(f,1),f.m(m.parentNode,m)):f&&(O(),j(f,1,1,()=>{f=null}),R())},i(l){E||(v($),v(i),v(f),v(k.$$.fragment,l),E=!0)},o(l){j($),j(i),j(f),j(k.$$.fragment,l),E=!1},d(l){l&&p(r),$.d(l),l&&p(s),l&&p(n),_[o].d(),l&&p(g),f&&f.d(l),l&&p(m),l&&p(c),B(k),D=!1,fe(h)}}}const Le=async({params:a,fetch:e})=>({props:{project:await me.get("projects/[project].json",{params:{project:a.project},fetch:e})}});function Ke(a,e,r){let{project:t}=e;function s(i){i.altKey||i.shiftKey||i.metaKey||(i.key==="ArrowLeft"&&t.before?(J.set("right"),te(t.before)):i.key==="ArrowRight"&&t.after&&(J.set("left"),te(t.after)))}const n=()=>{J.set("right")},o=()=>{J.set("left")};return a.$$set=i=>{"project"in i&&r(0,t=i.project)},a.$$.update=()=>{a.$$.dirty&1&&t.before&&typeof window<"u"&&Pe(t.before)},[t,s,n,o]}class Fe extends W{constructor(e){super(),z(this,e,Ke,Be,L,{project:0})}}export{Fe as default,Le as load};
