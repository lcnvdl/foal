"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"OpenAPI"},i=void 0,c={unversionedId:"upgrade-to-v2/openapi",id:"version-2.x/upgrade-to-v2/openapi",title:"OpenAPI",description:"From version 2, the settings.openapi.useHooks configuration is enabled by default. This means that when generating the OpenAPI document, FoalTS will use the OpenAPI decorators but also the current hooks to create the document.",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-2.x/upgrade-to-v2/openapi.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/openapi",permalink:"/id/docs/2.x/upgrade-to-v2/openapi",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-2.x/upgrade-to-v2/openapi.md",tags:[],version:"2.x",frontMatter:{title:"OpenAPI"}},p={},s=[{value:"New features",id:"new-features",level:2},{value:"Validation &amp; OpenAPI schema references",id:"validation--openapi-schema-references",level:3}],u={toc:s};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"From version 2, the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.openapi.useHooks")," configuration is enabled by default. This means that when generating the OpenAPI document, FoalTS will use the OpenAPI decorators but also the current hooks to create the document."),(0,o.kt)("h2",{id:"new-features"},"New features"),(0,o.kt)("h3",{id:"validation--openapi-schema-references"},"Validation & OpenAPI schema references"),(0,o.kt)("p",null,"OpenAPI schema references are now supported in validation hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ApiDefineRequestBody,\n  Post,\n  Put,\n  ValidateBody,\n} from '@foal/core';\n\n@ApiDefineRequestBody('product', { /* ... */ })\nclass ProductController {\n\n  @Post('/products')\n  @ValidateBody({\n    $ref: '#/components/requestBodies/product'\n  })\n  createProduct(ctx) {\n    // ...\n  }\n\n  @Put('/products/:id')\n  @ValidateBody({\n    $ref: '#/components/requestBodies/product'\n  })\n  replaceProduct(ctx) {\n    // ...\n  }\n\n}\n")))}l.isMDXComponent=!0}}]);