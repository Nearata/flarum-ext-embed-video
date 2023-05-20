<?php

namespace Nearata\EmbedVideo;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Post\Event\Saving;
use Nearata\EmbedVideo\Api\Serializer\DiscussionSerializerAttributes;
use Nearata\EmbedVideo\Api\Serializer\ForumAttributes;
use Nearata\EmbedVideo\Command\PurgeCommand;
use Nearata\EmbedVideo\Formatter;
use Nearata\EmbedVideo\Post\Listener\SavingListener;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Formatter)
        ->configure(Formatter\Configure::class)
        ->render(Formatter\Render::class),

    (new Extend\Event)
        ->listen(Saving::class, SavingListener::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(ForumAttributes::class),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attributes(DiscussionSerializerAttributes::class),

    (new Extend\Console())
        ->command(PurgeCommand::class),

    (new Extend\Settings)
        ->default('nearata-embed-video.admin.settings.video_type.dash', false)
        ->default('nearata-embed-video.admin.settings.video_type.flv', false)
        ->default('nearata-embed-video.admin.settings.video_type.hls', false)
        ->default('nearata-embed-video.admin.settings.video_type.shaka', false)
        ->default('nearata-embed-video.admin.settings.video_type.webtorrent', false)
        ->default('nearata-embed-video.admin.settings.options.airplay', false)
        ->default('nearata-embed-video.admin.settings.options.hotkey', false)
        ->default('nearata-embed-video.admin.settings.options.quality_switching', false)
        ->default('nearata-embed-video.admin.settings.options.theme', '')
        ->default('nearata-embed-video.admin.settings.options.logo', '')
        ->default('nearata-embed-video.admin.settings.options.lang', 'en')
        ->default('nearata-embed-video.admin.settings.options.modal_enabled', false)
];
