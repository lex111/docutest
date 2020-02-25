(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(239)),i={id:"creating-pages",title:"Creating Pages"},l={id:"version-2.0.0-alpha.40/creating-pages",title:"Creating Pages",description:"In this section, we will learn about creating ad-hoc pages in Docusaurus using React. This is most useful for creating one-off standalone pages like a showcase page, playground page or support page.",source:"@site/versioned_docs/version-2.0.0-alpha.40/creating-pages.md",permalink:"/docs/2.0.0-alpha.40/creating-pages",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.40/creating-pages.md",version:"2.0.0-alpha.40",lastUpdatedBy:"Endi",lastUpdatedAt:1577266229,sidebar:"version-2.0.0-alpha.40/docs",previous:{title:"Configuration",permalink:"/docs/2.0.0-alpha.40/configuration"},next:{title:"Styling and Layout",permalink:"/docs/2.0.0-alpha.40/styling-layout"}},c=[{value:"Adding a new page",id:"adding-a-new-page",children:[]},{value:"Routing",id:"routing",children:[]},{value:"Using React",id:"using-react",children:[]}],p={rightToc:c},s="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(s,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we will learn about creating ad-hoc pages in Docusaurus using React. This is most useful for creating one-off standalone pages like a showcase page, playground page or support page."),Object(o.b)("h2",{id:"adding-a-new-page"},"Adding a new page"),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory, create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"hello.js")," with the following contents:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Layout from '@theme/Layout';\n\nfunction Hello() {\n  return (\n    <Layout title=\"Hello\">\n      <div\n        style={{\n          display: 'flex',\n          justifyContent: 'center',\n          alignItems: 'center',\n          height: '50vh',\n          fontSize: '20px',\n        }}>\n        <p>\n          Edit <code>pages/hello.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n\nexport default Hello;\n")),Object(o.b)("p",null,"Once you save the file, the development server will automatically reload the changes. Now open ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000/hello"}),"http://localhost:3000/hello"),", you will see the new page you just created."),Object(o.b)("p",null,"Each page doesn't come with any styling. You will need to import the ",Object(o.b)("inlineCode",{parentName:"p"},"Layout")," component from ",Object(o.b)("inlineCode",{parentName:"p"},"@theme/Layout")," and wrap your contents within that component if you want the navbar and/or footer to appear."),Object(o.b)("h2",{id:"routing"},"Routing"),Object(o.b)("p",null,"If you are familiar with other static site generators like Jekyll and Next, this routing approach will feel familiar to you. Any JavaScript file you create under ",Object(o.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory will be automatically converted to a website page, following the ",Object(o.b)("inlineCode",{parentName:"p"},"/src/pages/")," directory hierarchy. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/index.js")," \u2192 ",Object(o.b)("inlineCode",{parentName:"li"},"<baseUrl>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/foo.js")," \u2192 ",Object(o.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/foo/test.js")," \u2192 ",Object(o.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo/test")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/foo/index.js")," \u2192 ",Object(o.b)("inlineCode",{parentName:"li"},"<baseUrl>/foo/"))),Object(o.b)("p",null,'In this component-based development era, it is encouraged to co-locate your styling, markup and behavior together into components. Each page is a component, and if you need to customize your page design with your own styles, we recommend co-locating your styles with the page component in its own directory. For example, to create a "Support" page, you could do one of the following:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a ",Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/support.js")," file"),Object(o.b)("li",{parentName:"ul"},"Create a ",Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/support/")," directory and a ",Object(o.b)("inlineCode",{parentName:"li"},"/src/pages/support/index.js")," file.")),Object(o.b)("p",null,"The latter is preferred as it has the benefits of letting you put files related to the page within that directory. For e.g. a CSS module file (",Object(o.b)("inlineCode",{parentName:"p"},"styles.module.css"),') with styles meant to only be used on the "Support" page. ',Object(o.b)("strong",{parentName:"p"},"Note:")," this is merely a recommended directory structure and you will still need to manually import the CSS module file within your component module (",Object(o.b)("inlineCode",{parentName:"p"},"support/index.js"),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"my-website\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u251c\u2500\u2500 index.js\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n.\n")),Object(o.b)("h2",{id:"using-react"},"Using React"),Object(o.b)("p",null,"React is used as the UI library to create pages. Every page component should export a React component and you can leverage on the expressiveness of React to build rich and interactive content."))}u.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(g,l({ref:t},p,{components:n})):r.a.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);