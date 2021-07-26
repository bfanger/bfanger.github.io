import{S as t,i as e,s as r,e as s,c as n,b as a,U as o,f as c,E as i,N as l,d as $,H as f,Y as u,j as p,m as h,o as d,x as m,u as g,v as w,t as v,k as y,Z as j,a as x,g as b,n as k,_ as E,J as _,h as D,r as V,w as I,I as N,$ as R,G as T,D as A,F as P,Q as H,R as J,K}from"../../chunks/vendor-968632e7.js";import{C as M,P as C}from"../../chunks/Card-c1cefe1f.js";import{N as O,c as S,a as F,b as G}from"../../chunks/cardTransition-0269e159.js";import{D as L}from"../../chunks/Disclaimer-efd3b4aa.js";import{r as U,g as B}from"../../chunks/singletons-ff603286.js";function Q(t){let e,r,f,u;return{c(){e=s("img"),this.h()},l(t){e=n(t,"IMG",{class:!0,style:!0,src:!0,width:!0,height:!0,alt:!0}),this.h()},h(){a(e,"class","project-image svelte-ovcjtx"),a(e,"style",t[5]),o(e.src,r=t[0])||a(e,"src",r),a(e,"width",t[1]),a(e,"height",t[2]),a(e,"alt",t[3])},m(r,s){c(r,e,s),t[8](e),f||(u=i(e,"load",t[6]),f=!0)},p(t,[s]){32&s&&a(e,"style",t[5]),1&s&&!o(e.src,r=t[0])&&a(e,"src",r),2&s&&a(e,"width",t[1]),4&s&&a(e,"height",t[2]),8&s&&a(e,"alt",t[3])},i:l,o:l,d(r){r&&$(e),t[8](null),f=!1,u()}}}function Y(t,e,r){let s;var n=this&&this.__awaiter||function(t,e,r,s){return new(r||(r=Promise))((function(n,a){function o(t){try{i(s.next(t))}catch(e){a(e)}}function c(t){try{i(s.throw(t))}catch(e){a(e)}}function i(t){var e;t.done?n(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,c)}i((s=s.apply(t,e||[])).next())}))};let a,o,{src:c}=e,{width:i}=e,{height:l}=e,{alt:$="Een screenshot van het project"}=e,p={height:"auto",opacity:1,duration:"0s"};function h(){Date.now()-a<150?r(7,p.duration="0.2s",p):r(7,p.duration="0.5s",p),r(7,p.opacity=1,p),r(7,p.height="auto",p)}return t.$$set=t=>{"src"in t&&r(0,c=t.src),"width"in t&&r(1,i=t.width),"height"in t&&r(2,l=t.height),"alt"in t&&r(3,$=t.alt)},t.$$.update=()=>{1&t.$$.dirty&&function(t){n(this,void 0,void 0,(function*(){if(!o)return;const t=Math.ceil(o.parentElement.getBoundingClientRect().width/(i/l)),e=window.innerHeight/2;r(7,p.height=t<e?t+"px":e+"px",p),r(7,p.opacity=0,p),r(7,p.duration="0s",p),a=Date.now(),yield u(),o.complete&&h()}))}(),128&t.$$.dirty&&r(5,s=`max-width: 100%; height: ${p.height}; opacity: ${p.opacity}; transition-duration: ${p.duration};`)},[c,i,l,$,o,s,h,p,function(t){f[t?"unshift":"push"]((()=>{o=t,r(4,o)}))}]}class Z extends t{constructor(t){super(),e(this,t,Y,Q,r,{src:0,width:1,height:2,alt:3})}}const q=["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"];function z(t){const[,e,,r]=t.match(/^([0-9]{4})(-([0-9]{2}))?(-([0-9]{2}))?$/);return r?`${q[parseInt(r,10)-1]} ${e}`:e}function W(t){let e,r;return e=new Z({props:{src:t[1].src,width:t[1].width,height:t[1].height,alt:t[1].alt}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,r){const s={};2&r&&(s.src=t[1].src),2&r&&(s.width=t[1].width),2&r&&(s.height=t[1].height),2&r&&(s.alt=t[1].alt),e.$set(s)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function X(t){let e,r,o,i,l,f,u,p,h,d,w,N,R,T=t[0].title+"",A=t[0].content+"",P=z(t[0].released)+"",H=t[1]&&W(t);return{c(){e=s("h1"),r=v(T),o=y(),H&&H.c(),i=y(),l=new j,f=y(),u=s("div"),p=s("a"),h=v("< Terug naar portfolio"),d=y(),w=s("span"),N=v(P),this.h()},l(t){e=n(t,"H1",{});var s=x(e);r=b(s,T),s.forEach($),o=k(t),H&&H.l(t),i=k(t),l=E(t),f=k(t),u=n(t,"DIV",{class:!0});var a=x(u);p=n(a,"A",{href:!0});var c=x(p);h=b(c,"< Terug naar portfolio"),c.forEach($),d=k(a),w=n(a,"SPAN",{class:!0});var m=x(w);N=b(m,P),m.forEach($),a.forEach($),this.h()},h(){l.a=f,a(p,"href","/portfolio"),a(w,"class","project-card__release-date svelte-1p9lkhc"),a(u,"class","project-card__footer svelte-1p9lkhc")},m(t,s){c(t,e,s),_(e,r),c(t,o,s),H&&H.m(t,s),c(t,i,s),l.m(A,t,s),c(t,f,s),c(t,u,s),_(u,p),_(p,h),_(u,d),_(u,w),_(w,N),R=!0},p(t,e){(!R||1&e)&&T!==(T=t[0].title+"")&&D(r,T),t[1]?H?(H.p(t,e),2&e&&m(H,1)):(H=W(t),H.c(),m(H,1),H.m(i.parentNode,i)):H&&(V(),g(H,1,1,(()=>{H=null})),I()),(!R||1&e)&&A!==(A=t[0].content+"")&&l.p(A),(!R||1&e)&&P!==(P=z(t[0].released)+"")&&D(N,P)},i(t){R||(m(H),R=!0)},o(t){g(H),R=!1},d(t){t&&$(e),t&&$(o),H&&H.d(t),t&&$(i),t&&l.d(),t&&$(f),t&&$(u)}}}function tt(t){let e,r;return e=new M({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,[r]){const s={};7&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function et(t,e,r){let s,{project:n}=e;return t.$$set=t=>{"project"in t&&r(0,n=t.project)},t.$$.update=()=>{1&t.$$.dirty&&r(1,s=n.image)},[n,s]}class rt extends t{constructor(t){super(),e(this,t,et,tt,r,{project:0})}}const st=async function(t,e){return U.goto(t,e,[])},nt=function(t){return U.prefetch(new URL(t,B(document)))};const{window:at}=T;function ot(t){let e,r,a,o,i,l;r=new rt({props:{project:t[0]}});const f=t[2].default,u=A(f,t,t[5],null);return{c(){e=s("div"),p(r.$$.fragment),i=y(),u&&u.c()},l(t){e=n(t,"DIV",{});var s=x(e);h(r.$$.fragment,s),s.forEach($),i=k(t),u&&u.l(t)},m(t,s){c(t,e,s),d(r,e,null),c(t,i,s),u&&u.m(t,s),l=!0},p(t,e){const s={};1&e&&(s.project=t[0]),r.$set(s),u&&u.p&&(!l||32&e)&&P(u,f,t,t[5],l?e:-1,null,null)},i(t){l||(m(r.$$.fragment,t),H((()=>{o&&o.end(1),a||(a=J(e,F,{})),a.start()})),m(u,t),l=!0)},o(t){g(r.$$.fragment,t),a&&a.invalidate(),o=K(e,G,{}),g(u,t),l=!1},d(t){t&&$(e),w(r),t&&o&&o.end(),t&&$(i),u&&u.d(t)}}}function ct(t){let e,r;return e=new C({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,r){const s={};33&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function it(t){let e,r;return e=new O({props:{href:"/portfolio",type:"previous",$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,r){const s={};32&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function lt(t){let e,r;return e=new O({props:{href:t[0].before,type:"previous",$$slots:{default:[ft]},$$scope:{ctx:t}}}),{c(){p(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){d(e,t,s),r=!0},p(t,r){const s={};1&r&&(s.href=t[0].before),32&r&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){g(e.$$.fragment,t),r=!1},d(t){w(e,t)}}}function $t(t){let e;return{c(){e=v("Portfolio")},l(t){e=b(t,"Portfolio")},m(t,r){c(t,e,r)},d(t){t&&$(e)}}}function ft(t){let e;return{c(){e=v("Vorige")},l(t){e=b(t,"Vorige")},m(t,r){c(t,e,r)},d(t){t&&$(e)}}}function ut(t){let e,r,o,l,f;return r=new O({props:{href:t[0].after,type:"next",$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){e=s("div"),p(r.$$.fragment),this.h()},l(t){e=n(t,"DIV",{class:!0});var s=x(e);h(r.$$.fragment,s),s.forEach($),this.h()},h(){a(e,"class","project-page__next svelte-ktylb9")},m(s,n){c(s,e,n),d(r,e,null),o=!0,l||(f=i(e,"mousedown",t[4]),l=!0)},p(t,e){const s={};1&e&&(s.href=t[0].after),32&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i(t){o||(m(r.$$.fragment,t),o=!0)},o(t){g(r.$$.fragment,t),o=!1},d(t){t&&$(e),w(r),l=!1,f()}}}function pt(t){let e;return{c(){e=v("Volgende")},l(t){e=b(t,"Volgende")},m(t,r){c(t,e,r)},d(t){t&&$(e)}}}function ht(t){let e,o,f,u,v,j,b,E,_,D,T,A,P,H=t[0];document.title=e=t[0].title;let J=ct(t);const K=[lt,it],M=[];function C(t,e){return t[0].before?0:1}v=C(t),j=M[v]=K[v](t);let O=t[0].after&&ut(t);return D=new L({}),{c(){o=y(),J.c(),f=y(),u=s("div"),j.c(),b=y(),O&&O.c(),E=y(),_=s("div"),p(D.$$.fragment),this.h()},l(t){N('[data-svelte="svelte-1cx8lxk"]',document.head).forEach($),o=k(t),J.l(t),f=k(t),u=n(t,"DIV",{class:!0});var e=x(u);j.l(e),e.forEach($),b=k(t),O&&O.l(t),E=k(t),_=n(t,"DIV",{class:!0});var r=x(_);h(D.$$.fragment,r),r.forEach($),this.h()},h(){a(u,"class","project-page__previous svelte-ktylb9"),a(_,"class","project-page__disclaimer svelte-ktylb9")},m(e,r){c(e,o,r),J.m(e,r),c(e,f,r),c(e,u,r),M[v].m(u,null),c(e,b,r),O&&O.m(e,r),c(e,E,r),c(e,_,r),d(D,_,null),T=!0,A||(P=[i(at,"keydown",t[1]),i(u,"mousedown",t[3])],A=!0)},p(t,[s]){(!T||1&s)&&e!==(e=t[0].title)&&(document.title=e),1&s&&r(H,H=t[0])?(V(),g(J,1,1,l),I(),J=ct(t),J.c(),m(J),J.m(f.parentNode,f)):J.p(t,s);let n=v;v=C(t),v===n?M[v].p(t,s):(V(),g(M[n],1,1,(()=>{M[n]=null})),I(),j=M[v],j?j.p(t,s):(j=M[v]=K[v](t),j.c()),m(j,1),j.m(u,null)),t[0].after?O?(O.p(t,s),1&s&&m(O,1)):(O=ut(t),O.c(),m(O,1),O.m(E.parentNode,E)):O&&(V(),g(O,1,1,(()=>{O=null})),I())},i(t){T||(m(J),m(j),m(O),m(D.$$.fragment,t),T=!0)},o(t){g(J),g(j),g(O),g(D.$$.fragment,t),T=!1},d(t){t&&$(o),J.d(t),t&&$(f),t&&$(u),M[v].d(),t&&$(b),O&&O.d(t),t&&$(E),t&&$(_),w(D),A=!1,R(P)}}}const dt=(mt="/projects/{project}.json",gt=t=>({project:t}),async({page:t,fetch:e})=>{const r=function(t,e){let r=t;return Object.entries(e).forEach((([t,e])=>{r=r.replace(`{${t}}`,e)})),r}(mt,t.params),s=await e(r);if(!s.ok){let t=s.statusText?`${s.status} ${s.statusText}`:`HTTP ERROR: ${s.status}`;try{const e=await s.json();e.message&&(t=e.message)}catch{}return{status:s.status,error:new Error(t)}}const n=await s.json();return{props:gt(n)}});var mt,gt;function wt(t,e,r){let{$$slots:s={},$$scope:n}=e,{project:a}=e;return t.$$set=t=>{"project"in t&&r(0,a=t.project),"$$scope"in t&&r(5,n=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&a.before&&"undefined"!=typeof window&&nt(a.before)},[a,function(t){t.altKey||t.shiftKey||t.metaKey||("ArrowLeft"===t.key&&a.before?(S.set("right"),st(a.before)):"ArrowRight"===t.key&&a.after&&(S.set("left"),st(a.after)))},s,()=>{S.set("right")},()=>{S.set("left")},n]}export default class extends t{constructor(t){super(),e(this,t,wt,ht,r,{project:0})}}export{dt as load};
