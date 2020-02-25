(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{227:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(1),o=t(6),r=(t(0),t(239)),i={id:"lifecycle-apis",title:"Lifecycle APIs"},c={id:"version-2.0.0-alpha.43/lifecycle-apis",title:"Lifecycle APIs",description:"> :warning: _This section is a work in progress._",source:"@site/versioned_docs/version-2.0.0-alpha.43/lifecycle-apis.md",permalink:"/docs/lifecycle-apis",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.43/lifecycle-apis.md",version:"2.0.0-alpha.43",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1582023701,sidebar:"version-2.0.0-alpha.43/docs",previous:{title:"docusaurus.config.js",permalink:"/docs/docusaurus.config.js"},next:{title:"@docusaurus/theme-classic",permalink:"/docs/theme-classic"}},s=[{value:"<code>getPathsToWatch()</code>",id:"getpathstowatch",children:[]},{value:"<code>async loadContent()</code>",id:"async-loadcontent",children:[]},{value:"<code>async contentLoaded({content, actions})</code>",id:"async-contentloadedcontent-actions",children:[{value:"<code>content</code>",id:"content",children:[]},{value:"<code>actions</code>",id:"actions",children:[]}]},{value:"<code>configureWebpack(config, isServer, utils)</code>",id:"configurewebpackconfig-isserver-utils",children:[{value:"<code>config</code>",id:"config",children:[]},{value:"<code>isServer</code>",id:"isserver",children:[]},{value:"<code>utils</code>",id:"utils",children:[]}]},{value:"postBuild(props)",id:"postbuildprops",children:[]},{value:"<code>extendCli(cli)</code>",id:"extendclicli",children:[]},{value:"<code>injectHtmlTags()</code>",id:"injecthtmltags",children:[]},{value:"<code>getThemePath()</code>",id:"getthemepath",children:[]},{value:"<code>getClientModules()</code>",id:"getclientmodules",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:s},u="wrapper";function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",Object(r.b)("em",{parentName:"p"},"This section is a work in progress."))),Object(r.b)("p",null,"Lifecycle APIs are shared by Themes and Plugins."),Object(r.b)("h2",{id:"getpathstowatch"},Object(r.b)("inlineCode",{parentName:"h2"},"getPathsToWatch()")),Object(r.b)("p",null,"Specifies the paths to watch for plugins and themes. The paths are watched by the dev server so that the plugin lifecycles are reloaded when contents in the watched paths change. Note that the plugins and themes modules are initially called with ",Object(r.b)("inlineCode",{parentName:"p"},"context")," and ",Object(r.b)("inlineCode",{parentName:"p"},"options")," from Node, which you may use to find the necessary directory information about the site."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{6-8}","{6-8}":!0}),"// docusaurus-plugin/src/index.js\nconst path = require('path');\nmodule.exports = function(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`);\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"async-loadcontent"},Object(r.b)("inlineCode",{parentName:"h2"},"async loadContent()")),Object(r.b)("p",null,"Plugins should use this lifecycle to fetch from data sources (filesystem, remote API, headless CMS, etc) or doing some server processing."),Object(r.b)("p",null,"For example, this plugin below return a random integer between 1 to 10 as content;"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{6-7}","{6-7}":!0}),"// docusaurus-plugin/src/index.js\nconst path = require('path');\nmodule.exports = function(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    async loadContent() {\n      return 1 + Math.floor(Math.random() * 10);\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"async-contentloadedcontent-actions"},Object(r.b)("inlineCode",{parentName:"h2"},"async contentLoaded({content, actions})")),Object(r.b)("p",null,"Plugins should use the data loaded in ",Object(r.b)("inlineCode",{parentName:"p"},"loadContent")," and construct the pages/routes that consume the loaded data (optional)."),Object(r.b)("h3",{id:"content"},Object(r.b)("inlineCode",{parentName:"h3"},"content")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"contentLoaded")," will be called ",Object(r.b)("em",{parentName:"p"},"after")," ",Object(r.b)("inlineCode",{parentName:"p"},"loadContent")," is done, the return value of ",Object(r.b)("inlineCode",{parentName:"p"},"loadContent()")," will be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"contentLoaded")," as ",Object(r.b)("inlineCode",{parentName:"p"},"content"),"."),Object(r.b)("h3",{id:"actions"},Object(r.b)("inlineCode",{parentName:"h3"},"actions")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"actions")," contain two functions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addRoute(config: RouteConfig): void"))),Object(r.b)("p",null,"Create a route to add to the website."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface RouteConfig {\n  path: string;\n  component: string;\n  modules?: RouteModule;\n  routes?: RouteConfig[];\n  exact?: boolean;\n  priority?: number;\n}\ninterface RouteModule {\n  [module: string]: Module | RouteModule | RouteModule[];\n}\ntype Module =\n  | {\n      path: string;\n      __import?: boolean;\n      query?: ParsedUrlQueryInput;\n    }\n  | string;\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createData(name: string, data: any): Promise<string>"))),Object(r.b)("p",null,"A helper function to help you write some data (usually a string or JSON) to disk with in-built caching. It takes a file name relative to to your plugin's directory ",Object(r.b)("strong",{parentName:"p"},"(name)"),", your data ",Object(r.b)("strong",{parentName:"p"},"(data)"),", and will return a path to where the data is created."),Object(r.b)("p",null,"For example, this plugin below create a ",Object(r.b)("inlineCode",{parentName:"p"},"/roll"),' page which display "You won xxxx" to user.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// website/src/components/roll.js\nimport React from 'react';\n\nexport default function(props) {\n  const {prizes} = props;\n  const index = Math.floor(Math.random() * 3);\n  return <div> You won ${prizes[index]} </div>;\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript",metastring:"{5-20}","{5-20}":!0}),"// docusaurus-plugin/src/index.js\nmodule.exports = function(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    async contentLoaded({content, actions}) {\n      const {createData, addRoute} = actions;\n      // create a data named 'prizes.json'\n      const prizes = JSON.stringify(['$1', 'a cybertruck', 'nothing']);\n      const prizesDataPath = await createData('prizes.json', prizes);\n\n      // add '/roll' page using 'website/src/component/roll.js` as the component\n      // and providing 'prizes' as props\n      addRoute({\n        path: '/roll',\n        component: '@site/src/components/roll.js',\n        modules: {\n          prizes: prizesDataPath\n        }\n        exact: true,\n      });\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"configurewebpackconfig-isserver-utils"},Object(r.b)("inlineCode",{parentName:"h2"},"configureWebpack(config, isServer, utils)")),Object(r.b)("p",null,"Modifies the internal webpack config. If the return value is a JavaScript object, it will be merged into the final config using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/survivejs/webpack-merge"}),Object(r.b)("inlineCode",{parentName:"a"},"webpack-merge")),". If it is a function, it will be called and receive ",Object(r.b)("inlineCode",{parentName:"p"},"config")," as the first argument and an ",Object(r.b)("inlineCode",{parentName:"p"},"isServer")," flag as the argument argument."),Object(r.b)("h3",{id:"config"},Object(r.b)("inlineCode",{parentName:"h3"},"config")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"configureWebpack")," is called with ",Object(r.b)("inlineCode",{parentName:"p"},"config")," generated according to client/server build. You may treat this as the base config to be merged with."),Object(r.b)("h3",{id:"isserver"},Object(r.b)("inlineCode",{parentName:"h3"},"isServer")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"configureWebpack")," will be called both in server build and in client build. The server build receives ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and the client build receives ",Object(r.b)("inlineCode",{parentName:"p"},"false")," as ",Object(r.b)("inlineCode",{parentName:"p"},"isServer"),"."),Object(r.b)("h3",{id:"utils"},Object(r.b)("inlineCode",{parentName:"h3"},"utils")),Object(r.b)("p",null,"The initial call to ",Object(r.b)("inlineCode",{parentName:"p"},"configureWebpack")," also receives a util object consists of three functions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getStyleLoaders(isServer: boolean, cssOptions: {[key: string]: any}): Loader[]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getCacheLoader(isServer: boolean, cacheOptions?: {}): Loader | null")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getBabelLoader(isServer: boolean, babelOptions?: {}): Loader"))),Object(r.b)("p",null,"You may use them to return your webpack configures conditionally."),Object(r.b)("p",null,"For example, this plugin below modify the webpack config to transpile ",Object(r.b)("inlineCode",{parentName:"p"},".foo")," file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5-12}","{5-12}":!0}),"// docusaurus-plugin/src/index.js\nmodule.exports = function(context, options) {\n  return {\n    name: 'custom-docusaurus-plugin',\n    configureWebpack(config, isServer, utils) {\n      const {getCacheLoader} = utils;\n      return {\n        module: {\n          rules: [\n            {\n              test: /\\.foo$/,\n              use: [getCacheLoader(isServer), 'my-custom-webpack-loader'],\n            },\n          ],\n        },\n      };\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"postbuildprops"},"postBuild(props)"),Object(r.b)("p",null,"Called when a (production) build finishes."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type Props = {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n  headTags: string;\n  preBodyTags: string;\n  postBodyTags: string;\n  routesPaths: string[];\n  plugins: Plugin<any>[];\n};\n")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5-10}","{5-10}":!0}),"// docusaurus-plugin/src/index.js\nmodule.exports = function(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    async postBuild({siteConfig = {}, routesPaths = [], outDir}) {\n      // Print out to console all the rendered routes\n      routesPaths.map(route => {\n        console.log(route);\n      });\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"extendclicli"},Object(r.b)("inlineCode",{parentName:"h2"},"extendCli(cli)")),Object(r.b)("p",null,"Register an extra command to enhance the CLI of docusaurus. ",Object(r.b)("inlineCode",{parentName:"p"},"cli")," is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/commander"}),"commander")," object."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5-12}","{5-12}":!0}),"// docusaurus-plugin/src/index.js\nmodule.exports = function(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    extendCli(cli) {\n      cli\n        .command('roll')\n        .description('Roll a random number between 1 and 1000')\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"injecthtmltags"},Object(r.b)("inlineCode",{parentName:"h2"},"injectHtmlTags()")),Object(r.b)("p",null,"Inject head and/or body html tags to Docusaurus generated html."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function injectHtmlTags(): {\n  headTags?: HtmlTags;\n  preBodyTags?: HtmlTags;\n  postBodyTags?: HtmlTags;\n};\n\ntype HtmlTags = string | HtmlTagObject | (string | HtmlTagObject)[];\n\ninterface HtmlTagObject {\n  /**\n   * Attributes of the html tag\n   * E.g. `{'disabled': true, 'value': 'demo', 'rel': 'preconnect'}`\n   */\n  attributes?: {\n    [attributeName: string]: string | boolean;\n  };\n  /**\n   * The tag name e.g. `div`, `script`, `link`, `meta`\n   */\n  tagName: string;\n  /**\n   * The inner HTML\n   */\n  innerHTML?: string;\n}\n")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5-29}","{5-29}":!0}),"// docusaurus-plugin/src/index.js\nmodule.exports = function(context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    injectHtmlTags() {\n      return {\n        headTags: [\n          {\n            tagName: 'link',\n            attributes: {\n              rel: 'preconnect',\n              href: 'https://www.github.com',\n            },\n          },\n        ],\n        preBodyTags: [\n          {\n            tagName: 'script',\n            attributes: {\n              charset: 'utf-8',\n              src: '/noflash.js',\n            },\n          },\n        ],\n        postBodyTags: [`<div> This is post body </div>`],\n      };\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"getthemepath"},Object(r.b)("inlineCode",{parentName:"h2"},"getThemePath()")),Object(r.b)("p",null,"Returns the path to the directory where the theme components can be found. When your users calls ",Object(r.b)("inlineCode",{parentName:"p"},"swizzle"),", ",Object(r.b)("inlineCode",{parentName:"p"},"getThemePath")," is called and its returned path is used to find your theme components."),Object(r.b)("p",null,"If you use the folder directory above, your ",Object(r.b)("inlineCode",{parentName:"p"},"getThemePath")," can be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{7-9}","{7-9}":!0}),"// my-theme/src/index.js\nconst path = require('path');\n\nmodule.exports = function(context, options) {\n  return {\n    name: 'name-of-my-theme',\n    getThemePath() {\n      return path.resolve(__dirname, './theme');\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"getclientmodules"},Object(r.b)("inlineCode",{parentName:"h2"},"getClientModules()")),Object(r.b)("p",null,"Returns an array of paths to the modules that are to be imported in the client bundle. These modules are imported globally before React even renders the initial UI."),Object(r.b)("p",null,"As an example, to make your theme load a ",Object(r.b)("inlineCode",{parentName:"p"},"customCss")," object from ",Object(r.b)("inlineCode",{parentName:"p"},"options")," passed in by the user:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{8-10}","{8-10}":!0}),"// my-theme/src/index.js\nconst path = require('path');\n\nmodule.exports = function(context, options) {\n  const {customCss} = options || {};\n  return {\n    name: 'name-of-my-theme',\n    getClientModules() {\n      return [customCss];\n    },\n  };\n};\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Here's a mind model for a presumptuous plugin implementation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const DEFAULT_OPTIONS = {\n  // Some defaults.\n};\n\n// A JavaScript function that returns an object.\n// `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.\n// `opts` is the user-defined options.\nmodule.exports = function(context, opts) {\n  // Merge defaults with user-defined options.\n  const options = {...DEFAULT_OPTIONS, ...options};\n\n  return {\n    // A compulsory field used as the namespace for directories to cache\n    // the intermediate data for each plugin.\n    // If you're writing your own local plugin, you will want it to\n    // be unique in order not to potentially conflict with imported plugins.\n    // A good way will be to add your own project name within.\n    name: 'docusaurus-my-project-cool-plugin',\n\n    async loadContent() {\n      // The loadContent hook is executed after siteConfig and env has been loaded\n      // You can return a JavaScript object that will be passed to contentLoaded hook\n    },\n\n    async contentLoaded({content, actions}) {\n      // contentLoaded hook is done after loadContent hook is done\n      // actions are set of functional API provided by Docusaurus. e.g: addRoute\n    },\n\n    async postBuild(props) {\n      // after docusaurus <build> finish\n    },\n\n    // TODO\n    async postStart(props) {\n      // docusaurus <start> finish\n    },\n\n    // TODO\n    afterDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverbefore\n    },\n\n    // TODO\n    beforeDevServer(app, server) {\n      // https://webpack.js.org/configuration/dev-server/#devserverafter\n    },\n\n    configureWebpack(config, isServer) {\n      // Modify internal webpack config. If returned value is an Object, it\n      // will be merged into the final config using webpack-merge;\n      // If the returned value is a function, it will receive the config as the 1st argument and an isServer flag as the 2nd argument.\n    },\n\n    getPathsToWatch() {\n      // Path to watch\n    },\n\n    getThemePath() {\n      // Returns the path to the directory where the theme components can\n      // be found.\n    },\n\n    getClientModules() {\n      // Return an array of paths to the modules that are to be imported\n      // in the client bundle. These modules are imported globally before\n      // React even renders the initial UI.\n    },\n\n    extendCli(cli) {\n      // Register an extra command to enhance the CLI of docusaurus\n    },\n\n    injectHtmlTags() {\n      // Inject head and/or body html tags\n    },\n  };\n};\n")))}d.isMDXComponent=!0},239:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return t?o.a.createElement(m,c({ref:n},l,{components:t})):o.a.createElement(m,c({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);