import{G as L,H as T,I as S}from"./runtime-core.esm-bundler.XJS3sD7x.js";function C(e){let l=L(),t=e.subscribe(s=>{l.value=s});return T()&&S(t),l}let f=[],o=0;const c=4;let a=e=>{let l=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(s){return t.lc=l.push(s),()=>{for(let i=o+c;i<f.length;)f[i]===s?f.splice(i,c):i+=c;let n=l.indexOf(s);~n&&(l.splice(n,1),--t.lc||t.off())}},notify(s,n){let i=!f.length;for(let r of l)f.push(r,t.value,s,n);if(i){for(o=0;o<f.length;o+=c)f[o](f[o+1],f[o+2],f[o+3]);f.length=0}},off(){},set(s){let n=t.value;n!==s&&(t.value=s,t.notify(n))},subscribe(s){let n=t.listen(s);return s(t.value),n},value:e};return t};const m=5,v=6,g=10;let O=(e,l,t,s)=>(e.events=e.events||{},e.events[t+g]||(e.events[t+g]=s(n=>{e.events[t].reduceRight((i,r)=>(r(i),i),{shared:{},...n})})),e.events[t]=e.events[t]||[],e.events[t].push(l),()=>{let n=e.events[t],i=n.indexOf(l);n.splice(i,1),n.length||(delete e.events[t],e.events[t+g](),delete e.events[t+g])}),y=1e3,N=(e,l)=>O(e,s=>{let n=l(s);n&&e.events[v].push(n)},m,s=>{let n=e.listen;e.listen=(...r)=>(!e.lc&&!e.active&&(e.active=!0,s()),n(...r));let i=e.off;return e.events[v]=[],e.off=()=>{i(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let r of e.events[v])r();e.events[v]=[]}},y)},()=>{e.listen=n,e.off=i}}),w=e=>e,u={},h={addEventListener(){},removeEventListener(){}};function U(){try{return typeof localStorage<"u"}catch{return!1}}U()&&(u=localStorage);let R={addEventListener(e,l,t){window.addEventListener("storage",l),window.addEventListener("pageshow",t)},removeEventListener(e,l,t){window.removeEventListener("storage",l),window.removeEventListener("pageshow",t)}};typeof window<"u"&&(h=R);function x(e,l=void 0,t={}){let s=t.encode||w,n=t.decode||w,i=a(l),r=i.set;i.set=d=>{typeof d>"u"?delete u[e]:u[e]=s(d),r(d)};function p(d){d.key===e?d.newValue===null?r(void 0):r(n(d.newValue)):u[e]||r(void 0)}function E(){i.set(u[e]?n(u[e]):l)}return N(i,()=>{if(E(),t.listen!==!1)return h.addEventListener(e,p,E),()=>{h.removeEventListener(e,p,E)}}),i}const I=typeof window<"u"&&Number(localStorage.getItem("selectedTheme"))||0,D=x("selectedTheme",I),P=a(!1),M=a([]),_=a([]),Q=a(""),k=a("category-asc"),q=()=>{M.set([]),_.set([]),Q.set(""),k.set("category-asc")};export{Q as a,k as b,M as c,D as d,P as i,q as r,_ as s,C as u};
