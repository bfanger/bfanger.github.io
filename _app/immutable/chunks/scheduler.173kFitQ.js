function g(){}const A=t=>t;function E(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function C(){return Object.create(null)}function q(t){t.forEach(j)}function F(t){return typeof t=="function"}function D(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function G(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function H(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t){let n;return m(t,e=>n=e)(),n}function S(t,n,e){t.$$.on_destroy.push(m(n,e))}function U(t,n,e,o){if(t){const r=k(t,n,e,o);return t[0](r)}}function k(t,n,e,o){return t[1]&&o?E(e.ctx.slice(),t[1](o(n))):e.ctx}function I(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const i=[],_=Math.max(n.dirty.length,r.length);for(let u=0;u<_;u+=1)i[u]=n.dirty[u]|r[u];return i}return n.dirty|r}return n.dirty}function J(t,n,e,o,r,i){if(r){const _=k(n,e,o,i);t.p(_,r)}}function K(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function L(t,n,e){return t.set(e),n}function N(t){return t&&F(t.destroy)?t.destroy:g}function Q(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function d(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function R(t){x().$$.on_mount.push(t)}function T(t){x().$$.after_update.push(t)}function V(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],y=[];let c=[];const p=[],w=Promise.resolve();let b=!1;function O(){b||(b=!0,w.then(M))}function W(){return O(),w}function z(t){c.push(t)}function X(t){p.push(t)}const h=new Set;let s=0;function M(){if(s!==0)return;const t=f;do{try{for(;s<a.length;){const n=a[s];s++,d(n),v(n.$$)}}catch(n){throw a.length=0,s=0,n}for(d(null),a.length=0,s=0;y.length;)y.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,h.clear(),d(t)}function v(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function Y(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{A,C as B,H as C,Y as D,f as E,j as F,a as G,O as H,U as a,I as b,S as c,T as d,y as e,z as f,K as g,E as h,G as i,Q as j,P as k,V as l,L as m,g as n,R as o,B as p,x as q,q as r,D as s,W as t,J as u,d as v,M as w,N as x,X as y,F as z};