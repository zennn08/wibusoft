"use strict";(self.webpackChunkwbsdocs=self.webpackChunkwbsdocs||[]).push([[5990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(r),s=a,g=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},l="Delete Message",i={unversionedId:"features/group/delete",id:"features/group/delete",title:"Delete Message",description:"Berfungsi untuk mengehapus pesan di group.",source:"@site/docs/features/group/delete.md",sourceDirName:"features/group",slug:"/features/group/delete",permalink:"/docs/features/group/delete",draft:!1,editUrl:"https://github.com/zennn08/wibusoft/tree/master/docs/features/group/delete.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Anti View Once",permalink:"/docs/features/group/antiviewone"},next:{title:"Demote Detector",permalink:"/docs/features/group/demote-detect"}},p={},d=[{value:"Command",id:"command",level:2},{value:"#delete",id:"delete",level:3},{value:"Note",id:"note",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete-message"},"Delete Message"),(0,a.kt)("p",null,"Berfungsi untuk mengehapus pesan di group."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Info"),(0,a.kt)("th",{parentName:"tr",align:"center"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("div",{class:"label license nitro"},"Only Nitro")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Menggunakan Prefix"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Menggunakan limit"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Hanya Owner"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Hanya Premium"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Hanya Group"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Hanya Admin Group"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Hanya Private Chat"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Limit"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Cooldown"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Level"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("h3",{id:"delete"},"#delete"),(0,a.kt)("p",null,"Reply pesan yang ingin di hapus dengan caption ",(0,a.kt)("inlineCode",{parentName:"p"},"#delete"),"."),(0,a.kt)("p",null,"Alias :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"#d"),(0,a.kt)("li",{parentName:"ul"},"#del")),(0,a.kt)("h2",{id:"note"},"Note"),(0,a.kt)("p",null,"Kamu dapat menghapus pesan dari orang lain, jika bot merupakan admin grup."))}u.isMDXComponent=!0}}]);