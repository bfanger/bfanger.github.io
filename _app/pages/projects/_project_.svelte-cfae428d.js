import{S as O,i as G,s as q,e as V,c as P,b,Y as Q,f as w,F as B,R as W,d as p,K as ne,D as ae,v as N,w as A,x as C,p as v,n as j,A as H,t as T,j as M,a1 as oe,a as R,g as J,l as S,a2 as le,M as K,h as X,m as L,o as U,L as ie,a3 as fe,J as ce,V as ue,W as _e,N as pe}from"../../chunks/vendor-2bb50eba.js";import{a as me,D as he}from"../../chunks/Disclaimer-1ac92f75.js";import{C as de,P as ge}from"../../chunks/Card-6b92d0ad.js";import{N as Y,c as F,a as $e,b as ve}from"../../chunks/cardTransition-c22edfa6.js";import{g as be,r as we}from"../../chunks/singletons-521d72fa.js";function je(s){let e,r,t,a;return{c(){e=V("img"),this.h()},l(n){e=P(n,"IMG",{class:!0,style:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){b(e,"class","project-image svelte-ovcjtx"),b(e,"style",s[5]),Q(e.src,r=s[0])||b(e,"src",r),b(e,"width",s[1]),b(e,"height",s[2]),b(e,"alt",s[3])},m(n,o){w(n,e,o),s[8](e),t||(a=B(e,"load",s[6]),t=!0)},p(n,[o]){o&32&&b(e,"style",n[5]),o&1&&!Q(e.src,r=n[0])&&b(e,"src",r),o&2&&b(e,"width",n[1]),o&4&&b(e,"height",n[2]),o&8&&b(e,"alt",n[3])},i:W,o:W,d(n){n&&p(e),s[8](null),t=!1,a()}}}function ke(s,e,r){let t,{src:a}=e,{width:n}=e,{height:o}=e,{alt:i="Een screenshot van het project"}=e,g,m;const c={height:"auto",opacity:1,duration:"0s"};async function k(h){if(!m)return;if(!m.parentElement)throw new Error("Unexpected");const $=Math.ceil(m.parentElement.getBoundingClientRect().width/(n/o)),y=window.innerHeight/2;$<y?r(7,c.height=`${$}px`,c):r(7,c.height=`${y}px`,c),r(7,c.opacity=0,c),r(7,c.duration="0s",c),g=Date.now(),await ae(),m.complete&&D()}function D(){Date.now()-g<150?r(7,c.duration="0.2s",c):r(7,c.duration="0.5s",c),r(7,c.opacity=1,c),r(7,c.height="auto",c)}function E(h){ne[h?"unshift":"push"](()=>{m=h,r(4,m)})}return s.$$set=h=>{"src"in h&&r(0,a=h.src),"width"in h&&r(1,n=h.width),"height"in h&&r(2,o=h.height),"alt"in h&&r(3,i=h.alt)},s.$$.update=()=>{s.$$.dirty&1&&k(),s.$$.dirty&128&&r(5,t=`max-width: 100%; height: ${c.height}; opacity: ${c.opacity}; transition-duration: ${c.duration};`)},[a,n,o,i,m,t,D,c,E]}class ye extends O{constructor(e){super();G(this,e,ke,je,q,{src:0,width:1,height:2,alt:3})}}const De=["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];function Z(s){const[,e,,r]=s.match(/^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/);return r?`${De[parseInt(r,10)-1]} ${e}`:e}function x(s){let e,r;return e=new ye({props:{src:s[1].src,width:s[1].width,height:s[1].height,alt:s[1].alt}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){C(e,t,a),r=!0},p(t,a){const n={};a&2&&(n.src=t[1].src),a&2&&(n.width=t[1].width),a&2&&(n.height=t[1].height),a&2&&(n.alt=t[1].alt),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Ee(s){let e,r=s[0].title+"",t,a,n,o,i=s[0].content+"",g,m,c,k,D,E,h=Z(s[0].released)+"",$,y,_=s[1]&&x(s);return{c(){e=V("h1"),t=T(r),a=M(),_&&_.c(),n=M(),o=new oe,g=M(),m=V("div"),c=V("a"),k=T("< Terug naar portfolio"),D=M(),E=V("span"),$=T(h),this.h()},l(u){e=P(u,"H1",{});var f=R(e);t=J(f,r),f.forEach(p),a=S(u),_&&_.l(u),n=S(u),o=le(u),g=S(u),m=P(u,"DIV",{class:!0});var l=R(m);c=P(l,"A",{href:!0});var d=R(c);k=J(d,"< Terug naar portfolio"),d.forEach(p),D=S(l),E=P(l,"SPAN",{class:!0});var I=R(E);$=J(I,h),I.forEach(p),l.forEach(p),this.h()},h(){o.a=g,b(c,"href","/portfolio"),b(E,"class","project-card__release-date svelte-1p9lkhc"),b(m,"class","project-card__footer svelte-1p9lkhc")},m(u,f){w(u,e,f),K(e,t),w(u,a,f),_&&_.m(u,f),w(u,n,f),o.m(i,u,f),w(u,g,f),w(u,m,f),K(m,c),K(c,k),K(m,D),K(m,E),K(E,$),y=!0},p(u,f){(!y||f&1)&&r!==(r=u[0].title+"")&&X(t,r),u[1]?_?(_.p(u,f),f&2&&v(_,1)):(_=x(u),_.c(),v(_,1),_.m(n.parentNode,n)):_&&(L(),j(_,1,1,()=>{_=null}),U()),(!y||f&1)&&i!==(i=u[0].content+"")&&o.p(i),(!y||f&1)&&h!==(h=Z(u[0].released)+"")&&X($,h)},i(u){y||(v(_),y=!0)},o(u){j(_),y=!1},d(u){u&&p(e),u&&p(a),_&&_.d(u),u&&p(n),u&&o.d(),u&&p(g),u&&p(m)}}}function Ie(s){let e,r;return e=new de({props:{$$slots:{default:[Ee]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){C(e,t,a),r=!0},p(t,[a]){const n={};a&7&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Ve(s,e,r){let t,{project:a}=e;return s.$$set=n=>{"project"in n&&r(0,a=n.project)},s.$$.update=()=>{s.$$.dirty&1&&r(1,t=a.image)},[a,t]}class Pe extends O{constructor(e){super();G(this,e,Ve,Ie,q,{project:0})}}const ee=we,te=Ae,Ne=Ce;async function Ae(s,e){return ee.goto(s,e,[])}function Ce(s){return ee.prefetch(new URL(s,be(document)))}const{window:He}=ce;function Me(s){let e,r,t,a,n;return r=new Pe({props:{project:s[0]}}),{c(){e=V("div"),N(r.$$.fragment)},l(o){e=P(o,"DIV",{});var i=R(e);A(r.$$.fragment,i),i.forEach(p)},m(o,i){w(o,e,i),C(r,e,null),n=!0},p(o,i){const g={};i&1&&(g.project=o[0]),r.$set(g)},i(o){n||(v(r.$$.fragment,o),ue(()=>{a&&a.end(1),t=_e(e,$e,{}),t.start()}),n=!0)},o(o){j(r.$$.fragment,o),t&&t.invalidate(),a=pe(e,ve,{}),n=!1},d(o){o&&p(e),H(r),o&&a&&a.end()}}}function re(s){let e,r;return e=new ge({props:{$$slots:{default:[Me]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){C(e,t,a),r=!0},p(t,a){const n={};a&17&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Re(s){let e,r;return e=new Y({props:{href:"/portfolio",type:"previous",$$slots:{default:[Te]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){C(e,t,a),r=!0},p(t,a){const n={};a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Se(s){let e,r;return e=new Y({props:{href:s[0].before,type:"previous",$$slots:{default:[Je]},$$scope:{ctx:s}}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){C(e,t,a),r=!0},p(t,a){const n={};a&1&&(n.href=t[0].before),a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Te(s){let e;return{c(){e=T("Portfolio")},l(r){e=J(r,"Portfolio")},m(r,t){w(r,e,t)},d(r){r&&p(e)}}}function Je(s){let e;return{c(){e=T("Vorige")},l(r){e=J(r,"Vorige")},m(r,t){w(r,e,t)},d(r){r&&p(e)}}}function se(s){let e,r,t,a,n;return r=new Y({props:{href:s[0].after,type:"next",$$slots:{default:[Ke]},$$scope:{ctx:s}}}),{c(){e=V("div"),N(r.$$.fragment),this.h()},l(o){e=P(o,"DIV",{class:!0});var i=R(e);A(r.$$.fragment,i),i.forEach(p),this.h()},h(){b(e,"class","project-page__next svelte-ktylb9")},m(o,i){w(o,e,i),C(r,e,null),t=!0,a||(n=B(e,"mousedown",s[3]),a=!0)},p(o,i){const g={};i&1&&(g.href=o[0].after),i&16&&(g.$$scope={dirty:i,ctx:o}),r.$set(g)},i(o){t||(v(r.$$.fragment,o),t=!0)},o(o){j(r.$$.fragment,o),t=!1},d(o){o&&p(e),H(r),a=!1,n()}}}function Ke(s){let e;return{c(){e=T("Volgende")},l(r){e=J(r,"Volgende")},m(r,t){w(r,e,t)},d(r){r&&p(e)}}}function qe(s){let e,r,t=s[0],a,n,o,i,g,m,c,k,D,E,h;document.title=e=s[0].title;let $=re(s);const y=[Se,Re],_=[];function u(l,d){return l[0].before?0:1}o=u(s),i=_[o]=y[o](s);let f=s[0].after&&se(s);return k=new he({}),{c(){r=M(),$.c(),a=M(),n=V("div"),i.c(),g=M(),f&&f.c(),m=M(),c=V("div"),N(k.$$.fragment),this.h()},l(l){ie('[data-svelte="svelte-1cx8lxk"]',document.head).forEach(p),r=S(l),$.l(l),a=S(l),n=P(l,"DIV",{class:!0});var I=R(n);i.l(I),I.forEach(p),g=S(l),f&&f.l(l),m=S(l),c=P(l,"DIV",{class:!0});var z=R(c);A(k.$$.fragment,z),z.forEach(p),this.h()},h(){b(n,"class","project-page__previous svelte-ktylb9"),b(c,"class","project-page__disclaimer svelte-ktylb9")},m(l,d){w(l,r,d),$.m(l,d),w(l,a,d),w(l,n,d),_[o].m(n,null),w(l,g,d),f&&f.m(l,d),w(l,m,d),w(l,c,d),C(k,c,null),D=!0,E||(h=[B(He,"keydown",s[1]),B(n,"mousedown",s[2])],E=!0)},p(l,[d]){(!D||d&1)&&e!==(e=l[0].title)&&(document.title=e),d&1&&q(t,t=l[0])?(L(),j($,1,1,W),U(),$=re(l),$.c(),v($),$.m(a.parentNode,a)):$.p(l,d);let I=o;o=u(l),o===I?_[o].p(l,d):(L(),j(_[I],1,1,()=>{_[I]=null}),U(),i=_[o],i?i.p(l,d):(i=_[o]=y[o](l),i.c()),v(i,1),i.m(n,null)),l[0].after?f?(f.p(l,d),d&1&&v(f,1)):(f=se(l),f.c(),v(f,1),f.m(m.parentNode,m)):f&&(L(),j(f,1,1,()=>{f=null}),U())},i(l){D||(v($),v(i),v(f),v(k.$$.fragment,l),D=!0)},o(l){j($),j(i),j(f),j(k.$$.fragment,l),D=!1},d(l){l&&p(r),$.d(l),l&&p(a),l&&p(n),_[o].d(),l&&p(g),f&&f.d(l),l&&p(m),l&&p(c),H(k),E=!1,fe(h)}}}const We=async({params:s,fetch:e})=>({props:{project:await me.get("projects/[project].json",{params:{project:s.project},fetch:e})}});function Be(s,e,r){let{project:t}=e;function a(i){i.altKey||i.shiftKey||i.metaKey||(i.key==="ArrowLeft"&&t.before?(F.set("right"),te(t.before)):i.key==="ArrowRight"&&t.after&&(F.set("left"),te(t.after)))}const n=()=>{F.set("right")},o=()=>{F.set("left")};return s.$$set=i=>{"project"in i&&r(0,t=i.project)},s.$$.update=()=>{s.$$.dirty&1&&t.before&&typeof window!="undefined"&&Ne(t.before)},[t,a,n,o]}class Ye extends O{constructor(e){super();G(this,e,Be,qe,q,{project:0})}}export{Ye as default,We as load};
