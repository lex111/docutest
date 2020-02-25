(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(239)),i={id:"design-principles",title:"Design Principles"},c={id:"design-principles",title:"Design Principles",description:":::caution",source:"@site/docs/design-principles.md",permalink:"/docs/next/design-principles",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/design-principles.md",version:"next",lastUpdatedBy:"Zhenchao Cai",lastUpdatedAt:1582452697,sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/introduction"},next:{title:"Contributing",permalink:"/docs/next/contributing"}},s=[{value:"How Docusaurus works",id:"how-docusaurus-works",children:[]}],l={rightToc:s},u="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("em",{parentName:"p"},"This section is a work in progress.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Little to learn")," - Docusaurus should be easy to learn and use as the API is quite small. Most things will still be achievable by users, even if it takes them more code and more time to write. Not having abstractions is better than having the wrong abstractions, and we don't want users to have to hack around the wrong abstractions. Mandatory talk - ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=4anAwXYqLG8"}),"Minimal API Surface Area"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Intuitive")," - Users will not feel overwhelmed when looking at the project directory of a Docusaurus project or adding new features. It should look intuitive and easy to build on top of, using approaches they are familiar with."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Layered architecture")," - The separations of concerns between each layer of our stack (content/theming/styling) should be clear - well-abstracted and modular."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Sensible defaults")," - Common and popular performance optimizations and configurations will be done for users but they are given the option to override them."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"No vendor-lock in")," - Users are not required to use the default plugins or CSS, although they are highly encouraged to. Certain core lower-level infra level pieces like React Loadable, React Router cannot be swapped because we do default performance optimization on them. But not higher level ones, such as choice of Markdown engines, CSS frameworks, CSS methodology will be entirely up to users.")),Object(o.b)("h2",{id:"how-docusaurus-works"},"How Docusaurus works"),Object(o.b)("p",null,"We believe that as developers, knowing how a library works is helpful in allowing us to become better at using it. Hence we're dedicating effort into explaining the architecture and various components of Docusaurus with the hope that users reading it will gain a deeper understanding of the tool and be even more proficient in using it."))}p.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);