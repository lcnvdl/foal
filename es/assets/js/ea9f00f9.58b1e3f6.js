"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Introducci\xf3n"},s=void 0,i={unversionedId:"testing/introduction",id:"testing/introduction",title:"Introducci\xf3n",description:"Every shipped app should come with a minimum set of tests. Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/testing/introduction.md",sourceDirName:"testing",slug:"/testing/introduction",permalink:"/es/docs/testing/introduction",draft:!1,editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/testing/introduction.md",tags:[],version:"current",frontMatter:{title:"Introducci\xf3n"},sidebar:"someSidebar",previous:{title:"Linting",permalink:"/es/docs/cli/linting-and-code-style"},next:{title:"Pruebas unitarias",permalink:"/es/docs/testing/unit-testing"}},l={},c=[{value:"The Mocha Framework",id:"the-mocha-framework",level:2},{value:"Asserting Libraries",id:"asserting-libraries",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every shipped app should come with a ",(0,a.kt)("strong",{parentName:"p"},"minimum set of tests"),". Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away."),(0,a.kt)("h2",{id:"the-mocha-framework"},"The Mocha Framework"),(0,a.kt)("p",null,"The testing ecosystem is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," framework. It provides functions to help you structuring your tests and also making assertions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"describe")," function groups tests (or groups of tests) together."),(0,a.kt)("li",{parentName:"ul"},"And the ",(0,a.kt)("inlineCode",{parentName:"li"},"it")," function defines an individual test.")),(0,a.kt)("p",null,"Using these two helpers lets you organize your tests in a readable way and print comprehensive reports."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    if (1 !== 1) {\n      throw new Error();\n    }\n  })\n\n  it('should not be equal to 2.', () => {\n    if (1 === 2) {\n      throw new Error();\n    }\n  });\n\n})\n")),(0,a.kt)("p",null,"Running this file with mocha gives you the below report:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test report",src:r(97146).Z,width:"494",height:"224"})),(0,a.kt)("h2",{id:"asserting-libraries"},"Asserting Libraries"),(0,a.kt)("p",null,"In addition to the Mocha framework, you can use the Node.js built-in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html"},"assert")," module. It provides some useful functions such as ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_ok_value_message"},"ok"),", ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message"},"strictEqual")," or ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message"},"deepStrictEqual")," to make your tests more readable and concise. You can also use third party libraries such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chai"},"chai")," or ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/expect"},"expect"),"."),(0,a.kt)("p",null,"The previous code can be refactored as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { strictEqual } from 'assert';\n\ndescribe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    strictEqual(1, 1);\n  })\n\n  it('should not be equal to 2.', () => {\n    strictEqual(1, 2);\n  });\n\n})\n")))}p.isMDXComponent=!0},97146:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/introduction-report-ec779378236fb937b330af576a59e2ca.png"}}]);