(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(290)),c={title:"Protection CSRF"},i={unversionedId:"tutorials/real-world-example-with-react/13-csrf",id:"tutorials/real-world-example-with-react/13-csrf",isDocsHomePage:!1,title:"Protection CSRF",description:"Comme vous utilisez l'authentification avec des cookies, vous devez ajouter une protection CSRF \xe0 votre application. C'est tr\xe8s facile avec Foal, m\xeame lorsque vous construisez une SPA.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/13-csrf.md",slug:"/tutorials/real-world-example-with-react/13-csrf",permalink:"/fr/docs/tutorials/real-world-example-with-react/13-csrf",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/13-csrf.md",version:"current",sidebar:"someSidebar",previous:{title:"T\xe9l\xe9chargement d'Images",permalink:"/fr/docs/tutorials/real-world-example-with-react/12-file-upload"},next:{title:"Construction de Production",permalink:"/fr/docs/tutorials/real-world-example-with-react/14-production-build"}},u=[],l={toc:u};function s(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Comme vous utilisez l'authentification avec des cookies, vous devez ajouter une protection CSRF \xe0 votre application. C'est tr\xe8s facile avec Foal, m\xeame lorsque vous construisez une SPA."),Object(a.b)("p",null,"Ouvrez le fichier de configuration ",Object(a.b)("inlineCode",{parentName:"p"},"default.json")," et activez la protection CSRF."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "port": "env(PORT)",\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n      "csrf": {\n        "enabled": true\n      }\n    },\n    ...\n  }\n  ...\n}\n')),Object(a.b)("p",null,"Maintenant, lorsque les sessions seront utilis\xe9es avec des cookies, le serveur enverra un jeton suppl\xe9mentaire au client dans un cookie nomm\xe9 ",Object(a.b)("inlineCode",{parentName:"p"},"XSRF-Token"),". Ce jeton devra \xeatre r\xe9cup\xe9r\xe9 par l'application frontend et renvoy\xe9 dans chaque requ\xeate POST, PATCH, PUT et DELETE avec l'en-t\xeate ",Object(a.b)("inlineCode",{parentName:"p"},"X-XSRF-Token"),". Si ce n'est pas le cas, le serveur renverra une erreur 403."),Object(a.b)("p",null,"Si vous utilisez ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/axios"}),"axios")," comme biblioth\xe8que de requ\xeates, comme dans ce tutoriel, vous n'avez rien \xe0 faire. Tout est g\xe9r\xe9 en arri\xe8re-plan. "),Object(a.b)("p",null,"Si vous red\xe9marrez votre serveur de d\xe9veloppement et ouvrez les outils de d\xe9veloppement de votre navigateur, vous verrez qu'axios inclut automatiquement le jeton pour vous lors de la cr\xe9ation d'un nouveau post."),Object(a.b)("p",null,Object(a.b)("img",{alt:"X-XSRF-Token header example",src:r(400).default})))}s.isMDXComponent=!0},290:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?o.a.createElement(f,i(i({ref:t},l),{},{components:r})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},400:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/csrf-a395cf4e61edfeaa39c97b11c168dc86.png"}}]);