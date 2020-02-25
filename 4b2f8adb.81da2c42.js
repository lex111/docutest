/*! For license information please see 4b2f8adb.81da2c42.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),o=(n(0),n(239)),i=n(242),c=n(243),s={id:"installation",title:"Installation"},l={id:"version-2.0.0-alpha.43/installation",title:"Installation",description:"Docusaurus is essentially a set of npm [packages](https://github.com/facebook/docusaurus/tree/master/packages) that can be installed over npm.",source:"@site/versioned_docs/version-2.0.0-alpha.43/installation.md",permalink:"/docs/installation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.43/installation.md",version:"2.0.0-alpha.43",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1582023701,sidebar:"version-2.0.0-alpha.43/docs",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Configuration",permalink:"/docs/configuration"}},u=[{value:"Requirements",id:"requirements",children:[]},{value:"Scaffold project website",id:"scaffold-project-website",children:[]},{value:"Project structure",id:"project-structure",children:[{value:"Project structure rundown",id:"project-structure-rundown",children:[]}]},{value:"Running the development server",id:"running-the-development-server",children:[]},{value:"Build",id:"build",children:[]},{value:"Problems?",id:"problems",children:[]}],b={rightToc:u},p="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Docusaurus is essentially a set of npm ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/docusaurus/tree/master/packages"}),"packages")," that can be installed over npm."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"Node.js")," version >= 10.9.0 or above (which can be checked by running ",Object(o.b)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," for managing multiple Node versions on a single machine installed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://yarnpkg.com/en/"}),"Yarn")," version >= 1.5 (which can be checked by running ",Object(o.b)("inlineCode",{parentName:"li"},"yarn version"),"). Yarn is a performant package manager for JavaScript and replaces the ",Object(o.b)("inlineCode",{parentName:"li"},"npm")," client. It is not strictly necessary but highly encouraged.")),Object(o.b)("h2",{id:"scaffold-project-website"},"Scaffold project website"),Object(o.b)("p",null,"The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@next init [name] [template]\n")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@next init my-website classic\n")),Object(o.b)("p",null,"If you do not specify ",Object(o.b)("inlineCode",{parentName:"p"},"name")," or ",Object(o.b)("inlineCode",{parentName:"p"},"template"),", it will prompt you for them. We recommend the ",Object(o.b)("inlineCode",{parentName:"p"},"classic")," template so that you can get started quickly and it contains features found in Docusaurus 1. The ",Object(o.b)("inlineCode",{parentName:"p"},"classic")," template contains ",Object(o.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," which includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). You can get up and running extremely quickly with the classic template and customize things later on when you have gained more familiarity with Docusaurus."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Important Note:")," If you are setting up a new Docusaurus website for a Facebook open source project, use the ",Object(o.b)("inlineCode",{parentName:"p"},"facebook")," template instead, which comes with some useful Facebook-specific defaults:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx @docusaurus/init@next init my-website facebook\n")),Object(o.b)("h2",{id:"project-structure"},"Project structure"),Object(o.b)("p",null,"Assuming you chose the classic template and named your site ",Object(o.b)("inlineCode",{parentName:"p"},"my-website"),", you will see the following files generated under a new directory ",Object(o.b)("inlineCode",{parentName:"p"},"my-website/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),Object(o.b)("h3",{id:"project-structure-rundown"},"Project structure rundown"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/blog/")," - Contains the blog markdown files. You can delete the directory if you do not want/need a blog. More details can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/blog"}),"blog guide"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/docs/")," - Contains the markdown files for the docs. Customize the order of the docs sidebar in ",Object(o.b)("inlineCode",{parentName:"li"},"sidebars.js"),". More details can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/markdown-features"}),"docs guide"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/")," - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files in here but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/src/pages")," - Any files within this directory will be converted into a website page. More details can be found in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/creating-pages"}),"pages guide"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/static/")," - Static directory. Any contents inside here will be copied into the root of the final ",Object(o.b)("inlineCode",{parentName:"li"},"build")," directory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/docusaurus.config.js")," - A config file containing the site configuration. This is the equivalent of ",Object(o.b)("inlineCode",{parentName:"li"},"siteConfig.js")," in Docusaurus 1."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/package.json")," - A Docusaurus website is a React app. You can install and use any npm packages you like in them."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"/sidebar.js")," - Used by the documentation to specify the order of documents in the sidebar.")),Object(o.b)("h2",{id:"running-the-development-server"},"Running the development server"),Object(o.b)("p",null,"To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes."),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd my-website\nnpm run start\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd my-website\nyarn run start\n")))),Object(o.b)("p",null,"By default, a browser window will open at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000"),"."),Object(o.b)("p",null,"Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available."),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("p",null,"Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn run build\n")))),Object(o.b)("p",null,"and contents will be generated within the ",Object(o.b)("inlineCode",{parentName:"p"},"/build")," directory, which can be copied to any static file hosting service like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub pages"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://zeit.co/now"}),"Now")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.netlify.com/"}),"Netlify"),". Check out the docs on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/deployment"}),"deployment")," for more details."),Object(o.b)("h2",{id:"problems"},"Problems?"),Object(o.b)("p",null,"Ask for help on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/docusaurus"}),"Stack Overflow"),", on our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/docusaurus"}),"GitHub repository")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/docusaurus"}),"Twitter"),"."))}d.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},240:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},242:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(240),i=n.n(o),c=n(88),s=n.n(c);const l={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:o,values:c}=e,[u,b]=Object(a.useState)(o),p=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===e,className:i()("tab-item",s.a.tabItem,{"tab-item--active":u===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case l.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case l.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===u)[0]))}},243:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);