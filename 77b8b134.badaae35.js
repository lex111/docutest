(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),i=(n(0),n(239)),o={id:"static-assets",title:"Static Assets"},s={id:"static-assets",title:"Static Assets",description:"In general, every website needs assets: images, stylesheets, favicons and etc. In such cases, you can create a directory named `static` at the root of your project. Every file you put into that directory will be copied into the the root of the generated `build` folder with the directory hierarchy preserved. E.g. if you add a file named `sun.jpg` to the static folder, it\u2019ll be copied to `build/sun.jpg`.",source:"@site/docs/static-assets.md",permalink:"/docs/next/static-assets",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/static-assets.md",version:"next",lastUpdatedBy:"Endi",lastUpdatedAt:1575059209,sidebar:"docs",previous:{title:"Styling and Layout",permalink:"/docs/next/styling-layout"},next:{title:"Markdown Features",permalink:"/docs/next/markdown-features"}},c=[{value:"Referencing your static asset",id:"referencing-your-static-asset",children:[{value:"JSX example",id:"jsx-example",children:[]},{value:"Markdown example",id:"markdown-example",children:[]},{value:"Caveats",id:"caveats",children:[]}]}],l={rightToc:c},u="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In general, every website needs assets: images, stylesheets, favicons and etc. In such cases, you can create a directory named ",Object(i.b)("inlineCode",{parentName:"p"},"static")," at the root of your project. Every file you put into that directory will be copied into the the root of the generated ",Object(i.b)("inlineCode",{parentName:"p"},"build")," folder with the directory hierarchy preserved. E.g. if you add a file named ",Object(i.b)("inlineCode",{parentName:"p"},"sun.jpg")," to the static folder, it\u2019ll be copied to ",Object(i.b)("inlineCode",{parentName:"p"},"build/sun.jpg"),"."),Object(i.b)("p",null,"This means that if the site's ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl")," is ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", an image in ",Object(i.b)("inlineCode",{parentName:"p"},"/static/img/docusaurus_keytar.svg")," is available at ",Object(i.b)("inlineCode",{parentName:"p"},"/img/docusaurus_keytar.svg"),"."),Object(i.b)("h2",{id:"referencing-your-static-asset"},"Referencing your static asset"),Object(i.b)("p",null,"You can reference assets from the ",Object(i.b)("inlineCode",{parentName:"p"},"static")," folder in your code. You could use hardcoded absolute paths, i.e. starting with a slash /, but remember to include the ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl")," if it is not ",Object(i.b)("inlineCode",{parentName:"p"},"/"),". However, this will break if you change your ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl")," in the config."),Object(i.b)("p",null,"A better way would be to use the ",Object(i.b)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function which appends the ",Object(i.b)("inlineCode",{parentName:"p"},"baseUrl")," to paths for you."),Object(i.b)("h3",{id:"jsx-example"},"JSX example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// MyComponent.js\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\n<img\n  alt=\"Docusaurus with Keytar\"\n  src={useBaseUrl('img/docusaurus_keytar.svg')}\n/>;\n")),Object(i.b)("h3",{id:"markdown-example"},"Markdown example"),Object(i.b)("p",null,"Thanks to MDX, you can also use ",Object(i.b)("inlineCode",{parentName:"p"},"useBaseUrl")," utility function in Markdown files! You'd have to use ",Object(i.b)("inlineCode",{parentName:"p"},"<img>")," tags instead of the Markdown image syntax though. The syntax is exactly the same as in JSX."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-txt"}),"// my-doc.mdx\n---\nid: my-doc\ntitle: My Doc\n---\n\nimport useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.\n\n...\n\n<img alt=\"Docusaurus with Keytar\" src={useBaseUrl('img/docusaurus_keytar.svg')} />;\n")),Object(i.b)("p",null,"You could also just use Markdown image syntax, but you would have to manually maintain the image paths yourself and isn't recommended."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"// my-doc.md\n\n![Docusaurus with Keytar](/img/docusaurus_keytar.png)\n")),Object(i.b)("h3",{id:"caveats"},"Caveats"),Object(i.b)("p",null,"Keep in mind that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"By default, none of the files in ",Object(i.b)("inlineCode",{parentName:"li"},"static")," folder will be post-processed or minified."),Object(i.b)("li",{parentName:"ul"},"Missing files references via hardcoded absolute paths will not be detected at compilation time, and will result in a 404 error.")))}d.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);