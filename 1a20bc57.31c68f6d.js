(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(6),c=(a(0),a(239)),o={id:"cli",title:"CLI"},l={id:"cli",title:"CLI",description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.",source:"@site/docs/cli.md",permalink:"/docutest/docs/next/cli",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cli.md",version:"next",lastUpdatedBy:"Zhenchao Cai",lastUpdatedAt:1582452697,sidebar:"docs",previous:{title:"Presets",permalink:"/docutest/docs/next/presets"},next:{title:"Docusaurus Client API",permalink:"/docutest/docs/next/docusaurus-core"}},i=[{value:"Docusaurus CLI commands",id:"docusaurus-cli-commands",children:[{value:"<code>docusaurus start</code>",id:"docusaurus-start",children:[]},{value:"<code>docusaurus build</code>",id:"docusaurus-build",children:[]},{value:"<code>docusaurus swizzle</code>",id:"docusaurus-swizzle",children:[]},{value:"<code>docusaurus deploy</code>",id:"docusaurus-deploy",children:[]}]}],b={rightToc:i},u="wrapper";function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."),Object(c.b)("p",null,"Once your website is generated, your website package will contain the Docusaurus scripts that you may invoke with your package manager:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'// package.json\n{\n  // ...\n  "scripts": {\n    "start": "docusaurus start",\n    "build": "docusaurus build",\n    "swizzle": "docusaurus swizzle",\n    "deploy": "docusaurus deploy"\n  }\n}\n')),Object(c.b)("h2",{id:"docusaurus-cli-commands"},"Docusaurus CLI commands"),Object(c.b)("p",null,"Below is a list of Docusaurus CLI commands and their usages:"),Object(c.b)("h3",{id:"docusaurus-start"},Object(c.b)("inlineCode",{parentName:"h3"},"docusaurus start")),Object(c.b)("p",null,"Builds and serves the static site with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://webpack.js.org/configuration/dev-server"}),"Webpack Dev Server"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"options")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"--port")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"3000")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifies the port of the dev server")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"--host")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"localhost")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify a host to use. E.g., if you want your server to be accessible externally, you can use ",Object(c.b)("inlineCode",{parentName:"td"},"--host 0.0.0.0"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"--hot-only")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enables Hot Module Replacement without page refresh as fallback in case of build failures. More information ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://webpack.js.org/configuration/dev-server/#devserverhotonly"}),"here"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"--no-open")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"false")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Do not open automatically the page in the browser.")))),Object(c.b)("h3",{id:"docusaurus-build"},Object(c.b)("inlineCode",{parentName:"h3"},"docusaurus build")),Object(c.b)("p",null,"Compiles your site for production."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"options")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"--bundle-analyzer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Analyze your bundle with ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"}),"bundle analyzer"))))),Object(c.b)("h3",{id:"docusaurus-swizzle"},Object(c.b)("inlineCode",{parentName:"h3"},"docusaurus swizzle")),Object(c.b)("div",{className:"admonition admonition-caution"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We would like to discourage swizzling of components until we've minimally reached a Beta stage. The components APIs have been changing rapidly and are likely to keep changing until we reach Beta. Stick with the default appearance for now if possible to save yourself some potential pain in future."))),Object(c.b)("p",null,"Swizzle any Docusaurus Theme components with your own component with ",Object(c.b)("inlineCode",{parentName:"p"},"docusaurus swizzle"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docusaurus swizzle <themeName> [componentName] [siteDir]\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"params")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"themeName"),": name of the theme you are using"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"swizzleComponent"),": name of the component to be swizzled")),Object(c.b)("p",null,"Running the above command will copy the relevant theme files to your site folder. You may then make any changes to it and Docusaurus will use it instead of the one provided from the theme."),Object(c.b)("p",null,"To unswizzle a component, simply delete the files of the swizzled component."),Object(c.b)("p",null,"To learn more about swizzling, check ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"here"),"."),Object(c.b)("h3",{id:"docusaurus-deploy"},Object(c.b)("inlineCode",{parentName:"h3"},"docusaurus deploy")),Object(c.b)("p",null,"Deploys your site with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages"),"."))}s.isMDXComponent=!0},239:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(a),p=n,m=s["".concat(o,".").concat(p)]||s[p]||d[p]||c;return a?r.a.createElement(m,l({ref:t},b,{components:a})):r.a.createElement(m,l({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var b=2;b<c;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);