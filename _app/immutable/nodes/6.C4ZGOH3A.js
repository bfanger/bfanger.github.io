import{d as T,e as L,a as f,t as $,b as m}from"../chunks/disclose-version.JykmFiKV.js";import{b as S,h as P,j as V,w as z,v as B,q as C,a0 as E,a1 as M,Y as R,f as U,p as Y,a as Z,t as F,$ as G,g as a,a2 as H,s as h,d as J,c as p,r as u,a3 as g}from"../chunks/runtime.CrXZZmSf.js";import{h as Q}from"../chunks/props.jwxUQCd7.js";import{i as k}from"../chunks/7.BmDtEfvE.js";import{P as W,t as x}from"../chunks/Page.UNA6b-Gk.js";import{p as X,g as I}from"../chunks/entry.k7s2qjPH.js";import{D as ee}from"../chunks/Disclaimer.BRrWUNE0.js";import{c as _,N as y,a as te,b as ae}from"../chunks/cardTransition.BEk7Ug_B.js";import{P as re}from"../chunks/ProjectCard.BLqM_X-q.js";function oe(d,s,t){P&&V();var l=d,v=E,i,n=M;S(()=>{n(v,v=s())&&(i&&z(i),i=B(()=>t(l)))}),P&&(l=C)}async function se({params:d,fetch:s}){return{project:await(await s(`/projects/${d.project}.json`)).json()}}const $e=Object.freeze(Object.defineProperty({__proto__:null,load:se},Symbol.toStringTag,{value:"Module"}));var ie=$("<div><!></div>"),ne=()=>{_.set("right")},fe=()=>{_.set("left")},de=$('<div class="next svelte-fari94"><!></div>'),le=$('<!> <div class="previous svelte-fari94"><!></div> <!> <div class="disclaimer svelte-fari94"><!></div>',1);function we(d,s){Z(s,!0);let t=J(()=>s.data.project);R(()=>{a(t).before&&typeof window<"u"&&X(a(t).before)});async function l(e){e.altKey||e.shiftKey||e.metaKey||(e.key==="ArrowLeft"&&a(t).before?(_.set("right"),await I(a(t).before)):e.key==="ArrowRight"&&a(t).after&&(_.set("left"),await I(a(t).after)))}var v=le();Q(e=>{F(()=>G.title=a(t).title)}),L("keydown",H,l);var i=U(v);oe(i,()=>a(t),e=>{W(e,{children:(o,c)=>{var r=ie(),j=p(r);re(j,{get project(){return a(t)}}),u(r),x(5,r,()=>te),x(6,r,()=>ae),f(o,r)},$$slots:{default:!0}})});var n=h(i,2);n.__mousedown=[ne];var q=p(n);{var D=e=>{y(e,{get href(){return a(t).before},type:"previous",children:(o,c)=>{g();var r=m("Vorige");f(o,r)},$$slots:{default:!0}})},N=e=>{y(e,{href:"/portfolio",type:"previous",children:(o,c)=>{g();var r=m("Portfolio");f(o,r)},$$slots:{default:!0}})};k(q,e=>{a(t).before?e(D):e(N,!1)})}u(n);var w=h(n,2);{var A=e=>{var o=de();o.__mousedown=[fe];var c=p(o);y(c,{get href(){return a(t).after},type:"next",children:(r,j)=>{g();var O=m("Volgende");f(r,O)},$$slots:{default:!0}}),u(o),f(e,o)};k(w,e=>{a(t).after&&e(A)})}var b=h(w,2),K=p(b);ee(K),u(b),f(d,v),Y()}T(["mousedown"]);export{we as component,$e as universal};