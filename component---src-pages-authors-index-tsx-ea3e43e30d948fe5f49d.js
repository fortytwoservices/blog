"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4253],{5911:function(e,a,t){t.d(a,{Z:function(){return d}});var l=t(1883),r=t(7294),s=t(498),n=t(7660);const m=e=>{let{icon:a,className:t=""}=e;const l=n.$s[a].icon;return r.createElement(l,{className:t})},i=e=>{let{data:a,className:t=""}=e;return r.createElement("ul",{className:"list-none grid grid-flow-col-dense auto-cols-auto "+t},a.map((e=>{var a;let[t,l]=e,s=(null===(a=n.$s[t])||void 0===a?void 0:a.url)+"/"+l;return(/^(?:https?:\/\/)/.test(l)||/^mailto:/.test(l))&&(s=l),r.createElement("li",{key:t},r.createElement("a",{href:s,target:"_blank",rel:"noreferrer"},r.createElement(m,{className:"site-link",icon:t})))})))};var c=(0,r.memo)(i);const o=e=>{let{bio:a,name:t,initial:n,avatar:{normal:m,className:i="h-32 w-32"},sns:o,className:d="",yamlId:g}=e;return r.createElement("div",{className:d+" flex flex-wrap space-x-0 sm:space-x-8"},r.createElement("div",{className:"w-full sm:w-auto text-center"},r.createElement(s.Z,{className:"mb-4 "+i,initial:n,image:m})),r.createElement("div",{className:"flex flex-col items-stretch justify-between flex-1 text-center sm:text-left"},r.createElement("h3",{className:"leading-tight md:leading-tight"},t,g&&r.createElement(l.rU,{to:"/authors/@"+g,className:"site-link mx-2"},r.createElement("small",null,"@",g))),r.createElement("p",{className:"text-base"},a),r.createElement(c,{className:"max-w-lg text-xl my-0",data:o})))};var d=(0,r.memo)(o)},498:function(e,a,t){var l=t(7294),r=t(8032);const s=e=>{let{image:a,initial:t,className:s=""}=e;const n=(0,r.c)(a);return n?l.createElement(r.G,{className:"rounded-full z-0 ring-2 ring-white dark:ring-gray-600 avatar avatar-rounded "+s,image:n,alt:""}):l.createElement("figure",{className:"avatar avatar-rounded bg-gray-500 text-white ring ring-white "+s,"data-initial":t})};a.Z=(0,l.memo)(s)},5460:function(e,a,t){t.r(a);var l=t(7294),r=t(5916),s=t(5911),n=t(5648);const m=e=>{let{data:{allAuthorsYaml:{nodes:a}}}=e;const{siteUrl:t}=(0,n.$W)();return l.createElement(r.Z,{pageUrl:t+"/authors",pageTitle:"Authors"},l.createElement("h1",{className:"leading-tight md:leading-tight md:text-4xl text-3xl text-center mb-32"},"Authors (",a.length,")"),l.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-32"},a.map((e=>{let{name:a,initial:t,yamlId:r,avatar:n,sns:m,bio:i}=e;return l.createElement(s.Z,{className:"p-8 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded",key:r,bio:i,name:a,initial:t,avatar:n,sns:m,yamlId:r})}))))};a.default=(0,l.memo)(m)}}]);
//# sourceMappingURL=component---src-pages-authors-index-tsx-ea3e43e30d948fe5f49d.js.map