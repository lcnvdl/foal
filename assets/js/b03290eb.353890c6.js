"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),p=n(12466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n;const{lazy:o,block:c,defaultValue:m,values:h,groupId:k,className:g}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(n=N.find((e=>e.props.default)))?void 0:n.props.value)?t:N[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,r.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==C&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=I.indexOf(t),a=f[n].value;a!==C&&(x(t),T(a),null!=k&&w(k,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var r;const t=I.indexOf(e.currentTarget)-1;n=null!=(r=I[t])?r:I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(N.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={title:"Social Authentication",sidebar_label:"Social Auth"},s=void 0,p={unversionedId:"authentication/social-auth",id:"authentication/social-auth",title:"Social Authentication",description:"In addition to traditional password authentication, Foal provides services to authenticate users through social providers. The framework officially supports the following:",source:"@site/docs/authentication/social-auth.md",sourceDirName:"authentication",slug:"/authentication/social-auth",permalink:"/docs/authentication/social-auth",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication/social-auth.md",tags:[],version:"current",frontMatter:{title:"Social Authentication",sidebar_label:"Social Auth"},sidebar:"someSidebar",previous:{title:"JSON Web Tokens",permalink:"/docs/authentication/jwt"},next:{title:"Administrators & Roles",permalink:"/docs/authorization/administrators-and-roles"}},d={},u=[{value:"Get Started",id:"get-started",level:2},{value:"General overview",id:"general-overview",level:3},{value:"Registering an application",id:"registering-an-application",level:3},{value:"Installation and configuration",id:"installation-and-configuration",level:3},{value:"Adding controllers",id:"adding-controllers",level:3},{value:"Techniques",id:"techniques",level:2},{value:"Usage with sessions",id:"usage-with-sessions",level:3},{value:"Usage with JWT",id:"usage-with-jwt",level:3},{value:"Custom Provider",id:"custom-provider",level:2},{value:"Sending the Client Credentials in an Authorization Header",id:"sending-the-client-credentials-in-an-authorization-header",level:3},{value:"Enabling Code Flow with PKCE",id:"enabling-code-flow-with-pkce",level:3},{value:"Official Providers",id:"official-providers",level:2},{value:"Google",id:"google",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application",level:4},{value:"Redirection parameters",id:"redirection-parameters",level:4},{value:"Facebook",id:"facebook",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-1",level:4},{value:"Redirection parameters",id:"redirection-parameters-1",level:4},{value:"User info parameters",id:"user-info-parameters",level:4},{value:"Github",id:"github",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-2",level:4},{value:"Redirection parameters",id:"redirection-parameters-2",level:4},{value:"LinkedIn",id:"linkedin",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-3",level:4},{value:"User info parameters",id:"user-info-parameters-1",level:4},{value:"Twitter",id:"twitter",level:3},{value:"Register an OAuth application",id:"register-an-oauth-application-4",level:4},{value:"Community Providers",id:"community-providers",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"Security",id:"security",level:2},{value:"HTTPS",id:"https",level:3}],c={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to traditional password authentication, Foal provides services to authenticate users through social providers. The framework officially supports the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google"),(0,r.kt)("li",{parentName:"ul"},"Facebook"),(0,r.kt)("li",{parentName:"ul"},"Github"),(0,r.kt)("li",{parentName:"ul"},"Linkedin"),(0,r.kt)("li",{parentName:"ul"},"Twitter")),(0,r.kt)("p",null,"If your provider is not listed here but supports OAuth 2.0, then you can still ",(0,r.kt)("a",{parentName:"p",href:"#custom-provider"},"extend the ",(0,r.kt)("inlineCode",{parentName:"a"},"AbstractProvider"))," class to integrate it or use a ",(0,r.kt)("a",{parentName:"p",href:"#community-providers"},"community provider")," below."),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("h3",{id:"general-overview"},"General overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Social auth schema",src:n(50635).Z,width:"3872",height:"2608"})),(0,r.kt)("p",null,"The authentication process works as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The user clicks the ",(0,r.kt)("em",{parentName:"li"},"Log In with xxx")," button in the browser and the client sends a request to the server."),(0,r.kt)("li",{parentName:"ol"},"The server redirects the user to the consent page where they are asked to give permission to log in with their account and/or give access to some of their personal information."),(0,r.kt)("li",{parentName:"ol"},"The user approves and the consent page redirects the user with an authorization code to the ",(0,r.kt)("em",{parentName:"li"},"redirect")," URI specified in the configuration."),(0,r.kt)("li",{parentName:"ol"},"Your application then makes one or more requests to the OAuth servers to obtain an access token and information about the user."),(0,r.kt)("li",{parentName:"ol"},"The social provider servers return this information."),(0,r.kt)("li",{parentName:"ol"},"Finally, your server-side application logs the user in based on this information and redirects the user when done.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"This explanation of OAuth 2 is intentionally simplified. It highlights only the parts of the protocol that are necessary to successfully implement social authentication with Foal. But the framework also performs other tasks under the hood to fully comply with the OAuth 2.0 protocol and it adds security protection against CSRF attacks."))),(0,r.kt)("h3",{id:"registering-an-application"},"Registering an application"),(0,r.kt)("p",null,"To set up social authentication with Foal, you first need to register your application to the social provider you chose (Google, Facebook, etc). This can be done through its website."),(0,r.kt)("p",null,"Usually your are required to provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("em",{parentName:"li"},"application name"),","),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"logo"),","),(0,r.kt)("li",{parentName:"ul"},"and ",(0,r.kt)("em",{parentName:"li"},"redirect URIs")," where the social provider should redirect the users once they give their consent on the provider page (ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3001/signin/google/callback"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https://example.com/signin/google/callback"),").")),(0,r.kt)("p",null,"Once done, you should receive:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("em",{parentName:"li"},"client ID")," that is public and identifies your application,"),(0,r.kt)("li",{parentName:"ul"},"and a ",(0,r.kt)("em",{parentName:"li"},"client secret")," that must not be revealed and can therefore only be used on the backend side. It is used when your server communicates with the OAuth provider's servers.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You must obtain a ",(0,r.kt)("em",{parentName:"p"},"client secret"),". If you do not have one, it means you probably chose the wrong option at some point.")),(0,r.kt)("h3",{id:"installation-and-configuration"},"Installation and configuration"),(0,r.kt)("p",null,"Once you have registered your application, install the appropriate package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/social\n")),(0,r.kt)("p",null,"Then, you will need to provide your client ID, client secret and your redirect URIs to Foal. This can be done through the usual ",(0,r.kt)("a",{parentName:"p",href:"/docs/architecture/configuration"},"configuration files"),"."),(0,r.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    google:\n      clientId: 'xxx'\n      clientSecret: 'env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)'\n      redirectUri: 'http://localhost:3001/signin/google/callback'\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "social": {\n      "google": {\n        "clientId": "xxx",\n        "clientSecret": "env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/signin/google/callback"\n      }\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    social: {\n      google: {\n        clientId: 'xxx',\n        clientSecret: 'env(SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET)',\n        redirectUri: 'http://localhost:3001/signin/google/callback'\n      }\n    }\n  }\n}\n")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},".env")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SETTINGS_SOCIAL_GOOGLE_CLIENT_SECRET=yyy\n")),(0,r.kt)("h3",{id:"adding-controllers"},"Adding controllers"),(0,r.kt)("p",null,"The last step is to add a controller that will call methods of a ",(0,r.kt)("em",{parentName:"p"},"social service")," to handle authentication. The example below uses Google as provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Context, dependency, Get } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    // Your \"Login In with Google\" button should point to this route.\n    // The user will be redirected to Google auth page.\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    // Once the user gives their permission to log in with Google, the OAuth server\n    // will redirect the user to this route. This route must match the redirect URI.\n    const { userInfo, tokens } = await this.google.getUserInfo(ctx);\n\n    // Do something with the user information AND/OR the access token.\n    // If you only need the access token, you can call the \"getTokens\" method.\n\n    // The method usually ends with a HttpResponseRedirect object as returned value.\n  }\n\n}\n")),(0,r.kt)("p",null,"You can also override in the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method the scopes you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"return this.google.redirect({ scopes: [ 'email' ] });\n")),(0,r.kt)("p",null,"Additional parameters can passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfo")," methods depending on the provider."),(0,r.kt)("h2",{id:"techniques"},"Techniques"),(0,r.kt)("h3",{id:"usage-with-sessions"},"Usage with sessions"),(0,r.kt)("p",null,"This example shows how to manage authentication (login and registration) with sessions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n  Store,\n  UseSessions,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  store: Store;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  @UseSessions({\n    cookie: true,\n  })\n  async handleGoogleRedirection(ctx: Context<User>) {\n    const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOneBy({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    ctx.session!.setUser(user);\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n")),(0,r.kt)("h3",{id:"usage-with-jwt"},"Usage with JWT"),(0,r.kt)("p",null,"This example shows how to manage authentication (login and registration) with JWT."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"user.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"auth.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// std\nimport { promisify } from 'util';\n\n// 3p\nimport {\n  Context,\n  dependency,\n  Get,\n  HttpResponseRedirect,\n} from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nexport class AuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @Get('/signin/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/signin/google/callback')\n  async handleGoogleRedirection(ctx: Context) {\n    const { userInfo } = await this.google.getUserInfo<{ email: string }>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOneBy({ email: userInfo.email });\n\n    if (!user) {\n      // If the user has not already signed up, then add them to the database.\n      user = new User();\n      user.email = userInfo.email;\n      await user.save();\n    }\n\n    const payload = {\n      email: user.email,\n      id: user.id,\n    };\n    \n    const jwt = await promisify(sign as any)(\n      payload,\n      getSecretOrPrivateKey(),\n      { subject: user.id.toString() }\n    );\n\n    const response = new HttpResponseRedirect('/');\n    await setAuthCookie(response, jwt);\n    return response;\n  }\n\n}\n")),(0,r.kt)("h2",{id:"custom-provider"},"Custom Provider"),(0,r.kt)("p",null,"If your provider is not officially supported by Foal but supports the OAuth 2.0 protocol, you can still implement your own social service. All you need to do is to make it inherit from the ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractProvider")," class."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { AbstractProvider, SocialTokens } from '@foal/core';\n\nexport interface GithubAuthParameter {\n  // ...\n}\n\nexport interface GithubUserInfoParameter {\n  // ...\n}\n\nexport class GithubProvider extends AbstractProvider<GithubAuthParameter, GithubUserInfoParameter> {\n\n  protected configPaths = {\n    clientId: 'social.github.clientId',\n    clientSecret: 'social.github.clientSecret',\n    redirectUri: 'social.github.redirectUri',\n  };\n\n  protected authEndpoint = '...';\n  protected tokenEndpoint = '...';\n  protected userInfoEndpoint = '...'; // Optional. Depending on the provider.\n\n  protected defaultScopes: string[] = [ 'email' ]; // Optional\n\n  async getUserInfoFromTokens(tokens: SocialTokens, params?: GithubUserInfoParameter) {\n    // ...\n\n    // In case the server returns an error when requesting \n    // user information, you can throw a UserInfoError.\n  }\n\n} \n")),(0,r.kt)("h3",{id:"sending-the-client-credentials-in-an-authorization-header"},"Sending the Client Credentials in an Authorization Header"),(0,r.kt)("p",null,"When requesting the token endpoint, the provider sends the client ID and secret as a query parameter by default. If you want to send them in an ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header using the ",(0,r.kt)("em",{parentName:"p"},"basic")," scheme, you can do so by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuthorizationHeaderForTokenEndpoint")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"enabling-code-flow-with-pkce"},"Enabling Code Flow with PKCE"),(0,r.kt)("p",null,"If you want to enable code flow with PKCE, you can do so by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"usePKCE")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By default, the provider will perform a SHA256 hash to generate the code challenge. If you wish to use the plaintext code verifier string as code challenge, you can do so by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCodeVerifierAsCodeChallenge")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("p",null,"When using this feature, the provider encrypts the code verifier and stores it in a cookie on the client. In order to do this, you need to provide a secret using the configuration key ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.social.secret.codeVerifierSecret"),"."),(0,r.kt)(i.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    secret:\n      codeVerifierSecret: 'xxx'\n"))),(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "social": {\n      "secret": {\n        "codeVerifierSecret": "xxx"\n      }\n    }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    social: {\n      secret: {\n        codeVerifierSecret: 'xxx'\n      }\n    }\n  }\n}\n")))),(0,r.kt)("h2",{id:"official-providers"},"Official Providers"),(0,r.kt)("h3",{id:"google"},"Google"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GoogleProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"profile"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/identity/protocols/googlescopes"},"Google scopes"))))),(0,r.kt)("h4",{id:"register-an-oauth-application"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"Google API Console")," to obtain a client ID and a client secret."),(0,r.kt)("h4",{id:"redirection-parameters"},"Redirection parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleProvider")," accepts additional parameters. These parameters and their description are listed ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OpenIDConnect#authenticationuriparameters"},"here")," and are all optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.google.redirect({ /* ... */ }, {\n  access_type: 'offline'\n})\n")),(0,r.kt)("h3",{id:"facebook"},"Facebook"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FacebookProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.facebook.com/docs/facebook-login/permissions/"},"Facebook permissions"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-1"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/"},"Facebook's developer website")," to create an application and obtain a client ID and a client secret."),(0,r.kt)("h4",{id:"redirection-parameters-1"},"Redirection parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FacebookProvider")," accepts an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_type")," parameter which is optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.facebook.redirect({ /* ... */ }, {\n  auth_type: 'rerequest'\n});\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'rerequest'")),(0,r.kt)("td",{parentName:"tr",align:null},"If a user has already declined a permission, the Facebook Login Dialog box will no longer ask for this permission. The ",(0,r.kt)("inlineCode",{parentName:"td"},"auth_type")," parameter explicity tells Facebook to ask the user again for the denied permission.")))),(0,r.kt)("h4",{id:"user-info-parameters"},"User info parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FacebookProvider")," accept an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," parameter which is optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { userInfo } = await this.facebook.getUserInfo(ctx, {\n  fields: [ 'email' ]\n})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields that the returned user info object should contain. These fields may or may not be available depending on the permissions (",(0,r.kt)("inlineCode",{parentName:"td"},"scopes"),") that were requested with the ",(0,r.kt)("inlineCode",{parentName:"td"},"redirect")," method. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"['id', 'name', 'email']"),".")))),(0,r.kt)("h3",{id:"github"},"Github"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GithubProvider")),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes"},"Github scopes"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-2"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/applications/new"},"this page")," to create an application and obtain a client ID and a client secret."),(0,r.kt)("p",null,"Additional documentation on Github's redirect URLs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#redirect-urls"},"here"),"."),(0,r.kt)("h4",{id:"redirection-parameters-2"},"Redirection parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubProvider")," accepts additional parameters. These parameters and their description are listed below and are all optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"this.github.redirect({ /* ... */ }, {\n  allow_signup: false\n})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"login")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Suggests a specific account to use for signing in and authorizing the app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"allow_signup")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow. The default is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Use ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," in the case that a policy prohibits signups.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters"},"https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#parameters")))),(0,r.kt)("h3",{id:"linkedin"},"LinkedIn"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LinkedInProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"r_liteprofile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/linkedin/shared/integrations/people/profile-api"},"API documentation"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-3"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/developers/apps/new"},"this page")," to create an application and obtain a client ID and a client secret."),(0,r.kt)("h4",{id:"user-info-parameters-1"},"User info parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserInfoFromTokens")," methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedInProvider")," accept an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"projection")," parameter which is optional."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { userInfo } = await this.linkedin.getUserInfo(ctx, {\n  fields: [ 'id', 'firstName' ]\n})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fields")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"List of fields that the returned user info object should contain. Additional documentation on ",(0,r.kt)("a",{parentName:"td",href:"https://developer.linkedin.com/docs/guide/v2/concepts/projections"},"field projections"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"projection")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"LinkedIn projection parameter.")))),(0,r.kt)("h3",{id:"twitter"},"Twitter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Service name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default scopes"),(0,r.kt)("th",{parentName:"tr",align:null},"Available scopes\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TwitterProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"users.read tweet.read")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me"},"API documentation"))))),(0,r.kt)("h4",{id:"register-an-oauth-application-4"},"Register an OAuth application"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://developer.twitter.com/en/portal/dashboard"},"this page")," to create an application and obtain a client ID and a client secret. You must configure Oauth2 settings to be used with public client; "),(0,r.kt)("h2",{id:"community-providers"},"Community Providers"),(0,r.kt)("p",null,"There are no community providers available yet! If you want to share one, feel free to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal"},"open a PR")," on Github."),(0,r.kt)("h2",{id:"common-errors"},"Common Errors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"InvalidStateError")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"state")," query does not match the value found in the cookie.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CodeVerifierNotFound")),(0,r.kt)("td",{parentName:"tr",align:null},"The encrypted code verifier was not found in the cookie (only when using PKCE).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"AuthorizationError")),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization server returns an error. This can happen when a user does not give consent on the provider page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"UserInfoError")),(0,r.kt)("td",{parentName:"tr",align:null},"Thrown in ",(0,r.kt)("inlineCode",{parentName:"td"},"AbstractProvider.getUserFromTokens")," if the request to the resource server is unsuccessful.")))),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("h3",{id:"https"},"HTTPS"),(0,r.kt)("p",null,"When deploying the application, you application must use HTTPS."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"production.yml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  social:\n    cookie:\n      # Only pass the state cookie if the request is transmitted over a secure channel (HTTPS).\n      secure: true\n    google:\n      # Your redirect URI in production\n      redirectUri: 'https://example.com/signin/google/callback'\n")))}m.isMDXComponent=!0},50635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/social-auth-overview-6bc9023be73ed5c7e9514909afc68f7e.png"}}]);