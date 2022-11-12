"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5337],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,d=c["".concat(i,".").concat(m)]||c[m]||p[m]||o;return t?r.createElement(d,l(l({ref:n},g),{},{components:t})):r.createElement(d,l({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),o=t(86010),l=t(72389),s=t(67392),i=t(7094),u=t(12466);const g="tabList__CuJ",p="tabItem_LNqP";function c(e){var n,t;const{lazy:l,block:c,defaultValue:m,values:d,groupId:v,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:b.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),y=(0,s.l)(k,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===m?m:null!=(n=null!=m?m:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?n:b[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:N}=(0,i.U)(),[w,x]=(0,a.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=T[v];null!=e&&e!==w&&k.some((n=>n.value===e))&&x(e)}const L=e=>{const n=e.currentTarget,t=j.indexOf(n),r=k[t].value;r!==w&&(O(n),x(r),null!=v&&N(v,String(r)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=j.indexOf(e.currentTarget)+1;t=null!=(r=j[n])?r:j[0];break}case"ArrowLeft":{var a;const n=j.indexOf(e.currentTarget)-1;t=null!=(a=j[n])?a:j[j.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},k.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>j.push(e),onKeyDown:E,onFocus:L,onClick:L},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},92657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=t(87462),a=(t(67294),t(3905)),o=t(65488),l=t(85162);const s={title:"Journalisation"},i=void 0,u={unversionedId:"common/logging",id:"common/logging",title:"Journalisation",description:"HTTP Request Logging",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/common/logging.md",sourceDirName:"common",slug:"/common/logging",permalink:"/fr/docs/common/logging",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/logging.md",tags:[],version:"current",frontMatter:{title:"Journalisation"},sidebar:"someSidebar",previous:{title:"S\xe9rialisation",permalink:"/fr/docs/common/serialization"},next:{title:"Planification de T\xe2ches",permalink:"/fr/docs/common/task-scheduling"}},g={},p=[{value:"HTTP Request Logging",id:"http-request-logging",level:2},{value:"Disabling HTTP Request Logging",id:"disabling-http-request-logging",level:2},{value:"Disabling Error Logging",id:"disabling-error-logging",level:2},{value:"Logging Hook",id:"logging-hook",level:2},{value:"Advanced Logging",id:"advanced-logging",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"http-request-logging"},"HTTP Request Logging"),(0,a.kt)("p",null,"FoalTS uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/morgan"},"morgan")," to log the HTTP requests. You can specify the output format using the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"SETTINGS_LOGGER_FORMAT")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/default.json")," file:"),(0,a.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  loggerFormat: tiny\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "tiny"\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    loggerFormat: "tiny"\n  }\n}\n')))),(0,a.kt)("h2",{id:"disabling-http-request-logging"},"Disabling HTTP Request Logging"),(0,a.kt)("p",null,"In some scenarios and environments, you might want to disable http request logging. You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"loggerFormat")," configuration option to ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),". "),(0,a.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  loggerFormat: none\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "loggerFormat": "none"\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  settings: {\n    loggerFormat: "none"\n  }\n}\n')))),(0,a.kt)("h2",{id:"disabling-error-logging"},"Disabling Error Logging"),(0,a.kt)("p",null,"In some scenarios, you might want to disable error logging (error stack traces that are displayed when an error is thrown in a controller or hook). You can achieve this by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"allErrors")," configuration option to false. "),(0,a.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  allErrors: false\n"))),(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "allErrors": false\n  }\n}\n'))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    allErrors: false\n  }\n}\n")))),(0,a.kt)("h2",{id:"logging-hook"},"Logging Hook"),(0,a.kt)("p",null,"FoalTS provides a convenient hook for logging debug messages: ",(0,a.kt)("inlineCode",{parentName:"p"},"Log(message: string, options: LogOptions = {})"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface LogOptions {\n  body?: boolean;\n  params?: boolean;\n  headers?: string[]|boolean;\n  query?: boolean;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, Log } from '@foal/core';\n\n@Log('AppController', {\n  body: true,\n  headers: [ 'X-CSRF-Token' ],\n  params: true,\n  query: true\n})\nexport class AppController {\n  @Get()\n  index() {\n    return new HttpResponseOK();\n  }\n}\n")),(0,a.kt)("h2",{id:"advanced-logging"},"Advanced Logging"),(0,a.kt)("p",null,"If you need advanced logging, you might be interested in using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"winston"),", a popular logger in the Node.js ecosystem."),(0,a.kt)("p",null,"Here's an example on how to use it with Foal:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"LoggerService")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as winston from 'winston';\n\nexport class LoggerService {\n  private logger: any;\n\n  constructor() {\n    this.logger = winston.createLogger({\n      transports: [\n        new winston.transports.Console(),\n        new winston.transports.File({\n          filename: 'logs.txt'\n        })\n      ]\n    });\n  }\n\n  info(msg: string) {\n    this.logger.info(msg);\n  }\n\n  warn(msg: string) {\n    this.logger.warn(msg);\n  }\n\n  error(msg: string) {\n    this.logger.error(msg);\n  }\n\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"LogUserId hook")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Hook } from '@foal/core';\n// LoggerService import.\n\nexport function LogUserId() {\n  return Hook((ctx, services) => {\n    const logger = services.get(LoggerService);\n    logger.info(`UserId is: ${ctx.user.id}`);\n  });\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ProductController")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get } from '@foal/core';\n// LogUserId import.\n\nexport class ProductController {\n\n  @Get('/')\n  @LogUserId()\n  readProducts() {\n    ...\n  }\n\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"AuthController")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { dependency, Post } from '@foal/core';\n// LoggerService import.\n\nexport class AuthController {\n  @dependency\n  logger: LoggerService;\n\n  @Post('/signup')\n  signup() {\n    ...\n    this.logger.info('Someone signed up!');\n  }\n\n}\n\n")))}m.isMDXComponent=!0}}]);