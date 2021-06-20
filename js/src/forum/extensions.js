export const playerData = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.26.0/DPlayer.min.js',
    integrity: 'sha512-1t2U1/0xGhBZAriD+/9llOhjPs5nFBDZ7KbnHB4SGwAUPrzyS+02Kus1cz0exk5eMyXxwfHxj/1JLuie/p6xXA==',
    loaded: false
};

export const extensions = [
    {
        attributeName: 'Dash',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/3.2.2/dash.all.min.js',
        integrity: 'sha512-vYbnErl9JO63c2v/ADkEKrYfQChzm4v7nU+55A5EvO7P+AYm9bmdtZhBA6Fg8FkfqEvXJLd/k9L26d1HS1eOtg==',
        loaded: false,
        window: window.dashjs
    },
    {
        attributeName: 'Flv',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.5.0/flv.min.js',
        integrity: 'sha512-YY0CZ0d6Wavco6rNJERWAoUJX9jCnRlcwK1MtKon8IzhT189p6rgX7f6ikViiSsv3PLYozgsVJDzdxiVz3IXjw==',
        loaded: false,
        window: window.FlvJs
    },
    {
        attributeName: 'Hls',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.0.4/hls.min.js',
        integrity: 'sha512-zogXmAvq8Dy0EChh8zcXjRn3ZxJL8VTzlpLInG/1Qh9Z+JfpaGpabiMEaCW0pvFicIKdcc7S2uwTC5mxICGsTg==',
        loaded: false,
        window: window.Hls
    },
    {
        attributeName: 'Shaka',
        url: 'https://cdn.jsdelivr.net/npm/mux.js@5.11.0/dist/mux.min.js',
        integrity: 'sha384-dJ95ZgLYhsF9rZoY/PjodgCyqm7acd6Jh9iSwCQvZKVUP7nzM5L++vfYAVJAshjn',
        loaded: false,
        window: window.muxjs
    },
    {
        attributeName: 'Shaka',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/shaka-player/3.1.1/shaka-player.compiled.js',
        integrity: 'sha512-emqQNRbjWDr58PFlBm23WFUP92QjyTHjhyz0g3qJIiJnhJPWxbw1d9lr9VAZgX1fIEZhlsbvgj1Fs3cIakhDyA==',
        loaded: false,
        window: window.shaka
    },
    {
        attributeName: 'WebTorrent',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/webtorrent/1.0.1/webtorrent.min.js',
        integrity: 'sha512-ExWvmRd/I+Ij/YEKnl6h3tj3+77+KIGBP2t5n7DgMuaXObeuMTuKeZxAkEVIkLdmZGsIceX4TPdm2q+fIhKdnA==',
        loaded: false,
        window: window.WebTorrent
    },
];
