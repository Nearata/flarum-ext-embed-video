(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat["admin/app"];e.n(a)().initializers.add("nearata-embed-video",(function(e){e.extensionData.for("nearata-embed-video").registerSetting({setting:"nearata-embed-video.admin.settings.video_type.dash",label:e.translator.trans("nearata-embed-video.admin.settings.video_types.dash"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.flv",label:e.translator.trans("nearata-embed-video.admin.settings.video_types.flv"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.hls",label:e.translator.trans("nearata-embed-video.admin.settings.video_types.hls"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.shaka",label:e.translator.trans("nearata-embed-video.admin.settings.video_types.shaka"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.video_type.webtorrent",label:e.translator.trans("nearata-embed-video.admin.settings.video_types.webtorrent"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.theme",label:e.translator.trans("nearata-embed-video.admin.settings.options.theme"),type:"color-preview"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.logo",label:e.translator.trans("nearata-embed-video.admin.settings.options.logo"),type:"text"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.lang",label:e.translator.trans("nearata-embed-video.admin.settings.options.lang"),type:"select",options:{en:"English","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional"},default:"en"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.airplay",label:e.translator.trans("nearata-embed-video.admin.settings.options.airplay"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.hotkey",label:e.translator.trans("nearata-embed-video.admin.settings.options.hotkey"),type:"boolean"}).registerSetting({setting:"nearata-embed-video.admin.settings.options.quality_switching",label:e.translator.trans("nearata-embed-video.admin.settings.options.quality_switching"),type:"boolean"}).registerPermission({icon:"fas fa-tag",label:e.translator.trans("nearata-embed-video.admin.settings.permissions.can_create_video_player"),permission:"nearata.embedvideo.create",tagScoped:!0},"start",95)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map