(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),o=(n(0),n(239)),c={id:"docusaurus-core",title:"Docusaurus Client API",sidebar_label:"Client API"},i={id:"version-2.0.0-alpha.43/docusaurus-core",title:"Docusaurus Client API",description:"Docusaurus provides some API on client that can be helpful when building your site.",source:"@site/versioned_docs/version-2.0.0-alpha.43/docusaurus-core.md",permalink:"/docs/docusaurus-core",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.43/docusaurus-core.md",version:"2.0.0-alpha.43",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1582023701,sidebar_label:"Client API",sidebar:"version-2.0.0-alpha.43/docs",previous:{title:"CLI",permalink:"/docs/cli"},next:{title:"docusaurus.config.js",permalink:"/docs/docusaurus.config.js"}},s=[{value:"<code>Head</code>",id:"head",children:[]},{value:"<code>Link</code>",id:"link",children:[{value:"<code>to</code>: string",id:"to-string",children:[]},{value:"<code>activeClassName</code>: string",id:"activeclassname-string",children:[]}]},{value:"<code>useDocusaurusContext</code>",id:"usedocusauruscontext",children:[]},{value:"<code>useBaseUrl</code>",id:"usebaseurl",children:[]},{value:"<code>Redirect</code>",id:"redirect",children:[]}],l={rightToc:s},u="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Docusaurus provides some API on client that can be helpful when building your site."),Object(o.b)("h2",{id:"head"},Object(o.b)("inlineCode",{parentName:"h2"},"Head")),Object(o.b)("p",null,"This reusable React component will manage all of your changes to the document head. It takes plain HTML tags and outputs plain HTML tags and is beginner-friendly. It is a wrapper around ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nfl/react-helmet"}),"React Helmet"),"."),Object(o.b)("p",null,"Usage Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,6,11}","{2,6,11}":!0}),'import React from \'react\';\nimport Head from \'@docusaurus/Head\';\n\nconst MySEO = () => (\n  <>\n    <Head>\n      <meta property="og:description" content="My custom description" />\n      <meta charSet="utf-8" />\n      <title>My Title</title>\n      <link rel="canonical" href="http://mysite.com/example" />\n    </Head>\n  </>\n);\n')),Object(o.b)("p",null,"Nested or latter components will override duplicate usages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,5,8,11}","{2,5,8,11}":!0}),'<Parent>\n  <Head>\n    <title>My Title</title>\n    <meta name="description" content="Helmet application" />\n  </Head>\n\n  <Child>\n    <Head>\n      <title>Nested Title</title>\n      <meta name="description" content="Nested component" />\n    </Head>\n  </Child>\n</Parent>\n')),Object(o.b)("p",null,"Outputs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  <title>Nested Title</title>\n  <meta name="description" content="Nested component" />\n</head>\n')),Object(o.b)("h2",{id:"link"},Object(o.b)("inlineCode",{parentName:"h2"},"Link")),Object(o.b)("p",null,"This component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an ",Object(o.b)("inlineCode",{parentName:"p"},"IntersectionObserver")," to fetch a low-priority request when the ",Object(o.b)("inlineCode",{parentName:"p"},"<Link>")," is in the viewport and then use an ",Object(o.b)("inlineCode",{parentName:"p"},"onMouseOver")," event to trigger a high-priority request when it is likely that a user will navigate to the requested resource."),Object(o.b)("p",null,"The component is a wrapper around react-router\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"<NavLink>")," component that adds useful enhancements specific to Docusaurus. All props are passed through to react-router\u2019s ",Object(o.b)("inlineCode",{parentName:"p"},"<NavLink>")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,7}","{2,7}":!0}),"import React from 'react';\nimport Link from '@docusaurus/Link';\n\nconst Page = () => (\n  <div>\n    <p>\n      Check out my <Link to=\"/blog\">blog</Link>!\n    </p>\n    <p>\n      {/* Note that external links still use `a` tags. */}\n      Follow me on <a href=\"https://twitter.com/docusaurus\">Twitter</a>!\n    </p>\n  </div>\n);\n")),Object(o.b)("h3",{id:"to-string"},Object(o.b)("inlineCode",{parentName:"h3"},"to"),": string"),Object(o.b)("p",null,"The target location to navigate to. Example: ",Object(o.b)("inlineCode",{parentName:"p"},"/docs/introduction"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Link to="/courses" />\n')),Object(o.b)("h3",{id:"activeclassname-string"},Object(o.b)("inlineCode",{parentName:"h3"},"activeClassName"),": string"),Object(o.b)("p",null,"The class to give the ",Object(o.b)("inlineCode",{parentName:"p"},"<Link>")," when it is active. The default given class is ",Object(o.b)("inlineCode",{parentName:"p"},"active"),". This will be joined with the ",Object(o.b)("inlineCode",{parentName:"p"},"className")," prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{1}","{1}":!0}),'<Link to="/faq" activeClassName="selected">\n  FAQs\n</Link>\n')),Object(o.b)("h2",{id:"usedocusauruscontext"},Object(o.b)("inlineCode",{parentName:"h2"},"useDocusaurusContext")),Object(o.b)("p",null,"React Hooks to access Docusaurus Context. Context contains ",Object(o.b)("inlineCode",{parentName:"p"},"siteConfig")," object from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/docusaurus.config.js"}),"docusaurus.config.js"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface DocusaurusContext {\n  siteConfig?: DocusaurusConfig;\n}\n")),Object(o.b)("p",null,"Usage example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,5}","{2,5}":!0}),"import React from 'react';\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Test = () => {\n  const context = useDocusaurusContext();\n  const {siteConfig = {}} = context;\n  const {title} = siteConfig;\n\n  return <h1>{title}</h1>;\n};\n")),Object(o.b)("h2",{id:"usebaseurl"},Object(o.b)("inlineCode",{parentName:"h2"},"useBaseUrl")),Object(o.b)("p",null,"React Hook to automatically append ",Object(o.b)("inlineCode",{parentName:"p"},"baseUrl")," to a string automatically. This is particularly useful if you don't want to hardcode your baseUrl."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3,11}","{3,11}":!0}),"import React, {useEffect} from 'react';\nimport Link from '@docusaurus/Link';\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\nfunction Help() {\n  return (\n    <div className=\"col\">\n      <h2>Browse the docs</h2>\n      <p>\n        Learn more about Docusaurus using the{' '}\n        <Link to={useBaseUrl('docs/introduction')}>official documentation</Link>\n      </p>\n    </div>\n  );\n}\n")),Object(o.b)("h2",{id:"redirect"},Object(o.b)("inlineCode",{parentName:"h2"},"Redirect")),Object(o.b)("p",null,"Rendering a ",Object(o.b)("inlineCode",{parentName:"p"},"<Redirect>")," will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do. You can refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reacttraining.com/react-router/web/api/Redirect"}),"React Router's Redirect documentation")," for more info on available props."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,5}","{2,5}":!0}),"import React from 'react';\nimport {Redirect} from '@docusaurus/router';\n\nfunction Home() {\n  return <Redirect to=\"/docs/test\" />;\n}\n")))}p.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,i({ref:t},l,{components:n})):r.a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);