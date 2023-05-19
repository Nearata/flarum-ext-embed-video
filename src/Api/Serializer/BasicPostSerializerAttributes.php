<?php

namespace Nearata\EmbedVideo\Api\Serializer;

use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Post\Post;

class BasicPostSerializerAttributes
{
    public function __invoke(BasicPostSerializer $serializer, Post $post, array $attributes)
    {
    }
}
