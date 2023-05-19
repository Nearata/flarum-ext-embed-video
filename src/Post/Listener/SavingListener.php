<?php

namespace Nearata\EmbedVideo\Post\Listener;

use Flarum\Post\Event\Saving;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class SavingListener
{
    public function handle(Saving $event)
    {
        if (Arr::has($event->data, 'attributes.content')) {
            $content = Arr::get($event->data, 'attributes.content');

            if (! Str::contains($content, 'embed-video')) {
                return;
            }

            $event->actor->assertCan('nearata.embedvideo.create');
        }
    }
}
