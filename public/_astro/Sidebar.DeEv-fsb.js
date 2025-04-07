import{d as A,u as _,c as C,i as $}from"./store.BHeNoMMI.js";import{_ as ie}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as I,a as f,n as L,J as ce,F as M,r as le,o as k,e as ae,f as R,b as ue,t as D}from"./runtime-core.esm-bundler.XJS3sD7x.js";const H={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:e=>`Invalid arguments passed to${e?` <${e}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."};function fe(e){return e.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function pe(e,t){if(!t||t.line===void 0||t.column===void 0)return"";const r=fe(e).split(`
`).map(s=>s.replace(/\t/g,"  ")),n=[];for(let s=-2;s<=2;s++)r[t.line+s]&&n.push(t.line+s);let o=0;for(const s of n){let l=`> ${s}`;l.length>o&&(o=l.length)}let i="";for(const s of n){const l=s===t.line-1;i+=l?"> ":"  ",i+=`${s+1} | ${r[s]}
`,l&&(i+=`${Array.from({length:o}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return i}class de extends Error{loc;title;hint;frame;type="AstroError";constructor(t,r){const{name:n,title:o,message:i,stack:s,location:l,hint:a,frame:c}=t;super(i,r),this.title=o,this.name=n,i&&(this.message=i),this.stack=s||this.stack,this.loc=l,this.hint=a,this.frame=c}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,r){this.frame=pe(t,r)}static is(t){return t.type==="AstroError"}}function me(e){return!(e.length!==3||!e[0]||typeof e[0]!="object")}function Q(e,t,r){const n=t?.split("/").pop()?.replace(".astro","")??"",o=(...i)=>{if(!me(i))throw new de({...H,message:H.message(n)});return e(...i)};return Object.defineProperty(o,"name",{value:n,writable:!1}),o.isAstroComponentFactory=!0,o.moduleId=t,o.propagation=r,o}function he(e){return Q(e.factory,e.moduleId,e.propagation)}function ge(e,t,r){return typeof e=="function"?Q(e,t,r):he(e)}typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:ye}="",be=/[&<>'"]/g,xe={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Ce=e=>xe[e],we=e=>ye.call(e,be,Ce);function S(e){return!!e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"}async function*Se(e){const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)return;yield n}}finally{t.releaseLock()}}const ve=we;class Y extends Uint8Array{}Object.defineProperty(Y.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class O extends String{get[Symbol.toStringTag](){return"HTMLString"}}const h=e=>e instanceof O?e:typeof e=="string"?new O(e):e;function Te(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function Ae(e){return new Y(e)}function K(e){return typeof e.getReader=="function"}async function*N(e){if(K(e))for await(const t of Se(e))yield x(t);else for await(const t of e)yield x(t)}function*_e(e){for(const t of e)yield x(t)}function x(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return Ae(e);if(e instanceof Response&&e.body){const t=e.body;return N(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>x(t));if(e[Symbol.for("astro:slot-string")])return e;if(Symbol.iterator in e)return _e(e);if(Symbol.asyncIterator in e||K(e))return N(e)}}return h(e)}function ee(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=ee(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function $e(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=ee(e))&&(n&&(n+=" "),n+=t);return n}const Ie=/^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|inert|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i,Le=/&/g,Re=/"/g,Oe=new Set(["set:html","set:text"]),w=(e,t=!0)=>t?String(e).replace(Le,"&#38;").replace(Re,"&#34;"):e,je=e=>e.toLowerCase()===e?e:e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),U=e=>Object.entries(e).filter(([t,r])=>typeof r=="string"&&r.trim()||typeof r=="number").map(([t,r])=>t[0]!=="-"&&t[1]!=="-"?`${je(t)}:${r}`:`${t}:${r}`).join(";");function Fe(e,t,r=!0){if(e==null)return"";if(Oe.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){const n=w($e(e),r);return n===""?"":h(` ${t.slice(0,-5)}="${n}"`)}if(t==="style"&&!(e instanceof O)){if(Array.isArray(e)&&e.length===2)return h(` ${t}="${w(`${U(e[0])};${e[1]}`,r)}"`);if(typeof e=="object")return h(` ${t}="${w(U(e),r)}"`)}return t==="className"?h(` class="${w(e,r)}"`):typeof e=="string"&&e.includes("&")&&Me(e)?h(` ${t}="${w(e,!1)}"`):Ie.test(t)?h(e?` ${t}`:""):h(e===""?` ${t}`:` ${t}="${w(e,r)}"`)}const qe=()=>{};class Be{chunks=[];renderPromise;destination;flushed=!1;constructor(t,r){this.destination=t,this.renderPromise=r(this),S(this.renderPromise)&&Promise.resolve(this.renderPromise).catch(qe)}write(t){this.flushed?this.destination.write(t):this.chunks.push(t)}flush(){if(this.flushed)throw new Error("The render buffer has already been flushed.");this.flushed=!0;for(const t of this.chunks)this.destination.write(t);return this.renderPromise}}function te(e,t){return new Be(e,t)}typeof process<"u"&&Object.prototype.toString.call(process);const Ee=["http:","https:"];function Me(e){try{const t=new URL(e);return Ee.includes(t.protocol)}catch{return!1}}const re=Symbol.for("astro.renderTemplateResult");class ke{[re]=!0;htmlParts;expressions;error;constructor(t,r){this.htmlParts=t,this.error=void 0,this.expressions=r.map(n=>S(n)?Promise.resolve(n).catch(o=>{if(!this.error)throw this.error=o,o}):n)}render(t){const r=this.expressions.map(i=>te(t,s=>{if(i||i===0)return v(s,i)}));let n=0;const o=()=>{for(;n<this.htmlParts.length;){const i=this.htmlParts[n],s=r[n];if(n++,i&&t.write(h(i)),s){const l=s.flush();if(S(l))return l.then(o)}}};return o()}}function De(e){return typeof e=="object"&&e!==null&&!!e[re]}function P(e,...t){return new ke(e,t)}const V=Symbol.for("astro:slot-string");class He extends O{instructions;[V];constructor(t,r){super(t),this.instructions=r,this[V]=!0}}new TextEncoder;new TextDecoder;function Ne(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}function v(e,t){if(S(t))return t.then(r=>v(e,r));if(t instanceof He){e.write(t);return}if(Te(t)){e.write(t);return}if(Array.isArray(t))return Ue(e,t);if(typeof t=="function")return v(e,t());if(!(!t&&t!==0)){if(typeof t=="string"){e.write(h(ve(t)));return}if(Ne(t)||De(t)||We(t))return t.render(e);if(ArrayBuffer.isView(t)){e.write(t);return}if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))return Symbol.asyncIterator in t?Ve(e,t):Pe(e,t);e.write(t)}}function Ue(e,t){const n=t.map(i=>te(e,s=>v(s,i)))[Symbol.iterator](),o=()=>{for(;;){const{value:i,done:s}=n.next();if(s)break;const l=i.flush();if(S(l))return l.then(o)}};return o()}function Pe(e,t){const r=t[Symbol.iterator](),n=()=>{for(;;){const{value:o,done:i}=r.next();if(i)break;const s=v(e,o);if(S(s))return s.then(n)}};return n()}async function Ve(e,t){for await(const r of t)await v(e,r)}const ze=Symbol.for("astro.componentInstance");function We(e){return typeof e=="object"&&e!==null&&!!e[ze]}var z;(function(e){e[e.Include=0]="Include",e[e.None=1]="None"})(z||(z={}));var W;(function(e){e[e.Required=0]="Required",e[e.Ignore=1]="Ignore"})(W||(W={}));var G;(function(e){e[e.Include=0]="Include",e[e.None=1]="None"})(G||(G={}));var X;(function(e){e[e.Required=0]="Required",e[e.Ignore=1]="Ignore"})(X||(X={}));new TextEncoder;new TextDecoder;/*! https://mths.be/cssesc v3.0.0 by @mathias */var F,Z;function Ge(){if(Z)return F;Z=1;var e={},t=e.hasOwnProperty,r=function(a,c){if(!a)return c;var p={};for(var u in c)p[u]=t.call(a,u)?a[u]:c[u];return p},n=/[ -,\.\/:-@\[-\^`\{-~]/,o=/[ -,\.\/:-@\[\]\^`\{-~]/,i=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,s=function l(a,c){c=r(c,l.options),c.quotes!="single"&&c.quotes!="double"&&(c.quotes="single");for(var p=c.quotes=="double"?'"':"'",u=c.isIdentifier,T=a.charAt(0),d="",g=0,B=a.length;g<B;){var m=a.charAt(g++),y=m.charCodeAt(),b=void 0;if(y<32||y>126){if(y>=55296&&y<=56319&&g<B){var E=a.charCodeAt(g++);(E&64512)==56320?y=((y&1023)<<10)+(E&1023)+65536:g--}b="\\"+y.toString(16).toUpperCase()+" "}else c.escapeEverything?n.test(m)?b="\\"+m:b="\\"+y.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(m)?b="\\"+y.toString(16).toUpperCase()+" ":m=="\\"||!u&&(m=='"'&&p==m||m=="'"&&p==m)||u&&o.test(m)?b="\\"+m:b=m;d+=b}return u&&(/^-[-\d]/.test(d)?d="\\-"+d.slice(1):/\d/.test(T)&&(d="\\3"+T+" "+d.slice(1))),d=d.replace(i,function(se,j,oe){return j&&j.length%2?se:(j||"")+oe}),!u&&c.wrap?p+d+p:d};return s.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1},s.version="3.0.0",F=s,F}Ge();"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((e,t)=>(e[t.charCodeAt(0)]=t,e),[]);"-0123456789_".split("").reduce((e,t)=>(e[t.charCodeAt(0)]=t,e),[]);function q(e={},t,{class:r}={}){let n="";r&&(typeof e.class<"u"?e.class+=` ${r}`:typeof e["class:list"]<"u"?e["class:list"]=[e["class:list"],r]:e.class=r);for(const[o,i]of Object.entries(e))n+=Fe(i,o,!0);return h(n)}const J=new WeakMap;function Xe({meta:e,attributes:t,children:r}){const n=new WeakMap,o=ge((i,s)=>{let l=J.get(i)??0;const{title:a,viewBox:c,mode:p,...u}=Ye(t,s),T=a?x(`<title>${a}</title>`):"";if(p==="sprite"){let d="",g=n.get(i);return g||(J.set(i,++l),g=`a:${l}`,d=x(`<symbol${q({viewBox:c,id:g})}>${r}</symbol>`),n.set(i,g)),P`<svg${q(u)}>${T}${d}<use href="#${g}" /></svg>`}return P`<svg${q({viewBox:c,...u})}>${T}${x(r)}</svg>`});return Object.assign(o,e)}const Ze=["xmlns","xmlns:xlink","version"],Je={role:"img"};function Qe(e){for(const t of Ze)delete e[t];return e}function Ye(e,{size:t,...r}){return t!==void 0&&r.width===void 0&&r.height===void 0&&(r.height=t,r.width=t),Qe({...Je,...e,...r})}const Ke=Xe({meta:{src:"/_astro/logo-github.D67spf7u.svg",width:1024,height:1024,format:"svg"},attributes:{mode:"inline",width:"1024",height:"1024",viewBox:"0 0 1024 1024",fill:"none"},children:`
  <circle cx="512" cy="512" r="480" fill="white" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23" />
`}),ne=e=>{const t=document.querySelector("body");t.classList.remove(...Array.from(t.classList).filter(r=>r.startsWith("theme-"))),t.classList.add(`theme-${e}`)},et=()=>{const e=Number(A.get());console.log("currentTheme",e);const t=document.documentElement,r=parseInt(getComputedStyle(t).getPropertyValue("--max-themes").trim());console.log("maxThemes",r);const n=(e+1)%r;console.log("nextIndex",n);const o=document.querySelector("body");console.log("Current body classes:",o.classList),A.set(n),ne(n),console.log("New body classes:",o.classList)},tt={__name:"Sidebar",props:["categories"],setup(e,{expose:t}){t();const r=e,n=_($),o=_(C),i=_(A);k(()=>{console.log("selectedTheme",A.get())});const a={props:r,$isOpen:n,$selectedCategories:o,$selectedTheme:i,toggleSidebar:()=>{console.log("toggleSidebar"),$.set(!$.get())},clickCategory:c=>{console.log("selectCategory",c);const p=C.get();p.includes(c)?C.set(p.filter(u=>u!==c)):C.set([...p,c]),console.log("selectedCategories",C.get())},ref:ae,get github(){return Ke},get useStore(){return _},get cycleTheme(){return et},get applyThemeIndexToDom(){return ne},get isSidebarOpen(){return $},get selectedCategories(){return C},get selectedTheme(){return A},onMounted:k};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},rt={class:"relative z-30"},nt={class:"flex gap-4 my-4 items-center justify-center overflow-hidden"},st={class:"h-[30px] w-[30px] aspect-square"},ot={href:"https://github.com/mytchallb/resources.mytchall.dev",target:"_blank"},it=["src"],ct={class:"flex flex-col gap-1"},lt=["onClick"],at={class:"flex items-center gap-2"},ut={class:"flex items-center gap-1 flex-1 justify-between"},ft={class:"capitalize text-copy"};function pt(e,t,r,n,o,i){return R(),I(M,null,[f("div",{class:L(["absolute w-full h-full z-20 inset-0 bg-black/40 lg:hidden",[n.$isOpen?"":"hidden"]]),onClick:n.toggleSidebar},null,2),f("div",{class:L(["h-full shadow-md top-0 left-0 bg-primary py-4 overflow-hidden z-30",[n.$isOpen?"w-[160px] absolute lg:relative px-2":"w-[0px] absolute lg:relative lg:w-[160px] lg:px-2"]])},[f("div",rt,[t[2]||(t[2]=f("h1",{class:"text-xl mb-4 px-4 font-bold overflow-hidden relative"},[f("div",{class:"text-copy"},"Dev Resources")],-1)),f("div",nt,[f("div",st,[f("button",{class:"w-full h-full rounded-md flex overflow-hidden cursor-pointer border-2 border-[#808080]",onClick:t[0]||(t[0]=(...s)=>n.cycleTheme&&n.cycleTheme(...s))},t[1]||(t[1]=[ce('<span class="bg-primary flex-1"></span><span class="bg-secondary flex-1"></span><span class="bg-accent flex-1"></span><span class="bg-accent-secondary flex-1"></span><span class="bg-copy flex-1"></span>',5)]))]),f("a",ot,[f("img",{src:n.github.src,alt:"github",class:"w-7 h-7"},null,8,it)])]),f("ul",ct,[(R(!0),I(M,null,le(r.categories,s=>(R(),I("li",{key:s.name,class:L(["cursor-pointer rounded-md p-2 relative whitespace-nowrap overflow-hidden",[n.$selectedCategories.includes(s.name)?"bg-accent hover:bg-accent/80":"hover:bg-secondary"]]),onClick:l=>n.clickCategory(s.name)},[f("div",at,[f("div",ut,[f("span",ft,D(s.name),1),s.count?(R(),I("span",{key:0,class:L(["text-sm px-2 py-0.5 text-copy rounded-full",n.$selectedCategories.includes(s.name)?"bg-accent-secondary":"bg-secondary"])},D(s.count),3)):ue("",!0)])])],10,lt))),128))])])],2)],64)}const gt=ie(tt,[["render",pt]]);export{gt as default};
