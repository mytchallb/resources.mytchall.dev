import{w as v,v as g,a as E,b as G}from"./runtime-dom.esm-bundler.BmsWpnhg.js";import{_ as H}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as n,a as e,b as F,w as d,F as V,r as j,n as I,d as K,t as x,e as s,o as O,f as i}from"./runtime-core.esm-bundler.ZlGA0rg4.js";const W={__name:"AddScreen",setup(A,{expose:t}){t();const p=s(""),o=s(""),y=s(""),w=s(""),r=s(""),c=s(""),u=s([]),M=s(""),U=s(""),h=s(""),k=s(!1),_=s(!1),b=s([]),S=s([]),N=s([]),m=s("");O(async()=>{try{const a=await(await fetch("/add/tags")).json();S.value=a.tags,N.value=a.categories}catch(l){console.error("Error fetching tags and categories:",l)}});const B=()=>{_.value=!0},R=()=>{_.value=!1},q=l=>{_.value=!1;const a=Array.from(l.dataTransfer.files);D(a)},J=l=>{const a=Array.from(l.target.files);D(a)},D=l=>{l.forEach(a=>{if(a.type.startsWith("image/")){const T=new FileReader;T.onload=f=>{b.value.push({file:a,preview:f.target.result})},T.readAsDataURL(a)}})},L={title:p,url:o,excerpt:y,pricing:w,cost:r,category:c,selectedTags:u,content:M,successMessage:U,errorMessage:h,isSubmitting:k,isDragging:_,uploadedImages:b,tags:S,categories:N,newTag:m,dragOver:B,dragLeave:R,handleDrop:q,handleFileSelect:J,handleFiles:D,removeImage:l=>{b.value.splice(l,1)},toggleTag:l=>{u.value.includes(l)?u.value=u.value.filter(a=>a!==l):u.value.push(l)},addNewTag:()=>{m.value.trim()&&!S.value.includes(m.value.trim())&&(S.value.push(m.value.trim()),u.value.push(m.value.trim()),m.value="")},submitForm:async()=>{k.value=!0,h.value="",U.value="";const l=p.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")+".md",a=[];for(const f of b.value){const P=new FormData;P.append("file",f.file);try{const C=await fetch("/add/api/upload",{method:"POST",body:P});if(!C.ok)throw new Error("Failed to upload image");const z=await C.json();a.push(z.path)}catch(C){console.error("Error uploading image:",C),h.value="Failed to upload images. Please try again.",k.value=!1;return}}const T=`---
title: "${p.value}"
tags: ${JSON.stringify(u.value)}
images: ${JSON.stringify(a)}
category: "${c.value}"
url: "${o.value}"
cost: "${r.value}"
pricing: "${w.value}"
date: "${new Date().toISOString()}"
excerpt: "${y.value}"
---

${M.value}`;try{if(!(await fetch("/add/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:l,content:T})})).ok)throw new Error("Failed to create file");U.value=`Successfully created ${l}`,p.value="",o.value="",y.value="",w.value="",r.value="",c.value="",u.value=[],M.value="",b.value=[]}catch(f){h.value="Failed to create file. Please try again.",console.error("Error:",f)}finally{k.value=!1}},ref:s,onMounted:O};return Object.defineProperty(L,"__isScriptSetup",{enumerable:!1,value:!0}),L}},Q={class:"bg-black h-screen overflow-y-auto"},X={class:"max-w-screen-2xl mx-auto p-8 pb-10 h-full flex flex-col"},Y={class:"space-y-4 flex flex-col"},Z={class:"flex-1 pb-8"},$={class:"space-y-4"},ee={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},te={id:"category-list"},oe=["value"],re={class:"mt-2 flex gap-4 items-center"},le={class:"flex gap-4"},se={class:"flex items-center cursor-pointer"},ae={class:"flex items-center cursor-pointer"},ne={class:"flex items-center cursor-pointer"},ie={class:"flex-1"},de={class:"flex flex-col"},ue={class:"mt-2 flex flex-wrap gap-2"},ce=["onClick"],ge={class:"relative"},me=["onKeydown"],fe={for:"file-upload",class:"w-full cursor-pointer"},pe={key:0,class:"mt-4 grid grid-cols-6 gap-2"},be=["src"],ve=["onClick"],xe={class:"flex justify-center items-center"},ye=["disabled"],we={key:0,class:"mt-4 p-4 bg-green-900 text-green-300 rounded-md"},he={key:1,class:"mt-4 p-4 bg-red-900 text-red-300 rounded-md"};function ke(A,t,p,o,y,w){return i(),n("div",Q,[e("div",X,[t[24]||(t[24]=e("h1",{class:"text-2xl font-bold mb-6 text-white"},"Add Resource",-1)),e("form",{onSubmit:v(o.submitForm,["prevent"]),class:"grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1"},[e("div",Y,[e("div",null,[t[10]||(t[10]=e("label",{for:"title",class:"block text-sm font-medium text-gray-300"},"Title",-1)),d(e("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=r=>o.title=r),required:"",class:"mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",placeholder:"Enter title"},null,512),[[g,o.title]])]),e("div",null,[t[11]||(t[11]=e("label",{for:"excerpt",class:"block text-sm font-medium text-gray-300"},"Excerpt",-1)),d(e("textarea",{rows:"3",id:"excerpt","onUpdate:modelValue":t[1]||(t[1]=r=>o.excerpt=r),required:"",class:"mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",placeholder:"Enter excerpt"},null,512),[[g,o.excerpt]])]),e("div",Z,[t[12]||(t[12]=e("label",{for:"content",class:"block text-sm font-medium text-gray-300"},"Content",-1)),d(e("textarea",{id:"content","onUpdate:modelValue":t[2]||(t[2]=r=>o.content=r),required:"",rows:"10",class:"h-full mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",placeholder:"Enter markdown content"},null,512),[[g,o.content]])])]),e("div",$,[e("div",ee,[e("div",null,[t[13]||(t[13]=e("label",{for:"url",class:"block text-sm font-medium text-gray-300"},"Full URL",-1)),d(e("input",{type:"text",id:"url","onUpdate:modelValue":t[3]||(t[3]=r=>o.url=r),required:"",class:"mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",placeholder:"Enter URL"},null,512),[[g,o.url]])]),e("div",null,[t[14]||(t[14]=e("label",{for:"category",class:"block text-sm font-medium text-gray-300"},"Category",-1)),d(e("input",{type:"text",id:"category","onUpdate:modelValue":t[4]||(t[4]=r=>o.category=r),required:"",list:"category-list",class:"mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",placeholder:"Select or type a category"},null,512),[[g,o.category]]),e("datalist",te,[(i(!0),n(V,null,j(o.categories,r=>(i(),n("option",{key:r,value:r,class:"capitalize"},x(r),9,oe))),128))])])]),e("div",null,[t[18]||(t[18]=e("label",{class:"block text-sm font-medium text-gray-300"},"Pricing & Cost",-1)),e("div",re,[e("div",le,[e("label",se,[d(e("input",{type:"radio","onUpdate:modelValue":t[5]||(t[5]=r=>o.pricing=r),value:"free",class:"form-radio h-4 w-4 text-blue-500 focus:ring-blue-500"},null,512),[[E,o.pricing]]),t[15]||(t[15]=e("span",{class:"ml-2 text-gray-300"},"Free",-1))]),e("label",ae,[d(e("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=r=>o.pricing=r),value:"paid",class:"form-radio h-4 w-4 text-blue-500 focus:ring-blue-500"},null,512),[[E,o.pricing]]),t[16]||(t[16]=e("span",{class:"ml-2 text-gray-300"},"Paid",-1))]),e("label",ne,[d(e("input",{type:"radio","onUpdate:modelValue":t[7]||(t[7]=r=>o.pricing=r),value:"freemium",class:"form-radio h-4 w-4 text-blue-500 focus:ring-blue-500"},null,512),[[E,o.pricing]]),t[17]||(t[17]=e("span",{class:"ml-2 text-gray-300"},"Freemium",-1))])]),e("div",ie,[d(e("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=r=>o.cost=r),class:"block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",placeholder:"Enter price range"},null,512),[[g,o.cost]])])])]),e("div",de,[t[20]||(t[20]=e("label",{class:"block text-sm font-medium text-gray-300"},"Tags",-1)),e("div",ue,[(i(!0),n(V,null,j(o.tags,r=>(i(),n("button",{key:r,type:"button",onClick:c=>o.toggleTag(r),class:I(["px-3 py-1 rounded-full text-sm transition-colors duration-200",o.selectedTags.includes(r)?"bg-blue-600 text-white border border-blue-600":"bg-gray-900 text-gray-300 border border-gray-700 hover:bg-gray-800"])},x(r),11,ce))),128)),e("div",ge,[d(e("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=r=>o.newTag=r),onKeydown:G(v(o.addNewTag,["prevent"]),["enter"]),class:"px-3 py-1 rounded-full text-sm border border-gray-700 bg-gray-900 text-white focus:outline-none focus:border-blue-500",placeholder:"+ Add tag"},null,40,me),[[g,o.newTag]]),o.newTag?(i(),n("button",{key:0,onClick:o.addNewTag,class:"absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400"},t[19]||(t[19]=[e("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"})],-1)]))):F("",!0)])])]),e("div",null,[t[23]||(t[23]=e("label",{class:"block text-sm font-medium text-gray-300"},"Images",-1)),e("div",{class:"mt-2 relative cursor-pointer",onDragover:v(o.dragOver,["prevent"]),onDragleave:v(o.dragLeave,["prevent"]),onDrop:v(o.handleDrop,["prevent"])},[e("div",{class:I(["flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-md",{"border-blue-500":o.isDragging}])},[e("label",fe,[t[21]||(t[21]=K('<div class="space-y-1 text-center"><svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="flex text-sm text-gray-400 justify-center"><span class="font-medium text-blue-500 hover:text-blue-400">Upload files</span><p class="pl-1">or drag and drop</p></div><p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p></div>',1)),e("input",{id:"file-upload",type:"file",class:"sr-only",multiple:"",accept:"image/*",onChange:o.handleFileSelect},null,32)])],2)],32),o.uploadedImages.length>0?(i(),n("div",pe,[(i(!0),n(V,null,j(o.uploadedImages,(r,c)=>(i(),n("div",{key:c,class:"relative aspect-square"},[e("img",{src:r.preview,class:"w-full h-full object-cover rounded"},null,8,be),e("button",{type:"button",onClick:u=>o.removeImage(c),class:"absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"},t[22]||(t[22]=[e("svg",{class:"w-3 h-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,ve)]))),128))])):F("",!0)]),e("div",xe,[e("button",{type:"submit",disabled:o.isSubmitting,class:"inline-flex justify-center cursor-pointer rounded-md border border-transparent bg-blue-600 py-4 px-4 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"},x(o.isSubmitting?"Creating...":"Create Resource"),9,ye)])])],32),o.successMessage?(i(),n("div",we,x(o.successMessage),1)):F("",!0),o.errorMessage?(i(),n("div",he,x(o.errorMessage),1)):F("",!0)])])}const De=H(W,[["render",ke]]);export{De as default};
