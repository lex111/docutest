/*! For license information please see 5dd9790b.b5f42845.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return d}));var a=n(1),l=n(6),i=(n(0),n(239)),s=n(242),o=n(243),c={id:"using-plugins",title:"Plugins"},u={id:"version-2.0.0-alpha.39/using-plugins",title:"Plugins",description:"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via [presets](presets.md).",source:"@site/versioned_docs/version-2.0.0-alpha.39/using-plugins.md",permalink:"/docutest/docs/2.0.0-alpha.39/using-plugins",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-2.0.0-alpha.39/using-plugins.md",version:"2.0.0-alpha.39",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1575784590,sidebar:"version-2.0.0-alpha.39/docs",previous:{title:"Migrating from v1 to v2",permalink:"/docutest/docs/2.0.0-alpha.39/migrating-from-v1-to-v2"},next:{title:"Themes",permalink:"/docutest/docs/2.0.0-alpha.39/using-themes"}},r=[{value:"Installing a plugin",id:"installing-a-plugin",children:[]},{value:"Configuring plugins",id:"configuring-plugins",children:[]},{value:"Plugins design",id:"plugins-design",children:[]},{value:"Creating plugins",id:"creating-plugins",children:[{value:"Module definition",id:"module-definition",children:[]}]},{value:"Official plugins",id:"official-plugins",children:[{value:"<code>@docusaurus/plugin-content-blog</code>",id:"docusaurusplugin-content-blog",children:[]},{value:"<code>@docusaurus/plugin-content-docs</code>",id:"docusaurusplugin-content-docs",children:[]},{value:"<code>@docusaurus/plugin-content-pages</code>",id:"docusaurusplugin-content-pages",children:[]},{value:"<code>@docusaurus/plugin-google-analytics</code>",id:"docusaurusplugin-google-analytics",children:[]},{value:"<code>@docusaurus/plugin-google-gtag</code>",id:"docusaurusplugin-google-gtag",children:[]},{value:"<code>@docusaurus/plugin-sitemap</code>",id:"docusaurusplugin-sitemap",children:[]},{value:"<code>@docusaurus/plugin-ideal-image</code>",id:"docusaurusplugin-ideal-image",children:[]}]}],b={rightToc:r},p="wrapper";function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Plugins are the building blocks of features in a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work and be distributed as part of bundle via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/presets"}),"presets"),"."),Object(i.b)("h2",{id:"installing-a-plugin"},"Installing a plugin"),Object(i.b)("p",null,"A plugin is usually a npm package, so you install them like other npm packages using npm."),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save docusaurus-plugin-name\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add docusaurus-plugin-name\n")))),Object(i.b)("p",null,"Then you add it in your site's ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"plugins")," option:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"// docusaurus.config.js\nmodule.exports = {\n  // ...\n  plugins: ['@docusaurus/plugin-content-pages'],\n};\n")),Object(i.b)("p",null,"Docusaurus can also load plugins from your local directory, you can do something like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{6}","{6}":!0}),"// docusaurus.config.js\nconst path = require('path');\n\nmodule.exports = {\n  // ...\n  plugins: [path.resolve(__dirname, '/path/to/docusaurus-local-plugin')],\n};\n")),Object(i.b)("h2",{id:"configuring-plugins"},"Configuring plugins"),Object(i.b)("p",null,"For the most basic usage of plugins, you can provide just the plugin name or the absolute path to the plugin."),Object(i.b)("p",null,"However, plugins can have options specified by wrapping the name and an options object in an array inside your config. This style is usually called ",Object(i.b)("inlineCode",{parentName:"p"},"Babel Style"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5-10}","{5-10}":!0}),"// docusaurus.config.js\nmodule.exports = {\n  // ...\n  plugins: [\n    [\n      '@docusaurus/plugin-xxx',\n      {\n        /* options */\n      },\n    ],\n  ],\n};\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: [\n    // Basic usage.\n    '@docusaurus/plugin-google-analytics',\n\n    // With options object (babel style)\n    [\n      '@docusaurus/plugin-sitemap',\n      {\n        cacheTime: 600 * 1000,\n      },\n    ],\n  ],\n};\n")),Object(i.b)("h2",{id:"plugins-design"},"Plugins design"),Object(i.b)("p",null,"Docusaurus' implementation of the plugins system provides us with a convenient way to hook into the website's lifecycle to modify what goes on during development/build, which involves (but not limited to) extending the webpack config, modifying the data being loaded and creating new components to be used in a page."),Object(i.b)("h2",{id:"creating-plugins"},"Creating plugins"),Object(i.b)("p",null,"A plugin is a module which exports a function that takes two parameters and returns an object when executed."),Object(i.b)("h3",{id:"module-definition"},"Module definition"),Object(i.b)("p",null,"The exported modules for plugins are called with two parameters: ",Object(i.b)("inlineCode",{parentName:"p"},"context")," and ",Object(i.b)("inlineCode",{parentName:"p"},"options")," and returns a JavaScript object with defining the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/lifecycle-apis"}),"lifecycle APIs"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// my-docusaurus-plugin.js\nmodule.exports = function(context, options) {\n  // ...\n  return {\n    name: 'my-docusaurus-plugin',\n    async loadContent() { ... },\n    async contentLoaded({content, actions}) { ... },\n    /* other lifecycle api */\n  };\n};\n")),Object(i.b)("h4",{id:"context"},Object(i.b)("inlineCode",{parentName:"h4"},"context")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"context")," is plugin-agnostic and the same object will be passed into all plugins used for a Docusaurus website. The ",Object(i.b)("inlineCode",{parentName:"p"},"context")," object contains the following fields:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"interface LoadContext {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n}\n")),Object(i.b)("h4",{id:"options"},Object(i.b)("inlineCode",{parentName:"h4"},"options")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"options")," are the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/using-plugins#configuring-plugins"}),"second optional parameter when the plugins are used"),". ",Object(i.b)("inlineCode",{parentName:"p"},"options")," are plugin-specific and are specified by users when they use them in ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". Alternatively, if preset contains the plugin, the preset will then be in charge of passing the correct options into the plugin. It is up to individual plugin to define what options it takes."),Object(i.b)("h4",{id:"return-value"},"Return value"),Object(i.b)("p",null,"The returned object value should implement the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/lifecycle-apis"}),"lifecycle APIs"),"."),Object(i.b)("h2",{id:"official-plugins"},"Official plugins"),Object(i.b)("p",null,"Find the list of official Docusaurus plugins ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/docusaurus/tree/master/packages"}),"here"),"."),Object(i.b)("h3",{id:"docusaurusplugin-content-blog"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-content-blog")),Object(i.b)("p",null,"Provides the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/blog"}),"Blog")," feature and is the default blog plugin for Docusaurus."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installation")),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-content-blog\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-content-blog\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have installed ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/presets#docusauruspreset-classic"}),"classic preset options")," instead of doing it like below.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-blog',\n      {\n        /**\n         * Path to data on filesystem\n         * relative to site dir\n         */\n        path: 'blog',\n        /**\n         * URL route for the blog section of your site\n         * do not include trailing slash\n         */\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        postsPerPage: 10,\n        /**\n         * Theme components used by the blog pages\n         */\n        blogListComponent: '@theme/BlogListPage',\n        blogPostComponent: '@theme/BlogPostPage',\n        blogTagsListComponent: '@theme/BlogTagsListPage',\n        blogTagsPostsComponent: '@theme/BlogTagsPostsPage',\n        /**\n         * Remark and Rehype plugins passed to MDX\n         */\n        remarkPlugins: [],\n        rehypePlugins: [],\n        /**\n         * Truncate marker, can be a regex or string.\n         */\n        truncateMarker: /\x3c!--\\s*(truncate)\\s*--\x3e/\n         /**\n         * Blog feed\n         * If feedOptions is undefined, no rss feed will be generated\n         */\n        feedOptions: {\n          type: '', // required. 'rss' | 'feed' | 'all'\n          title: '', // default to siteConfig.title\n          description: '', // default to  `${siteConfig.title} Blog`\n          copyright: '',\n          language: undefined; // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes\n        };\n      },\n    ],\n  ],\n};\n")),Object(i.b)("h3",{id:"docusaurusplugin-content-docs"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-content-docs")),Object(i.b)("p",null,"Provides the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/markdown-features"}),"Docs")," functionality and is the default docs plugin for Docusaurus."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installation")),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-content-docs\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-content-docs\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have installed ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/presets#docusauruspreset-classic"}),"classic preset options")," instead of doing it like below.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        /**\n         * Path to data on filesystem\n         * relative to site dir\n         */\n        path: 'docs',\n        /**\n         * URL for editing website repo, example: 'https://github.com/facebook/docusaurus/edit/master/website/'\n         */\n        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',\n        /**\n         * URL route for the blog section of your site\n         * do not include trailing slash\n         */\n        routeBasePath: 'docs',\n        include: ['**/*.md', '**/*.mdx'], // Extensions to include.\n        /**\n         * Path to sidebar configuration for showing a list of markdown pages.\n         * Warning: will change\n         */\n        sidebarPath: '',\n        /**\n         * Theme components used by the docs pages\n         */\n        docLayoutComponent: '@theme/DocPage',\n        docItemComponent: '@theme/DocItem',\n        /**\n         * Remark and Rehype plugins passed to MDX\n         */\n        remarkPlugins: [],\n        rehypePlugins: [],\n        /**\n         * Whether to display the author who last updated the doc.\n         */\n        showLastUpdateAuthor: false,\n        /**\n         * Whether to display the last date the doc was updated.\n         */\n        showLastUpdateTime: false,\n      },\n    ],\n  ],\n};\n")),Object(i.b)("h3",{id:"docusaurusplugin-content-pages"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-content-pages")),Object(i.b)("p",null,"The default pages plugin for Docusaurus. The classic template ships with this plugin with default configurations. This plugin provides ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/creating-pages"}),"creating pages")," functionality."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installation")),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-content-pages\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-content-pages\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have installed ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/presets#docusauruspreset-classic"}),"classic preset options")," instead of doing it like below.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: [\n    [\n      '@docuaurus/plugin-content-pages',\n      {\n        /**\n         * Path to data on filesystem\n         * relative to site dir\n         * components in this directory will be automatically converted to pages\n         */\n        path: 'src/pages',\n        /**\n         * URL route for the blog section of your site\n         * do not include trailing slash\n         */\n        routeBasePath: '',\n        include: ['**/*.{js,jsx}'],\n      },\n    ],\n  ],\n};\n")),Object(i.b)("h3",{id:"docusaurusplugin-google-analytics"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-google-analytics")),Object(i.b)("p",null,"The default ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/"}),"Google Analytics")," plugin. It is a JavaScript library for measuring how users interact with your website."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installation")),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-google-analytics\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-google-analytics\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have installed ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: ['@docusaurus/plugin-google-analytics'],\n  themeConfig: {\n    googleAnalytics: {\n      trackingID: 'UA-141789564-1',\n    },\n  },\n};\n")),Object(i.b)("h3",{id:"docusaurusplugin-google-gtag"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-google-gtag")),Object(i.b)("p",null,"The default ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.google.com/analytics/devguides/collection/gtagjs/"}),"Global Site Tag (gtag.js)")," plugin. It is a JavaScript tagging framework and API that allows you to send event data to Google Analytics, Google Ads, and Google Marketing Platform. This section describes how to configure a Docusaurus site to enable global site tag for Google Analytics."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installation")),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-google-gtag\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-google-gtag\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have installed ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configuration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: ['@docusaurus/plugin-google-gtag'],\n  themeConfig: {\n    gtag: {\n      trackingID: 'UA-141789564-1',\n    },\n  },\n};\n")),Object(i.b)("h3",{id:"docusaurusplugin-sitemap"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-sitemap")),Object(i.b)("p",null,"This plugin creates sitemap for your site so that search engine crawlers can crawl your site more accurately."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Installation")),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-sitemap\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-sitemap\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you have installed ",Object(i.b)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install it as a dependency. You can also configure it through the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docutest/docs/2.0.0-alpha.39/presets#docusauruspreset-classic"}),"classic preset options")," instead of doing it like below.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: [\n    '@docusaurus/plugin-sitemap',\n    {\n      cacheTime: 600 * 1000, // 600 sec - cache purge period\n      changefreq: 'weekly',\n      priority: 0.5,\n    },\n  ],\n};\n")),Object(i.b)("h3",{id:"docusaurusplugin-ideal-image"},Object(i.b)("inlineCode",{parentName:"h3"},"@docusaurus/plugin-ideal-image")),Object(i.b)("p",null,"Docusaurus Plugin to generate an almost ideal image (responsive, lazy-loading, and low quality placeholder)"),Object(i.b)(s.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save @docusaurus/plugin-ideal-image\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @docusaurus/plugin-ideal-image\n")))),Object(i.b)("p",null,"Modify your ",Object(i.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"module.exports = {\n  ...\n+ plugins: ['@docusaurus/plugin-ideal-image'],\n  ...\n}\n")),Object(i.b)("h4",{id:"usage"},"Usage"),Object(i.b)("p",null,"This plugin supports png, gif and jpg only"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Image from '@theme/IdealImage';\nimport thumbnail from './path/to/img.png';\n\n// your react code\n<Image img={thumbnail} />\n\n// or\n<Image img={require('./path/to/img.png')} />\n")),Object(i.b)("h4",{id:"options-1"},"Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ideal-img/[name].[hash:hex:7].[width].[ext]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Filename template for output files.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"sizes")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"array")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"original size")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify all widths you want to use. If a specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"size")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"original size")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify one width you want to use; if the specified size exceeds the original image's width, the latter will be used (i.e. images won't be scaled up)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"min")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"As an alternative to manually specifying ",Object(i.b)("inlineCode",{parentName:"td"},"sizes"),", you can specify ",Object(i.b)("inlineCode",{parentName:"td"},"min"),", ",Object(i.b)("inlineCode",{parentName:"td"},"max")," and ",Object(i.b)("inlineCode",{parentName:"td"},"steps"),", and the sizes will be generated for you.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"max")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"See ",Object(i.b)("inlineCode",{parentName:"td"},"min")," above")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"steps")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"4")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configure the number of images generated between ",Object(i.b)("inlineCode",{parentName:"td"},"min")," and ",Object(i.b)("inlineCode",{parentName:"td"},"max")," (inclusive)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"quality")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"85")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JPEG compression quality")))))}d.isMDXComponent=!0},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),r=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},b=function(e){var t=r(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},g=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=r(n),p=a,g=b["".concat(s,".").concat(p)]||b[p]||d[p]||i;return n?l.a.createElement(g,o({ref:t},u,{components:n})):l.a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return l.a.createElement.apply(null,s)}return l.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},240:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var s=l.apply(null,a);s&&e.push(s)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()},242:function(e,t,n){"use strict";var a=n(0),l=n.n(a),i=n(240),s=n.n(i),o=n(88),c=n.n(o);const u={left:37,right:39};t.a=function(e){const{block:t,children:n,defaultValue:i,values:o}=e,[r,b]=Object(a.useState)(i),p=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},o.map(({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":r===e,className:s()("tab-item",c.a.tabItem,{"tab-item--active":r===e}),key:e,ref:e=>p.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u.right:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u.left:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(p,e.target,e),onFocus:()=>b(e),onClick:()=>b(e)},t))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===r)[0]))}},243:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);