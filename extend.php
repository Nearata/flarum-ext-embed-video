<?php

namespace Nearata\EmbedVideo;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Post\Event\Saving;

use s9e\TextFormatter\Configurator;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->BBCodes->addCustom(
                '[embed-video
                    id="{NUMBER}"
                    url="{ANYTHING}"
                    type="{TEXT2}"
                    live="{TEXT3}"
                ]',
                '<div
                    id="player-{NUMBER}"
                    class="dplayer-container"
                    data-url="{ANYTHING}"
                    data-type="{TEXT2}"
                    data-live="{TEXT3}"
                >
                </div>'
            );
        }),
    (new Extend\Event)
        ->listen(Saving::class, function($event) {
            if (Arr::has($event->data, 'attributes.content')) {
                $content = Arr::get($event->data, 'attributes.content');

                if (!Str::contains($content, 'embed-video')) {
                    return;
                }

                $event->actor->assertCan('nearata.embedvideo.create');
            }
        }),
    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attribute('embedVideoCreate', function (ForumSerializer $serializer) {
            return (bool) $serializer->getActor()->can('nearata.embedvideo.create');
        }),
    (new Extend\Settings)
        ->serializeToForum('embedVideoDash', 'nearata-embed-video.admin.settings.video_type.dash', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
        ->serializeToForum('embedVideoFlv', 'nearata-embed-video.admin.settings.video_type.flv', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
        ->serializeToForum('embedVideoHls', 'nearata-embed-video.admin.settings.video_type.hls', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
        ->serializeToForum('embedVideoShaka', 'nearata-embed-video.admin.settings.video_type.shaka', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
        ->serializeToForum('embedVideoWebTorrent', 'nearata-embed-video.admin.settings.video_type.webtorrent', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
        ->serializeToForum('embedVideoTheme', 'nearata-embed-video.admin.settings.options.theme', function ($retrievedValue) {
            return (string) $retrievedValue;
        })
        ->serializeToForum('embedVideoLogo', 'nearata-embed-video.admin.settings.options.logo', function ($retrievedValue) {
            return (string) $retrievedValue;
        })
        ->serializeToForum('embedVideoLang', 'nearata-embed-video.admin.settings.options.lang', function ($retrievedValue) {
            return (string) $retrievedValue;
        })
        ->serializeToForum('embedVideoAirplay', 'nearata-embed-video.admin.settings.options.airplay', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
        ->serializeToForum('embedVideoHotkey', 'nearata-embed-video.admin.settings.options.hotkey', function ($retrievedValue) {
            return (bool) $retrievedValue;
        })
];
