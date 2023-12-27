import{s as vt,p as yt,c as $t,u as bt,g as mt,d as Tt}from"../chunks/scheduler.6qIGuNQq.js";import{S as At,i as wt,s as x,r as J,g as O,G as Ot,f as _,c as j,u as W,h as P,B as Qe,k as V,a as v,v as Z,d as B,t as U,w as Q,j as L,H as Pt,I as St,J as Ve,m as ge,n as de,z as se,x as Et,o as ke}from"../chunks/index.SKX3nl_2.js";import{e as k}from"../chunks/each.5Ky8mcUv.js";import{N as Ct,c as Ae,a as It,b as xt}from"../chunks/NavButton.bv7Mmj5f.js";import{P as jt}from"../chunks/Page.6FR7-GJr.js";import{C as Mt}from"../chunks/Card.84xI4HGm.js";import{D as Rt}from"../chunks/Disclaimer._MuQp-9b.js";var Dt=typeof global=="object"&&global&&global.Object===Object&&global;const et=Dt;var Lt=typeof self=="object"&&self&&self.Object===Object&&self,Ft=et||Lt||Function("return this")();const m=Ft;var Nt=m.Symbol;const S=Nt;var tt=Object.prototype,Gt=tt.hasOwnProperty,Bt=tt.toString,G=S?S.toStringTag:void 0;function Ut(e){var t=Gt.call(e,G),r=e[G];try{e[G]=void 0;var n=!0}catch{}var a=Bt.call(e);return n&&(t?e[G]=r:delete e[G]),a}var Ht=Object.prototype,zt=Ht.toString;function Kt(e){return zt.call(e)}var qt="[object Null]",Xt="[object Undefined]",we=S?S.toStringTag:void 0;function N(e){return e==null?e===void 0?Xt:qt:we&&we in Object(e)?Ut(e):Kt(e)}function F(e){return e!=null&&typeof e=="object"}var Yt="[object Symbol]";function _e(e){return typeof e=="symbol"||F(e)&&N(e)==Yt}function Jt(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var Wt=Array.isArray;const $=Wt;var Zt=1/0,Oe=S?S.prototype:void 0,Pe=Oe?Oe.toString:void 0;function rt(e){if(typeof e=="string")return e;if($(e))return Jt(e,rt)+"";if(_e(e))return Pe?Pe.call(e):"";var t=e+"";return t=="0"&&1/e==-Zt?"-0":t}function he(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Qt(e){return e}var Vt="[object AsyncFunction]",kt="[object Function]",er="[object GeneratorFunction]",tr="[object Proxy]";function nt(e){if(!he(e))return!1;var t=N(e);return t==kt||t==er||t==Vt||t==tr}var rr=m["__core-js_shared__"];const ae=rr;var Se=function(){var e=/[^.]+$/.exec(ae&&ae.keys&&ae.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function nr(e){return!!Se&&Se in e}var ar=Function.prototype,ir=ar.toString;function R(e){if(e!=null){try{return ir.call(e)}catch{}try{return e+""}catch{}}return""}var or=/[\\^$.*+?()[\]{}|]/g,sr=/^\[object .+?Constructor\]$/,fr=Function.prototype,ur=Object.prototype,lr=fr.toString,cr=ur.hasOwnProperty,pr=RegExp("^"+lr.call(cr).replace(or,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function gr(e){if(!he(e)||nr(e))return!1;var t=nt(e)?pr:sr;return t.test(R(e))}function dr(e,t){return e?.[t]}function D(e,t){var r=dr(e,t);return gr(r)?r:void 0}var _r=D(m,"WeakMap");const fe=_r;var hr=function(){try{var e=D(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Ee=hr;var vr=9007199254740991,yr=/^(?:0|[1-9]\d*)$/;function at(e,t){var r=typeof e;return t=t??vr,!!t&&(r=="number"||r!="symbol"&&yr.test(e))&&e>-1&&e%1==0&&e<t}function $r(e,t,r){t=="__proto__"&&Ee?Ee(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function it(e,t){return e===t||e!==e&&t!==t}var br=9007199254740991;function ve(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=br}function ot(e){return e!=null&&ve(e.length)&&!nt(e)}var mr=Object.prototype;function Tr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||mr;return e===r}function Ar(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var wr="[object Arguments]";function Ce(e){return F(e)&&N(e)==wr}var st=Object.prototype,Or=st.hasOwnProperty,Pr=st.propertyIsEnumerable,Sr=Ce(function(){return arguments}())?Ce:function(e){return F(e)&&Or.call(e,"callee")&&!Pr.call(e,"callee")};const ft=Sr;function Er(){return!1}var ut=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ie=ut&&typeof module=="object"&&module&&!module.nodeType&&module,Cr=Ie&&Ie.exports===ut,xe=Cr?m.Buffer:void 0,Ir=xe?xe.isBuffer:void 0,xr=Ir||Er;const ue=xr;var jr="[object Arguments]",Mr="[object Array]",Rr="[object Boolean]",Dr="[object Date]",Lr="[object Error]",Fr="[object Function]",Nr="[object Map]",Gr="[object Number]",Br="[object Object]",Ur="[object RegExp]",Hr="[object Set]",zr="[object String]",Kr="[object WeakMap]",qr="[object ArrayBuffer]",Xr="[object DataView]",Yr="[object Float32Array]",Jr="[object Float64Array]",Wr="[object Int8Array]",Zr="[object Int16Array]",Qr="[object Int32Array]",Vr="[object Uint8Array]",kr="[object Uint8ClampedArray]",en="[object Uint16Array]",tn="[object Uint32Array]",d={};d[Yr]=d[Jr]=d[Wr]=d[Zr]=d[Qr]=d[Vr]=d[kr]=d[en]=d[tn]=!0;d[jr]=d[Mr]=d[qr]=d[Rr]=d[Xr]=d[Dr]=d[Lr]=d[Fr]=d[Nr]=d[Gr]=d[Br]=d[Ur]=d[Hr]=d[zr]=d[Kr]=!1;function rn(e){return F(e)&&ve(e.length)&&!!d[N(e)]}function nn(e){return function(t){return e(t)}}var lt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,H=lt&&typeof module=="object"&&module&&!module.nodeType&&module,an=H&&H.exports===lt,ie=an&&et.process,on=function(){try{var e=H&&H.require&&H.require("util").types;return e||ie&&ie.binding&&ie.binding("util")}catch{}}();const je=on;var Me=je&&je.isTypedArray,sn=Me?nn(Me):rn;const ct=sn;var fn=Object.prototype,un=fn.hasOwnProperty;function ln(e,t){var r=$(e),n=!r&&ft(e),a=!r&&!n&&ue(e),i=!r&&!n&&!a&&ct(e),f=r||n||a||i,o=f?Ar(e.length,String):[],p=o.length;for(var l in e)(t||un.call(e,l))&&!(f&&(l=="length"||a&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||at(l,p)))&&o.push(l);return o}function cn(e,t){return function(r){return e(t(r))}}var pn=cn(Object.keys,Object);const gn=pn;var dn=Object.prototype,_n=dn.hasOwnProperty;function hn(e){if(!Tr(e))return gn(e);var t=[];for(var r in Object(e))_n.call(e,r)&&r!="constructor"&&t.push(r);return t}function ye(e){return ot(e)?ln(e):hn(e)}var vn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yn=/^\w*$/;function $e(e,t){if($(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||_e(e)?!0:yn.test(e)||!vn.test(e)||t!=null&&e in Object(t)}var $n=D(Object,"create");const z=$n;function bn(){this.__data__=z?z(null):{},this.size=0}function mn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Tn="__lodash_hash_undefined__",An=Object.prototype,wn=An.hasOwnProperty;function On(e){var t=this.__data__;if(z){var r=t[e];return r===Tn?void 0:r}return wn.call(t,e)?t[e]:void 0}var Pn=Object.prototype,Sn=Pn.hasOwnProperty;function En(e){var t=this.__data__;return z?t[e]!==void 0:Sn.call(t,e)}var Cn="__lodash_hash_undefined__";function In(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=z&&t===void 0?Cn:t,this}function M(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}M.prototype.clear=bn;M.prototype.delete=mn;M.prototype.get=On;M.prototype.has=En;M.prototype.set=In;function xn(){this.__data__=[],this.size=0}function te(e,t){for(var r=e.length;r--;)if(it(e[r][0],t))return r;return-1}var jn=Array.prototype,Mn=jn.splice;function Rn(e){var t=this.__data__,r=te(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Mn.call(t,r,1),--this.size,!0}function Dn(e){var t=this.__data__,r=te(t,e);return r<0?void 0:t[r][1]}function Ln(e){return te(this.__data__,e)>-1}function Fn(e,t){var r=this.__data__,n=te(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function T(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}T.prototype.clear=xn;T.prototype.delete=Rn;T.prototype.get=Dn;T.prototype.has=Ln;T.prototype.set=Fn;var Nn=D(m,"Map");const K=Nn;function Gn(){this.size=0,this.__data__={hash:new M,map:new(K||T),string:new M}}function Bn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function re(e,t){var r=e.__data__;return Bn(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Un(e){var t=re(this,e).delete(e);return this.size-=t?1:0,t}function Hn(e){return re(this,e).get(e)}function zn(e){return re(this,e).has(e)}function Kn(e,t){var r=re(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function A(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}A.prototype.clear=Gn;A.prototype.delete=Un;A.prototype.get=Hn;A.prototype.has=zn;A.prototype.set=Kn;var qn="Expected a function";function be(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(qn);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var f=e.apply(this,n);return r.cache=i.set(a,f)||i,f};return r.cache=new(be.Cache||A),r}be.Cache=A;var Xn=500;function Yn(e){var t=be(e,function(n){return r.size===Xn&&r.clear(),n}),r=t.cache;return t}var Jn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wn=/\\(\\)?/g,Zn=Yn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Jn,function(r,n,a,i){t.push(a?i.replace(Wn,"$1"):n||r)}),t});const Qn=Zn;function Vn(e){return e==null?"":rt(e)}function pt(e,t){return $(e)?e:$e(e,t)?[e]:Qn(Vn(e))}var kn=1/0;function ne(e){if(typeof e=="string"||_e(e))return e;var t=e+"";return t=="0"&&1/e==-kn?"-0":t}function gt(e,t){t=pt(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[ne(t[r++])];return r&&r==n?e:void 0}function ea(e,t,r){var n=e==null?void 0:gt(e,t);return n===void 0?r:n}function ta(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}function ra(){this.__data__=new T,this.size=0}function na(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function aa(e){return this.__data__.get(e)}function ia(e){return this.__data__.has(e)}var oa=200;function sa(e,t){var r=this.__data__;if(r instanceof T){var n=r.__data__;if(!K||n.length<oa-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new A(n)}return r.set(e,t),this.size=r.size,this}function b(e){var t=this.__data__=new T(e);this.size=t.size}b.prototype.clear=ra;b.prototype.delete=na;b.prototype.get=aa;b.prototype.has=ia;b.prototype.set=sa;function fa(e,t){for(var r=-1,n=e==null?0:e.length,a=0,i=[];++r<n;){var f=e[r];t(f,r,e)&&(i[a++]=f)}return i}function ua(){return[]}var la=Object.prototype,ca=la.propertyIsEnumerable,Re=Object.getOwnPropertySymbols,pa=Re?function(e){return e==null?[]:(e=Object(e),fa(Re(e),function(t){return ca.call(e,t)}))}:ua;const ga=pa;function da(e,t,r){var n=t(e);return $(e)?n:ta(n,r(e))}function De(e){return da(e,ye,ga)}var _a=D(m,"DataView");const le=_a;var ha=D(m,"Promise");const ce=ha;var va=D(m,"Set");const pe=va;var Le="[object Map]",ya="[object Object]",Fe="[object Promise]",Ne="[object Set]",Ge="[object WeakMap]",Be="[object DataView]",$a=R(le),ba=R(K),ma=R(ce),Ta=R(pe),Aa=R(fe),I=N;(le&&I(new le(new ArrayBuffer(1)))!=Be||K&&I(new K)!=Le||ce&&I(ce.resolve())!=Fe||pe&&I(new pe)!=Ne||fe&&I(new fe)!=Ge)&&(I=function(e){var t=N(e),r=t==ya?e.constructor:void 0,n=r?R(r):"";if(n)switch(n){case $a:return Be;case ba:return Le;case ma:return Fe;case Ta:return Ne;case Aa:return Ge}return t});const Ue=I;var wa=m.Uint8Array;const He=wa;var Oa="__lodash_hash_undefined__";function Pa(e){return this.__data__.set(e,Oa),this}function Sa(e){return this.__data__.has(e)}function ee(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new A;++t<r;)this.add(e[t])}ee.prototype.add=ee.prototype.push=Pa;ee.prototype.has=Sa;function Ea(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function Ca(e,t){return e.has(t)}var Ia=1,xa=2;function dt(e,t,r,n,a,i){var f=r&Ia,o=e.length,p=t.length;if(o!=p&&!(f&&p>o))return!1;var l=i.get(e),s=i.get(t);if(l&&s)return l==t&&s==e;var c=-1,u=!0,g=r&xa?new ee:void 0;for(i.set(e,t),i.set(t,e);++c<o;){var h=e[c],y=t[c];if(n)var w=f?n(y,h,c,t,e,i):n(h,y,c,e,t,i);if(w!==void 0){if(w)continue;u=!1;break}if(g){if(!Ea(t,function(E,C){if(!Ca(g,C)&&(h===E||a(h,E,r,n,i)))return g.push(C)})){u=!1;break}}else if(!(h===y||a(h,y,r,n,i))){u=!1;break}}return i.delete(e),i.delete(t),u}function ja(e){var t=-1,r=Array(e.size);return e.forEach(function(n,a){r[++t]=[a,n]}),r}function Ma(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var Ra=1,Da=2,La="[object Boolean]",Fa="[object Date]",Na="[object Error]",Ga="[object Map]",Ba="[object Number]",Ua="[object RegExp]",Ha="[object Set]",za="[object String]",Ka="[object Symbol]",qa="[object ArrayBuffer]",Xa="[object DataView]",ze=S?S.prototype:void 0,oe=ze?ze.valueOf:void 0;function Ya(e,t,r,n,a,i,f){switch(r){case Xa:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qa:return!(e.byteLength!=t.byteLength||!i(new He(e),new He(t)));case La:case Fa:case Ba:return it(+e,+t);case Na:return e.name==t.name&&e.message==t.message;case Ua:case za:return e==t+"";case Ga:var o=ja;case Ha:var p=n&Ra;if(o||(o=Ma),e.size!=t.size&&!p)return!1;var l=f.get(e);if(l)return l==t;n|=Da,f.set(e,t);var s=dt(o(e),o(t),n,a,i,f);return f.delete(e),s;case Ka:if(oe)return oe.call(e)==oe.call(t)}return!1}var Ja=1,Wa=Object.prototype,Za=Wa.hasOwnProperty;function Qa(e,t,r,n,a,i){var f=r&Ja,o=De(e),p=o.length,l=De(t),s=l.length;if(p!=s&&!f)return!1;for(var c=p;c--;){var u=o[c];if(!(f?u in t:Za.call(t,u)))return!1}var g=i.get(e),h=i.get(t);if(g&&h)return g==t&&h==e;var y=!0;i.set(e,t),i.set(t,e);for(var w=f;++c<p;){u=o[c];var E=e[u],C=t[u];if(n)var Te=f?n(C,E,u,t,e,i):n(E,C,u,e,t,i);if(!(Te===void 0?E===C||a(E,C,r,n,i):Te)){y=!1;break}w||(w=u=="constructor")}if(y&&!w){var q=e.constructor,X=t.constructor;q!=X&&"constructor"in e&&"constructor"in t&&!(typeof q=="function"&&q instanceof q&&typeof X=="function"&&X instanceof X)&&(y=!1)}return i.delete(e),i.delete(t),y}var Va=1,Ke="[object Arguments]",qe="[object Array]",Y="[object Object]",ka=Object.prototype,Xe=ka.hasOwnProperty;function ei(e,t,r,n,a,i){var f=$(e),o=$(t),p=f?qe:Ue(e),l=o?qe:Ue(t);p=p==Ke?Y:p,l=l==Ke?Y:l;var s=p==Y,c=l==Y,u=p==l;if(u&&ue(e)){if(!ue(t))return!1;f=!0,s=!1}if(u&&!s)return i||(i=new b),f||ct(e)?dt(e,t,r,n,a,i):Ya(e,t,p,r,n,a,i);if(!(r&Va)){var g=s&&Xe.call(e,"__wrapped__"),h=c&&Xe.call(t,"__wrapped__");if(g||h){var y=g?e.value():e,w=h?t.value():t;return i||(i=new b),a(y,w,r,n,i)}}return u?(i||(i=new b),Qa(e,t,r,n,a,i)):!1}function me(e,t,r,n,a){return e===t?!0:e==null||t==null||!F(e)&&!F(t)?e!==e&&t!==t:ei(e,t,r,n,me,a)}var ti=1,ri=2;function ni(e,t,r,n){var a=r.length,i=a,f=!n;if(e==null)return!i;for(e=Object(e);a--;){var o=r[a];if(f&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++a<i;){o=r[a];var p=o[0],l=e[p],s=o[1];if(f&&o[2]){if(l===void 0&&!(p in e))return!1}else{var c=new b;if(n)var u=n(l,s,p,e,t,c);if(!(u===void 0?me(s,l,ti|ri,n,c):u))return!1}}return!0}function _t(e){return e===e&&!he(e)}function ai(e){for(var t=ye(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,_t(a)]}return t}function ht(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}function ii(e){var t=ai(e);return t.length==1&&t[0][2]?ht(t[0][0],t[0][1]):function(r){return r===e||ni(r,e,t)}}function oi(e,t){return e!=null&&t in Object(e)}function si(e,t,r){t=pt(t,e);for(var n=-1,a=t.length,i=!1;++n<a;){var f=ne(t[n]);if(!(i=e!=null&&r(e,f)))break;e=e[f]}return i||++n!=a?i:(a=e==null?0:e.length,!!a&&ve(a)&&at(f,a)&&($(e)||ft(e)))}function fi(e,t){return e!=null&&si(e,t,oi)}var ui=1,li=2;function ci(e,t){return $e(e)&&_t(t)?ht(ne(e),t):function(r){var n=ea(r,e);return n===void 0&&n===t?fi(r,e):me(t,n,ui|li)}}function pi(e){return function(t){return t?.[e]}}function gi(e){return function(t){return gt(t,e)}}function di(e){return $e(e)?pi(ne(e)):gi(e)}function _i(e){return typeof e=="function"?e:e==null?Qt:typeof e=="object"?$(e)?ci(e[0],e[1]):ii(e):di(e)}function hi(e,t,r,n){for(var a=-1,i=e==null?0:e.length;++a<i;){var f=e[a];t(n,f,r(f),e)}return n}function vi(e){return function(t,r,n){for(var a=-1,i=Object(t),f=n(t),o=f.length;o--;){var p=f[e?o:++a];if(r(i[p],p,i)===!1)break}return t}}var yi=vi();const $i=yi;function bi(e,t){return e&&$i(e,t,ye)}function mi(e,t){return function(r,n){if(r==null)return r;if(!ot(r))return e(r,n);for(var a=r.length,i=t?a:-1,f=Object(r);(t?i--:++i<a)&&n(f[i],i,f)!==!1;);return r}}var Ti=mi(bi);const Ai=Ti;function wi(e,t,r,n){return Ai(e,function(a,i,f){t(n,a,r(a),f)}),n}function Oi(e,t){return function(r,n){var a=$(r)?hi:wi,i=t?t():{};return a(r,e,_i(n),i)}}var Pi=Object.prototype,Si=Pi.hasOwnProperty,Ei=Oi(function(e,t,r){Si.call(e,r)?e[r].push(t):$r(e,r,[t])});const Ci=Ei;function Ye(e,t,r){const n=e.slice();return n[7]=t[r],n}function Je(e,t,r){const n=e.slice();return n[10]=t[r],n}function We(e){let t,r,n=e[10].title+"",a,i;return{c(){t=O("li"),r=O("a"),a=ge(n),this.h()},l(f){t=P(f,"LI",{});var o=L(t);r=P(o,"A",{href:!0});var p=L(r);a=de(p,n),p.forEach(_),o.forEach(_),this.h()},h(){V(r,"href",i="projects/"+e[10].slug)},m(f,o){v(f,t,o),se(t,r),se(r,a)},p(f,o){o&3&&n!==(n=f[10].title+"")&&ke(a,n),o&3&&i!==(i="projects/"+f[10].slug)&&V(r,"href",i)},d(f){f&&_(t)}}}function Ze(e){let t,r=e[7]+"",n,a,i,f,o,p=k(e[0][e[7]]),l=[];for(let s=0;s<p.length;s+=1)l[s]=We(Je(e,p,s));return{c(){t=O("h2"),n=ge(r),a=x(),i=O("ul");for(let s=0;s<l.length;s+=1)l[s].c()},l(s){t=P(s,"H2",{});var c=L(t);n=de(c,r),c.forEach(_),a=j(s),i=P(s,"UL",{});var u=L(i);for(let g=0;g<l.length;g+=1)l[g].l(u);u.forEach(_)},m(s,c){v(s,t,c),se(t,n),v(s,a,c),v(s,i,c);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(i,null);f||(o=Et(i,"mousedown",e[4]),f=!0)},p(s,c){if(c&2&&r!==(r=s[7]+"")&&ke(n,r),c&3){p=k(s[0][s[7]]);let u;for(u=0;u<p.length;u+=1){const g=Je(s,p,u);l[u]?l[u].p(g,c):(l[u]=We(g),l[u].c(),l[u].m(i,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=p.length}},d(s){s&&(_(t),_(a),_(i)),Ve(l,s),f=!1,o()}}}function Ii(e){let t,r="Portfolio van Bob Fanger",n,a,i,f=k(e[1]),o=[];for(let s=0;s<f.length;s+=1)o[s]=Ze(Ye(e,f,s));const p=e[3].default,l=$t(p,e,e[6],null);return{c(){t=O("h1"),t.textContent=r,n=x();for(let s=0;s<o.length;s+=1)o[s].c();a=x(),l&&l.c()},l(s){t=P(s,"H1",{"data-svelte-h":!0}),Qe(t)!=="svelte-185d87z"&&(t.textContent=r),n=j(s);for(let c=0;c<o.length;c+=1)o[c].l(s);a=j(s),l&&l.l(s)},m(s,c){v(s,t,c),v(s,n,c);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(s,c);v(s,a,c),l&&l.m(s,c),i=!0},p(s,c){if(c&3){f=k(s[1]);let u;for(u=0;u<f.length;u+=1){const g=Ye(s,f,u);o[u]?o[u].p(g,c):(o[u]=Ze(g),o[u].c(),o[u].m(a.parentNode,a))}for(;u<o.length;u+=1)o[u].d(1);o.length=f.length}l&&l.p&&(!i||c&64)&&bt(l,p,s,s[6],i?Tt(p,s[6],c,null):mt(s[6]),null)},i(s){i||(B(l,s),i=!0)},o(s){U(l,s),i=!1},d(s){s&&(_(t),_(n),_(a)),Ve(o,s),l&&l.d(s)}}}function xi(e){let t;return{c(){t=ge("Home")},l(r){t=de(r,"Home")},m(r,n){v(r,t,n)},d(r){r&&_(t)}}}function ji(e){let t,r,n,a,i,f,o,p,l,s;return r=new Mt({props:{$$slots:{default:[Ii]},$$scope:{ctx:e}}}),o=new Ct({props:{href:"/",type:"previous",$$slots:{default:[xi]},$$scope:{ctx:e}}}),o.$on("mousedown",e[5]),l=new Rt({}),{c(){t=O("div"),J(r.$$.fragment),i=x(),f=O("div"),J(o.$$.fragment),p=x(),J(l.$$.fragment),this.h()},l(c){t=P(c,"DIV",{});var u=L(t);W(r.$$.fragment,u),u.forEach(_),i=j(c),f=P(c,"DIV",{class:!0});var g=L(f);W(o.$$.fragment,g),g.forEach(_),p=j(c),W(l.$$.fragment,c),this.h()},h(){V(f,"class","previous svelte-zw9iit")},m(c,u){v(c,t,u),Z(r,t,null),v(c,i,u),v(c,f,u),Z(o,f,null),v(c,p,u),Z(l,c,u),s=!0},p(c,u){const g={};u&67&&(g.$$scope={dirty:u,ctx:c}),r.$set(g);const h={};u&64&&(h.$$scope={dirty:u,ctx:c}),o.$set(h)},i(c){s||(B(r.$$.fragment,c),yt(()=>{s&&(a&&a.end(1),n=Pt(t,It,{}),n.start())}),B(o.$$.fragment,c),B(l.$$.fragment,c),s=!0)},o(c){U(r.$$.fragment,c),n&&n.invalidate(),a=St(t,xt,{}),U(o.$$.fragment,c),U(l.$$.fragment,c),s=!1},d(c){c&&(_(t),_(i),_(f),_(p)),Q(r),c&&a&&a.end(),Q(o),Q(l,c)}}}function Mi(e){let t,r,n,a,i="poc",f;return r=new jt({props:{$$slots:{default:[ji]},$$scope:{ctx:e}}}),{c(){t=x(),J(r.$$.fragment),n=x(),a=O("a"),a.textContent=i,this.h()},l(o){Ot("svelte-141aa9b",document.head).forEach(_),t=j(o),W(r.$$.fragment,o),n=j(o),a=P(o,"A",{href:!0,"data-svelte-h":!0}),Qe(a)!=="svelte-eq00xs"&&(a.textContent=i),this.h()},h(){document.title="Bob Fanger's portfolio",a.hidden=!0,V(a,"href","/scrollytelling/bfanger.nl-v3")},m(o,p){v(o,t,p),Z(r,o,p),v(o,n,p),v(o,a,p),f=!0},p(o,[p]){const l={};p&67&&(l.$$scope={dirty:p,ctx:o}),r.$set(l)},i(o){f||(B(r.$$.fragment,o),f=!0)},o(o){U(r.$$.fragment,o),f=!1},d(o){o&&(_(t),_(n),_(a)),Q(r,o)}}}function Ri(e){const t=e.released.toString().match(/^[0-9]+/);return t===null?(console.warn(`Project[${e.slug}].released is invalid`),2e3):parseInt(t[0],10)}function Di(e,t,r){let n,a,{$$slots:i={},$$scope:f}=t,{data:o}=t;const p=()=>{Ae.set("left")},l=()=>{Ae.set("right")};return e.$$set=s=>{"data"in s&&r(2,o=s.data),"$$scope"in s&&r(6,f=s.$$scope)},e.$$.update=()=>{e.$$.dirty&4&&r(0,n=Ci(o.teasers,Ri)),e.$$.dirty&1&&r(1,a=Object.keys(n).sort().reverse())},[n,a,o,i,p,l,f]}class zi extends At{constructor(t){super(),wt(this,t,Di,Mi,vt,{data:2})}}export{zi as component};
