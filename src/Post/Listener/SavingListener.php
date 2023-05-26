<?php

namespace Nearata\EmbedVideo\Post\Listener;

use Flarum\Foundation\ValidationException;
use Flarum\Post\CommentPost;
use Flarum\Post\Event\Saving;
use Illuminate\Support\Arr;
use s9e\TextFormatter\Utils;
use Symfony\Contracts\Translation\TranslatorInterface;

class SavingListener
{
    /**
     * @var TranslatorInterface
     */
    protected $translator;

    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

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

        if (strlen($newContent) == strlen($oldContent)) {
            return;
        }

        if ($event->actor->cannot('nearata-embed-video.create', $event->post->discussion)) {
            throw new ValidationException(['nearataEmbedVideo' => $this->translator->trans('nearata-embed-video.forum.cannot_create')]);
        }
    }
}
