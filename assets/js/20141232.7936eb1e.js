"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Version 3.1 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.1-release-notes.png",tags:["release"]},s=void 0,i={permalink:"/blog/2022/11/28/version-3.1-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-11-28-version-3.1-release-notes.md",source:"@site/blog/2022-11-28-version-3.1-release-notes.md",title:"Version 3.1 release notes",description:"Banner",date:"2022-11-28T00:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.765,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Creator of FoalTS. Software engineer.",url:"https://loicpoullain.com",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 3.1 release notes",author:"Lo\xefc Poullain",author_title:"Creator of FoalTS. Software engineer.",author_url:"https://loicpoullain.com",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-3.1-release-notes.png",tags:["release"]},prevItem:{title:"Version 3.2 release notes",permalink:"/blog/2023/04/04/version-3.2-release-notes copy"},nextItem:{title:"Version 3.0 release notes",permalink:"/blog/2022/11/01/version-3.0-release-notes"}},l={authorsImageUrls:[void 0]},p=[{value:"New <code>foal upgrade</code> command",id:"new-foal-upgrade-command",level:2},{value:"Social authentication supports subdomains",id:"social-authentication-supports-subdomains",level:2},{value:"Regression on OpenAPI keyword &quot;example&quot; has been fixed",id:"regression-on-openapi-keyword-example-has-been-fixed",level:2},{value:"<code>.env</code> files support whitespaces",id:"env-files-support-whitespaces",level:2},{value:"Value of the <code>Strict-Transport-Security</code> header has been increased",id:"value-of-the-strict-transport-security-header-has-been-increased",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:n(79408).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 3.1 of ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out! Here are the improvements that it brings:"),(0,a.kt)("h2",{id:"new-foal-upgrade-command"},"New ",(0,a.kt)("inlineCode",{parentName:"h2"},"foal upgrade")," command"),(0,a.kt)("p",null,"This command allows you to upgrade all ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/*")," dependencies and dev dependencies to a given version."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'foal upgrade # upgrade to the latest version\nfoal upgrade 3.0.0\nfoal upgrade "~3.0.0"\n')),(0,a.kt)("h2",{id:"social-authentication-supports-subdomains"},"Social authentication supports subdomains"),(0,a.kt)("p",null,"If you're using multiple subdomains domains to handle social authentication, you can now do so by specifying a custom cookie domain in the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    cookie:\n      domain: foalts.org\n")),(0,a.kt)("h2",{id:"regression-on-openapi-keyword-example-has-been-fixed"},'Regression on OpenAPI keyword "example" has been fixed'),(0,a.kt)("p",null,"In version 3.0, using the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," in an validation object was raising an error. This has been fixed."),(0,a.kt)("h2",{id:"env-files-support-whitespaces"},(0,a.kt)("inlineCode",{parentName:"h2"},".env")," files support whitespaces"),(0,a.kt)("p",null,"Whitespaces around the equal symbol are now allowed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"FOO_BAR_WITH_WHITESPACES_AROUND_THE_NAME = hello you\n")),(0,a.kt)("h2",{id:"value-of-the-strict-transport-security-header-has-been-increased"},"Value of the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Strict-Transport-Security")," header has been increased"),(0,a.kt)("p",null,"It has been increased from 15,552,000 to 31,536,000."))}c.isMDXComponent=!0},79408:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/banner-0305ae523c9048e2b6e9fac5d191b41e.png"}}]);