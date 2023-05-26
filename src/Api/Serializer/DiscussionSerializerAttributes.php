<?php

namespace Nearata\EmbedVideo\Api\Serializer;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;

class DiscussionSerializerAttributes
{
    public function __invoke(DiscussionSerializer $serializer, Discussion $discussion, array $attributes)
    {
        return [
            'canNearataEmbedVideoView' => $serializer->getActor()->can('nearata-embed-video.view', $discussion),
        ];
    }
}
