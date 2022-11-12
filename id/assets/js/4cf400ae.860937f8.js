"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"ExpressJS"},s=void 0,p={unversionedId:"common/expressjs",id:"common/expressjs",title:"ExpressJS",description:"FoalTS applications are created with the createApp function in the src/index.ts file. This function takes the root controller class (known as AppController) as parameter.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/common/expressjs.md",sourceDirName:"common",slug:"/common/expressjs",permalink:"/id/docs/common/expressjs",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/expressjs.md",tags:[],version:"current",frontMatter:{title:"ExpressJS"},sidebar:"someSidebar",previous:{title:"Utilities",permalink:"/id/docs/common/utilities"},next:{title:"SQL Databases",permalink:"/id/docs/databases/typeorm"}},i={},l=[{value:"Custom Express Instance",id:"custom-express-instance",level:2},{value:"Pre and Post Express Middlewares",id:"pre-and-post-express-middlewares",level:2},{value:"Migrating from Express to FoalTS",id:"migrating-from-express-to-foalts",level:2},{value:"Integrating Foal with an existing Express application",id:"integrating-foal-with-an-existing-express-application",level:3},{value:"Calling services from outside the Foal application",id:"calling-services-from-outside-the-foal-application",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FoalTS applications are created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file. This function takes the root controller class (known as ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController"),") as parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\n")),(0,a.kt)("p",null,"The returned value is an ExpressJS application that can be used as is to create an HTTP server. ",(0,a.kt)("strong",{parentName:"p"},"FoalTS is not designed to integrate Express middlewares in its controllers or hooks"),". However, if for any reason you need to apply globally a middleware to the application, you have two ways to do it."),(0,a.kt)("h2",{id:"custom-express-instance"},"Custom Express Instance"),(0,a.kt)("p",null,"You can provide your own express instance to ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as express from 'express';\n\nconst expressApp = express();\nexpressApp.use(/* an Express middleware */)\n\nconst app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n\n")),(0,a.kt)("h2",{id:"pre-and-post-express-middlewares"},"Pre and Post Express Middlewares"),(0,a.kt)("p",null,"You can also pass global Express middlewares as options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as rateLimit from 'express-rate-limit';\n\nconst app = await createApp(AppController, {\n  preMiddlewares: [\n    /* Express middlewares */\n  ],\n  postMiddlewares: [\n    /* Express middlewares */\n  ]\n});\n")),(0,a.kt)("p",null,"Pre-middlewares are executed before Foal's controllers and hooks and before the internal Express middlewares of the framework. Post-middlewares are executed only if there was no controller to handle the request, but before the 500 or 404 handlers get called."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the rare case that you need to run middleware after Foal's internal Express middlewares, you can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"afterPreMiddlewares")," option for this.")),(0,a.kt)("h2",{id:"migrating-from-express-to-foalts"},"Migrating from Express to FoalTS"),(0,a.kt)("h3",{id:"integrating-foal-with-an-existing-express-application"},"Integrating Foal with an existing Express application"),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", set the following two options to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    // ...\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n  }\n}\n')),(0,a.kt)("p",null,"Then, in your existing code, create the FoalTS application and use it as if it were a simple Express router."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const app = await createApp(AppController);\n\nconst expressApp = express();\nexpressApp.use('/api', app);\nexpressApp.listen(3000, () => console.log('Listening on port 3000...'));\n")),(0,a.kt)("h3",{id:"calling-services-from-outside-the-foal-application"},"Calling services from outside the Foal application"),(0,a.kt)("p",null,"In case your are migrating your ExpressJS application to FoalTS, you can also access FoalTS service manager using ",(0,a.kt)("inlineCode",{parentName:"p"},"app.foal.services"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\napp.foal.services.get(MyServiceClass).doSomething();\n")))}d.isMDXComponent=!0}}]);