(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(290)),i={title:"Votre Premi\xe8re Route"},l={unversionedId:"tutorials/real-world-example-with-react/5-our-first-route",id:"tutorials/real-world-example-with-react/5-our-first-route",isDocsHomePage:!1,title:"Votre Premi\xe8re Route",description:"La base de donn\xe9es est maintenant remplie avec quelques posts. Impl\xe9mentons la premi\xe8re route pour les r\xe9cup\xe9rer.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/5-our-first-route.md",slug:"/tutorials/real-world-example-with-react/5-our-first-route",permalink:"/fr/docs/tutorials/real-world-example-with-react/5-our-first-route",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/5-our-first-route.md",version:"current",sidebar:"someSidebar",previous:{title:"Les Scripts Shell",permalink:"/fr/docs/tutorials/real-world-example-with-react/4-the-shell-scripts"},next:{title:"Test de l'API avec Swagger",permalink:"/fr/docs/tutorials/real-world-example-with-react/6-swagger-interface"}},u=[],s={toc:u};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"La base de donn\xe9es est maintenant remplie avec quelques posts. Impl\xe9mentons la premi\xe8re route pour les r\xe9cup\xe9rer."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Point de terminaison"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"M\xe9thode"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"/api/stories")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"GET")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Liste les posts de tous les utilisateurs. Un param\xe8tre de requ\xeate facultatif ",Object(o.b)("inlineCode",{parentName:"td"},"authorId")," peut \xeatre fourni pour filtrer les posts \xe0 retourner.")))),Object(o.b)("p",null,"Tout d'abord, g\xe9n\xe9rez le contr\xf4leur des posts."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"foal generate controller api/stories --register\n")),Object(o.b)("p",null,"Un nouveau fichier appara\xeet dans le sous-r\xe9pertoire ",Object(o.b)("inlineCode",{parentName:"p"},"api"),". Ouvrez-le et remplacez son contenu."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';\nimport { Story, User } from '../../entities';\n\nexport class StoriesController {\n  @Get()\n  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })\n  async readStories(ctx: Context) {\n    const authorId = ctx.request.query.authorId as number|undefined;\n\n    let queryBuilder = Story\n      .createQueryBuilder('story')\n      .leftJoinAndSelect('story.author', 'author')\n      .select([\n        'story.id',\n        'story.title',\n        'story.link',\n        'author.id',\n        'author.name'\n      ]);\n\n    if (authorId !== undefined) {\n      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });\n    }\n\n    const stories = await queryBuilder.getMany();\n\n    return new HttpResponseOK(stories);\n  }\n}\n\n")),Object(o.b)("p",null,"La m\xe9thode ",Object(o.b)("inlineCode",{parentName:"p"},"readStories")," r\xe9cup\xe8re et renvoie les posts avec quelques informations sur leurs auteurs."),Object(o.b)("p",null,"Lors de l'envoie d'une requ\xeate \xe0 ce point de terminaison, le corps de la r\xe9ponse ressemblera \xe0 ceci :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": 1,\n    "title": "How to build a simple to-do list",\n    "link": "https://foalts.org/docs/tutorials/simple-todo-list/1-installation",\n    "author": {\n      "id": 1,\n      "name": "John"\n    }\n  },\n  {\n    "id": 2,\n    "title": "FoalTS architecture overview",\n    "link": "https://foalts.org/docs/architecture/architecture-overview",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n  {\n    "id": 3,\n    "title": "Authentication with Foal",\n    "link": "https://foalts.org/docs/authentication-and-access-control/quick-start",\n    "author": {\n      "id": 2,\n      "name": "Mary"\n    }\n  },\n]\n')))}c.isMDXComponent=!0},290:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);