"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Nuxt"},i=void 0,l={unversionedId:"frontend/nuxt.js",id:"frontend/nuxt.js",title:"Nuxt",description:"Nuxt is a frontend framework based on Vue.JS.",source:"@site/docs/frontend/nuxt.js.md",sourceDirName:"frontend",slug:"/frontend/nuxt.js",permalink:"/docs/frontend/nuxt.js",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend/nuxt.js.md",tags:[],version:"current",frontMatter:{title:"Nuxt"},sidebar:"someSidebar",previous:{title:"Server-Side Rendering",permalink:"/docs/frontend/server-side-rendering"},next:{title:"404 Page",permalink:"/docs/frontend/not-found-page"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Set Up",id:"set-up",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nuxtjs.org/"},"Nuxt")," is a frontend framework based on ",(0,a.kt)("a",{parentName:"p",href:"http://vuejs.org"},"Vue.JS"),"."),(0,a.kt)("p",null,"This document explains how to use it in conjunction with FoalTS."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Create your frontend and backend projects in two different folders."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal createapp backend\nnpx create-nuxt-app frontend\n")),(0,a.kt)("h2",{id:"set-up"},"Set Up"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},"nuxt.config.js")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend/")," directory, move it to your ",(0,a.kt)("inlineCode",{parentName:"p"},"backend/")," directory and update its first lines as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"module.exports = {\n  srcDir: '../frontend',\n  // ...\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to your server directory and install ",(0,a.kt)("inlineCode",{parentName:"p"},"nuxt"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install nuxt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then update your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file as follows:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { loadNuxt, build } from 'nuxt';\n// ...\n\nasync function main() {\n  const isDev = process.env.NODE_ENV !== 'production';\n  // We get Nuxt instance\n  const nuxt = await loadNuxt(isDev ? 'dev' : 'start');\n\n  if (isDev) {\n    build(nuxt)\n  }\n\n  // ...\n\n  const app = await createApp(AppController, {\n    postMiddlewares: [\n      nuxt.render\n    ]\n  });\n\n  // ...\n}\n\nmain();\n\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, delete the file ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"backend/public"),"."))))}u.isMDXComponent=!0}}]);