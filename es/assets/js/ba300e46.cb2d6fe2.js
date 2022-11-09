"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1649],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),f=r,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return o?n.createElement(m,c(c({ref:t},p),{},{components:o})):n.createElement(m,c({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},29458:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"404 Page"},c=void 0,s={unversionedId:"cookbook/not-found-page",id:"version-1.x/cookbook/not-found-page",title:"404 Page",description:"Here's a way to implement custom 404 pages.",source:"@site/versioned_docs/version-1.x/cookbook/not-found-page.md",sourceDirName:"cookbook",slug:"/cookbook/not-found-page",permalink:"/es/docs/1.x/cookbook/not-found-page",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/not-found-page.md",tags:[],version:"1.x",frontMatter:{title:"404 Page"},sidebar:"someSidebar",previous:{title:"Scheduling Jobs",permalink:"/es/docs/1.x/cookbook/scheduling-jobs"},next:{title:"Request Body Size",permalink:"/es/docs/1.x/cookbook/request-body-size"}},i={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here's a way to implement custom 404 pages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class ViewController {\n  @Get('/home')\n  home() {\n    return new HttpResponseOK('You are on the home page!');\n  }\n}\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @Get('*')\n  notFound() {\n    return new HttpResponseNotFound('The page your are looking for does not exist');\n  }\n}\n")))}u.isMDXComponent=!0}}]);