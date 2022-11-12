"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Serialization"},s=void 0,i={unversionedId:"common/serialization",id:"common/serialization",title:"Serialization",description:"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the class-transformer library.",source:"@site/docs/common/serialization.md",sourceDirName:"common",slug:"/common/serialization",permalink:"/docs/common/serialization",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/serialization.md",tags:[],version:"current",frontMatter:{title:"Serialization"},sidebar:"someSidebar",previous:{title:"Upload & Download Files",permalink:"/docs/common/file-storage/upload-and-download-files"},next:{title:"Logging",permalink:"/docs/common/logging"}},l={},c=[{value:"The <code>class-transformer</code> library",id:"the-class-transformer-library",level:2},{value:"Usage with a Hook",id:"usage-with-a-hook",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document shows how to serialize class instances into plain objects and, conversely, how to deserialize plain objects into class instances. It is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," library."),(0,r.kt)("p",null,"Serialization is particularly interesting if you need to transform HTTP request bodies into model instances or, inversely, convert model instances into plain objects to be returned in HTTP responses."),(0,r.kt)("h2",{id:"the-class-transformer-library"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"class-transformer")," library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install class-transformer\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"class-transformer")," has two main functions to transform objects: ",(0,r.kt)("inlineCode",{parentName:"p"},"plainToClass")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"classToPlain"),". Some examples of their use are given below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Other functions also exist and can be found in the README of the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/typestack/class-transformer"},"library repository"),"."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"plainToClass")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { plainToClass } from 'class-transformer';\n\nclass User {\n  firstName: string;\n  lastName: string;\n\n  getFullName() {\n    return firstName +  ' ' + lastName;\n  }\n}\n\nconst user = {\n  firstName: 'John',\n  lastName: 'Doe'\n}\n\nconst user2 = plainToClass(User, user);\n// user2 is an instance of User\nconsole.log(user2.getFullName());\n// John Doe\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"classToPlain")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { classToPlain, Exclude } from 'class-transformer';\n \nexport class User {\n  id: number;\n  email: string;\n  \n  @Exclude()\n  password: string;\n}\n\nconst user = new User();\nuser.id = 1;\nuser.email = 'jane.doe@foalts.org';\nuser.password = 'xxx';\n\nconst serializedUser = classToPlain(user);\nconsole.log(serializedUser instanceof User);\n// false\nconsole.log(serializedUser);\n// {\n//   id: 1,\n//   email: 'jane.doe@foalts.org'\n// }\n")),(0,r.kt)("p",null,"Additional options can be provided to the ",(0,r.kt)("inlineCode",{parentName:"p"},"classToPlain")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"plainToClass")," functions. ",(0,r.kt)("inlineCode",{parentName:"p"},"class-transformer")," also offers other interesting features (nested objects, property renaming, etc) that can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer#readme"},"here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Caution: These functions do not validate data.")," They do not guarantee that all declared properties are assigned and that no additional properties are assigned to the object. They behave more or less like a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign"),". Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/common/validation-and-sanitization"},"validation page")," if you need to validate data.")),(0,r.kt)("h2",{id:"usage-with-a-hook"},"Usage with a Hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install class-transformer @foal/typestack\n")),(0,r.kt)("p",null,"If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"class-transformer")," within a hook to transform request bodies, you can install the package ",(0,r.kt)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"@UnserializeBody")," hook that transforms the request body into an instance of a given class."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"product.entity.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\n// BaseEntity adds the method \"save\" to the class.\nexport class Product extends BaseEntity {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  name: string;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"api.controller.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post, ValidateBody } from '@foal/core';\nimport { UnserializeBody } from '@foal/typestack';\nimport { Product } from '../entities';\n\nexport class ApiController {\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  @UnserializeBody(Product)\n  async createProduct(ctx: Context) {\n    // ctx.request.body is an instance of Product\n    const product = ctx.request.body;\n    await product.save();\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,r.kt)("p",null,"The hook takes also an optional parameter to specify the options of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," library."))}m.isMDXComponent=!0}}]);