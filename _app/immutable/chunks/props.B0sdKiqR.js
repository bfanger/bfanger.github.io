import{W as B,ak as ae,al as ne,O as P,am as ie,Z as m,an as M,a0 as h,g as E,y as Y,ao as se,a5 as fe,k as ue,i as X,b as de,ap as le,h as S,aq as p,Q as K,o as N,e as q,q as I,J as ee,ar as U,as as $,j as _e,K as oe,at as ve,au as ce,C as he,l as ye,av as ge,v as be,a as we,p as me,X as Ee,aw as Pe,N as re,n as V,ax as Re,ay as Ie,az as Te,S as W,aA as Oe,aB as Ae,aj as k,aC as Ne,aD as Se,aE as De,a7 as Le,d as Ce,aF as Fe}from"./runtime.CfPJxXuJ.js";import{h as je,r as G,j as F,k as Be,l as Me}from"./disclose-version.DoKEDiLq.js";import{s as Ye}from"./utils.CGejq65n.js";function A(e,t=null,u){if(typeof e!="object"||e===null||B in e)return e;const l=fe(e);if(l!==ae&&l!==ne)return e;var f=new Map,_=ue(e),v=P(0);_&&f.set("length",P(e.length));var g;return new Proxy(e,{defineProperty(d,r,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&ie();var n=f.get(r);return n===void 0?(n=P(i.value),f.set(r,n)):m(n,A(i.value,g)),!0},deleteProperty(d,r){var i=f.get(r);if(i===void 0)r in d&&f.set(r,P(h));else{if(_&&typeof r=="string"){var n=f.get("length"),a=Number(r);Number.isInteger(a)&&a<n.v&&m(n,a)}m(i,h),J(v)}return!0},get(d,r,i){var o;if(r===B)return e;var n=f.get(r),a=r in d;if(n===void 0&&(!a||(o=M(d,r))!=null&&o.writable)&&(n=P(A(a?d[r]:h,g)),f.set(r,n)),n!==void 0){var s=E(n);return s===h?void 0:s}return Reflect.get(d,r,i)},getOwnPropertyDescriptor(d,r){var i=Reflect.getOwnPropertyDescriptor(d,r);if(i&&"value"in i){var n=f.get(r);n&&(i.value=E(n))}else if(i===void 0){var a=f.get(r),s=a==null?void 0:a.v;if(a!==void 0&&s!==h)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return i},has(d,r){var s;if(r===B)return!0;var i=f.get(r),n=i!==void 0&&i.v!==h||Reflect.has(d,r);if(i!==void 0||Y!==null&&(!n||(s=M(d,r))!=null&&s.writable)){i===void 0&&(i=P(n?A(d[r],g):h),f.set(r,i));var a=E(i);if(a===h)return!1}return n},set(d,r,i,n){var D;var a=f.get(r),s=r in d;if(_&&r==="length")for(var o=i;o<a.v;o+=1){var b=f.get(o+"");b!==void 0?m(b,h):o in d&&(b=P(h),f.set(o+"",b))}a===void 0?(!s||(D=M(d,r))!=null&&D.writable)&&(a=P(void 0),m(a,A(i,g)),f.set(r,a)):(s=a.v!==h,m(a,A(i,g)));var w=Reflect.getOwnPropertyDescriptor(d,r);if(w!=null&&w.set&&w.set.call(n,i),!s){if(_&&typeof r=="string"){var C=f.get("length"),R=Number(r);Number.isInteger(R)&&R>=C.v&&m(C,R+1)}J(v)}return!0},ownKeys(d){E(v);var r=Reflect.ownKeys(d).filter(a=>{var s=f.get(a);return s===void 0||s.v!==h});for(var[i,n]of f)n.v!==h&&!(i in d)&&r.push(i);return r},setPrototypeOf(){se()}})}function J(e,t=1){m(e,e.v+t)}let y;function qe(){y=void 0}function ze(e){let t=null,u=S;var l;if(S){for(t=I,y===void 0&&(y=ee(document.head));y!==null&&(y.nodeType!==8||y.data!==p);)y=K(y);y===null?N(!1):y=q(K(y))}S||(l=document.head.appendChild(X()));try{de(()=>e(l),le)}finally{u&&(N(!0),y=I,q(t))}}let Q=!0;function Ve(e,t){var u=t==null?"":typeof t=="object"?t+"":t;u!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=u,e.nodeValue=u==null?"":u+"")}function xe(e,t){return te(e,t)}function We(e,t){U(),t.intro=t.intro??!1;const u=t.target,l=S,f=I;try{for(var _=ee(u);_&&(_.nodeType!==8||_.data!==p);)_=K(_);if(!_)throw $;N(!0),q(_),_e();const v=te(e,{...t,anchor:_});if(I===null||I.nodeType!==8||I.data!==oe)throw ve(),$;return N(!1),v}catch(v){if(v===$)return t.recover===!1&&ce(),U(),he(u),N(!1),xe(e,t);throw v}finally{N(l),q(f),qe()}}const O=new Map;function te(e,{target:t,anchor:u,props:l={},events:f,context:_,intro:v=!0}){U();var g=new Set,d=n=>{for(var a=0;a<n.length;a++){var s=n[a];if(!g.has(s)){g.add(s);var o=Me(s);t.addEventListener(s,F,{passive:o});var b=O.get(s);b===void 0?(document.addEventListener(s,F,{passive:o}),O.set(s,1)):O.set(s,b+1)}}};d(ye(je)),G.add(d);var r=void 0,i=ge(()=>{var n=u??t.appendChild(X());return be(()=>{if(_){we({});var a=Ee;a.c=_}f&&(l.$$events=f),S&&Be(n,null),Q=v,r=e(n,l)||{},Q=!0,S&&(Y.nodes_end=I),_&&me()}),()=>{var o;for(var a of g){t.removeEventListener(a,F);var s=O.get(a);--s===0?(document.removeEventListener(a,F),O.delete(a)):O.set(a,s)}G.delete(d),n!==u&&((o=n.parentNode)==null||o.removeChild(n))}});return Z.set(r,i),r}let Z=new WeakMap;function ke(e,t){const u=Z.get(e);return u?(Z.delete(e),u(t)):Promise.resolve()}let j=!1;function Ge(e,t,u){const l=u[t]??(u[t]={store:null,source:re(void 0),unsubscribe:V});if(l.store!==e)if(l.unsubscribe(),l.store=e??null,e==null)l.source.v=void 0,l.unsubscribe=V;else{var f=!0;l.unsubscribe=Ye(e,_=>{f?l.source.v=_:m(l.source,_)}),f=!1}return E(l.source)}function Je(e,t){return e.set(t),t}function Qe(){const e={};return Pe(()=>{for(var t in e)e[t].unsubscribe()}),e}function He(e){var t=j;try{return j=!1,[e(),j]}finally{j=t}}function $e(e){for(var t=Y,u=Y;t!==null&&!(t.f&(Oe|Ae));)t=t.parent;try{return k(t),e()}finally{k(u)}}function Xe(e,t,u,l){var z;var f=(u&Ne)!==0,_=!Se,v=(u&De)!==0,g=(u&Fe)!==0,d=!1,r;v?[r,d]=He(()=>e[t]):r=e[t];var i=B in e||Le in e,n=((z=M(e,t))==null?void 0:z.set)??(i&&v&&t in e?c=>e[t]=c:void 0),a=l,s=!0,o=!1,b=()=>(o=!0,s&&(s=!1,g?a=W(l):a=l),a);r===void 0&&l!==void 0&&(n&&_&&Re(),r=b(),n&&n(r));var w;if(w=()=>{var c=e[t];return c===void 0?b():(s=!0,o=!1,c)},!(u&Ie))return w;if(n){var C=e.$$legacy;return function(c,T){return arguments.length>0?((!T||C||d)&&n(T?w():c),c):w()}}var R=!1,D=!1,x=re(r),L=$e(()=>Ce(()=>{var c=w(),T=E(x);return R?(R=!1,D=!0,T):(D=!1,x.v=c)}));return f||(L.equals=Te),function(c,T){if(arguments.length>0){const H=T?E(L):v?A(c):c;return L.equals(H)||(R=!0,m(x,H),o&&a!==void 0&&(a=H),W(()=>E(L))),c}return E(L)}}export{Ge as a,Ve as b,We as c,A as d,Q as e,Je as f,ze as h,xe as m,Xe as p,Qe as s,ke as u};
