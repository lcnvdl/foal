(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{302:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(22),i=n(257),o=n(258),s=n(256);t.a=function(){var e=Object(r.default)().siteConfig.title,t=Object(o.useActivePlugin)({failfast:!0}).pluginId,n=Object(s.useDocsPreferredVersion)(t).savePreferredVersionName,a=Object(o.useActiveVersion)(t),c=Object(o.useDocVersionSuggestions)(t),u=c.latestDocSuggestion,d=c.latestVersionSuggestion;if(!d)return l.a.createElement(l.a.Fragment,null);var m,g=null!=u?u:(m=d).docs.find((function(e){return e.id===m.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,a.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,a.label),". This version will reach end-of-life on"," ",l.a.createElement(i.a,{to:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"May 31, 2021"),". Until then, critical bugs will be fixed but no new features will be added."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(i.a,{to:g.path,onClick:function(){return n(d.name)}},"latest version"))," ","(",d.label,")."))}}}]);