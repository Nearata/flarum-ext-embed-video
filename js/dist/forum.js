/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var o=r(288).default;function n(){"use strict";t.exports=n=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var n=e&&e.prototype instanceof m?e:m,a=Object.create(n.prototype),i=new E(o||[]);return a._invoke=function(t,e,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return{value:void 0,done:!0}}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var u=_(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=d(t,e,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function m(){}function h(){}function v(){}var y={};s(y,u,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==r&&a.call(g,u)&&(y=g);var w=v.prototype=m.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(n,i,u,c){var l=d(t[n],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==o(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var n;this._invoke=function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var n=o.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v,s(w,"constructor",v),s(v,"constructor",h),h.displayName=s(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(j.prototype),s(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new j(f(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,l,"Generator"),s(w,u,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return i.type="throw",i.arg=t,e.next=r,o&&(e.method="next",e.arg=void 0),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o],i=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var u=a.call(n,"catchLoc"),c=a.call(n,"finallyLoc");if(u&&c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(u){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&a.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var n=o;break}}n&&("break"===t||"continue"===t)&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var i=n?n.completion:{};return i.type=t,i.arg=e,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;S(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var o=r(648)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};(()=>{"use strict";function t(t,e,r,o,n,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(o,n)}r.r(o);var e=r(357),n=r.n(e);function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}var i={url:"https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.26.0/DPlayer.min.js",loaded:!1},u=[{attributeName:"Dash",url:"https://cdnjs.cloudflare.com/ajax/libs/dashjs/4.4.1/dash.all.min.js",loaded:!1,window:window.dashjs},{attributeName:"Flv",url:"https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.6.2/flv.min.js",loaded:!1,window:window.FlvJs},{attributeName:"Hls",url:"https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.2.0/hls.min.js",loaded:!1,window:window.Hls},{attributeName:"Shaka",url:"https://cdnjs.cloudflare.com/ajax/libs/mux.js/6.2.0/mux.min.js",loaded:!1,window:window.muxjs},{attributeName:"Shaka",url:"https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.1.2/shaka-player.compiled.js",loaded:!1,window:window.shaka},{attributeName:"WebTorrent",url:"https://cdnjs.cloudflare.com/ajax/libs/webtorrent/1.8.26/webtorrent.min.js",loaded:!1,window:window.WebTorrent}];const c=flarum.core.compat["common/components/Button"];var l=r.n(c);const s=flarum.core.compat["common/components/Modal"];var f=r.n(s);const d=flarum.core.compat["common/components/Select"];var p=r.n(d);const h=flarum.core.compat["common/components/Switch"];var v=r.n(h);const y=flarum.core.compat["forum/app"];var b=r.n(y),g=function(t){return b().translator.trans("nearata-embed-video.forum.modal."+t)},w=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,a(e,r);var n=o.prototype;return n.oninit=function(e){var r=this;t.prototype.oninit.call(this,e),this.videoUrl="",this.videoType="normal",this.isLive=!1,this.videoOptions={normal:g("video_types.normal")},u.forEach((function(t){if(b().forum.attribute("embedVideo"+t.attributeName)){var e=t.attributeName.toLowerCase();r.videoOptions[e]=g("video_types."+e)}}))},n.className=function(){return"EmbedVideoModal Modal--small"},n.title=function(){return g("title")},n.content=function(){var t=this;return[m(".Modal-body",[m(".Form",[m(".Form-group",[m("label",g("video_url_label")),m("input",{type:"name",name:"url",class:"FormControl",disabled:this.disabled,oninput:function(e){return t.videoUrl=e.target.value},autocomplete:"off",placeholder:g("video_url_placeholder")})]),m(".Form-group",[m("label",g("video_type_label")),m(p(),{options:this.videoOptions,value:this.videoType,onchange:function(e){return t.videoType=e}})]),m(".Form-group",[m(v(),{onchange:function(e){return t.isLive=e},state:this.isLive},g("live_mode"))]),b().forum.attribute("embedVideoQualitySwitching")?m(".Form-group",[m("a",{class:"Button Button--primary",href:"https://github.com/Nearata/flarum-ext-embed-video/blob/master/QUALITY_SWITCHING.md",target:"_blank"},g("quality_switching_tutorial"))]):null,m(".Form-group",[m(l(),{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},g("submit_button"))])])]),m(".Modal-footer",[m("span",["Powered by ",m("a",{href:"https://github.com/DIYgod/DPlayer",target:"_blank"},"DPlayer")])])]},n.onsubmit=function(t){t.preventDefault();var e=window.crypto.getRandomValues(new Uint16Array(1))[0];this.attrs.editor.insertAtCursor('[embed-video id="'+e+'" url="'+this.videoUrl+'" type="'+this.videoType+'" live="'+this.isLive+'"]'),this.hide()},o}(f());const x=function(){function t(t){return function(e){return new Promise((function(r,o){var n=document.createElement(t),a="body",i="src";switch(n.onload=function(){r(e)},n.onerror=function(){o(e)},t){case"script":n.async=!0;break;case"link":n.type="text/css",n.rel="stylesheet",i="href",a="head"}n[i]=e,document[a].appendChild(n)}))}}return{css:t("link"),js:t("script"),img:t("img")}}(),j=flarum.core.compat["common/components/Tooltip"];var _=r.n(j);const L=flarum.core.compat["common/extend"],S=flarum.core.compat["forum/components/Button"];var E=r.n(S);const P=flarum.core.compat["forum/components/CommentPost"];var k=r.n(P);const O=flarum.core.compat["forum/components/ComposerPostPreview"];var T=r.n(O);const N=flarum.core.compat["forum/components/TextEditor"];var F=r.n(N);function I(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var M=function(t){var e=t.dataset.url,r=t.dataset.type,o=t.dataset.live,n=t.dataset.qualities,a=[];n&&(e&&a.push({name:"default",url:e,type:r}),n.split(",").forEach((function(t){var e=t.split(";");a.push({name:e[0],url:e[1],type:e.length<3?"auto":e[2]})})));var i=b().forum.attribute("embedVideoQualitySwitching")&&a.length>0;new DPlayer({container:t,live:"true"===o,theme:b().forum.attribute("embedVideoTheme")||"#b7daff",logo:b().forum.attribute("embedVideoLogo")||"",lang:b().forum.attribute("embedVideoLang")||"",airplay:b().forum.attribute("embedVideoAirplay")||!1,hotkey:b().forum.attribute("embedVideoHotkey")||!1,video:i?{quality:a,defaultQuality:0}:{url:e,type:r,customType:{dash:function(t,e){window.dashjs.MediaPlayer().create().initialize(t,t.src,!1)},shaka:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){shaka.Player.isBrowserSupported()?new shaka.Player(t).load(t.src).then((function(){})).catch((function(t){return console.error(t)})):console.error("Error: Shaka is not supported.")}))}}})},V=function(){var e,r=(e=n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,x.js(e.url);case 4:e.loaded=!0;case 5:case"end":return t.stop()}}),t)})),function(){var r=this,o=arguments;return new Promise((function(n,a){var i=e.apply(r,o);function u(e){t(i,n,a,u,c,"next",e)}function c(e){t(i,n,a,u,c,"throw",e)}u(void 0)}))});return function(t){return r.apply(this,arguments)}}(),B=function(){return Promise.all([new Promise((function(t){u.forEach((function(t){b().forum.attribute("embedVideo"+t.attributeName)&&V(t)})),t()})),new Promise((function(t){V(i).then((function(){return t()}))}))])};b().initializers.add("nearata-embed-video",(function(){(0,L.extend)(F().prototype,"controlItems",(function(t){if(b().forum.attribute("embedVideoCreate")){var e=this.attrs.composer.editor;t.add("nearataEmbedVideo",m(_(),{text:b().translator.trans("nearata-embed-video.forum.button_tooltip_title")},[m(E(),{icon:"fas fa-cat",class:"Button Button--icon",onclick:function(){return b().modal.show(w,{editor:e})}})]))}})),(0,L.extend)(k().prototype,"refreshContent",(function(){var t=this.element.querySelectorAll(".dplayer-container");t.length&&B().then((function(e){for(var r,o=I(t);!(r=o()).done;){var n=r.value;M(n)}}))})),(0,L.extend)(T().prototype,"oncreate",(function(){var t,e=this,r=function(){if(e.attrs.composer.isVisible()){var r=e.attrs.composer.fields.content();if(t!==r){t=r;var o=e.element.querySelectorAll(".dplayer-container");o.length&&B().then((function(t){for(var e,r=I(o);!(e=r()).done;){var n=e.value;n.children.length||M(n)}}))}}};r(),this.updateInterval2=setInterval(r,50)})),(0,L.extend)(T().prototype,"onremove",(function(){clearInterval(this.updateInterval2)}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map