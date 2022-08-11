"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={title:"Grupos y Permisos"},i=void 0,o={unversionedId:"authentication-and-access-control/groups-and-permissions",id:"authentication-and-access-control/groups-and-permissions",title:"Grupos y Permisos",description:"In advanced applications, access control can be managed through permissions and groups.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/authentication-and-access-control/groups-and-permissions.md",sourceDirName:"authentication-and-access-control",slug:"/authentication-and-access-control/groups-and-permissions",permalink:"/es/docs/authentication-and-access-control/groups-and-permissions",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/authentication-and-access-control/groups-and-permissions.md",tags:[],version:"current",frontMatter:{title:"Grupos y Permisos"},sidebar:"someSidebar",previous:{title:"Administradores & Roles",permalink:"/es/docs/authentication-and-access-control/administrators-and-roles"},next:{title:"API REST",permalink:"/es/docs/api-section/rest-blueprints"}},l={},p=[{value:"Permissions",id:"permissions",level:2},{value:"The <code>Permission</code> Entity",id:"the-permission-entity",level:3},{value:"Creating Permissions Programmatically",id:"creating-permissions-programmatically",level:3},{value:"Creating Permissions with a Shell Script (CLI)",id:"creating-permissions-with-a-shell-script-cli",level:3},{value:"Groups",id:"groups",level:2},{value:"The Group Entity",id:"the-group-entity",level:3},{value:"Creating Groups Programmatically",id:"creating-groups-programmatically",level:3},{value:"Creating Groups with a Shell Script (CLI)",id:"creating-groups-with-a-shell-script-cli",level:3},{value:"Users",id:"users",level:2},{value:"The <code>UserWithPermissions</code> Entity",id:"the-userwithpermissions-entity",level:3},{value:"The <code>hasPerm</code> Method",id:"the-hasperm-method",level:3},{value:"Creating Users with Groups and Permissions with a Shell Script (CLI)",id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli",level:3},{value:"Fetching a User with their Permissions",id:"fetching-a-user-with-their-permissions",level:2},{value:"The PermissionRequired Hook",id:"the-permissionrequired-hook",level:2},{value:"BaseEntity Inheritance",id:"baseentity-inheritance",level:2},{value:"Get All Users with a Given Permission",id:"get-all-users-with-a-given-permission",level:2}],m={toc:p};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In advanced applications, access control can be managed through permissions and groups."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"permission")," gives a user the right to perform a given action (such as accessing a route)."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"group")," brings together a set of users (a user can belong to more than one group)."),(0,a.kt)("p",null,"Permissions can be attached to a user or a group. Attaching a permission to a group is equivalent to attaching the permission to each of its users."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Examples of ",(0,a.kt)("em",{parentName:"p"},"groups"),' are the "Free", "Pro" and "Enterprise" plans of a SaaS application. Depending of the price paid by the customers, they have access to certain features whose access are managed by ',(0,a.kt)("em",{parentName:"p"},"permissions"),".")),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("h3",{id:"the-permission-entity"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"Permission")," Entity"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Database Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Primary auto generated key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"codeName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique, Length: 100")))),(0,a.kt)("h3",{id:"creating-permissions-programmatically"},"Creating Permissions Programmatically"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'secret-perm';\n  perm.name = 'Permission to access the secret';\n  await perm.save();\n}\n")),(0,a.kt)("h3",{id:"creating-permissions-with-a-shell-script-cli"},"Creating Permissions with a Shell Script (CLI)"),(0,a.kt)("p",null,"Create a new script with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal generate script create-perm\n")),(0,a.kt)("p",null,"Replace the content of the new created file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts/create-perm.ts")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Permission } from '@foal/typeorm';\nimport { createConnection, getConnection } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string' },\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string }) {\n  const permission = new Permission();\n  permission.codeName = args.codeName;\n  permission.name = args.name;\n\n  await createConnection();\n\n  try {\n    console.log(\n      await permission.save()\n    );\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n")),(0,a.kt)("p",null,"Then you can create a permission through the command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build\nfoal run create-perm name="Permission to access the secret" codeName="access-secret"\n')),(0,a.kt)("h2",{id:"groups"},"Groups"),(0,a.kt)("p",null,"Groups are used to categorize users. A user can belong to several groups and a group can have several users."),(0,a.kt)("p",null,"A group can have permissions. They then apply to all its users."),(0,a.kt)("h3",{id:"the-group-entity"},"The Group Entity"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Database Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Primary auto generated key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Length: 80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"codeName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique, Length: 100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"permissions"),(0,a.kt)("td",{parentName:"tr",align:null},"Permission[]"),(0,a.kt)("td",{parentName:"tr",align:null},"A many-to-many relation with the table permission")))),(0,a.kt)("h3",{id:"creating-groups-programmatically"},"Creating Groups Programmatically"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Group, Permission } from './src/app/entities';\n\nasync function main() {\n  const perm = new Permission();\n  perm.codeName = 'delete-users';\n  perm.name = 'Permission to delete users';\n  await perm.save();\n\n  const group = new Group();\n  group.codeName = 'admin';\n  group.name = 'Administrators';\n  group.permissions = [ perm ];\n  await group.save();\n}\n")),(0,a.kt)("h3",{id:"creating-groups-with-a-shell-script-cli"},"Creating Groups with a Shell Script (CLI)"),(0,a.kt)("p",null,"Create a new script with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foal generate script create-group\n")),(0,a.kt)("p",null,"Replace the content of the new created file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts/create-group.ts")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { Group, Permission } from '@foal/typeorm';\nimport { createConnection } from 'typeorm';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    codeName: { type: 'string', maxLength: 100 },\n    name: { type: 'string', maxLength: 80 },\n    permissions: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] }\n  },\n  required: [ 'name', 'codeName' ],\n  type: 'object',\n};\n\nexport async function main(args: { codeName: string, name: string, permissions: string[] }) {\n  const group = new Group();\n  group.permissions = [];\n  group.codeName = args.codeName;\n  group.name = args.name;\n\n  const connection = await createConnection();\n  try {\n    for (const codeName of args.permissions) {\n      const permission = await Permission.findOne({ codeName });\n      if (!permission) {\n        console.log(\n          `No permission with the code name \"${codeName}\" was found.`\n        );\n        return;\n      }\n      group.permissions.push(permission);\n    }\n\n    console.log(\n      await group.save()\n    );\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await connection.close();\n  }\n}\n\n")),(0,a.kt)("p",null,"Then you can create a group through the command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build\nfoal run create-perm name="Permission to delete users" codeName="delete-users"\nfoal run create-group name="Administrators" codeName="admin" permissions="[ \\"delete-users\\" ]"\n')),(0,a.kt)("h2",{id:"users"},"Users"),(0,a.kt)("h3",{id:"the-userwithpermissions-entity"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"UserWithPermissions")," Entity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UserWithPermissions } from '@foal/typeorm';\nimport { Entity } from 'typeorm';\n\n@Entity()\nexport class User extends UserWithPermissions {\n\n}\n\n// You MUST export Group and Permission so that TypeORM can generate migrations.\nexport { Group, Permission } from '@foal/typeorm';\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," is an abstract class that has useful features to handle access control through permissions and groups. You must extend your ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," entity from this class to use permissions and groups."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Database Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Primary auto generated key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"groups"),(0,a.kt)("td",{parentName:"tr",align:null},"Group[]"),(0,a.kt)("td",{parentName:"tr",align:null},"A many-to-many relation with the table group")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userPermissions"),(0,a.kt)("td",{parentName:"tr",align:null},"Permission[]"),(0,a.kt)("td",{parentName:"tr",align:null},"A many-to-many relation with the table permission")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Relations between Users, Groups and Permissions",src:n(6246).Z,width:"480",height:"280"})),(0,a.kt)("h3",{id:"the-hasperm-method"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"hasPerm")," Method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"hasPerm(permissionCodeName: string)")," method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," class returns true if one of these conditions is true:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The user has the required permission."),(0,a.kt)("li",{parentName:"ul"},"The user belongs to a group that has the required permission.")),(0,a.kt)("h3",{id:"creating-users-with-groups-and-permissions-with-a-shell-script-cli"},"Creating Users with Groups and Permissions with a Shell Script (CLI)"),(0,a.kt)("p",null,"Replace the content of the new created file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/scripts/create-user.ts")," with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { hashPassword } from '@foal/core';\nimport { Group, Permission } from '@foal/typeorm';\nimport { createConnection, getConnection, getManager } from 'typeorm';\n\n// App\nimport { User } from '../app/entities';\n\nexport const schema = {\n  additionalProperties: false,\n  properties: {\n    email: { type: 'string', format: 'email' },\n    groups: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] },\n    password: { type: 'string' },\n    userPermissions: { type: 'array', items: { type: 'string' }, uniqueItems: true, default: [] },\n  },\n  required: [ 'email', 'password' ],\n  type: 'object',\n};\n\nexport async function main(args) {\n  const user = new User();\n  user.userPermissions = [];\n  user.groups = [];\n  user.email = args.email;\n  user.password = await hashPassword(args.password);\n\n  await createConnection();\n\n  for (const codeName of args.userPermissions as string[]) {\n    const permission = await Permission.findOne({ codeName });\n    if (!permission) {\n      console.log(`No permission with the code name \"${codeName}\" was found.`);\n      return;\n    }\n    user.userPermissions.push(permission);\n  }\n\n  for (const codeName of args.groups as string[]) {\n    const group = await Group.findOne({ codeName });\n    if (!group) {\n      console.log(`No group with the code name \"${codeName}\" was found.`);\n      return;\n    }\n    user.groups.push(group);\n  }\n\n  try {\n    console.log(\n      await getManager().save(user)\n    );\n  } catch (error: any) {\n    console.log(error.message);\n  } finally {\n    await getConnection().close();\n  }\n}\n")),(0,a.kt)("p",null,"Then you can create a user with their permissions and groups through the command line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'npm run build\nfoal run create-user userPermissions="[ \\"my-first-perm\\" ]" groups="[ \\"my-group\\" ]"\n')),(0,a.kt)("h2",{id:"fetching-a-user-with-their-permissions"},"Fetching a User with their Permissions"),(0,a.kt)("p",null,"If you want the ",(0,a.kt)("inlineCode",{parentName:"p"},"hasPerm")," method to work on the context ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," property, you must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUserWithPermissions")," function in the authentication hook."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with JSON Web Tokens")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\nimport { fetchUserWithPermissions } from '@foal/typeorm';\n\n@JWTRequired({\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example with Sessions Tokens")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get, UseSessions } from '@foal/core';\nimport { fetchUserWithPermissions, TypeORMStore } from '@foal/typeorm';\n\n@UseSessions({\n  store: TypeORMStore,\n  required: true,\n  user: fetchUserWithPermissions(User)\n})\nexport class ProductController {\n  @Get('/products')\n  readProduct(ctx: Context) {\n    if (!ctx.user.hasPerm('read-products')) {\n      return new HttpResponseForbidden();\n    }\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,a.kt)("h2",{id:"the-permissionrequired-hook"},"The PermissionRequired Hook"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This requires the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUserWithPermissions"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@PermissionRequired('perm')\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Context"),(0,a.kt)("th",{parentName:"tr",align:null},"Response"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ctx.user")," is undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"401 - UNAUTHORIZED")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ctx.user.hasPerm('perm')")," is false"),(0,a.kt)("td",{parentName:"tr",align:null},"403 - FORBIDDEN")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@PermissionRequired('perm', { redirect: '/login' })\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Context"),(0,a.kt)("th",{parentName:"tr",align:null},"Response"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ctx.user")," is undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"Redirects to ",(0,a.kt)("inlineCode",{parentName:"td"},"/login")," (302 - FOUND)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ctx.user.hasPerm('perm')")," is false"),(0,a.kt)("td",{parentName:"tr",align:null},"403 - FORBIDDEN")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, Get } from '@foal/core';\nimport { fetchUserWithPermissions, PermissionRequired } from '@foal/typeorm';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({ user: fetchUserWithPermissions(User) })\nexport class ProductController {\n  @Get('/products')\n  @PermissionRequired('read-products')\n  readProduct(ctx: Context) {\n    return new HttpResponseOK([]);\n  }\n}\n")),(0,a.kt)("h2",{id:"baseentity-inheritance"},"BaseEntity Inheritance"),(0,a.kt)("p",null,"The classes ",(0,a.kt)("inlineCode",{parentName:"p"},"Permission"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Group")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," all extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"BaseEntity")," class so you can access its static and instance methods."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const perm = await Permission.findOneOrFail({ codeName: 'perm1' });\nperm.name = 'Permission1';\nawait perm.save();\n")),(0,a.kt)("h2",{id:"get-all-users-with-a-given-permission"},"Get All Users with a Given Permission"),(0,a.kt)("p",null,"The class ",(0,a.kt)("inlineCode",{parentName:"p"},"UserWithPermissions")," provides a static method ",(0,a.kt)("inlineCode",{parentName:"p"},"withPerm")," to get all users with a given permission. It returns all users that have this permission on their own or through the groups they belong to."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nclass User extends UserWithPermissions {}\n  \nconst users = await User.withPerm<User>('perm1');\n")))}c.isMDXComponent=!0},6246:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/permissions-groups-and-users-ec7a479e022323aca7ea069ba9622d31.png"}}]);