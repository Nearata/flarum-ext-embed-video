export const playerData = {
    url: "https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.26.0/DPlayer.min.js",
    integrity:
        "sha512-1t2U1/0xGhBZAriD+/9llOhjPs5nFBDZ7KbnHB4SGwAUPrzyS+02Kus1cz0exk5eMyXxwfHxj/1JLuie/p6xXA==",
    loaded: false,
};

export const extensions = [
    {
        attributeName: "Dash",
        url: "https://cdnjs.cloudflare.com/ajax/libs/dashjs/4.4.1/dash.all.min.js",
        integrity:
            "sha512-WHtkQz1iePtUjmTfBntzMsr+u7Gn94FklVz/nWz5ueOHutXzsRnbU4BsAmpizvysAqdPU1tMRYn7JdJgdyVuaQ==",
        loaded: false,
        window: window.dashjs,
    },
    {
        attributeName: "Flv",
        url: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.6.2/flv.min.js",
        integrity:
            "sha512-49OFf+8jaHx4Vb7iFNb46Loq1pIxXlEYeVOQRIx0KLBRF4KSV6E7QK2Vw5r416TQDyBJW+DFh2CyTV7+gCWd6g==",
        loaded: false,
        window: window.FlvJs,
    },
    {
        attributeName: "Hls",
        url: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.2.0/hls.min.js",
        integrity:
            "sha512-hN4vMZkhrNp3J1cL4ADv9uBTWr9h4uxfcHoodvGEQfU5K5qhH5P3j08rlBshrZAd1M9aY8MtITcT8z/WUvRQAw==",
        loaded: false,
        window: window.Hls,
    },
    {
        attributeName: "Shaka",
        url: "https://cdnjs.cloudflare.com/ajax/libs/mux.js/6.2.0/mux.min.js",
        integrity:
            "sha512-9VtQ5XTyfOzaheGDZDiyJJQAbo3LRtaguZtl31k130VPr2OII5Ql98R/PV0hrMvJ8dpYS4e62RigbTTrNWsbfA==",
        loaded: false,
        window: window.muxjs,
    },
    {
        attributeName: "Shaka",
        url: "https://cdnjs.cloudflare.com/ajax/libs/shaka-player/4.1.2/shaka-player.compiled.js",
        integrity:
            "sha512-i6QxTQpZ7bNwEcH5jqA4csLYT3nk43xka8bozkqAakcbibDP+bMwVX8+Rjz2hwG3ahoGrPbE+D4rZ8xJX2OosA==",
        loaded: false,
        window: window.shaka,
    },
    {
        attributeName: "WebTorrent",
        url: "https://cdnjs.cloudflare.com/ajax/libs/webtorrent/1.8.26/webtorrent.min.js",
        integrity:
            "sha512-J8zHf3iLK7ukV6BqbFTVQMw6b/eua5odWwvZj+QRoSZKUdMZlYNOyVznYqz8sUqJa99sfKoCAmHxSVsyjPl8ww==",
        loaded: false,
        window: window.WebTorrent,
    },
];
