import{c as f}from"./runtime-dom.esm-bundler.BdiLy6wZ.js";import{u as m,e as p,f as _}from"./methods.D7SLdm1p.js";/* empty css                       */import{_ as b}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{u as o,v as c,w as a,F as v,z as x,y as h,B as T,A as y,D as u,I as w,G as k}from"./runtime-core.esm-bundler.Dp9DFOkN.js";const S={__name:"NavTags",props:["tags"],setup(r,{expose:n}){n();const i=m(p),e=r,d=u(e.tags),s={$selectedTags:i,props:e,tags:d,selectTag:t=>{console.log("clicked tag",t);const l=p.get();l.includes(t)?_(l.filter($=>$!==t)):_([...l,t]),console.log("selectedTags",p.get())},ref:u,get useStore(){return m},get selectedTags(){return p},get setTags(){return _}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},N={class:"flex-1 min-w-0"},C={class:"flex flex-col gap-1"},z={class:"overflow-x-auto scrollbar-hide px-4"},B={class:"flex flex-col gap-1"},D={class:"flex gap-1"},j=["onClick"],F={class:"flex gap-1"},O=["onClick"];function P(r,n,i,e,d,g){return c(),o("div",N,[a("div",C,[a("div",z,[a("div",B,[a("div",D,[(c(!0),o(v,null,x(e.tags,(s,t)=>h((c(),o("span",{key:s,onClick:l=>e.selectTag(s),class:T(`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${e.$selectedTags.includes(s)?"bg-accent":"bg-primary"}`)},y(s),11,j)),[[f,t%2===0]])),128))]),a("div",F,[(c(!0),o(v,null,x(e.tags,(s,t)=>h((c(),o("span",{key:s,onClick:l=>e.selectTag(s),class:T(`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${e.$selectedTags.includes(s)?"bg-accent":"bg-primary"}`)},y(s),11,O)),[[f,t%2===1]])),128))])])])])])}const V=b(S,[["render",P]]),A={__name:"Nav",props:["tags"],setup(r,{expose:n}){n();const e={props:r,ref:u,onMounted:k,NavTags:V};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},E={class:"bg-secondary py-2 w-full flex flex-col"},G={class:""};function I(r,n,i,e,d,g){return c(),o("div",E,[a("div",G,[w(e.NavTags,{tags:e.props.tags},null,8,["tags"])])])}const K=b(A,[["render",I]]);export{K as default};
