import{h as m,j as y,b as w,T as b,v as g,q as k,w as p}from"./runtime.CrXZZmSf.js";function T(u,i,a){m&&y();var c=u,r,o;w(()=>{r!==(r=i())&&(o&&(p(o),o=null),r&&(o=g(()=>a(c,r))))},b),m&&(c=k)}const P="modulepreload",R=function(u,i){return new URL(u,i).href},v={},A=function(i,a,c){let r=Promise.resolve();if(a&&a.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),h=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));r=Promise.allSettled(a.map(t=>{if(t=R(t,c),t in v)return;v[t]=!0;const l=t.endsWith(".css"),E=l?'[rel="stylesheet"]':"";if(!!c)for(let f=s.length-1;f>=0;f--){const d=s[f];if(d.href===t&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${E}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":P,l||(n.as="script"),n.crossOrigin="",n.href=t,h&&n.setAttribute("nonce",h),document.head.appendChild(n),l)return new Promise((f,d)=>{n.addEventListener("load",f),n.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})}))}function o(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return r.then(s=>{for(const e of s||[])e.status==="rejected"&&o(e.reason);return i().catch(o)})};export{A as _,T as c};