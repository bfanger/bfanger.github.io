import{S as D,i as O,s as A,k as R,l as V,m as T,h as k,n as U,p as P,b as w,C as ie,A as y,o as ce,G as ae,B as Y,N as ue,D as q,E as F,F as G,f as m,t as g,I as le,H as fe,O as _e,v,a as L,w as j,c as Q,x as S,K as de,P as me,g as M,Q as pe,d as N,y as z,e as E,R as he,T as J,U as ge}from"../../../chunks/index-78cda96d.js";import{p as $e}from"../../../chunks/stores-6e739f43.js";import{w as re}from"../../../chunks/index-287c1795.js";import{P as K}from"../../../chunks/ProjectCard-3b2125a6.js";const{window:be}=ae;function ke(l){let t,n=`${l[0]*100}vh`,e,r;return{c(){t=R("div"),this.h()},l(s){t=V(s,"DIV",{class:!0}),T(t).forEach(k),this.h()},h(){U(t,"class","scroller"),P(t,"height",n,!1)},m(s,o){w(s,t,o),e||(r=ie(be,"scroll",l[1]),e=!0)},p(s,[o]){o&1&&n!==(n=`${s[0]*100}vh`)&&P(t,"height",n,!1)},i:y,o:y,d(s){s&&k(t),e=!1,r()}}}function ye(l,t,n){let e,{max:r}=t,{value:s}=t;s!==0&&ce(()=>{window.scrollTo(0,document.body.scrollHeight*(s/e))});function o(){const i=window.scrollY/(document.body.offsetHeight-window.innerHeight);n(2,s=i*e)}return l.$$set=i=>{"max"in i&&n(3,r=i.max),"value"in i&&n(2,s=i.value)},l.$$.update=()=>{l.$$.dirty&8&&n(0,e=r)},[e,o,s,r]}class we extends D{constructor(t){super(),O(this,t,ye,ke,A,{max:3,value:2})}}function ve(l,t){let n=W(t),e,r,s=!0;function o({box:c}){e=new ResizeObserver(([p])=>{let h;c==="border-box"?h=p.borderBoxSize:c==="device-pixel-content-box"?h=p.devicePixelContentBoxSize:h=p.contentBoxSize,n.set(Array.isArray(h)?h[0]:h),s=!1}),e.observe(l,{box:c}),r=n.subscribe(p=>{s||l.dispatchEvent(new CustomEvent("has-resized",{detail:p}))})}function i(){e.disconnect(),r()}return o(X(t)),{update(c){s=!0,n=W(c),i(),o(X(c))},destroy(){i()}}}function W(l){if(typeof l=="object"){if(l.subscribe)return l;if(l.store)return l.store}return re({inlineSize:0,blockSize:0})}function X(l){if(typeof l>"u"||l.subscribe)return{};const{store:t,...n}=l;return n}function je(l){let t,n,e,r;const s=l[4].default,o=Y(s,l,l[3],null);return{c(){t=R("div"),o&&o.c(),this.h()},l(i){t=V(i,"DIV",{class:!0});var c=T(t);o&&o.l(c),c.forEach(k),this.h()},h(){U(t,"class","item svelte-6ycsi0"),P(t,"transform",Z(l[0],l[1].blockSize),!1)},m(i,c){w(i,t,c),o&&o.m(t,null),n=!0,e||(r=ue(ve.call(null,t,l[2])),e=!0)},p(i,[c]){o&&o.p&&(!n||c&8)&&q(o,s,i,i[3],n?G(s,i[3],c,null):F(i[3]),null),c&3&&P(t,"transform",Z(i[0],i[1].blockSize),!1)},i(i){n||(m(o,i),n=!0)},o(i){g(o,i),n=!1},d(i){i&&k(t),o&&o.d(i),e=!1,r()}}}const Se=16;function ze(l,t){const n=window.innerHeight,e=n/2;if(l>1)return-t;if(l<-1)return n;if(l>.5){const s=(l-.5)*2;return-t+e-e*s}if(l<-.5){const s=(l+1.5)*2-1;return n-e*s}const r=l+.5;return e-t*r}function Z(l,t){if(t===0)return"";let n=1;if(l>.75&&l<1){const e=(l-.75)*4;n=1-e*e*.2}if(l<-.5&&l>-1){const e=(l+.5)*-2;n=1-e*e*.3}return`translateY(${ze(l,t+Se)}px) scale(${n})`}function Ie(l,t,n){let e,{$$slots:r={},$$scope:s}=t,{scroll:o}=t;const i=re({inlineSize:0,blockSize:0});return le(l,i,c=>n(1,e=c)),l.$$set=c=>{"scroll"in c&&n(0,o=c.scroll),"$$scope"in c&&n(3,s=c.$$scope)},[o,e,i,s,r]}class ne extends D{constructor(t){super(),O(this,t,Ie,je,A,{scroll:0})}}function x(l,t,n){const e=l.slice();return e[16]=t[n],e}function Ce(l){return{c:y,l:y,m:y,p:y,i:y,o:y,d:y}}function Ee(l){let t,n,e,r;const s=[Be,Pe],o=[];function i(c,p){return c[19]?0:1}return t=i(l),n=o[t]=s[t](l),{c(){n.c(),e=E()},l(c){n.l(c),e=E()},m(c,p){o[t].m(c,p),w(c,e,p),r=!0},p(c,p){let h=t;t=i(c),t===h?o[t].p(c,p):(M(),g(o[h],1,1,()=>{o[h]=null}),N(),n=o[t],n?n.p(c,p):(n=o[t]=s[t](c),n.c()),m(n,1),n.m(e.parentNode,e))},i(c){r||(m(n),r=!0)},o(c){g(n),r=!1},d(c){o[t].d(c),c&&k(e)}}}function Pe(l){let t,n;return t=new K({props:{project:B(l[0][l[16]])}}),{c(){v(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const s={};r&17&&(s.project=B(e[0][e[16]])),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Be(l){let t,n;return t=new K({props:{project:l[19]}}),{c(){v(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const s={};r&24&&(s.project=e[19]),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function De(l){let t,n;return t=new K({props:{project:B(l[0][l[16]])}}),{c(){v(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const s={};r&17&&(s.project=B(e[0][e[16]])),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Oe(l){let t,n,e,r={ctx:l,current:null,token:null,hasCatch:!1,pending:De,then:Ee,catch:Ce,value:19,blocks:[,,,]};return J(n=l[3][l[16]],r),{c(){t=E(),r.block.c()},l(s){t=E(),r.block.l(s)},m(s,o){w(s,t,o),r.block.m(s,r.anchor=o),r.mount=()=>t.parentNode,r.anchor=t,e=!0},p(s,o){l=s,r.ctx=l,o&24&&n!==(n=l[3][l[16]])&&J(n,r)||ge(r,l,o)},i(s){e||(m(r.block),e=!0)},o(s){for(let o=0;o<3;o+=1){const i=r.blocks[o];g(i)}e=!1},d(s){s&&k(t),r.block.d(s),r.token=null,r=null}}}function ee(l,t){let n,e,r;return e=new ne({props:{scroll:t[1]-t[16],$$slots:{default:[Oe]},$$scope:{ctx:t}}}),{key:l,first:null,c(){n=E(),v(e.$$.fragment),this.h()},l(s){n=E(),j(e.$$.fragment,s),this.h()},h(){this.first=n},m(s,o){w(s,n,o),S(e,s,o),r=!0},p(s,o){t=s;const i={};o&18&&(i.scroll=t[1]-t[16]),o&2073&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(s){r||(m(e.$$.fragment,s),r=!0)},o(s){g(e.$$.fragment,s),r=!1},d(s){s&&k(n),z(e,s)}}}function te(l){let t,n;return t=new ne({props:{scroll:l[1]-l[5],$$slots:{default:[Ae]},$$scope:{ctx:l}}}),{c(){v(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,r){const s={};r&2&&(s.scroll=e[1]-e[5]),r&2048&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Ae(l){let t;const n=l[9].default,e=Y(n,l,l[11],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,s){e&&e.m(r,s),t=!0},p(r,s){e&&e.p&&(!t||s&2048)&&q(e,n,r,r[11],t?G(n,r[11],s,null):F(r[11]),null)},i(r){t||(m(e,r),t=!0)},o(r){g(e,r),t=!1},d(r){e&&e.d(r)}}}function He(l){let t,n,e,r,s=[],o=new Map,i,c;function p(a){l[10](a)}let h={max:l[0].length-1};l[1]!==void 0&&(h.value=l[1]),t=new we({props:h}),fe.push(()=>_e(t,"value",p));let $=l[4];const I=a=>a[16];for(let a=0;a<$.length;a+=1){let u=x(l,$,a),d=I(u);o.set(d,s[a]=ee(d,u))}let f=l[5]>l[2]-2&&l[5]<l[2]+2&&te(l);return{c(){v(t.$$.fragment),e=L(),r=R("div");for(let a=0;a<s.length;a+=1)s[a].c();i=L(),f&&f.c(),this.h()},l(a){j(t.$$.fragment,a),e=Q(a),r=V(a,"DIV",{class:!0});var u=T(r);for(let d=0;d<s.length;d+=1)s[d].l(u);i=Q(u),f&&f.l(u),u.forEach(k),this.h()},h(){U(r,"class","viewport svelte-1nlphxj")},m(a,u){S(t,a,u),w(a,e,u),w(a,r,u);for(let d=0;d<s.length;d+=1)s[d].m(r,null);de(r,i),f&&f.m(r,null),c=!0},p(a,[u]){const d={};u&1&&(d.max=a[0].length-1),!n&&u&2&&(n=!0,d.value=a[1],me(()=>n=!1)),t.$set(d),u&27&&($=a[4],M(),s=pe(s,u,I,1,a,$,o,r,he,ee,i,x),N()),a[5]>a[2]-2&&a[5]<a[2]+2?f?(f.p(a,u),u&4&&m(f,1)):(f=te(a),f.c(),m(f,1),f.m(r,null)):f&&(M(),g(f,1,1,()=>{f=null}),N())},i(a){if(!c){m(t.$$.fragment,a);for(let u=0;u<$.length;u+=1)m(s[u]);m(f),c=!0}},o(a){g(t.$$.fragment,a);for(let u=0;u<s.length;u+=1)g(s[u]);g(f),c=!1},d(a){z(t,a),a&&k(e),a&&k(r);for(let u=0;u<s.length;u+=1)s[u].d();f&&f.d()}}}function B(l){return{content:"",released:l.released,slug:l.slug,title:l.title}}function Me(l,t,n){let e,r,s,o,i,c;le(l,$e,_=>n(12,c=_));let{$$slots:p={},$$scope:h}=t,{teasers:$}=t;const I=u(c.params.project),f={};let a=I;function u(_){return $.findIndex(b=>b.slug===_)}function d(_){const b=u(_);return f[b]||n(3,f[b]=fetch(`/projects/${_}.json`).then(C=>C.json()),f),f[b]}function se(_){const{slug:b}=$[_],C=`/scrollytelling/${b}`;window.location.pathname!==C&&window.history.pushState({scroll:_},"",`/scrollytelling/${b}`)}function oe(_){a=_,n(1,a)}return l.$$set=_=>{"teasers"in _&&n(0,$=_.teasers),"$$scope"in _&&n(11,h=_.$$scope)},l.$$.update=()=>{var _,b,C;l.$$.dirty&2&&n(2,e=Math.round(a)),l.$$.dirty&5&&n(8,r=(_=$[e-1])==null?void 0:_.slug),l.$$.dirty&5&&n(7,s=(b=$[e])==null?void 0:b.slug),l.$$.dirty&5&&n(6,o=(C=$[e+1])==null?void 0:C.slug),l.$$.dirty&256&&r&&d(r),l.$$.dirty&128&&s&&d(s),l.$$.dirty&64&&o&&d(o),l.$$.dirty&5&&n(4,i=[e-1,e,e+1].filter(H=>H>=0&&H<$.length&&H!==I)),l.$$.dirty&4&&se(e)},[$,a,e,f,i,I,o,s,r,p,oe,h]}class Ne extends D{constructor(t){super(),O(this,t,Me,He,A,{teasers:0})}}function Re(l){let t;const n=l[1].default,e=Y(n,l,l[2],null);return{c(){e&&e.c()},l(r){e&&e.l(r)},m(r,s){e&&e.m(r,s),t=!0},p(r,s){e&&e.p&&(!t||s&4)&&q(e,n,r,r[2],t?G(n,r[2],s,null):F(r[2]),null)},i(r){t||(m(e,r),t=!0)},o(r){g(e,r),t=!1},d(r){e&&e.d(r)}}}function Ve(l){let t,n;return t=new Ne({props:{teasers:l[0].teasers,$$slots:{default:[Re]},$$scope:{ctx:l}}}),{c(){v(t.$$.fragment)},l(e){j(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p(e,[r]){const s={};r&1&&(s.teasers=e[0].teasers),r&4&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(m(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function Te(l,t,n){let{$$slots:e={},$$scope:r}=t,{data:s}=t;return l.$$set=o=>{"data"in o&&n(0,s=o.data),"$$scope"in o&&n(2,r=o.$$scope)},[s,e,r]}class Ge extends D{constructor(t){super(),O(this,t,Te,Ve,A,{data:0})}}export{Ge as default};
