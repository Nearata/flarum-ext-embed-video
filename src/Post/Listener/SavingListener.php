<?php

namespace Nearata\EmbedVideo\Post\Listener;

use Flarum\Post\CommentPost;
use Flarum\Post\Event\Saving;
use Illuminate\Support\Arr;
use s9e\TextFormatter\Utils;

class SavingListener
{
    public function handle(Saving $event)
    {
        if (! ($event->post instanceof CommentPost)) {
            return;
        }

        if (! Arr::has($event->data, 'attributes.content')) {
            return;
        }

        $oldContent = $event->post->parsed_content;
        $newContent = Utils::removeTag($event->post->parsed_content, 'EMBED-VIDEO');

        if (strlen($newContent) < strlen($oldContent)) {
            $event->actor->assertCan('nearata.embedvideo.create');
        }
    }
}
