const vn=!0;var pn=Array.isArray,hn=Array.from,dn=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Lt=Object.getOwnPropertyDescriptors,En=Object.prototype,yn=Array.prototype,Pt=Object.getPrototypeOf;function Tn(t){return typeof t=="function"}const wn=()=>{};function An(t){return typeof(t==null?void 0:t.then)=="function"}function Mt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,lt=4,M=8,ut=16,T=32,K=64,k=128,B=256,E=512,q=1024,$=2048,x=4096,H=8192,qt=16384,it=32768,Ht=1<<18,ft=1<<19,et=Symbol("$state"),mn=Symbol("legacy props"),In=Symbol("");function Yt(t){return t===this.v}function jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function On(t,n){return t!==n}function Sn(t){return!jt(t,this.v)}function Bt(t){throw new Error("effect_in_teardown")}function Ut(){throw new Error("effect_in_unowned_derived")}function Vt(t){throw new Error("effect_orphan")}function Gt(){throw new Error("effect_update_depth_exceeded")}function gn(){throw new Error("hydration_failed")}function Rn(t){throw new Error("props_invalid_value")}function Nn(){throw new Error("state_descriptors_fixed")}function Dn(){throw new Error("state_prototype_fixed")}function Kt(){throw new Error("state_unsafe_local_read")}function xn(){throw new Error("state_unsafe_mutation")}let $t=!1;const kn=1,Cn=2,bn=4,Fn=8,Ln=16,Pn=1,Mn=4,qn=8,Hn=16,Yn=1,jn=2,Bn=4,Un=1,Vn=2,Wt="[",Zt="[!",zt="]",_t={},Gn=Symbol();function ct(t){console.warn("hydration_mismatch")}let I=!1;function Kn(t){I=t}let y;function F(t){if(t===null)throw ct(),_t;return y=t}function $n(){return F(O(y))}function Wn(t){if(I){if(O(y)!==null)throw ct(),_t;y=t}}function Zn(t=1){if(I){for(var n=t,r=y;n--;)r=O(r);y=r}}function zn(){for(var t=0,n=y;;){if(n.nodeType===8){var r=n.data;if(r===zt){if(t===0)return n;t-=1}else(r===Wt||r===Zt)&&(t+=1)}var e=O(n);n.remove(),n=e}}var st,Jt,vt,pt;function Jn(){if(st===void 0){st=window,Jt=document;var t=Element.prototype,n=Node.prototype;vt=rt(n,"firstChild").get,pt=rt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Z(t=""){return document.createTextNode(t)}function z(t){return vt.call(t)}function O(t){return pt.call(t)}function Qn(t,n){if(!I)return z(t);var r=z(y);if(r===null)r=y.appendChild(Z());else if(n&&r.nodeType!==3){var e=Z();return r==null||r.before(e),F(e),e}return F(r),r}function Xn(t,n){if(!I){var r=z(t);return r instanceof Comment&&r.data===""?O(r):r}return y}function tr(t,n=1,r=!1){let e=I?y:t;for(var s;n--;)s=e,e=O(e);if(!I)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var o=Z();return e===null?s==null||s.after(o):e.before(o),F(o),o}return F(e),e}function nr(t){t.textContent=""}function rr(t){var n=w|q;u===null?n|=k:u.f|=ft;var r=l!==null&&l.f&w?l:null;const e={children:null,ctx:h,deps:null,equals:Yt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function ht(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?X(e):b(e)}}}function Qt(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function dt(t){var n,r=u;G(Qt(t));try{ht(t),n=Dt(t)}finally{G(r)}return n}function Et(t){var n=dt(t),r=(S||t.f&k)&&t.deps!==null?$:E;A(t,r),t.equals(n)||(t.v=n,t.version=on())}function X(t){ht(t),P(t,0),A(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function yt(t){u===null&&l===null&&Vt(),l!==null&&l.f&k&&Ut(),tt&&Bt()}function Xt(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function C(t,n,r,e=!0){var s=(t&K)!==0,a=u,o={ctx:h,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|q,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=g;try{at(!0),W(o),o.f|=qt}catch(f){throw b(o),f}finally{at(i)}}else n!==null&&Ct(o);var d=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ft)===0;if(!d&&!s&&e&&(a!==null&&Xt(o,a),l!==null&&l.f&w)){var v=l;(v.children??(v.children=[])).push(o)}return o}function er(t){const n=C(M,null,!1);return A(n,E),n.teardown=t,n}function sr(t){yt();var n=u!==null&&(u.f&T)!==0&&h!==null&&!h.m;if(n){var r=h;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:l})}else{var e=Tt(t);return e}}function ar(t){return yt(),tn(t)}function or(t){const n=C(K,t,!0);return()=>{b(n)}}function Tt(t){return C(lt,t,!1)}function tn(t){return C(M,t,!0)}function lr(t){return nn(t)}function nn(t,n=0){return C(M|ut|n,t,!0)}function ur(t,n=!0){return C(M|T,t,!0,n)}function wt(t){var n=t.teardown;if(n!==null){const r=tt,e=l;ot(!0),V(null);try{n.call(null)}finally{ot(r),V(e)}}}function At(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)X(n[r])}}function mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function rn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&Ht)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}mt(t,n&&!r),At(t),P(t,0),A(t,H);var o=t.transitions;if(o!==null)for(const d of o)d.stop();wt(t);var i=t.parent;i!==null&&i.first!==null&&It(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function It(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ir(t,n){var r=[];Ot(t,r,!0),en(r,()=>{b(t),n&&n()})}function en(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ot(t,n,r){if(!(t.f&x)){if(t.f^=x,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&it)!==0||(e.f&T)!==0;Ot(e,n,a?r:!1),e=s}}}function fr(t){St(t,!0)}function St(t,n){if(t.f&x){Y(t)&&W(t),t.f^=x;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&it)!==0||(r.f&T)!==0;St(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let U=!1,J=[];function gt(){U=!1;const t=J.slice();J=[],Mt(t)}function _r(t){U||(U=!0,queueMicrotask(gt)),J.push(t)}function sn(){U&&gt()}const Rt=0,an=1;let j=Rt,L=!1,g=!1,tt=!1;function at(t){g=t}function ot(t){tt=t}let m=[],R=0;let l=null;function V(t){l=t}let u=null;function G(t){u=t}let N=null;function cr(t){N=t}let c=null,p=0,D=null;function vr(t){D=t}let Nt=0,S=!1,h=null;function pr(t){h=t}function on(){return++Nt}function hr(){return!$t}function Y(t){var o,i;var n=t.f;if(n&q)return!0;if(n&$){var r=t.deps,e=(n&k)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&Et(a),e&&u!==null&&!S&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||A(t,E)}return!1}function ln(t,n,r){throw t}function Dt(t){var nt;var n=c,r=p,e=D,s=l,a=S,o=N,i=h,d=t.f;c=null,p=0,D=null,l=d&(T|K)?null:t,S=!g&&(d&k)!==0,N=null,h=t.ctx;try{var v=(0,t.fn)(),f=t.deps;if(c!==null){var _;if(P(t,p),f!==null&&p>0)for(f.length=p+c.length,_=0;_<c.length;_++)f[p+_]=c[_];else t.deps=f=c;if(!S)for(_=p;_<f.length;_++)((nt=f[_]).reactions??(nt.reactions=[])).push(t)}else f!==null&&p<f.length&&(P(t,p),f.length=p);return v}finally{c=n,p=r,D=e,l=s,S=a,N=o,h=i}}function un(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(c===null||!c.includes(n))&&(A(n,$),n.f&(k|B)||(n.f^=B),P(n,0))}function P(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)un(t,r[e])}function W(t){var n=t.f;if(!(n&H)){A(t,E);var r=u;u=t;try{n&ut?rn(t):mt(t),At(t),wt(t);var e=Dt(t);t.teardown=typeof e=="function"?e:null,t.version=Nt}catch(s){ln(s)}finally{u=r}}}function xt(){R>1e3&&(R=0,Gt()),R++}function kt(t){var n=t.length;if(n!==0){xt();var r=g;g=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&E||(s.f^=E);var a=[];bt(s,a),fn(a)}}finally{g=r}}}function fn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|x))&&Y(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?It(e):e.fn=null))}}function _n(){if(L=!1,R>1001)return;const t=m;m=[],kt(t),L||(R=0)}function Ct(t){j===Rt&&(L||(L=!0,queueMicrotask(_n)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|T)){if(!(r&E))return;n.f^=E}}m.push(n)}function bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&T)!==0,o=a&&(s&E)!==0;if(!o&&!(s&x))if(s&M){a?r.f^=E:Y(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&lt&&e.push(r);var d=r.next;if(d===null){let _=r.parent;for(;_!==null;){if(t===_)break t;var v=_.next;if(v!==null){r=v;continue t}_=_.parent}}r=d}for(var f=0;f<e.length;f++)i=e[f],n.push(i),bt(i,n)}function Ft(t){var n=j,r=m;try{xt();const s=[];j=an,m=s,L=!1,kt(r);var e=t==null?void 0:t();return sn(),(m.length>0||s.length>0)&&Ft(),R=0,e}finally{j=n,m=r}}async function dr(){await Promise.resolve(),Ft()}function Er(t){var f;var n=t.f,r=(n&w)!==0;if(r&&n&H){var e=dt(t);return X(t),e}if(l!==null){N!==null&&N.includes(t)&&Kt();var s=l.deps;c===null&&s!==null&&s[p]===t?p++:c===null?c=[t]:c.push(t),D!==null&&u!==null&&u.f&E&&!(u.f&T)&&D.includes(t)&&(A(u,q),Ct(u))}else if(r&&t.deps===null)for(var a=t,o=a.parent,i=a;o!==null;)if(o.f&w){var d=o;i=d,o=d.parent}else{var v=o;(f=v.deriveds)!=null&&f.includes(i)||(v.deriveds??(v.deriveds=[])).push(i);break}return r&&(a=t,Y(a)&&Et(a)),t.v}function yr(t){const n=l;try{return l=null,t()}finally{l=n}}const cn=~(q|$|E);function A(t,n){t.f=t.f&cn|n}function Tr(t,n=!1,r){h={p:h,c:null,e:null,m:!1,s:t,x:null,l:null}}function wr(t){const n=h;if(n!==null){const o=n.e;if(o!==null){var r=u,e=l;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];G(a.effect),V(a.reaction),Tt(a.fn)}}finally{G(r),V(e)}}h=n.p,n.m=!0}return{}}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(et in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&et in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Pt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Lt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Jt as $,Ot as A,nr as B,en as C,b as D,kn as E,bn as F,z as G,Zt as H,x as I,zt as J,l as K,Fn as L,Ln as M,O as N,jt as O,yr as P,it as Q,Tt as R,tn as S,et as T,h as U,sr as V,In as W,Pt as X,Lt as Y,vn as Z,Gn as _,Tr as a,On as a0,st as a1,Zn as a2,mn as a3,Ft as a4,dn as a5,ar as a6,dr as a7,ut as a8,qt as a9,qn as aA,Hn as aB,on as aC,q as aD,A as aE,E as aF,k as aG,w as aH,Ct as aI,Yt as aJ,hr as aK,N as aL,xn as aM,$ as aN,cr as aO,c as aP,D as aQ,vr as aR,Un as aS,Vn as aT,An as aU,pr as aV,Ar as aW,Tn as aa,Yn as ab,jn as ac,Bn as ad,V as ae,G as af,En as ag,yn as ah,Nn as ai,rt as aj,Dn as ak,Ht as al,Wt as am,Jn as an,_t as ao,ct as ap,gn as aq,or as ar,er as as,Rn as at,Mn as au,Sn as av,T as aw,K as ax,Pn as ay,$t as az,nn as b,Qn as c,rr as d,F as e,Xn as f,Er as g,I as h,Z as i,$n as j,pn as k,hn as l,zn as m,wn as n,Kn as o,wr as p,y as q,Wn as r,tr as s,lr as t,fr as u,ur as v,ir as w,_r as x,u as y,Cn as z};
