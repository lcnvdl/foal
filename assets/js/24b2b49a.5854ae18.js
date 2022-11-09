"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Angular, React & Vue"},i=void 0,l={unversionedId:"frontend-integration/angular-react-vue",id:"frontend-integration/angular-react-vue",title:"Angular, React & Vue",description:"Angular, React and Vue all provide powerful CLIs for creating frontend applications. These tools are widely used, regularly improved and extensively documented. That's why Foal CLI do not provide ready-made features to build the frontend in their place.",source:"@site/docs/frontend-integration/angular-react-vue.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/angular-react-vue",permalink:"/docs/frontend-integration/angular-react-vue",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/frontend-integration/angular-react-vue.md",tags:[],version:"current",frontMatter:{title:"Angular, React & Vue"},sidebar:"someSidebar",previous:{title:"Single Page Applications",permalink:"/docs/frontend-integration/single-page-applications"},next:{title:"JSX Server-Side Rendering",permalink:"/docs/frontend-integration/jsx-server-side-rendering"}},c={},d=[{value:"Creating a new Application",id:"creating-a-new-application",level:2},{value:"Angular",id:"angular",level:3},{value:"React",id:"react",level:3},{value:"Vue",id:"vue",level:3},{value:"Problems Solved by the <code>connect</code> Command",id:"problems-solved-by-the-connect-command",level:2},{value:"Origins that Do not Match",id:"origins-that-do-not-match",level:3},{value:"Build Outpath",id:"build-outpath",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal connect angular ../frontend\nfoal connect react ../frontend\nfoal connect vue ../frontend\n")),(0,r.kt)("p",null,"Angular, React and Vue all provide powerful CLIs for creating frontend applications. These tools are widely used, regularly improved and extensively documented. That's why Foal CLI do not provide ready-made features to build the frontend in their place."),(0,r.kt)("p",null,"Instead, FoalTS offers a convenient command, named ",(0,r.kt)("inlineCode",{parentName:"p"},"connect"),", to configure your frontend CLI so that it interacts smoothly with your Foal application. This way, you do not have to worry about the details of the configuration when starting a new project. You can leave this until later if you need it."),(0,r.kt)("h2",{id:"creating-a-new-application"},"Creating a new Application"),(0,r.kt)("h3",{id:"angular"},"Angular"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir my-app\ncd my-app\n\nfoal createapp backend\nng new frontend\n\ncd backend\nfoal connect angular ../frontend\n")),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir my-app\ncd my-app\n\nfoal createapp backend\nnpx create-react-app frontend --template typescript\n\ncd backend\nfoal connect react ../frontend\n")),(0,r.kt)("h3",{id:"vue"},"Vue"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir my-app\ncd my-app\n\nfoal createapp backend\nvue create frontend\n\ncd backend\nfoal connect vue ../frontend\n")),(0,r.kt)("h2",{id:"problems-solved-by-the-connect-command"},"Problems Solved by the ",(0,r.kt)("inlineCode",{parentName:"h2"},"connect")," Command"),(0,r.kt)("h3",{id:"origins-that-do-not-match"},"Origins that Do not Match"),(0,r.kt)("p",null,"When building a web application with a Angular / React / Vue, it is very common in development to have two servers serving on different ports. For example, with an application written in Foal and Angular, the backend server serves the port ",(0,r.kt)("inlineCode",{parentName:"p"},"3001")," and the frontend one servers the ",(0,r.kt)("inlineCode",{parentName:"p"},"4200"),"."),(0,r.kt)("p",null,"Consequently requests made by the frontend do not reach the backend as they have a different origin. One hacky solution is to replace the URL path to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," in development and to enable CORS requests."),(0,r.kt)("p",null,"This technique has some drawbacks however:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It may introduce a different codebase between the environments (dev and prod)."),(0,r.kt)("li",{parentName:"ul"},"And it disables a browser protection (the ",(0,r.kt)("inlineCode",{parentName:"li"},"Same-Origin policy"),").")),(0,r.kt)("p",null,"One way to get around this, keeping the policy and the same codebase, is to configure a proxy to redirect ",(0,r.kt)("inlineCode",{parentName:"p"},"4200")," requests to the port ",(0,r.kt)("inlineCode",{parentName:"p"},"3001"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," command does it for you."),(0,r.kt)("h3",{id:"build-outpath"},"Build Outpath"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"This feature only works with Angular and Vue."))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connect")," command also modifies the build output path of your front so that its bundles are saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"public/")," directory. This way, you can run the frontend and the backend build commands and directly ship the application to production."))}u.isMDXComponent=!0}}]);