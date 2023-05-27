<?php

namespace Nearata\EmbedVideo\Formatter;

use Flarum\Http\RequestUtil;
use Flarum\Post\CommentPost;
use Psr\Http\Message\ServerRequestInterface;
use s9e\TextFormatter\Renderer;
use s9e\TextFormatter\Utils;

class Render
{
    public function __invoke(Renderer $renderer, &$context, string $xml, ServerRequestInterface $request = null): string
    {
        if (! ($context instanceof CommentPost)) {
            return $xml;
        }

        if (! $request) {
            return $xml;
        }

        $actor = RequestUtil::getActor($request);

        // is self
        if ($context->user_id === $actor->id) {
            return $xml;
        }

        if ($actor->can('nearata-embed-video.view', $context->discussion)) {
            return $xml;
        }

        return Utils::replaceAttributes($xml, 'EMBED-VIDEO', function (array $attributes) {
            $attributes['url'] = '';

            return $attributes;
        });
    }
}
