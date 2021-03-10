export const playerData = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/dplayer/1.26.0/DPlayer.min.js',
    integrity: 'sha512-1t2U1/0xGhBZAriD+/9llOhjPs5nFBDZ7KbnHB4SGwAUPrzyS+02Kus1cz0exk5eMyXxwfHxj/1JLuie/p6xXA==',
    loaded: false
};

export const extensions = [
    {
        attributeName: 'Dash',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/3.2.1/dash.all.min.js',
        integrity: 'sha512-K8ychE2luu1+zrt4MiDhr8L8B6zPB+x/EofroMF6LygAn+Oh/EadU18WgChXuOeCAan0y5/IQGS06izToR8xnQ==',
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
        url: 'https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.14.17/hls.min.js',
        integrity: 'sha512-t0GMHzxvVdMw1p8oSntdvFKikEx9Pwus6G2PP3U7/GQ3+Id+D9sYgnck0etYk0CBK5gdk8BJBnQYx7PIT1PJ0Q==',
        loaded: false,
        window: window.Hls
    },
    {
        attributeName: 'Shaka',
        url: 'https://cdn.jsdelivr.net/npm/mux.js@5.10.0/dist/mux.min.js',
        integrity: 'sha384-kjFPBZPljNAGT06KwyFzCr2uA43QbzuBDFGGrAPWZZd/UmeTEdhTtlXCR4htNQ+t',
        loaded: false,
        window: window.muxjs
    },
    {
        attributeName: 'Shaka',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/shaka-player/2.5.20/shaka-player.compiled.js',
        integrity: 'sha512-00YS/8eMlr1+sVSq4nobuTGCetIvhqsi3m6UoRwPnasLapOOIAcyP+nxPdhrois6CywC9tcPkNCCICM6MPh/1Q==',
        loaded: false,
        window: window.shaka
    },
    {
        attributeName: 'WebTorrent',
        url: 'https://cdnjs.cloudflare.com/ajax/libs/webtorrent/0.115.3/webtorrent.min.js',
        integrity: 'sha512-1ReZ6tk2ccA3Zrj0KfTF0isjlah4G3M7rBZlXzHxPgtEMx+x1UOd5DvcPypXbk48FbFFXYmfrUdPsYXHy9oG+A==',
        loaded: false,
        window: window.WebTorrent
    },
];
