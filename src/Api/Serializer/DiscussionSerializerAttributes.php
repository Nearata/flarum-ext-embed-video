<?php

namespace Nearata\EmbedVideo\Api\Serializer;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;

class DiscussionSerializerAttributes
{
    public function __invoke(DiscussionSerializer $serializer, Discussion $discussion, array $attributes)
    {
        return [
            'canNearataEmbedVideoCreate' => $serializer->getActor()->can('nearataEmbedVideoCreate', $discussion),
            'canNearataEmbedVideoView' => $serializer->getActor()->can('nearataEmbedVideoView', $discussion),
        ];
    }
}
