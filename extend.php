<?php

namespace Nearata\EmbedVideo;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Post\Event\Saving;
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

    (new Extend\Console())
        ->command(PurgeCommand::class)
];
