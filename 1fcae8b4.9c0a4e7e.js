(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||a;return n?r.a.createElement(f,i(i({ref:t},p),{},{components:n})):r.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(250)),c={title:"404 Page"},i={unversionedId:"cookbook/404-page",id:"cookbook/404-page",isDocsHomePage:!1,title:"404 Page",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/cookbook/404-page.md",slug:"/cookbook/404-page",permalink:"/docs/cookbook/404-page",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/404-page.md",version:"current",sidebar:"someSidebar",previous:{title:"Scheduling Jobs",permalink:"/docs/cookbook/scheduling-jobs"},next:{title:"Request Body Size",permalink:"/docs/cookbook/request-body-size"}},u=[],p={rightToc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"Here's a way to implement custom 404 pages."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"class ViewController {\n  @Get('/home')\n  home() {\n    return new HttpResponseOK('You are on the home page!');\n  }\n}\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @Get('*')\n  notFound() {\n    return new HttpResponseNotFound('The page your are looking for does not exist');\n  }\n}\n")))}l.isMDXComponent=!0}}]);