/*! For license information please see 38791f3c.72a038e7.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{139:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return u})),t.d(a,"default",(function(){return d}));var n=t(1),r=t(6),o=(t(0),t(239)),c=t(242),l=t(243),i={id:"search",title:"Search",keywords:["docusaurus","search"]},s={id:"version-2.0.0-alpha.40/search",title:"Search",description:"Docusaurus's own `@docusaurus/preset-classic` supports a search integration.",source:"@site/versioned_docs/version-2.0.0-alpha.40/search.md",permalink:"/docs/2.0.0-alpha.40/search",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.40/search.md",version:"2.0.0-alpha.40",lastUpdatedBy:"Endi",lastUpdatedAt:1577266229,sidebar:"version-2.0.0-alpha.40/docs",previous:{title:"Blog",permalink:"/docs/2.0.0-alpha.40/blog"},next:{title:"Deployment",permalink:"/docs/2.0.0-alpha.40/deployment"}},u=[{value:"Using Algolia DocSearch",id:"using-algolia-docsearch",children:[{value:"Connecting Algolia",id:"connecting-algolia",children:[]},{value:"Customizing the Algolia search bar",id:"customizing-the-algolia-search-bar",children:[]}]},{value:"Using your own search",id:"using-your-own-search",children:[]}],p={rightToc:u},b="wrapper";function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Docusaurus's own ",Object(o.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," supports a search integration."),Object(o.b)("p",null,"There are two main options, you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.algolia.com/docsearch/"}),"Algolia DocSearch")," or bring in your own ",Object(o.b)("inlineCode",{parentName:"p"},"SearchBar")," component."),Object(o.b)("h2",{id:"using-algolia-docsearch"},"Using Algolia DocSearch"),Object(o.b)("p",null,"Algolia DocSearch works by crawling the content of your website every 24 hours and putting all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API. Note that your website needs to be publicly available for this to work (i.e., not behind a firewall). The service is free."),Object(o.b)("h3",{id:"connecting-algolia"},"Connecting Algolia"),Object(o.b)("p",null,"To connect your docs with Algolia, add an ",Object(o.b)("inlineCode",{parentName:"p"},"algolia")," field in your ",Object(o.b)("inlineCode",{parentName:"p"},"themeConfig"),". Note that you will need algolia API key and algolia index. You can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://community.algolia.com/docsearch/"}),"apply for DocSearch here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4-8}","{4-8}":!0}),"// docusaurus.config.js\nthemeConfig: {\n    // ....\n    algolia: {\n      apiKey: 'api-key',\n      indexName: 'index-name',\n      algoliaOptions: {}, // Optional, if provided by Algolia\n    },\n  },\n")),Object(o.b)("h3",{id:"customizing-the-algolia-search-bar"},"Customizing the Algolia search bar"),Object(o.b)("p",null,"If you prefer to customize Algolia's search bar React component, swizzle the ",Object(o.b)("inlineCode",{parentName:"p"},"SearchBar")," component in ",Object(o.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-search-algolia"),":"),Object(o.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n"))),Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-search-algolia SearchBar\n")))),Object(o.b)("h2",{id:"using-your-own-search"},"Using your own search"),Object(o.b)("p",null,"To use your own search, swizzle the ",Object(o.b)("inlineCode",{parentName:"p"},"SearchBar")," component in ",Object(o.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")),Object(o.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic SearchBar\n"))),Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic SearchBar\n")))),Object(o.b)("p",null,"This will create a ",Object(o.b)("inlineCode",{parentName:"p"},"src/themes/SearchBar")," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",Object(o.b)("inlineCode",{parentName:"p"},"SearchBar")," component now."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Notes"),": You can alternatively ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#customizing-the-algolia-search-bar"}),"swizzle from Algolia SearchBar")," and create your own search component from there."))}d.isMDXComponent=!0},239:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l({},a,{},e)),t},p=function(e){var a=u(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?r.a.createElement(m,l({ref:a},s,{components:t})):r.a.createElement(m,l({ref:a},s))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[b]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},240:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)t.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},242:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(240),c=t.n(o),l=t(88),i=t.n(l);const s={left:37,right:39};a.a=function(e){const{block:a,children:t,defaultValue:o,values:l}=e,[u,p]=Object(n.useState)(o),b=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":a})},l.map(({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:c()("tab-item",i.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>b.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case s.right:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case s.left:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(b,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},a))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter(e=>e.props.value===u)[0]))}},243:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);