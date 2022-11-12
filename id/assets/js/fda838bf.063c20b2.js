"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Administrators and Roles",sidebar_label:"Administrators & Roles"},i=void 0,s={unversionedId:"authorization/administrators-and-roles",id:"authorization/administrators-and-roles",title:"Administrators and Roles",description:"In simple applications, access control can be managed with static roles or even with an isAdmin column in the simplest cases.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/authorization/administrators-and-roles.md",sourceDirName:"authorization",slug:"/authorization/administrators-and-roles",permalink:"/id/docs/authorization/administrators-and-roles",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authorization/administrators-and-roles.md",tags:[],version:"current",frontMatter:{title:"Administrators and Roles",sidebar_label:"Administrators & Roles"},sidebar:"someSidebar",previous:{title:"Social Auth",permalink:"/id/docs/authentication/social-auth"},next:{title:"Groups & Permissions",permalink:"/id/docs/authorization/groups-and-permissions"}},l={},p=[{value:"Admin and Non-Admins",id:"admin-and-non-admins",level:2},{value:"Static Roles",id:"static-roles",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In simple applications, access control can be managed with static roles or even with an ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," column in the simplest cases."),(0,o.kt)("h2",{id:"admin-and-non-admins"},"Admin and Non-Admins"),(0,o.kt)("p",null,"If there are only two categories of users, administrators and non-administrators, a simple solution is to add an ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," column to the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," table. Then authorization is handled by looking at the ",(0,o.kt)("inlineCode",{parentName:"p"},"isAdmin")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," objects."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  isAdmin: boolean;\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"hooks/admin-required.hook.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook, HttpResponseForbidden, HttpResponseUnauthorized } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function AdminRequired() {\n  return Hook((ctx: Context<User|null>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.isAdmin) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"controllers/api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { AdminRequired } from '../hooks';\n\nexport class ApiController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @AdminRequired()\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")),(0,o.kt)("h3",{id:"static-roles"},"Static Roles"),(0,o.kt)("p",null,"If there exists more than two categories and/or a user can belong to several categories then defining a ",(0,o.kt)("inlineCode",{parentName:"p"},"roles")," property can also be a solution."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"entities/user.entity.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column('simple-array')\n  roles: string[];\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"hooks/role-required.hook.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Hook, HttpResponseForbidden, HttpResponseUnauthorized } from '@foal/core';\n\nimport { User } from '../entities';\n\nexport function RoleRequired(role: string) {\n  return Hook((ctx: Context<User|null>) => {\n    if (!ctx.user) {\n      return new HttpResponseUnauthorized();\n    }\n    if (!ctx.user.roles.includes(role)) {\n      return new HttpResponseForbidden();\n    }\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"controllers/api.controller.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, HttpResponseOK } from '@foal/core';\n\nimport { RoleRequired } from '../hooks';\n\nexport class ApiController {\n  private products = [ { id: 1, name: 'chair' } ];\n\n  @Get('/products')\n  @RoleRequired('admin')\n  readProducts() {\n    return new HttpResponseOK(this.products);\n  }\n}\n")))}d.isMDXComponent=!0}}]);