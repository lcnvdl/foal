(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(3),a=n(7),r=(n(0),n(290)),i={title:"Validation & Sanitization"},s={unversionedId:"tutorials/simple-todo-list/6-validation-and-sanitization",id:"tutorials/simple-todo-list/6-validation-and-sanitization",isDocsHomePage:!1,title:"Validation & Sanitization",description:"Currently inputs received by the server are not checked. Everyone could send anything when requesting POST /api/todos. That's why client inputs cannot be trusted.",source:"@site/docs/tutorials/simple-todo-list/6-validation-and-sanitization.md",slug:"/tutorials/simple-todo-list/6-validation-and-sanitization",permalink:"/docs/tutorials/simple-todo-list/6-validation-and-sanitization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/6-validation-and-sanitization.md",version:"current",sidebar:"someSidebar",previous:{title:"The REST API",permalink:"/docs/tutorials/simple-todo-list/5-the-rest-api"},next:{title:"Unit Testing",permalink:"/docs/tutorials/simple-todo-list/7-unit-testing"}},c=[],d={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Currently inputs received by the server are not checked. Everyone could send anything when requesting ",Object(r.b)("inlineCode",{parentName:"p"},"POST /api/todos"),". That's why client inputs cannot be trusted."),Object(r.b)("p",null,"You will use the ",Object(r.b)("inlineCode",{parentName:"p"},"ValidateBody")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ValidatePathParam")," hooks to validate and sanitize incoming data."),Object(r.b)("p",null,"A ",Object(r.b)("em",{parentName:"p"},"hook")," is a decorator that is attached to a route handler (a controller method). It is executed before the method and is therefore particularly suitable for validation or access control."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ValidateBody")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ValidatePathParam")," check respectively the ",Object(r.b)("inlineCode",{parentName:"p"},"body")," and ",Object(r.b)("inlineCode",{parentName:"p"},"params")," properties of the request object. They take a schema as unique argument."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"FoalTS uses ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/epoberezkin/ajv"}),"Ajv"),", a fast JSON Schema validator, to define its schemas.")),Object(r.b)("p",null,"Let's add validation and sanitization to your application. In fact, you have already defined the todo schema in the ",Object(r.b)("inlineCode",{parentName:"p"},"create-todo")," script earlier."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  ...\n  ValidateBody, ValidatePathParam\n} from '@foal/core';\n\nexport class ApiController {\n\n  ...\n\n  @Post('/todos')\n  @ValidateBody({\n    // Every additional properties that are not defined in the \"properties\"\n    // object should be removed.\n    additionalProperties: false,\n    properties: {\n      // The \"text\" property of ctx.request.body should be a string if it exists.\n      text: { type: 'string' }\n    },\n    // The property \"text\" is required.\n    required: [ 'text' ],\n    // The body request should be an object once parsed by the framework.\n    type: 'object',\n  })\n  async postTodo(ctx: Context) {\n    const todo = new Todo();\n    todo.text = ctx.request.body.text;\n\n    await todo.save();\n\n    return new HttpResponseCreated(todo);\n  }\n\n  @Delete('/todos/:id')\n  // The id should be a number. If it is not, the hook returns a \"400 - Bad Request\" error.\n  @ValidatePathParam('id', { type: 'number' })\n  async deleteTodo(ctx: Context) {\n    const todo = await Todo.findOne({ id: ctx.request.params.id });\n    if (!todo) {\n      return new HttpResponseNotFound();\n    }\n    await todo.remove();\n    return new HttpResponseNoContent();\n  }\n\n}\n\n")))}l.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(m,s(s({ref:t},d),{},{components:n})):a.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);