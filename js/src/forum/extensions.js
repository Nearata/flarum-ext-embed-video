export const playerData = {
    url: "https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.26.0/DPlayer.min.js",
    loaded: false,
};

export const extensions = [
    {
        attributeName: "Dash",
        url: "https://cdnjs.cloudflare.com/ajax/libs/dashjs/4.4.1/dash.all.min.js",
        loaded: false,
        window: window.dashjs,
    },
    {
        attributeName: "Flv",
        url: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.6.2/flv.min.js",
        loaded: false,
        window: window.FlvJs,
    },
    {
        attributeName: "Hls",
        url: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.2.0/hls.min.js",
        loaded: false,
        window: window.Hls,
    },
    {
        attributeName: "Shaka",
        url: "https://cdnjs.cloudflare.com/ajax/libs/mux.js/6.2.0/mux.min.js",
        loaded: false,
        window: window.muxjs,
    },
    {
        attributeName: "Shaka",
        url: "https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.1.2/shaka-player.compiled.js",
        loaded: false,
        window: window.shaka,
    },
    {
        attributeName: "WebTorrent",
        url: "https://cdnjs.cloudflare.com/ajax/libs/webtorrent/1.8.26/webtorrent.min.js",
        loaded: false,
        window: window.WebTorrent,
    },
];
