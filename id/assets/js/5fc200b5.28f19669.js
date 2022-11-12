"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Rate Limiting"},i=void 0,s={unversionedId:"security/rate-limiting",id:"security/rate-limiting",title:"Rate Limiting",description:"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/security/rate-limiting.md",sourceDirName:"security",slug:"/security/rate-limiting",permalink:"/id/docs/security/rate-limiting",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/security/rate-limiting.md",tags:[],version:"current",frontMatter:{title:"Rate Limiting"},sidebar:"someSidebar",previous:{title:"CORS",permalink:"/id/docs/security/cors"},next:{title:"Body Size Limiting",permalink:"/id/docs/security/body-size-limiting"}},p={},l=[{value:"Basic Example",id:"basic-example",level:2},{value:"Usage with CORS",id:"usage-with-cors",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To avoid brute force attacks or overloading your application, you can set up a rate limiter to limit the number of requests a user can send to your application."),(0,o.kt)("h2",{id:"basic-example"},"Basic Example"),(0,o.kt)("p",null,"Foal does not provide a built-in utility for this, but you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nfriedly/express-rate-limit"},"express-rate-limit")," package to handle it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install express express-rate-limit\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"src/index.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Config, createApp, displayServerURL } from '@foal/core';\nimport * as express from 'express';\nimport * as rateLimit from 'express-rate-limit';\n\n// App\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const expressApp = express();\n  expressApp.use(rateLimit({\n    // Limit each IP to 100 requests per windowMs\n    max: 100,\n    // 15 minutes\n    windowMs: 15 * 60 * 1000,\n    handler (req, res, next) {\n      // Set default FoalTS headers to the response of limited requests\n      res.removeHeader('X-Powered-By');\n      res.setHeader('X-Content-Type-Options', 'nosniff');\n      res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n      res.setHeader('X-XSS-Protection', '1; mode=block');\n      res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n      \n      // Send the response with the default statusCode and message from rateLimit\n      res.status(this.statusCode || 429).send(this.message);\n    }\n  }));\n    \n  const app = await createApp(AppController, { expressInstance: expressApp });\n\n  const port = Config.get('port', 'number', 3001);\n  app.listen(port, () => displayServerURL(port));\n}\n\nmain()\n  .catch(err => { console.error(err.stack); process.exit(1); });\n")),(0,o.kt)("h2",{id:"usage-with-cors"},"Usage with CORS"),(0,o.kt)("p",null,"In case your application needs to allow CORS requests, you can also update your ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"expressApp.use(rateLimit({\n  max: 100,\n  windowMs: 15 * 60 * 1000,\n  handler (req, res, next) {\n    res.removeHeader('X-Powered-By');\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('X-XSS-Protection', '1; mode=block');\n    res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains');\n\n    // Set CORS headers\n    res.setHeader('Access-Control-Allow-Origin', '*');\n    if (req.method === 'OPTIONS') {\n      // You may want to allow other headers depending on what you need (Authorization, etc).\n      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');\n      res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, PATCH, DELETE');\n    }\n\n    res.status(this.statusCode || 429).send(this.message);\n  }\n}));\n")))}u.isMDXComponent=!0}}]);