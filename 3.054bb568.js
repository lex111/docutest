/*! For license information please see 3.054bb568.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(n,t,r){var e;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var o=typeof e;if("string"===o||"number"===o)n.push(e);else if(Array.isArray(e)&&e.length){var l=a.apply(null,e);l&&n.push(l)}else if("object"===o)for(var s in e)r.call(e,s)&&e[s]&&n.push(s)}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(e=function(){return a}.apply(t,[]))||(n.exports=e)}()},269:function(n,t,r){"use strict";var e=r(303),a=r(306),o=[].slice,l=["keyword","gray","hex"],s={};Object.keys(a).forEach((function(n){s[o.call(a[n].labels).sort().join("")]=n}));var i={};function c(n,t){if(!(this instanceof c))return new c(n,t);if(t&&t in l&&(t=null),t&&!(t in a))throw new Error("Unknown model: "+t);var r,h;if(null==n)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(n instanceof c)this.model=n.model,this.color=n.color.slice(),this.valpha=n.valpha;else if("string"==typeof n){var u=e.get(n);if(null===u)throw new Error("Unable to parse color from string: "+n);this.model=u.model,h=a[this.model].channels,this.color=u.value.slice(0,h),this.valpha="number"==typeof u.value[h]?u.value[h]:1}else if(n.length){this.model=t||"rgb",h=a[this.model].channels;var f=o.call(n,0,h);this.color=g(f,h),this.valpha="number"==typeof n[h]?n[h]:1}else if("number"==typeof n)n&=16777215,this.model="rgb",this.color=[n>>16&255,n>>8&255,255&n],this.valpha=1;else{this.valpha=1;var b=Object.keys(n);"alpha"in n&&(b.splice(b.indexOf("alpha"),1),this.valpha="number"==typeof n.alpha?n.alpha:0);var p=b.sort().join("");if(!(p in s))throw new Error("Unable to parse color from object: "+JSON.stringify(n));this.model=s[p];var d=a[this.model].labels,m=[];for(r=0;r<d.length;r++)m.push(n[d[r]]);this.color=g(m)}if(i[this.model])for(h=a[this.model].channels,r=0;r<h;r++){var v=i[this.model][r];v&&(this.color[r]=v(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function h(n,t,r){return(n=Array.isArray(n)?n:[n]).forEach((function(n){(i[n]||(i[n]=[]))[t]=r})),n=n[0],function(e){var a;return arguments.length?(r&&(e=r(e)),(a=this[n]()).color[t]=e,a):(a=this[n]().color[t],r&&(a=r(a)),a)}}function u(n){return function(t){return Math.max(0,Math.min(n,t))}}function f(n){return Array.isArray(n)?n:[n]}function g(n,t){for(var r=0;r<t;r++)"number"!=typeof n[r]&&(n[r]=0);return n}c.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(n){var t=this.model in e.to?this:this.rgb(),r=1===(t=t.round("number"==typeof n?n:1)).valpha?t.color:t.color.concat(this.valpha);return e.to[t.model](r)},percentString:function(n){var t=this.rgb().round("number"==typeof n?n:1),r=1===t.valpha?t.color:t.color.concat(this.valpha);return e.to.rgb.percent(r)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var n={},t=a[this.model].channels,r=a[this.model].labels,e=0;e<t;e++)n[r[e]]=this.color[e];return 1!==this.valpha&&(n.alpha=this.valpha),n},unitArray:function(){var n=this.rgb().color;return n[0]/=255,n[1]/=255,n[2]/=255,1!==this.valpha&&n.push(this.valpha),n},unitObject:function(){var n=this.rgb().object();return n.r/=255,n.g/=255,n.b/=255,1!==this.valpha&&(n.alpha=this.valpha),n},round:function(n){return n=Math.max(n||0,0),new c(this.color.map(function(n){return function(t){return function(n,t){return Number(n.toFixed(t))}(t,n)}}(n)).concat(this.valpha),this.model)},alpha:function(n){return arguments.length?new c(this.color.concat(Math.max(0,Math.min(1,n))),this.model):this.valpha},red:h("rgb",0,u(255)),green:h("rgb",1,u(255)),blue:h("rgb",2,u(255)),hue:h(["hsl","hsv","hsl","hwb","hcg"],0,(function(n){return(n%360+360)%360})),saturationl:h("hsl",1,u(100)),lightness:h("hsl",2,u(100)),saturationv:h("hsv",1,u(100)),value:h("hsv",2,u(100)),chroma:h("hcg",1,u(100)),gray:h("hcg",2,u(100)),white:h("hwb",1,u(100)),wblack:h("hwb",2,u(100)),cyan:h("cmyk",0,u(100)),magenta:h("cmyk",1,u(100)),yellow:h("cmyk",2,u(100)),black:h("cmyk",3,u(100)),x:h("xyz",0,u(100)),y:h("xyz",1,u(100)),z:h("xyz",2,u(100)),l:h("lab",0,u(100)),a:h("lab",1),b:h("lab",2),keyword:function(n){return arguments.length?new c(n):a[this.model].keyword(this.color)},hex:function(n){return arguments.length?new c(n):e.to.hex(this.rgb().round().color)},rgbNumber:function(){var n=this.rgb().color;return(255&n[0])<<16|(255&n[1])<<8|255&n[2]},luminosity:function(){for(var n=this.rgb().color,t=[],r=0;r<n.length;r++){var e=n[r]/255;t[r]=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(n){var t=this.luminosity(),r=n.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level:function(n){var t=this.contrast(n);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var n=this.rgb().color;return(299*n[0]+587*n[1]+114*n[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var n=this.rgb(),t=0;t<3;t++)n.color[t]=255-n.color[t];return n},lighten:function(n){var t=this.hsl();return t.color[2]+=t.color[2]*n,t},darken:function(n){var t=this.hsl();return t.color[2]-=t.color[2]*n,t},saturate:function(n){var t=this.hsl();return t.color[1]+=t.color[1]*n,t},desaturate:function(n){var t=this.hsl();return t.color[1]-=t.color[1]*n,t},whiten:function(n){var t=this.hwb();return t.color[1]+=t.color[1]*n,t},blacken:function(n){var t=this.hwb();return t.color[2]+=t.color[2]*n,t},grayscale:function(){var n=this.rgb().color,t=.3*n[0]+.59*n[1]+.11*n[2];return c.rgb(t,t,t)},fade:function(n){return this.alpha(this.valpha-this.valpha*n)},opaquer:function(n){return this.alpha(this.valpha+this.valpha*n)},rotate:function(n){var t=this.hsl(),r=t.color[0];return r=(r=(r+n)%360)<0?360+r:r,t.color[0]=r,t},mix:function(n,t){if(!n||!n.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof n);var r=n.rgb(),e=this.rgb(),a=void 0===t?.5:t,o=2*a-1,l=r.alpha()-e.alpha(),s=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,i=1-s;return c.rgb(s*r.red()+i*e.red(),s*r.green()+i*e.green(),s*r.blue()+i*e.blue(),r.alpha()*a+e.alpha()*(1-a))}},Object.keys(a).forEach((function(n){if(-1===l.indexOf(n)){var t=a[n].channels;c.prototype[n]=function(){if(this.model===n)return new c(this);if(arguments.length)return new c(arguments,n);var r="number"==typeof arguments[t]?t:this.valpha;return new c(f(a[this.model][n].raw(this.color)).concat(r),n)},c[n]=function(r){return"number"==typeof r&&(r=g(o.call(arguments),t)),new c(r,n)}}})),n.exports=c},285:function(n,t,r){"use strict";n.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},286:function(n,t,r){const e=r(285),a={};for(const l of Object.keys(e))a[e[l]]=l;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};n.exports=o;for(const l of Object.keys(o)){if(!("channels"in o[l]))throw new Error("missing channels property: "+l);if(!("labels"in o[l]))throw new Error("missing channel labels property: "+l);if(o[l].labels.length!==o[l].channels)throw new Error("channel and label counts mismatch: "+l);const{channels:n,labels:t}=o[l];delete o[l].channels,delete o[l].labels,Object.defineProperty(o[l],"channels",{value:n}),Object.defineProperty(o[l],"labels",{value:t})}o.rgb.hsl=function(n){const t=n[0]/255,r=n[1]/255,e=n[2]/255,a=Math.min(t,r,e),o=Math.max(t,r,e),l=o-a;let s,i;o===a?s=0:t===o?s=(r-e)/l:r===o?s=2+(e-t)/l:e===o&&(s=4+(t-r)/l),s=Math.min(60*s,360),s<0&&(s+=360);const c=(a+o)/2;return i=o===a?0:c<=.5?l/(o+a):l/(2-o-a),[s,100*i,100*c]},o.rgb.hsv=function(n){let t,r,e,a,o;const l=n[0]/255,s=n[1]/255,i=n[2]/255,c=Math.max(l,s,i),h=c-Math.min(l,s,i),u=function(n){return(c-n)/6/h+.5};return 0===h?(a=0,o=0):(o=h/c,t=u(l),r=u(s),e=u(i),l===c?a=e-r:s===c?a=1/3+t-e:i===c&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},o.rgb.hwb=function(n){const t=n[0],r=n[1];let e=n[2];const a=o.rgb.hsl(n)[0],l=1/255*Math.min(t,Math.min(r,e));return e=1-1/255*Math.max(t,Math.max(r,e)),[a,100*l,100*e]},o.rgb.cmyk=function(n){const t=n[0]/255,r=n[1]/255,e=n[2]/255,a=Math.min(1-t,1-r,1-e);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-e-a)/(1-a)||0),100*a]},o.rgb.keyword=function(n){const t=a[n];if(t)return t;let r,o=1/0;for(const a of Object.keys(e)){const t=e[a],i=(s=t,((l=n)[0]-s[0])**2+(l[1]-s[1])**2+(l[2]-s[2])**2);i<o&&(o=i,r=a)}var l,s;return r},o.keyword.rgb=function(n){return e[n]},o.rgb.xyz=function(n){let t=n[0]/255,r=n[1]/255,e=n[2]/255;return t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,[100*(.4124*t+.3576*r+.1805*e),100*(.2126*t+.7152*r+.0722*e),100*(.0193*t+.1192*r+.9505*e)]},o.rgb.lab=function(n){const t=o.rgb.xyz(n);let r=t[0],e=t[1],a=t[2];return r/=95.047,e/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,[116*e-16,500*(r-e),200*(e-a)]},o.hsl.rgb=function(n){const t=n[0]/360,r=n[1]/100,e=n[2]/100;let a,o,l;if(0===r)return l=255*e,[l,l,l];a=e<.5?e*(1+r):e+r-e*r;const s=2*e-a,i=[0,0,0];for(let c=0;c<3;c++)o=t+1/3*-(c-1),o<0&&o++,o>1&&o--,l=6*o<1?s+6*(a-s)*o:2*o<1?a:3*o<2?s+(a-s)*(2/3-o)*6:s,i[c]=255*l;return i},o.hsl.hsv=function(n){const t=n[0];let r=n[1]/100,e=n[2]/100,a=r;const o=Math.max(e,.01);return e*=2,r*=e<=1?e:2-e,a*=o<=1?o:2-o,[t,100*(0===e?2*a/(o+a):2*r/(e+r)),100*((e+r)/2)]},o.hsv.rgb=function(n){const t=n[0]/60,r=n[1]/100;let e=n[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),l=255*e*(1-r),s=255*e*(1-r*o),i=255*e*(1-r*(1-o));switch(e*=255,a){case 0:return[e,i,l];case 1:return[s,e,l];case 2:return[l,e,i];case 3:return[l,s,e];case 4:return[i,l,e];case 5:return[e,l,s]}},o.hsv.hsl=function(n){const t=n[0],r=n[1]/100,e=n[2]/100,a=Math.max(e,.01);let o,l;l=(2-r)*e;const s=(2-r)*a;return o=r*a,o/=s<=1?s:2-s,o=o||0,l/=2,[t,100*o,100*l]},o.hwb.rgb=function(n){const t=n[0]/360;let r=n[1]/100,e=n[2]/100;const a=r+e;let o;a>1&&(r/=a,e/=a);const l=Math.floor(6*t),s=1-e;o=6*t-l,0!=(1&l)&&(o=1-o);const i=r+o*(s-r);let c,h,u;switch(l){default:case 6:case 0:c=s,h=i,u=r;break;case 1:c=i,h=s,u=r;break;case 2:c=r,h=s,u=i;break;case 3:c=r,h=i,u=s;break;case 4:c=i,h=r,u=s;break;case 5:c=s,h=r,u=i}return[255*c,255*h,255*u]},o.cmyk.rgb=function(n){const t=n[0]/100,r=n[1]/100,e=n[2]/100,a=n[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,e*(1-a)+a))]},o.xyz.rgb=function(n){const t=n[0]/100,r=n[1]/100,e=n[2]/100;let a,o,l;return a=3.2406*t+-1.5372*r+-.4986*e,o=-.9689*t+1.8758*r+.0415*e,l=.0557*t+-.204*r+1.057*e,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},o.xyz.lab=function(n){let t=n[0],r=n[1],e=n[2];return t/=95.047,r/=100,e/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,[116*r-16,500*(t-r),200*(r-e)]},o.lab.xyz=function(n){let t,r,e;r=(n[0]+16)/116,t=n[1]/500+r,e=r-n[2]/200;const a=r**3,o=t**3,l=e**3;return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,e=l>.008856?l:(e-16/116)/7.787,t*=95.047,r*=100,e*=108.883,[t,r,e]},o.lab.lch=function(n){const t=n[0],r=n[1],e=n[2];let a;return a=360*Math.atan2(e,r)/2/Math.PI,a<0&&(a+=360),[t,Math.sqrt(r*r+e*e),a]},o.lch.lab=function(n){const t=n[0],r=n[1],e=n[2]/360*2*Math.PI;return[t,r*Math.cos(e),r*Math.sin(e)]},o.rgb.ansi16=function(n,t=null){const[r,e,a]=n;let l=null===t?o.rgb.hsv(n)[2]:t;if(l=Math.round(l/50),0===l)return 30;let s=30+(Math.round(a/255)<<2|Math.round(e/255)<<1|Math.round(r/255));return 2===l&&(s+=60),s},o.hsv.ansi16=function(n){return o.rgb.ansi16(o.hsv.rgb(n),n[2])},o.rgb.ansi256=function(n){const t=n[0],r=n[1],e=n[2];return t===r&&r===e?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(e/255*5)},o.ansi16.rgb=function(n){let t=n%10;if(0===t||7===t)return n>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(n>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},o.ansi256.rgb=function(n){if(n>=232){const t=10*(n-232)+8;return[t,t,t]}let t;return n-=16,[Math.floor(n/36)/5*255,Math.floor((t=n%36)/6)/5*255,t%6/5*255]},o.rgb.hex=function(n){const t=(((255&Math.round(n[0]))<<16)+((255&Math.round(n[1]))<<8)+(255&Math.round(n[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.hex.rgb=function(n){const t=n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map(n=>n+n).join(""));const e=parseInt(r,16);return[e>>16&255,e>>8&255,255&e]},o.rgb.hcg=function(n){const t=n[0]/255,r=n[1]/255,e=n[2]/255,a=Math.max(Math.max(t,r),e),o=Math.min(Math.min(t,r),e),l=a-o;let s,i;return s=l<1?o/(1-l):0,i=l<=0?0:a===t?(r-e)/l%6:a===r?2+(e-t)/l:4+(t-r)/l,i/=6,i%=1,[360*i,100*l,100*s]},o.hsl.hcg=function(n){const t=n[1]/100,r=n[2]/100,e=r<.5?2*t*r:2*t*(1-r);let a=0;return e<1&&(a=(r-.5*e)/(1-e)),[n[0],100*e,100*a]},o.hsv.hcg=function(n){const t=n[1]/100,r=n[2]/100,e=t*r;let a=0;return e<1&&(a=(r-e)/(1-e)),[n[0],100*e,100*a]},o.hcg.rgb=function(n){const t=n[0]/360,r=n[1]/100,e=n[2]/100;if(0===r)return[255*e,255*e,255*e];const a=[0,0,0],o=t%1*6,l=o%1,s=1-l;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return i=(1-r)*e,[255*(r*a[0]+i),255*(r*a[1]+i),255*(r*a[2]+i)]},o.hcg.hsv=function(n){const t=n[1]/100,r=t+n[2]/100*(1-t);let e=0;return r>0&&(e=t/r),[n[0],100*e,100*r]},o.hcg.hsl=function(n){const t=n[1]/100,r=n[2]/100*(1-t)+.5*t;let e=0;return r>0&&r<.5?e=t/(2*r):r>=.5&&r<1&&(e=t/(2*(1-r))),[n[0],100*e,100*r]},o.hcg.hwb=function(n){const t=n[1]/100,r=t+n[2]/100*(1-t);return[n[0],100*(r-t),100*(1-r)]},o.hwb.hcg=function(n){const t=n[1]/100,r=1-n[2]/100,e=r-t;let a=0;return e<1&&(a=(r-e)/(1-e)),[n[0],100*e,100*a]},o.apple.rgb=function(n){return[n[0]/65535*255,n[1]/65535*255,n[2]/65535*255]},o.rgb.apple=function(n){return[n[0]/255*65535,n[1]/255*65535,n[2]/255*65535]},o.gray.rgb=function(n){return[n[0]/100*255,n[0]/100*255,n[0]/100*255]},o.gray.hsl=function(n){return[0,0,n[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(n){return[0,100,n[0]]},o.gray.cmyk=function(n){return[0,0,0,n[0]]},o.gray.lab=function(n){return[n[0],0,0]},o.gray.hex=function(n){const t=255&Math.round(n[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},o.rgb.gray=function(n){return[(n[0]+n[1]+n[2])/3/255*100]}},303:function(n,t,r){var e=r(285),a=r(304),o={};for(var l in e)e.hasOwnProperty(l)&&(o[e[l]]=l);var s=n.exports={to:{},get:{}};function i(n,t,r){return Math.min(Math.max(t,n),r)}function c(n){var t=n.toString(16).toUpperCase();return t.length<2?"0"+t:t}s.get=function(n){var t,r;switch(n.substring(0,3).toLowerCase()){case"hsl":t=s.get.hsl(n),r="hsl";break;case"hwb":t=s.get.hwb(n),r="hwb";break;default:t=s.get.rgb(n),r="rgb"}return t?{model:r,value:t}:null},s.get.rgb=function(n){if(!n)return null;var t,r,a,o=[0,0,0,1];if(t=n.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=t[2],t=t[1],r=0;r<3;r++){var l=2*r;o[r]=parseInt(t.slice(l,l+2),16)}a&&(o[3]=Math.round(parseInt(a,16)/255*100)/100)}else if(t=n.match(/^#([a-f0-9]{3,4})$/i)){for(a=(t=t[1])[3],r=0;r<3;r++)o[r]=parseInt(t[r]+t[r],16);a&&(o[3]=Math.round(parseInt(a+a,16)/255*100)/100)}else if(t=n.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(r=0;r<3;r++)o[r]=parseInt(t[r+1],0);t[4]&&(o[3]=parseFloat(t[4]))}else{if(!(t=n.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(t=n.match(/(\D+)/))?"transparent"===t[1]?[0,0,0,0]:(o=e[t[1]])?(o[3]=1,o):null:null;for(r=0;r<3;r++)o[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(o[3]=parseFloat(t[4]))}for(r=0;r<3;r++)o[r]=i(o[r],0,255);return o[3]=i(o[3],0,1),o},s.get.hsl=function(n){if(!n)return null;var t=n.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,i(parseFloat(t[2]),0,100),i(parseFloat(t[3]),0,100),i(isNaN(r)?1:r,0,1)]}return null},s.get.hwb=function(n){if(!n)return null;var t=n.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,i(parseFloat(t[2]),0,100),i(parseFloat(t[3]),0,100),i(isNaN(r)?1:r,0,1)]}return null},s.to.hex=function(){var n=a(arguments);return"#"+c(n[0])+c(n[1])+c(n[2])+(n[3]<1?c(Math.round(255*n[3])):"")},s.to.rgb=function(){var n=a(arguments);return n.length<4||1===n[3]?"rgb("+Math.round(n[0])+", "+Math.round(n[1])+", "+Math.round(n[2])+")":"rgba("+Math.round(n[0])+", "+Math.round(n[1])+", "+Math.round(n[2])+", "+n[3]+")"},s.to.rgb.percent=function(){var n=a(arguments),t=Math.round(n[0]/255*100),r=Math.round(n[1]/255*100),e=Math.round(n[2]/255*100);return n.length<4||1===n[3]?"rgb("+t+"%, "+r+"%, "+e+"%)":"rgba("+t+"%, "+r+"%, "+e+"%, "+n[3]+")"},s.to.hsl=function(){var n=a(arguments);return n.length<4||1===n[3]?"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)":"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+n[3]+")"},s.to.hwb=function(){var n=a(arguments),t="";return n.length>=4&&1!==n[3]&&(t=", "+n[3]),"hwb("+n[0]+", "+n[1]+"%, "+n[2]+"%"+t+")"},s.to.keyword=function(n){return o[n.slice(0,3)]}},304:function(n,t,r){"use strict";var e=r(305),a=Array.prototype.concat,o=Array.prototype.slice,l=n.exports=function(n){for(var t=[],r=0,l=n.length;r<l;r++){var s=n[r];e(s)?t=a.call(t,o.call(s)):t.push(s)}return t};l.wrap=function(n){return function(){return n(l(arguments))}}},305:function(n,t){n.exports=function(n){return!(!n||"string"==typeof n)&&(n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&"String"!==n.constructor.name))}},306:function(n,t,r){const e=r(286),a=r(307),o={};Object.keys(e).forEach(n=>{o[n]={},Object.defineProperty(o[n],"channels",{value:e[n].channels}),Object.defineProperty(o[n],"labels",{value:e[n].labels});const t=a(n);Object.keys(t).forEach(r=>{const e=t[r];o[n][r]=function(n){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const e=n(t);if("object"==typeof e)for(let n=e.length,a=0;a<n;a++)e[a]=Math.round(e[a]);return e};return"conversion"in n&&(t.conversion=n.conversion),t}(e),o[n][r].raw=function(n){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),n(t))};return"conversion"in n&&(t.conversion=n.conversion),t}(e)})}),n.exports=o},307:function(n,t,r){const e=r(286);function a(n){const t=function(){const n={},t=Object.keys(e);for(let r=t.length,e=0;e<r;e++)n[t[e]]={distance:-1,parent:null};return n}(),r=[n];for(t[n].distance=0;r.length;){const n=r.pop(),a=Object.keys(e[n]);for(let e=a.length,o=0;o<e;o++){const e=a[o],l=t[e];-1===l.distance&&(l.distance=t[n].distance+1,l.parent=n,r.unshift(e))}}return t}function o(n,t){return function(r){return t(n(r))}}function l(n,t){const r=[t[n].parent,n];let a=e[t[n].parent][n],l=t[n].parent;for(;t[l].parent;)r.unshift(t[l].parent),a=o(e[t[l].parent][l],a),l=t[l].parent;return a.conversion=r,a}n.exports=function(n){const t=a(n),r={},e=Object.keys(t);for(let a=e.length,o=0;o<a;o++){const n=e[o];null!==t[n].parent&&(r[n]=l(n,t))}return r}}}]);