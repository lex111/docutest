/*! For license information please see b0e630c5.42c4251f.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(6),s=(a(0),a(239)),c=a(242),r=a(243),l={id:"using-themes",title:"Themes"},i={id:"version-2.0.0-alpha.43/using-themes",title:"Themes",description:"Like plugins, themes are designed to add functionality to your Docusaurus site. As a good rule of thumb, themes are mostly focused on client-side, where plugins are more focused on server-side functionalities. Themes are also designed to be replace-able with other themes.",source:"@site/versioned_docs/version-2.0.0-alpha.43/using-themes.md",permalink:"/docs/using-themes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.43/using-themes.md",version:"2.0.0-alpha.43",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1582023701,sidebar:"version-2.0.0-alpha.43/docs",previous:{title:"Plugins",permalink:"/docs/using-plugins"},next:{title:"Presets",permalink:"/docs/presets"}},u=[{value:"Using themes",id:"using-themes",children:[]},{value:"Theme components",id:"theme-components",children:[]},{value:"Swizzling theme components",id:"swizzling-theme-components",children:[]},{value:"Official themes by Docusaurus",id:"official-themes-by-docusaurus",children:[{value:"<code>@docusaurus/theme-classic</code>",id:"docusaurustheme-classic",children:[]},{value:"<code>@docusaurus/theme-search-algolia</code>",id:"docusaurustheme-search-algolia",children:[]},{value:"<code>@docusaurus/theme-live-codeblock</code>",id:"docusaurustheme-live-codeblock",children:[]}]},{value:"Themes design",id:"themes-design",children:[]},{value:"Writing customized Docusaurus themes",id:"writing-customized-docusaurus-themes",children:[]}],b={rightToc:u},m="wrapper";function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)(m,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Like plugins, themes are designed to add functionality to your Docusaurus site. As a good rule of thumb, themes are mostly focused on client-side, where plugins are more focused on server-side functionalities. Themes are also designed to be replace-able with other themes."),Object(s.b)("h2",{id:"using-themes"},"Using themes"),Object(s.b)("p",null,"To use themes, specify the themes in your ",Object(s.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". You may use multiple themes:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{4}","{4}":!0}),"// docusaurus.config.js\nmodule.exports = {\n  // ...\n  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],\n};\n")),Object(s.b)("h2",{id:"theme-components"},"Theme components"),Object(s.b)("p",null,"Most of the time, theme is used to provide a set of React components, e.g. ",Object(s.b)("inlineCode",{parentName:"p"},"Navbar"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Layout"),", ",Object(s.b)("inlineCode",{parentName:"p"},"Footer"),"."),Object(s.b)("p",null,"Users can use these components in their code by importing them using the ",Object(s.b)("inlineCode",{parentName:"p"},"@theme")," webpack alias:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import Navbar from '@theme/Navbar';\n")),Object(s.b)("p",null,"The alias ",Object(s.b)("inlineCode",{parentName:"p"},"@theme")," can refer to a few directories, in the following priority:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"A user's ",Object(s.b)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),Object(s.b)("li",{parentName:"ol"},"A Docusaurus theme packages's ",Object(s.b)("inlineCode",{parentName:"li"},"theme")," directory."),Object(s.b)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),Object(s.b)("p",null,"Given the following structure"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 docusaurus-theme\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",Object(s.b)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. In iOS, method swizzling is the process of changing the implementation of an existing selector (method). In the context of a website, component swizzling means providing an alternative component that takes precedence over the component provided by the theme."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Themes are for providing UI components to present the content.")," Most content plugins need to be paired with a theme in order to be actually useful. The UI is a separate layer from the data schema, so it makes it easy to swap out the themes for other designs (i.e., Bootstrap)."),Object(s.b)("p",null,"For example, a Docusaurus blog consists of a blog plugin and a blog theme."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\n{\n  theme: ['theme-blog'],\n  plugins: ['plugin-content-blog'],\n}\n")),Object(s.b)("p",null,"and if you want to use Bootstrap styling, you can swap out the theme with ",Object(s.b)("inlineCode",{parentName:"p"},"theme-blog-bootstrap")," (fictitious non-existing theme):"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\n{\n  theme: ['theme-blog-bootstrap'],\n  plugins: ['plugin-content-blog'],\n}\n")),Object(s.b)("p",null,"The content plugin remains the same and the only thing you need to change is the theme."),Object(s.b)("h2",{id:"swizzling-theme-components"},"Swizzling theme components"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f We would like to discourage swizzling of components until we've minimally reached a Beta stage. The components APIs have been changing rapidly and are likely to keep changing until we reach Beta. Stick with the default appearance for now if possible to save yourself some potential pain in future.")),Object(s.b)("p",null,"Docusaurus Themes' components are designed to be replaceable. To make it easier for you, we created a command for you to replace theme components called ",Object(s.b)("inlineCode",{parentName:"p"},"swizzle"),"."),Object(s.b)("p",null,"To swizzle a component for a theme, run the following command in your doc site:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docusaurus swizzle <theme name> [component name]\n")),Object(s.b)("p",null,"As an example, to swizzle the ",Object(s.b)("inlineCode",{parentName:"p"},"<Footer />")," component in ",Object(s.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," for your site, run:"),Object(s.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run swizzle @docusaurus/theme-classic Footer\n"))),Object(s.b)(r.a,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn run swizzle @docusaurus/theme-classic Footer\n")))),Object(s.b)("p",null,"This will copy the current ",Object(s.b)("inlineCode",{parentName:"p"},"<Footer />")," component used by the theme to a ",Object(s.b)("inlineCode",{parentName:"p"},"src/theme/Footer")," directory under the root of your site, which is where Docusaurus will look for swizzled components. Docusaurus will then use swizzled component in place of the original one from the theme."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note"),": You need to restart your dev server for Docusaurus to pick up the new component."),Object(s.b)("h2",{id:"official-themes-by-docusaurus"},"Official themes by Docusaurus"),Object(s.b)("h3",{id:"docusaurustheme-classic"},Object(s.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-classic")),Object(s.b)("p",null,"The classic theme for Docusaurus. You can refer to ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/theme-classic"}),"classic theme configuration")," for more details on the configuration."),Object(s.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-classic\n"))),Object(s.b)(r.a,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-classic\n")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you have installed ",Object(s.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency.")),Object(s.b)("h3",{id:"docusaurustheme-search-algolia"},Object(s.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-search-algolia")),Object(s.b)("p",null,"This theme provides a ",Object(s.b)("inlineCode",{parentName:"p"},"@theme/SearchBar")," component that integrates with Algolia DocSearch easily. Combined with ",Object(s.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),", it provides a very easy search integration. You can read more on ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/search"}),"search")," documentation."),Object(s.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-search-algolia\n"))),Object(s.b)(r.a,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-search-algolia\n")))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you have installed ",Object(s.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency.")),Object(s.b)("h3",{id:"docusaurustheme-live-codeblock"},Object(s.b)("inlineCode",{parentName:"h3"},"@docusaurus/theme-live-codeblock")),Object(s.b)("p",null,"This theme provides a ",Object(s.b)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," component that is powered by react-live. You can read more on ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/markdown-features#interactive-code-editor"}),"interactive code editor")," documentation."),Object(s.b)(c.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(s.b)(r.a,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/theme-live-codeblock\n"))),Object(s.b)(r.a,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/theme-live-codeblock\n")))),Object(s.b)("h2",{id:"themes-design"},"Themes design"),Object(s.b)("p",null,"While themes share the exact same lifecycle methods with plugins, their implementations can look very different from those of plugins based on themes' designed objectives."),Object(s.b)("p",null,"Themes are designed to complete the build of your Docusaurus site and supply the components used by your site, plugins, and the themes themselves. So a typical theme implementation would look like a ",Object(s.b)("inlineCode",{parentName:"p"},"src/index.js")," file that hooks it up to the lifecycle methods. Most likely they would not use ",Object(s.b)("inlineCode",{parentName:"p"},"loadContent"),", which plugins would use. And it is typically accompanied by a ",Object(s.b)("inlineCode",{parentName:"p"},"src/theme")," directory full of components."),Object(s.b)("p",null,"To summarize:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Themes share the same lifecycle methods with Plugins"),Object(s.b)("li",{parentName:"ul"},"Themes are run after all existing Plugins"),Object(s.b)("li",{parentName:"ul"},"Themes exist to add component aliases by extending the webpack config")),Object(s.b)("h2",{id:"writing-customized-docusaurus-themes"},"Writing customized Docusaurus themes"),Object(s.b)("p",null,"A Docusaurus theme normally includes an ",Object(s.b)("inlineCode",{parentName:"p"},"index.js")," file where you hook up to the lifecycle methods, alongside with a ",Object(s.b)("inlineCode",{parentName:"p"},"theme/")," directory of components. A typical Docusaurus ",Object(s.b)("inlineCode",{parentName:"p"},"theme")," folder looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:"{5-7}","{5-7}":!0}),"website\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 index.js\n    \u2514\u2500\u2500 theme\n        \u251c\u2500\u2500 MyThemeComponent\n        \u2514\u2500\u2500 AnotherThemeComponent.js\n")),Object(s.b)("p",null,"There are two lifecycle methods that are essential to theme implementation:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/lifecycle-apis#getthemepath"}),"getThemePath")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/lifecycle-apis#getclientmodules"}),"getClientModules"))))}p.isMDXComponent=!0},239:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||s;return a?o.a.createElement(d,r({ref:t},i,{components:a})):o.a.createElement(d,r({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,c=new Array(s);c[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:n,c[1]=r;for(var i=2;i<s;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},240:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===s)for(var r in n)a.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},242:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(240),c=a.n(s),r=a(88),l=a.n(r);const i={left:37,right:39};t.a=function(e){const{block:t,children:a,defaultValue:s,values:r}=e,[u,b]=Object(n.useState)(s),m=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},r.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:c()("tab-item",l.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case i.right:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i.left:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===u)[0]))}},243:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);