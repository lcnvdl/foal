(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),c=t(7),a=(t(0),t(251)),o=t(255),i=t(256),s={title:"Services & Dependency Injection"},l={unversionedId:"architecture/services-and-dependency-injection",id:"architecture/services-and-dependency-injection",isDocsHomePage:!1,title:"Services & Dependency Injection",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/architecture/services-and-dependency-injection.md",slug:"/architecture/services-and-dependency-injection",permalink:"/docs/architecture/services-and-dependency-injection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/architecture/services-and-dependency-injection.md",version:"current",sidebar:"someSidebar",previous:{title:"Controllers",permalink:"/docs/architecture/controllers"},next:{title:"Hooks",permalink:"/docs/architecture/hooks"}},p=[{value:"Description",id:"description",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Use &amp; Dependency Injection",id:"use--dependency-injection",children:[]},{value:"Testing services",id:"testing-services",children:[{value:"Services (or Controllers) with Dependencies",id:"services-or-controllers-with-dependencies",children:[]}]},{value:"Injecting other Instances",id:"injecting-other-instances",children:[]},{value:"Abstract Services",id:"abstract-services",children:[{value:"Default Concrete Services",id:"default-concrete-services",children:[]}]},{value:"Usage with Interfaces and Generic Classes",id:"usage-with-interfaces-and-generic-classes",children:[]},{value:"Accessing the <code>ServiceManager</code>",id:"accessing-the-servicemanager",children:[]}],b={toc:p};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"foal generate service my-service\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class MyService {\n\n}\n")),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Services are useful to organize your code in domains. They can be used in a wide variety of situations: logging, interaction with a database, calculations, communication with an external API, etc."),Object(a.b)("h2",{id:"architecture"},"Architecture"),Object(a.b)("p",null,"Basically, a service can be any class with a narrow and well defined purpose. They are instantiated as singletons."),Object(a.b)("h2",{id:"use--dependency-injection"},"Use & Dependency Injection"),Object(a.b)("p",null,"You can access a service from a controller using the ",Object(a.b)("inlineCode",{parentName:"p"},"@dependency")," decorator."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK } from '@foal/core';\n\nclass Logger {\n  log(message: string) {\n    console.log(`${new Date()} - ${message}`);\n  }\n}\n\nclass AppController {\n  @dependency\n  logger: Logger\n\n  @Get('/')\n  index() {\n    this.logger.log('index has been called!');\n    return new HttpResponseOK('Hello world!');\n  }\n\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"When instantiating the controller, FoalTS will provide the service instance. This mechanism is called ",Object(a.b)("em",{parentName:"p"},"dependency injection")," and is particularly interesting in unit testing (see section below).")),Object(a.b)("p",null,"In the same way, you can access a service from another service."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency } from '@foal/core';\n\nclass MyService {\n  run() {\n    console.log('hello world');\n  }\n}\n\nclass MyServiceA {\n  @dependency\n  myService: MyService;\n\n  foo() {\n    this.myService.run();\n  }\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Dependencies are injected after the instantiation of the controller/service. So they will appear as ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," if you try to read them inside a constructor. If you want to access the dependencies when initializing a controller/service, refer to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/architecture/initialization"}),Object(a.b)("inlineCode",{parentName:"a"},"boot")," method"),".")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Circular dependencies are not supported. In most cases, when two services are dependent on each other, the creation of a third service containing the functionalities required by both services solves the dependency problem.")),Object(a.b)("h2",{id:"testing-services"},"Testing services"),Object(a.b)("p",null,"Services are classes and so can be tested as is."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// calculator.service.ts\nexport class CalculatorService {\n  sum(a: number, b: number): number {\n    return a + b;\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// calculator.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { CalculatorService } from './calculator.service';\n\nit('CalculatorService', () => {\n  const service = new CalculatorService();\n  strictEqual(service.sum(1, 2), 3);\n});\n")),Object(a.b)("h3",{id:"services-or-controllers-with-dependencies"},"Services (or Controllers) with Dependencies"),Object(a.b)("p",null,"If your service has dependencies, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"createService")," function to instantiate the service with them."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// weather.service.ts\nimport { dependency } from '@foal/core';\n\nclass ConversionService {\n  celsiusToFahrenheit(temperature: number): number {\n    return temperature * 9 / 5 + 32;\n  }\n}\n\nclass WeatherService {\n  temp = 14;\n\n  @dependency\n  conversion: ConversionService;\n\n  getWeather(): string {\n    const temp = this.conversion.celsiusToFahrenheit(this.temp);\n    return `The outside temperature is ${temp} \xb0F.`;\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// weather.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { WeatherService } from './weather.service';\n\nit('WeatherService', () => {\n  const service = createService(WeatherService);\n\n  const expected = 'The outside temperature is 57.2 \xb0F.';\n  const actual = service.getWeather();\n\n  strictEqual(actual, expected);\n});\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A similar function exists to instantiate controllers with their dependencies: ",Object(a.b)("inlineCode",{parentName:"p"},"createController"),".")),Object(a.b)("p",null,"In many situations, it is necessary to mock the dependencies to truly write ",Object(a.b)("em",{parentName:"p"},"unit")," tests. This can be done by passing a second argument to ",Object(a.b)("inlineCode",{parentName:"p"},"createService")," (or ",Object(a.b)("inlineCode",{parentName:"p"},"createController"),")."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// detector.service.ts\nimport { dependency } from '@foal/core';\n\nclass TwitterService {\n  fetchLastTweets(): { msg: string }[] {\n    // Make a call to the Twitter API to get the last tweets.\n    return [];\n  }\n}\n\nclass DetectorService {\n  @dependency\n  twitter: TwitterService;\n\n  isFoalTSMentionedInTheLastTweets() {\n    const tweets = this.twitter.fetchLastTweets();\n    if (tweets.find(tweet => tweet.msg.includes('FoalTS'))) {\n      return true;\n    }\n    return false;\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// detector.service.spec.ts\nimport { strictEqual } from 'assert';\nimport { createService } from '@foal/core';\nimport { DetectorService } from './weather.service';\n\nit('DetectorService', () => {\n  const twitterMock = {\n    fetchLastTweets() {\n      return [\n        { msg: 'Hello world!' },\n        { msg: 'I LOVE FoalTS' },\n      ]\n    }\n  }\n  const service = createService(DetectorService, {\n    twitter: twitterMock\n  });\n\n  const actual = service.isFoalTSMentionedInTheLastTweets();\n\n  strictEqual(actual, true);\n});\n")),Object(a.b)("h2",{id:"injecting-other-instances"},"Injecting other Instances"),Object(a.b)("p",null,"To manually inject instances into the identity mapper, you can also provide your own ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceManager")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"createApp")," function (usually located at ",Object(a.b)("inlineCode",{parentName:"p"},"src/index.ts"),")."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp, ServiceManager } from '@foal/core';\nimport { Connection, createConnection } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\n\nasync function main() {\n  const connection = await createConnection();\n\n  const serviceManager = new ServiceManager();\n  serviceManager.set(Connection, connection);\n\n  const app = await createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: Interfaces cannot be passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"set")," method.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/controllers/api.controller.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Connection } from 'typeorm';\n\nimport { Product } from '../entities';\n\nclass ApiController {\n\n  @dependency\n  connection: Connection;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.connection.getRepository(Product).find();\n    return new HttpResponseOK(products);\n  }\n\n}\n\n")),Object(a.b)("h2",{id:"abstract-services"},"Abstract Services"),Object(a.b)("p",null,"If you want to use a different service implementation depending on your environment (production, development, etc.), you can use an abstract service for this."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"logger.service.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n\n  abstract log(str: string): void;\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Warning:")," the two properties must be static.")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"console-logger.service.ts (concrete service)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class ConsoleLogger extends Logger {\n  log(str: string) {\n    console.log(str);\n  }\n}\n\nexport { ConsoleLogger as ConcreteLogger };\n")),Object(a.b)(o.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"logger:\n  driver: ./app/services/console-logger.service\n"))),Object(a.b)(i.a,{value:"json",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "logger": {\n    "driver": "./app/services/console-logger.service"\n  }\n}\n'))),Object(a.b)(i.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  logger: {\n    driver: "./app/services/console-logger.service"\n  }\n}\n')))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The configuration value can be a package name or a path relative to the ",Object(a.b)("inlineCode",{parentName:"p"},"src/")," directory. If it is a path, it ",Object(a.b)("strong",{parentName:"p"},"must")," start with ",Object(a.b)("inlineCode",{parentName:"p"},"./")," and ",Object(a.b)("strong",{parentName:"p"},"must not")," have an extension (",Object(a.b)("inlineCode",{parentName:"p"},".js"),", ",Object(a.b)("inlineCode",{parentName:"p"},".ts"),", etc).")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"a random service")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class Service {\n  @dependency\n  logger: Logger;\n\n  // ...\n}\n")),Object(a.b)("h3",{id:"default-concrete-services"},"Default Concrete Services"),Object(a.b)("p",null,"An abstract service can have a default concrete service that is used when no configuration value is specified or when the configuration value is ",Object(a.b)("inlineCode",{parentName:"p"},"local"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { join } from 'path';\n\nexport abstract class Logger {\n  static concreteClassConfigPath = 'logger.driver';\n  static concreteClassName = 'ConcreteLogger';\n  static defaultConcreteClassPath = join(__dirname, './console-logger.service');\n\n  abstract log(str: string);\n}\n")),Object(a.b)("h2",{id:"usage-with-interfaces-and-generic-classes"},"Usage with Interfaces and Generic Classes"),Object(a.b)("p",null,"Interfaces and generic classes can be injected using strings as IDs. To do this, you will need the ",Object(a.b)("inlineCode",{parentName:"p"},"@Dependency")," decorator."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/services/logger.interface.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export interface ILogger {\n  log(message: any): void;\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/services/logger.service.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { ILogger } from './logger.interface';\n\nexport class ConsoleLogger implements ILogger {\n  log(message: any): void {\n    console.log(message);\n  }\n}\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/index.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createApp, ServiceManager } from '@foal/core';\nimport { createConnection } from 'typeorm';\n\nimport { AppController } from './app/app.controller';\nimport { Product } from './app/entities';\nimport { Logger } from './app/services';\n\nasync function main() {\n  const connection = await createConnection();\n  const productRepository = connection.getRepository(Product);\n\n  const serviceManager = new ServiceManager()\n    .set('product', productRepository)\n    .set('logger', new ConsoleLogger());\n\n  const app = await createApp(AppController, {\n    serviceManager\n  });\n\n  // ...\n}\n\n// ...\n")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"src/controllers/api.controller.ts (example)")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Dependency, Get, HttpResponseOK } from '@foal/core';\nimport { Repository } from 'typeorm';\n\nimport { Product } from '../entities';\nimport { ILogger } from '../services';\n\nexport class ApiController {\n\n  @Dependency('product')\n  productRepository: Repository<Product>;\n\n  @Dependency('logger')\n  logger: ILogger;\n\n  @Get('/products')\n  async readProducts()\xa0{\n    const products = await this.productRepository.find();\n    this.logger.log(products);\n    return new HttpResponseOK(products);\n  }\n\n}\n\n")),Object(a.b)("h2",{id:"accessing-the-servicemanager"},"Accessing the ",Object(a.b)("inlineCode",{parentName:"h2"},"ServiceManager")),Object(a.b)("p",null,"In very rare situations, you may want to access the ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceManager")," which is the identity mapper that contains all the service instances."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { dependency, Get, HttpResponseOK, ServiceManager } from '@foal/core';\n\nclass MyService {\n  foo() {\n    return 'foo';\n  }\n}\n\nclass MyController {\n  @dependency\n  services: ServiceManager;\n\n  @Get('/bar')\n  bar() {\n    const msg = this.services.get(MyService).foo();\n    return new HttpResponseOK(msg);\n  }\n}\n")))}u.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return t?c.a.createElement(m,i(i({ref:n},l),{},{components:t})):c.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},252:function(e,n,t){"use strict";function r(e){var n,t,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(c&&(c+=" "),c+=t);else for(n in e)e[n]&&(c&&(c+=" "),c+=n);return c}n.a=function(){for(var e,n,t=0,c="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(c&&(c+=" "),c+=n);return c}},253:function(e,n,t){"use strict";var r=t(0),c=t(254);n.a=function(){var e=Object(r.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},254:function(e,n,t){"use strict";var r=t(0),c=Object(r.createContext)(void 0);n.a=c},255:function(e,n,t){"use strict";var r=t(0),c=t.n(r),a=t(253),o=t(252),i=t(56),s=t.n(i),l=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(a.a)(),g=m.tabGroupChoices,j=m.setTabGroupChoices,v=Object(r.useState)(i),O=v[0],f=v[1],h=r.Children.toArray(e.children);if(null!=u){var y=g[u];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&f(y)}var N=function(e){f(e),null!=u&&j(u,e)},w=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var n=e.value,t=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},256:function(e,n,t){"use strict";var r=t(3),c=t(0),a=t.n(c);n.a=function(e){var n=e.children,t=e.hidden,c=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:c}),n)}}}]);