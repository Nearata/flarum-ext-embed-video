# Embed Video

[![license](https://img.shields.io/github/license/Nearata/flarum-ext-embed-video?style=flat)](https://github.com/Nearata/flarum-ext-embed-video/blob/main/UNLICENSE)
[![packagist](https://img.shields.io/packagist/v/nearata/flarum-ext-embed-video?style=flat)](https://packagist.org/packages/nearata/flarum-ext-embed-video)
[![changelog](https://img.shields.io/github/release-date/nearata/flarum-ext-embed-video?label=last%20release%20date)](https://github.com/Nearata/flarum-ext-embed-video/blob/main/CHANGELOG.md)

> Allow users to embed video using BBCode.

## Preview

Look at the [screenshots](screenshots) subfolder.

## Install

```sh
composer require nearata/flarum-ext-embed-video:"*"
```

## Update

```sh
composer require nearata/flarum-ext-embed-video:"*"
php flarum cache:clear
```

## Remove

Remember to call the `Purge` button in Admin area.

If you are about to unistall this extension for good,
run this command before.

This command will remove __ALL__ the video player found in user posts.

```sh
php flarum nearataEmbedVideo:purge
```

```sh
composer remove nearata/flarum-ext-embed-video
php flarum cache:clear
```

## How to use

```js
[embed-video id="insertRandomId" url="" type="normal" live="false" qualities=""]
```

- id: can be any string, prefer random.
- url: must start with http or https.
- type: normal, flv, hls, shaka, webtorrent.
- live: true or false.
- qualities: check below.

## Quality Switching

See [QUALITY_SWITCHING.md](QUALITY_SWITCHING.md).
