module.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=11)}({0:function(e,t){e.exports=flarum.core.compat.app},11:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n);i.a.initializers.add("nearata-embed-video",(function(){i.a.extensionData.for("nearata-embed-video").registerSetting({setting:"nearata-embed-video.admin.settings.video_type.dash",label:i.a.translator.trans("nearata-embed-video.admin.settings.video_types.dash"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.flv",label:i.a.translator.trans("nearata-embed-video.admin.settings.video_types.flv"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.hls",label:i.a.translator.trans("nearata-embed-video.admin.settings.video_types.hls"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.shaka",label:i.a.translator.trans("nearata-embed-video.admin.settings.video_types.shaka"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.webtorrent",label:i.a.translator.trans("nearata-embed-video.admin.settings.video_types.webtorrent"),type:"boolean"}).registerSetting((function(){return[m(".Form-group",[m("label",i.a.translator.trans("nearata-embed-video.admin.settings.options.theme")),m("input",{type:"text",class:"FormControl",bidi:this.setting("nearata-embed-video.admin.settings.options.theme"),placeholder:"#b7daff"})])]})).registerSetting({setting:"nearata-embed-video.admin.settings.options.logo",label:i.a.translator.trans("nearata-embed-video.admin.settings.options.logo"),type:"text"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.lang",label:i.a.translator.trans("nearata-embed-video.admin.settings.options.lang"),type:"select",options:{en:"English","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional"},default:"en"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.airplay",label:i.a.translator.trans("nearata-embed-video.admin.settings.options.airplay"),type:"boolean"}).registerPermission({icon:"fas fa-tag",label:i.a.translator.trans("nearata-embed-video.admin.settings.permissions.can_create_video_player"),permission:"nearata.embedvideo.create"},"start",95)}))}});
//# sourceMappingURL=admin.js.map