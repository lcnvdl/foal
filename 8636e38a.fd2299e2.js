(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(290)),i={title:"Request Body Size"},c={unversionedId:"cookbook/request-body-size",id:"version-1.x/cookbook/request-body-size",isDocsHomePage:!1,title:"Request Body Size",description:"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key settings.bodyParser.limit. If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the bytes library for parsing.",source:"@site/versioned_docs/version-1.x/cookbook/request-body-size.md",slug:"/cookbook/request-body-size",permalink:"/docs/1.x/cookbook/request-body-size",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/cookbook/request-body-size.md",version:"1.x",sidebar:"someSidebar",previous:{title:"404 Page",permalink:"/docs/1.x/cookbook/404-page"},next:{title:"ExpressJS",permalink:"/docs/1.x/cookbook/expressjs"}},s=[],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, FoalTS only accepts request bodies lower than 100kb. This value can be increased by using the configuration key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.bodyParser.limit"),". If a number is provided, then the value specifies the number of bytes. If it is a string, the value is passed to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/bytes"}),"bytes")," library for parsing."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"config/default.yml (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  bodyParser:\n    limit: '50mb'\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"config/default.json (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "bodyParser": {\n      "limit": "50mb"\n    }\n  }\n}\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},".env (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"SETTINGS_BODY_PARSER_LIMIT=50mb\n")))}p.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||a;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);