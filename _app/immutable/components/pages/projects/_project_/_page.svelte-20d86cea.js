import{S as L,i as Q,s as z,k as I,l as V,n as w,R as Y,b,C as U,A as F,h as p,H as le,z as ne,v as H,w as M,x as q,f as v,t as k,y as J,q as S,a as A,W as se,m as C,r as T,c as N,X as oe,K as R,u as Z,g as G,d as O,J as ie,Y as fe,G as ue,P as ce,Q as _e,M as me}from"../../../../chunks/index-a9f286ba.js";import{C as pe,P as de}from"../../../../chunks/Card-76f6fa3c.js";import{N as W,c as B,a as he,b as ge}from"../../../../chunks/cardTransition-3d02fffc.js";import{D as $e}from"../../../../chunks/Disclaimer-dbbb2eb9.js";import{c as K}from"../../../../chunks/singletons-ea8407ac.js";function ve(a){let e,r,t,n;return{c(){e=I("img"),this.h()},l(l){e=V(l,"IMG",{class:!0,style:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){w(e,"class","project-image svelte-ovcjtx"),w(e,"style",a[5]),Y(e.src,r=a[0])||w(e,"src",r),w(e,"width",a[1]),w(e,"height",a[2]),w(e,"alt",a[3])},m(l,s){b(l,e,s),a[8](e),t||(n=U(e,"load",a[6]),t=!0)},p(l,[s]){s&32&&w(e,"style",l[5]),s&1&&!Y(e.src,r=l[0])&&w(e,"src",r),s&2&&w(e,"width",l[1]),s&4&&w(e,"height",l[2]),s&8&&w(e,"alt",l[3])},i:F,o:F,d(l){l&&p(e),a[8](null),t=!1,n()}}}function we(a,e,r){let t,{src:n}=e,{width:l}=e,{height:s}=e,{alt:i="Een screenshot van het project"}=e,_,d;const u={height:"auto",opacity:1,duration:"0s"};async function y(h){if(!d)return;if(!d.parentElement)throw new Error("Unexpected");const $=Math.ceil(d.parentElement.getBoundingClientRect().width/(l/s)),j=window.innerHeight/2;$<j?r(7,u.height=`${$}px`,u):r(7,u.height=`${j}px`,u),r(7,u.opacity=0,u),r(7,u.duration="0s",u),_=Date.now(),await ne(),d.complete&&E()}function E(){Date.now()-_<150?r(7,u.duration="0.2s",u):r(7,u.duration="0.5s",u),r(7,u.opacity=1,u),r(7,u.height="auto",u)}function D(h){le[h?"unshift":"push"](()=>{d=h,r(4,d)})}return a.$$set=h=>{"src"in h&&r(0,n=h.src),"width"in h&&r(1,l=h.width),"height"in h&&r(2,s=h.height),"alt"in h&&r(3,i=h.alt)},a.$$.update=()=>{a.$$.dirty&1&&y(),a.$$.dirty&128&&r(5,t=`max-width: 100%; height: ${u.height}; opacity: ${u.opacity}; transition-duration: ${u.duration};`)},[n,l,s,i,d,t,E,u,D]}class be extends L{constructor(e){super(),Q(this,e,we,ve,z,{src:0,width:1,height:2,alt:3})}}const ke=["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];function x(a){const e=a.match(/^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/);if(e===null)throw new Error(`Unexpected data format: ${a}`);const[,r,,t]=e;return t?`${ke[parseInt(t,10)-1]} ${r}`:r}function ee(a){let e,r;return e=new be({props:{src:a[1].src,width:a[1].width,height:a[1].height,alt:a[1].alt}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const l={};n&2&&(l.src=t[1].src),n&2&&(l.width=t[1].width),n&2&&(l.height=t[1].height),n&2&&(l.alt=t[1].alt),e.$set(l)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function ye(a){let e,r=a[0].title+"",t,n,l,s,i=a[0].content+"",_,d,u,y,E,D,h=x(a[0].released)+"",$,j,m=a[1]&&ee(a);return{c(){e=I("h1"),t=S(r),n=A(),m&&m.c(),l=A(),s=new se(!1),_=A(),d=I("div"),u=I("a"),y=S("< Terug naar portfolio"),E=A(),D=I("span"),$=S(h),this.h()},l(c){e=V(c,"H1",{});var f=C(e);t=T(f,r),f.forEach(p),n=N(c),m&&m.l(c),l=N(c),s=oe(c,!1),_=N(c),d=V(c,"DIV",{class:!0});var o=C(d);u=V(o,"A",{href:!0});var g=C(u);y=T(g,"< Terug naar portfolio"),g.forEach(p),E=N(o),D=V(o,"SPAN",{class:!0});var P=C(D);$=T(P,h),P.forEach(p),o.forEach(p),this.h()},h(){s.a=_,w(u,"href","/portfolio"),w(D,"class","release-date svelte-1dkbrsg"),w(d,"class","footer svelte-1dkbrsg")},m(c,f){b(c,e,f),R(e,t),b(c,n,f),m&&m.m(c,f),b(c,l,f),s.m(i,c,f),b(c,_,f),b(c,d,f),R(d,u),R(u,y),R(d,E),R(d,D),R(D,$),j=!0},p(c,f){(!j||f&1)&&r!==(r=c[0].title+"")&&Z(t,r),c[1]?m?(m.p(c,f),f&2&&v(m,1)):(m=ee(c),m.c(),v(m,1),m.m(l.parentNode,l)):m&&(G(),k(m,1,1,()=>{m=null}),O()),(!j||f&1)&&i!==(i=c[0].content+"")&&s.p(i),(!j||f&1)&&h!==(h=x(c[0].released)+"")&&Z($,h)},i(c){j||(v(m),j=!0)},o(c){k(m),j=!1},d(c){c&&p(e),c&&p(n),m&&m.d(c),c&&p(l),c&&s.d(),c&&p(_),c&&p(d)}}}function je(a){let e,r;return e=new pe({props:{$$slots:{default:[ye]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,[n]){const l={};n&7&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Ee(a,e,r){let t,{project:n}=e;return a.$$set=l=>{"project"in l&&r(0,n=l.project)},a.$$.update=()=>{a.$$.dirty&1&&r(1,t=n.image)},[n,t]}class De extends L{constructor(e){super(),Q(this,e,Ee,je,z,{project:0})}}K.disable_scroll_handling;const te=K.goto;K.invalidate;K.invalidateAll;const Pe=K.prefetch;K.prefetch_routes;K.before_navigate;K.after_navigate;const{window:Ie}=ue;function Ve(a){let e,r,t,n,l;return r=new De({props:{project:a[0]}}),{c(){e=I("div"),H(r.$$.fragment)},l(s){e=V(s,"DIV",{});var i=C(e);M(r.$$.fragment,i),i.forEach(p)},m(s,i){b(s,e,i),q(r,e,null),l=!0},p(s,i){const _={};i&1&&(_.project=s[0]),r.$set(_)},i(s){l||(v(r.$$.fragment,s),ce(()=>{n&&n.end(1),t=_e(e,he,{}),t.start()}),l=!0)},o(s){k(r.$$.fragment,s),t&&t.invalidate(),n=me(e,ge,{}),l=!1},d(s){s&&p(e),J(r),s&&n&&n.end()}}}function re(a){let e,r;return e=new de({props:{$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const l={};n&33&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Ae(a){let e,r;return e=new W({props:{href:"/portfolio",type:"previous",$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const l={};n&32&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Ce(a){let e,r;return e=new W({props:{href:a[0].before,type:"previous",$$slots:{default:[He]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){q(e,t,n),r=!0},p(t,n){const l={};n&1&&(l.href=t[0].before),n&32&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){J(e,t)}}}function Ne(a){let e;return{c(){e=S("Portfolio")},l(r){e=T(r,"Portfolio")},m(r,t){b(r,e,t)},d(r){r&&p(e)}}}function He(a){let e;return{c(){e=S("Vorige")},l(r){e=T(r,"Vorige")},m(r,t){b(r,e,t)},d(r){r&&p(e)}}}function ae(a){let e,r,t,n,l;return r=new W({props:{href:a[0].after,type:"next",$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){e=I("div"),H(r.$$.fragment),this.h()},l(s){e=V(s,"DIV",{class:!0});var i=C(e);M(r.$$.fragment,i),i.forEach(p),this.h()},h(){w(e,"class","project-page__next svelte-ktylb9")},m(s,i){b(s,e,i),q(r,e,null),t=!0,n||(l=U(e,"mousedown",a[4]),n=!0)},p(s,i){const _={};i&1&&(_.href=s[0].after),i&32&&(_.$$scope={dirty:i,ctx:s}),r.$set(_)},i(s){t||(v(r.$$.fragment,s),t=!0)},o(s){k(r.$$.fragment,s),t=!1},d(s){s&&p(e),J(r),n=!1,l()}}}function Me(a){let e;return{c(){e=S("Volgende")},l(r){e=T(r,"Volgende")},m(r,t){b(r,e,t)},d(r){r&&p(e)}}}function qe(a){let e,r,t=a[0],n,l,s,i,_,d,u,y,E,D,h;document.title=e=a[0].title;let $=re(a);const j=[Ce,Ae],m=[];function c(o,g){return o[0].before?0:1}s=c(a),i=m[s]=j[s](a);let f=a[0].after&&ae(a);return y=new $e({}),{c(){r=A(),$.c(),n=A(),l=I("div"),i.c(),_=A(),f&&f.c(),d=A(),u=I("div"),H(y.$$.fragment),this.h()},l(o){ie('[data-svelte="svelte-1cx8lxk"]',document.head).forEach(p),r=N(o),$.l(o),n=N(o),l=V(o,"DIV",{class:!0});var P=C(l);i.l(P),P.forEach(p),_=N(o),f&&f.l(o),d=N(o),u=V(o,"DIV",{class:!0});var X=C(u);M(y.$$.fragment,X),X.forEach(p),this.h()},h(){w(l,"class","project-page__previous svelte-ktylb9"),w(u,"class","project-page__disclaimer svelte-ktylb9")},m(o,g){b(o,r,g),$.m(o,g),b(o,n,g),b(o,l,g),m[s].m(l,null),b(o,_,g),f&&f.m(o,g),b(o,d,g),b(o,u,g),q(y,u,null),E=!0,D||(h=[U(Ie,"keydown",a[1]),U(l,"mousedown",a[3])],D=!0)},p(o,[g]){(!E||g&1)&&e!==(e=o[0].title)&&(document.title=e),g&1&&z(t,t=o[0])?(G(),k($,1,1,F),O(),$=re(o),$.c(),v($,1),$.m(n.parentNode,n)):$.p(o,g);let P=s;s=c(o),s===P?m[s].p(o,g):(G(),k(m[P],1,1,()=>{m[P]=null}),O(),i=m[s],i?i.p(o,g):(i=m[s]=j[s](o),i.c()),v(i,1),i.m(l,null)),o[0].after?f?(f.p(o,g),g&1&&v(f,1)):(f=ae(o),f.c(),v(f,1),f.m(d.parentNode,d)):f&&(G(),k(f,1,1,()=>{f=null}),O())},i(o){E||(v($),v(i),v(f),v(y.$$.fragment,o),E=!0)},o(o){k($),k(i),k(f),k(y.$$.fragment,o),E=!1},d(o){o&&p(r),$.d(o),o&&p(n),o&&p(l),m[s].d(),o&&p(_),f&&f.d(o),o&&p(d),o&&p(u),J(y),D=!1,fe(h)}}}function Je(a,e,r){let t,{data:n}=e;function l(_){_.altKey||_.shiftKey||_.metaKey||(_.key==="ArrowLeft"&&t.before?(B.set("right"),te(t.before)):_.key==="ArrowRight"&&t.after&&(B.set("left"),te(t.after)))}const s=()=>{B.set("right")},i=()=>{B.set("left")};return a.$$set=_=>{"data"in _&&r(2,n=_.data)},a.$$.update=()=>{a.$$.dirty&4&&r(0,t=n),a.$$.dirty&1&&t.before&&typeof window<"u"&&Pe(t.before)},[t,l,n,s,i]}class Ge extends L{constructor(e){super(),Q(this,e,Je,qe,z,{data:2})}}export{Ge as default};
