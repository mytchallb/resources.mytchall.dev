import{c as f}from"./runtime-dom.esm-bundler.BmsWpnhg.js";import{u as m,e as p,f as _}from"./methods.Db856cR6.js";/* empty css                       */import{_ as b}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as o,f as c,a,F as v,r as x,w as h,n as T,t as y,e as g,h as w,o as k}from"./runtime-core.esm-bundler.ZlGA0rg4.js";const S={__name:"NavTags",props:["tags"],setup(r,{expose:n}){n();const i=m(p),e=r,d=g(e.tags),s={$selectedTags:i,props:e,tags:d,selectTag:t=>{console.log("clicked tag",t);const l=p.get();l.includes(t)?_(l.filter($=>$!==t)):_([...l,t]),console.log("selectedTags",p.get())},ref:g,get useStore(){return m},get selectedTags(){return p},get setTags(){return _}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},N={class:"flex-1 min-w-0"},C={class:"flex flex-col gap-1"},z={class:"overflow-x-auto scrollbar-hide px-4"},B={class:"flex flex-col gap-1"},j={class:"flex gap-1"},D=["onClick"],F={class:"flex gap-1"},O=["onClick"];function P(r,n,i,e,d,u){return c(),o("div",N,[a("div",C,[a("div",z,[a("div",B,[a("div",j,[(c(!0),o(v,null,x(e.tags,(s,t)=>h((c(),o("span",{key:s,onClick:l=>e.selectTag(s),class:T(`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${e.$selectedTags.includes(s)?"bg-accent":"bg-primary"}`)},y(s),11,D)),[[f,t%2===0]])),128))]),a("div",F,[(c(!0),o(v,null,x(e.tags,(s,t)=>h((c(),o("span",{key:s,onClick:l=>e.selectTag(s),class:T(`capitalize text-copy px-2 py-2 rounded-md cursor-pointer hover:bg-accent whitespace-nowrap ${e.$selectedTags.includes(s)?"bg-accent":"bg-primary"}`)},y(s),11,O)),[[f,t%2===1]])),128))])])])])])}const V=b(S,[["render",P]]),E={__name:"Nav",props:["tags"],setup(r,{expose:n}){n();const e={props:r,ref:g,onMounted:k,NavTags:V};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}},L={class:"bg-secondary py-2 w-full flex flex-col"},M={class:""};function q(r,n,i,e,d,u){return c(),o("div",L,[a("div",M,[w(e.NavTags,{tags:e.props.tags},null,8,["tags"])])])}const K=b(E,[["render",q]]);export{K as default};
