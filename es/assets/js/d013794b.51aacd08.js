"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),s=n(86010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),s=n(67294),a=n(86010),o=n(72389),i=n(67392),l=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:h,groupId:k,className:g}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[x,C]=(0,s.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==x&&f.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==x&&(S(t),C(r),null!=k&&N(k,String(r)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var s;const t=T.indexOf(e.currentTarget)-1;n=null!=(s=T[t])?s:T[T.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},g)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:q,onFocus:A,onClick:A},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,s.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return s.createElement(d,(0,r.Z)({key:String(t)},e))}},64306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),s=(n(67294),n(3905)),a=n(65488),o=n(85162);const i={title:"Comenzar"},l=void 0,p={unversionedId:"authentication/quick-start",id:"authentication/quick-start",title:"Comenzar",description:"Authentication is the process of verifying that a user is who he or she claims to be. It answers the question Who is the user?.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/authentication/quick-start.md",sourceDirName:"authentication",slug:"/authentication/quick-start",permalink:"/es/docs/authentication/quick-start",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication/quick-start.md",tags:[],version:"current",frontMatter:{title:"Comenzar"},sidebar:"someSidebar",previous:{title:"Utilizar Otro ORM",permalink:"/es/docs/databases/using-another-orm"},next:{title:"Usuarios",permalink:"/es/docs/authentication/user-class"}},u={},c=[{value:"The Basics",id:"the-basics",level:2},{value:"The Available Tokens (step 1)",id:"the-available-tokens-step-1",level:3},{value:"The Authentication Hooks (step 2)",id:"the-authentication-hooks-step-2",level:3},{value:"Examples",id:"examples",level:2},{value:"SPA, 3rd party APIs, Mobile (cookies)",id:"spa-3rd-party-apis-mobile-cookies",level:3},{value:"Using Session Tokens",id:"using-session-tokens",level:4},{value:"Using JSON Web Tokens",id:"using-json-web-tokens",level:4},{value:"SPA, 3rd party APIs, Mobile (Authorization header)",id:"spa-3rd-party-apis-mobile-authorization-header",level:3},{value:"Using Session Tokens",id:"using-session-tokens-1",level:4},{value:"Using JSON Web Tokens",id:"using-json-web-tokens-1",level:4},{value:"SSR Applications (cookies)",id:"ssr-applications-cookies",level:3},{value:"Using Session Tokens",id:"using-session-tokens-2",level:4}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Authentication")," is the process of verifying that a user is who he or she claims to be. It answers the question ",(0,s.kt)("em",{parentName:"p"},"Who is the user?"),". "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Example: a user enters their login credentials to connect to the application"),".")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Authorization"),", also known as ",(0,s.kt)("em",{parentName:"p"},"Access Control"),", is the process of determining what an authenticated user is allowed to do. It answers the question ",(0,s.kt)("em",{parentName:"p"},"Does the user has the right to do what they ask?"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Example: a user tries to access the administrator page"),".")),(0,s.kt)("p",null,"This document focuses on explaining how authentication works in FoalTS and gives several code examples to get started quickly. Further explanations are given in other pages of the documentation."),(0,s.kt)("h2",{id:"the-basics"},"The Basics"),(0,s.kt)("p",null,"The strength of FoalTS authentication system is that it can be used in a wide variety of applications. Whether you want to build a stateless REST API that uses social ID tokens or a traditional web application with templates, cookies and redirects, FoalTS provides you with the tools to do so. You can choose the elements you need and build your own authentication process."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Auth Support"),(0,s.kt)("th",{parentName:"tr",align:null}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Kind of Application"),(0,s.kt)("td",{parentName:"tr",align:null},"API, Regular Web App, SPA+API, Mobile+API")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"State management"),(0,s.kt)("td",{parentName:"tr",align:null},"Stateful (Session Tokens), Stateless (JSON Web Tokens)\xa0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,s.kt)("td",{parentName:"tr",align:null},"Passwords, Social\xa0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Token storage"),(0,s.kt)("td",{parentName:"tr",align:null},"Cookies, localStorage, Mobile, etc")))),(0,s.kt)("p",null,"Whatever architecture you choose, the authentication process will always follow the same pattern."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step 1: the user logs in.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"In some architectures, this step might be delegated to an external service: Google, Cognito, Auth0, etc"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Verify the credentials (email & password, username & password, social, etc)."),(0,s.kt)("li",{parentName:"ol"},"Generate a token (stateless or stateful)."),(0,s.kt)("li",{parentName:"ol"},"Return the token to the client (in a cookie, in the response body or in a header).")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Step 2: once logged in, the user keeps being authenticated on subsequent requests.")),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"On each request, receive and check the token and retrieve the associated user if the token is valid.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Authentication architecture",src:n(72927).Z,width:"522",height:"370"})),(0,s.kt)("h3",{id:"the-available-tokens-step-1"},"The Available Tokens (step 1)"),(0,s.kt)("p",null,"FoalTS provides two ways to generate tokens:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Session Tokens")," (stateful): They are probably the easiest way to manage authentication with Foal. Creation is straightforward, expiration is managed automatically and revocation is easy. Using session tokens keeps your code concise and does not require additional knowledge.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Unlike other restrictive session management systems, FoalTS sessions are not limited to traditional applications that use cookies, redirection and server-side rendering. You can choose to use sessions without cookies, in a SPA+API or Mobile+API architecture and deploy your application to a serverless environment.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"JSON Web Tokens")," (stateless): For more advanced developers, JWTs can be used to create stateless authentication or authentication that works with external social providers.")),(0,s.kt)("h3",{id:"the-authentication-hooks-step-2"},"The Authentication Hooks (step 2)"),(0,s.kt)("p",null,"In step 2, the hook ",(0,s.kt)("inlineCode",{parentName:"p"},"@UseSessions")," takes care of checking the session tokens and retrieve their associated user. The same applies to ",(0,s.kt)("inlineCode",{parentName:"p"},"JWTRequired")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"JWTOptional")," with JSON Web Tokens."),(0,s.kt)("p",null,"You will find more information in the documentation pages dedicated to them."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"The examples below can be used directly in your application to configure login, logout and signup routes. You can use them as they are or customize them to meet your specific needs."),(0,s.kt)("p",null,"For these examples, we will use TypeORM as default ORM and emails and passwords as credentials. An API will allow authenticated users to list ",(0,s.kt)("em",{parentName:"p"},"products")," with the request ",(0,s.kt)("inlineCode",{parentName:"p"},"GET /api/products"),"."),(0,s.kt)("p",null,"The definition of the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," entity is common to all the examples and is as follows:"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/entities/user.entity.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column()\n  password: string;\n}\n\n// Exporting this line is required\n// when using session tokens with TypeORM.\n// It will be used by `npm run makemigrations`\n// to generate the SQL session table.\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,s.kt)("h3",{id:"spa-3rd-party-apis-mobile-cookies"},"SPA, 3rd party APIs, Mobile (cookies)"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",(0,s.kt)("a",{parentName:"p",href:"/es/docs/security/csrf-protection"},"CSRF protection")," to your application.")),(0,s.kt)("p",null,"In these implementations, the client does not have to handle the receipt, sending and expiration of the tokens itself. All is handled transparently by the server using cookies."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Note: If you develop a native Mobile application, you may need to enable a "),"cookie",(0,s.kt)("em",{parentName:"p"}," plugin in your code."))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Note: If your server and client do not have the same origins, you may also need to enable ",(0,s.kt)("a",{parentName:"em",href:"/es/docs/security/cors"},"CORS requests"),"."))),(0,s.kt)("h4",{id:"using-session-tokens"},"Using Session Tokens"),(0,s.kt)("p",null,"First, make sure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," entity is exported in ",(0,s.kt)("inlineCode",{parentName:"p"},"user.entity.ts"),". Then build and run the migrations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, dependency, IAppController, Store, UseSessions } from '@foal/core';\n\nimport { User } from './entities';\nimport { ApiController, AuthController } from './controllers';\n\n@UseSessions({\n  cookie: true,\n  user: (id: number) => User.findOneBy({ id }),\n})\nexport class AppController implements IAppController {\n  // This line is required.\n  @dependency\n  store: Store;\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session!.setUser(user);\n    await ctx.session!.regenerateID();\n\n    return new HttpResponseOK();\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session!.setUser(user);\n    await ctx.session!.regenerateID();\n\n    return new HttpResponseOK();\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    await ctx.session!.destroy();\n\n    return new HttpResponseOK();\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, UserRequired } from '@foal/core';\n\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("h4",{id:"using-json-web-tokens"},"Using JSON Web Tokens"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When using stateless authentication with JWT, you must manage the renewal of tokens after their expiration yourself. You also cannot list all users logged into your application.")),(0,s.kt)("p",null,"First, generate a base64-encoded secret."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"foal createsecret\n")),(0,s.kt)("p",null,"Save this secret in a ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),(0,s.kt)("p",null,"Update your configuration to retrieve the secret."),(0,s.kt)(a.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"))),(0,s.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Env } = require(\'@foal/core\');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get("JWT_SECRET"),\n      secretEncoding: "base64"\n    }\n  }\n}\n')))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { getSecretOrPrivateKey, removeAuthCookie, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\nimport { promisify } from 'util';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    const response = new HttpResponseOK();\n    await setAuthCookie(response, await this.createJWT(user));\n    return response;\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const response = new HttpResponseOK();\n    await setAuthCookie(response, await this.createJWT(user));\n    return response;\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    const response = new HttpResponseOK();\n    removeAuthCookie(response);\n    return response;\n  }\n\n  private async createJWT(user: User): Promise<string> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    return promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nimport { User } from './entities';\n\n@JWTRequired({\n  cookie: true,\n  // Add the line below if you prefer ctx.user\n  // to be an instance of User instead of the JWT payload.\n  // user: (id: number) => User.findOneBy({ id })\n})\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("h3",{id:"spa-3rd-party-apis-mobile-authorization-header"},"SPA, 3rd party APIs, Mobile (Authorization header)"),(0,s.kt)("p",null,"In these implementations, the user logs in with the route ",(0,s.kt)("inlineCode",{parentName:"p"},"POST /auth/login")," and receives a token in exchange in the response body. Then, when the client makes a request to the API, the token must be included in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Authorization")," header using the bearer sheme."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Authorization: Bearer my-token\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("em",{parentName:"p"},"Note: If your server and client do not have the same origins, you may also need to enable ",(0,s.kt)("a",{parentName:"em",href:"/es/docs/security/cors"},"CORS requests"),"."))),(0,s.kt)("h4",{id:"using-session-tokens-1"},"Using Session Tokens"),(0,s.kt)("p",null,"First, make sure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," entity is exported in ",(0,s.kt)("inlineCode",{parentName:"p"},"user.entity.ts"),". Then build and run the migrations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, createSession, dependency, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, Store, UseSessions, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\n@UseSessions()\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseOK({\n      token: ctx.session.getToken()\n    });\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    if (ctx.session) {\n      await ctx.session.destroy();\n    }\n\n    return new HttpResponseOK();\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, UserRequired, UseSessions } from '@foal/core';\n\nimport { User } from '../entities';\n\n// The `request` option returns a pretty message if the Authorization header is not here.\n@UseSessions({\n  required: true,\n  user: (id: number) => User.findOneBy({ id }),\n})\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("h4",{id:"using-json-web-tokens-1"},"Using JSON Web Tokens"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When using stateless authentication with JWT, you must manage the renewal of tokens after their expiration yourself. You also cannot list all users logged into your application.")),(0,s.kt)("p",null,"First, generate a base64-encoded secret."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"foal createsecret\n")),(0,s.kt)("p",null,"Save this secret in a ",(0,s.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'JWT_SECRET="Ak0WcVcGuOoFuZ4oqF1tgqbW6dIAeSacIN6h7qEyJM8="\n')),(0,s.kt)("p",null,"Update your configuration to retrieve the secret."),(0,s.kt)(a.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  jwt:\n    secret: env(JWT_SECRET)\n    secretEncoding: base64\n"))),(0,s.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "jwt": {\n      "secret": "env(JWT_SECRET)",\n      "secretEncoding": "base64"\n    }\n  }\n}\n'))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Env } = require(\'@foal/core\');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get("JWT_SECRET"),\n      secretEncoding: "base64"\n    }\n  }\n}\n')))),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { controller, IAppController } from '@foal/core';\n\nimport { ApiController, AuthController } from './controllers';\n\nexport class AppController implements IAppController {\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseOK, HttpResponseUnauthorized, Post, ValidateBody, verifyPassword } from '@foal/core';\nimport { getSecretOrPrivateKey } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\nimport { promisify } from 'util';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    return new HttpResponseOK({\n      token: await this.createJWT(user)\n    });\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    return new HttpResponseOK({\n      token: await this.createJWT(user)\n    });\n  }\n\n  private async createJWT(user: User): Promise<string> {\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    return promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\nimport { User } from '../entities';\n\n@JWTRequired({\n  // Add the line below if you prefer ctx.user\n  // to be an instance of User instead of the JWT payload.\n  // user: (id: number) => User.findOneBy({ id })\n})\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("h3",{id:"ssr-applications-cookies"},"SSR Applications (cookies)"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"As you use cookies, you must add a ",(0,s.kt)("a",{parentName:"p",href:"/es/docs/security/csrf-protection"},"CSRF protection")," to your application.")),(0,s.kt)("p",null,"In this implementation, the client does not have to handle the receipt, sending and expiration of the tokens itself. All is handled transparently by the server using cookies and redirections."),(0,s.kt)("h4",{id:"using-session-tokens-2"},"Using Session Tokens"),(0,s.kt)("p",null,"First, make sure that the ",(0,s.kt)("inlineCode",{parentName:"p"},"DatabaseSession")," entity is exported in ",(0,s.kt)("inlineCode",{parentName:"p"},"user.entity.ts"),". Then build and run the migrations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/app.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, controller, dependency, Get, IAppController, render, Store, UserRequired, UseSessions } from '@foal/core';\n\nimport { ApiController, AuthController } from './controllers';\nimport { User } from './entities';\n\n@UseSessions({\n  cookie: true,\n  user: (id: number) => User.findOneBy({ id }),\n})\nexport class AppController implements IAppController {\n  // This line is required.\n  @dependency\n  store: Store;\n\n  subControllers = [\n    controller('/auth', AuthController),\n    controller('/api', ApiController),\n  ];\n\n  @Get('/')\n  @UserRequired({ redirectTo: '/login' })\n  index() {\n    return render('./templates/index.html');\n  }\n\n  @Get('/login')\n  login(ctx: Context) {\n    return render('./templates/login.html', {\n      errorMessage: ctx.session!.get<string>('errorMessage', '')\n    });\n  }\n\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/auth.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, hashPassword, HttpResponseRedirect, Post, ValidateBody, verifyPassword } from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    password: { type: 'string' }\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport class AuthController {\n\n  @Post('/signup')\n  @ValidateBody(credentialsSchema)\n  async signup(ctx: Context) {\n    const user = new User();\n    user.email = ctx.request.body.email;\n    user.password = await hashPassword(ctx.request.body.password);\n    await user.save();\n\n    ctx.session!.setUser(user);\n    await ctx.session!.regenerateID();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  async login(ctx: Context) {\n    const user = await User.findOneBy({ email: ctx.request.body.email });\n\n    if (!user) {\n      ctx.session!.set('errorMessage', 'Unknown email.', { flash: true });\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      ctx.session!.set('errorMessage', 'Invalid password.', { flash: true });\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session!.setUser(user);\n    await ctx.session!.regenerateID();\n\n    return new HttpResponseRedirect('/');\n  }\n\n  @Post('/logout')\n  async logout(ctx: Context) {\n    await ctx.session!.destroy();\n\n    return new HttpResponseRedirect('/login');\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"src/app/controllers/api.controller.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK, UserRequired } from '@foal/core';\n\n@UserRequired()\nexport class ApiController {\n  @Get('/products')\n  readProducts() {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"templates/login.html")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Login</title>\n</head>\n<body>\n  {{ errorMessage }}\n  <form action="/auth/login" method="post">\n    <input type="email" name="email" id="email">\n    <input type="password" name="password" id="password">\n    <input type="submit" value="Log In">\n  </form>\n</body>\n</html>\n')))}m.isMDXComponent=!0},72927:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/auth-architecture-b33065fc731227be200c1fb1a412bf37.png"}}]);