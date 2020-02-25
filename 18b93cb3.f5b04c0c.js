(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(250),l=a(241),o=a(245),s=a(244),i=a(323);t.default=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,a=i[0],n=i.filter(e=>e!==a),u=`https://github.com/${t.organizationName}/${t.projectName}`;return r.a.createElement(c.a,{permalink:"/versions",description:"Docusaurus 2 Versions page listing all documented site versions"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("h1",null,"Docusaurus documentation versions"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),r.a.createElement("p",null,"Here you can find the latest documentation."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,a),r.a.createElement("td",null,r.a.createElement(o.a,{to:Object(s.a)("/docs/introduction")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:`${u}/releases/tag/v${a}`},"Release Notes")))))),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),r.a.createElement("p",null,"Here you can find the documentation for unreleased version."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"master"),r.a.createElement("td",null,r.a.createElement(o.a,{to:Object(s.a)("/docs/next/introduction")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u},"Source Code")))))),n.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past Versions"),r.a.createElement("p",null,"Here you can find documentation for previous versions of Docusaurus."),r.a.createElement("table",null,r.a.createElement("tbody",null,n.map(e=>r.a.createElement("tr",{key:e},r.a.createElement("th",null,e),r.a.createElement("td",null,r.a.createElement(o.a,{to:Object(s.a)(`/docs/${e}/introduction`)},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:`${u}/releases/tag/v${e}`},"Release Notes")))))))))}},241:function(e,t,a){"use strict";var n=a(0),r=a(34);t.a=function(){return Object(n.useContext)(r.a)}},244:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(241);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},245:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(19),o=a(249),s=a(13),i=a.n(s);t.a=function(e){const{to:t,href:a}=e,s=t||a,u=Object(o.a)(s),d=Object(r.useRef)(!1),h=i.a.canUseIntersectionObserver;let m;return Object(r.useEffect)(()=>(!h&&u&&window.docusaurus.prefetch(s),()=>{h&&m&&m.disconnect()}),[s,h,u]),s&&u?c.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:()=>{d.current||(window.docusaurus.preload(s),d.current=!0)},innerRef:e=>{h&&e&&u&&((e,t)=>{m=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},246:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},247:function(e,t,a){"use strict";var n=a(0),r=a(246);t.a=function(){return Object(n.useContext)(r.a)}},248:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},249:function(e,t,a){"use strict";function n(e){return/^\/(?!\/)/.test(e)}a.d(t,"a",(function(){return n}))},250:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(251),l=a(241),o=a(244);const s="",i="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(l.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(s),r(s)},[]),o=Object(n.useCallback)(()=>{a(i),r(i)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),{isDarkTheme:t===i,setLightTheme:c,setDarkTheme:o}},d=a(246);var h=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},m=a(1),f=a(245),b=(a(12),a(240)),v=a.n(b),p=a(248);a(89);var E=e=>{const[t,c]=Object(n.useState)(!1),o=Object(n.useRef)(null),{siteConfig:s={}}=Object(l.a)(),{themeConfig:{algolia:i}}=s,u=Object(p.b)();const d=(e=!0)=>{t||Promise.all([a.e(139).then(a.t.bind(null,396,7)),a.e(96).then(a.t.bind(null,397,7))]).then(([{default:t}])=>{c(!0),window.docsearch=t,function(e){window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:(e,t,a)=>{const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?`${n.pathname}`:`${n.pathname}${n.hash}`;u.push(r)}}),e&&o.current.focus()}(e)})},h=Object(n.useCallback)(()=>{d(),t&&o.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),m=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),f=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;d(t)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:v()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:v()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:m,ref:o}))},g=a(253),k=a.n(g),O=a(90),y=a.n(O);const _=()=>r.a.createElement("span",{className:v()(y.a.toggle,y.a.moon)}),j=()=>r.a.createElement("span",{className:v()(y.a.toggle,y.a.sun)});var w=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(k.a,Object(m.a)({disabled:!t,icons:{checked:r.a.createElement(_,null),unchecked:r.a.createElement(j,null)}},e))},N=a(247);var C=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var S=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(p.c)(),[h,m]=C(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<s)return;if(r)return c(!1),a(!1),void o(e);const t=document.documentElement.scrollHeight-s,n=window.innerHeight;l&&e>l?a(!1):e+n<t&&a(!0),o(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),m(d.hash))},[d]),Object(n.useEffect)(()=>{e&&h&&c(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},x=a(252),T=a(91),D=a.n(T);function B({activeBasePath:e,to:t,href:a,label:n,position:c,...l}){const s=Object(o.a)(t),i=Object(o.a)(e);return r.a.createElement(f.a,Object(m.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:s,...e?{isActive:(e,t)=>t.pathname.startsWith(i)}:null},l),n)}var M=function(){const{siteConfig:e={},isClient:t}=Object(l.a)(),{baseUrl:a,themeConfig:c={}}=e,{navbar:s={},disableDarkMode:i=!1}=c,{title:u,logo:d={},links:h=[],hideOnScroll:b=!1}=s,[p,g]=Object(n.useState)(!1),[k,O]=Object(n.useState)(!1),{isDarkTheme:y,setLightTheme:_,setDarkTheme:j}=Object(N.a)(),{navbarRef:C,isNavbarVisible:T}=S(b);Object(x.a)(p);const M=Object(n.useCallback)(()=>{g(!0)},[g]),L=Object(n.useCallback)(()=>{g(!1)},[g]),P=Object(n.useCallback)(e=>e.target.checked?j():_(),[_,j]),I=d.href||a,F=/http/.test(I)?{rel:"noopener noreferrer",target:"_blank"}:null,X=d.srcDark&&y?d.srcDark:d.src,$=Object(o.a)(X);return r.a.createElement("nav",{ref:C,className:v()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":p,[D.a.navbarHideable]:b,[D.a.navbarHidden]:!T})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(m.a)({className:"navbar__brand",to:I},F),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:$,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:k?D.a.hideLogoText:""},u)),h.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(B,Object(m.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},h.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(B,Object(m.a)({},e,{key:t}))),!i&&r.a.createElement(w,{className:D.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:P}),r.a.createElement(E,{handleSearchBarToggle:O,isSearchBarExpanded:k}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:L}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(m.a)({className:"navbar__brand",onClick:L,to:I},F),null!=d&&r.a.createElement("img",{key:t,className:"navbar__logo",src:$,alt:d.alt}),null!=u&&r.a.createElement("strong",null,u)),!i&&p&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:P})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},h.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(B,Object(m.a)({className:"menu__link"},e,{onClick:L})))))))))},L=a(92),P=a.n(L);function I({to:e,href:t,label:a,...n}){const c=Object(o.a)(e);return r.a.createElement(f.a,Object(m.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const F=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var X=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:s=[],logo:i={}}=n||{},u=Object(o.a)(i.src);return n?r.a.createElement("footer",{className:v()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(I,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:P.a.footerLogoLink},r.a.createElement(F,{alt:i.alt,url:u})):r.a.createElement(F,{alt:i.alt,url:u})),c))):null};a(93);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,title:n,themeConfig:{image:s},url:i}=t,{children:u,title:d,noFooter:m,description:f,image:b,keywords:v,permalink:p,version:E}=e,g=d?`${d} | ${n}`:n,k=b||s,O=i+Object(o.a)(k),y=Object(o.a)(a);return r.a.createElement(h,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:O}),k&&r.a.createElement("meta",{property:"twitter:image",content:O}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${g}`}),p&&r.a.createElement("meta",{property:"og:url",content:i+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(M,null),r.a.createElement("div",{className:"main-wrapper"},u),!m&&r.a.createElement(X,null))}},251:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(258);t.a=function(e){return r.a.createElement(c.Helmet,e)}},252:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},253:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(240)),s=h(a(8)),i=h(a(254)),u=h(a(255)),d=a(256);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},m.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},255:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},256:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},323:function(e){e.exports=JSON.parse('["2.0.0-alpha.43","2.0.0-alpha.40","2.0.0-alpha.39"]')}}]);