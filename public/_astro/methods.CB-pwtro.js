import{s as U,l as P,m as I}from"./runtime-core.esm-bundler.Bz9QO-V2.js";function F(e){let n=U(),t=e.subscribe(s=>{n.value=s});return P()&&I(t),n}let c=[],i=0;const f=4;let u=e=>{let n=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(s){return t.lc=n.push(s),()=>{for(let r=i+f;r<c.length;)c[r]===s?c.splice(r,f):r+=f;let o=n.indexOf(s);~o&&(n.splice(o,1),--t.lc||t.off())}},notify(s,o){let r=!c.length;for(let l of n)c.push(l,t.value,s,o);if(r){for(i=0;i<c.length;i+=f)c[i](c[i+1],c[i+2],c[i+3]);c.length=0}},off(){},set(s){let o=t.value;o!==s&&(t.value=s,t.notify(o))},subscribe(s){let o=t.listen(s);return s(t.value),o},value:e};return t};const N=5,g=6,m=10;let R=(e,n,t,s)=>(e.events=e.events||{},e.events[t+m]||(e.events[t+m]=s(o=>{e.events[t].reduceRight((r,l)=>(l(r),r),{shared:{},...o})})),e.events[t]=e.events[t]||[],e.events[t].push(n),()=>{let o=e.events[t],r=o.indexOf(n);o.splice(r,1),o.length||(delete e.events[t],e.events[t+m](),delete e.events[t+m])}),A=1e3,O=(e,n)=>R(e,s=>{let o=n(s);o&&e.events[g].push(o)},N,s=>{let o=e.listen;e.listen=(...l)=>(!e.lc&&!e.active&&(e.active=!0,s()),o(...l));let r=e.off;return e.events[g]=[],e.off=()=>{r(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let l of e.events[g])l();e.events[g]=[]}},A)},()=>{e.listen=o,e.off=r}}),w=e=>e,d={},p={addEventListener(){},removeEventListener(){}};function C(){try{return typeof localStorage<"u"}catch{return!1}}C()&&(d=localStorage);let Q={addEventListener(e,n,t){window.addEventListener("storage",n),window.addEventListener("pageshow",t)},removeEventListener(e,n,t){window.removeEventListener("storage",n),window.removeEventListener("pageshow",t)}};typeof window<"u"&&(p=Q);function b(e,n=void 0,t={}){let s=t.encode||w,o=t.decode||w,r=u(n),l=r.set;r.set=a=>{typeof a>"u"?delete d[e]:d[e]=s(a),l(a)};function v(a){a.key===e?a.newValue===null?l(void 0):l(o(a.newValue)):d[e]||l(void 0)}function y(){r.set(d[e]?o(d[e]):n)}return O(r,()=>{if(y(),t.listen!==!1)return p.addEventListener(e,v,y),()=>{p.removeEventListener(e,v,y)}}),r}const B=typeof window<"u"&&Number(localStorage.getItem("selectedTheme"))||0,E=b("selectedTheme",B),W=u(!1),M=u([]),_=u([]),k=u(""),V=u("category-asc"),Y=()=>{T([]),L([]),S(""),x("category-asc")},T=e=>{M.set(e),h("categories",e)},L=e=>{_.set(e),h("tags",e)},S=e=>{console.log("updating searchQuery with ",e),k.set(e),h("search",e)},x=e=>{V.set(e),h("sortBy",e)},D=e=>{const n=document.querySelector("body");n.classList.remove(...Array.from(n.classList).filter(s=>s.startsWith("theme-"))),n.classList.add(`theme-${e}`);const t=getComputedStyle(document.documentElement).getPropertyValue("--color-secondary");document.querySelector('meta[name="theme-color"]').setAttribute("content",t)},z=()=>{const e=Number(E.get());console.log("currentTheme",e);const n=document.documentElement,t=parseInt(getComputedStyle(n).getPropertyValue("--max-themes").trim());console.log("maxThemes",t);const s=(e+1)%t;console.log("nextIndex",s);const o=document.querySelector("body");console.log("Current body classes:",o.classList),E.set(s),D(s),console.log("New body classes:",o.classList)},h=(e,n=[])=>{const t=new URL(window.location.href),s=Array.isArray(n)?n.join(","):n;s.length===0||s==="category-asc"?t.searchParams.delete(e):t.searchParams.set(e,s),window.history.replaceState({},"",decodeURIComponent(t.toString()))},G=()=>{console.log("applyUrlParamsToStore");const e=new URL(window.location.href),n=e.searchParams.get("sortBy");console.log("sortBy",n),n&&x(n);const t=e.searchParams.get("categories"),s=t?t.split(","):[];console.log("categories",s),s&&T(s);const o=e.searchParams.get("tags"),r=o?o.split(","):[];console.log("tags",r),r&&L(r);const l=e.searchParams.get("search");console.log("searchQuery",l),l&&S(l)};export{T as a,M as b,D as c,z as d,_ as e,L as f,k as g,V as h,W as i,x as j,S as k,G as l,Y as r,E as s,F as u};
