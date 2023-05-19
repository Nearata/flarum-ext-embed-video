<?php

namespace Nearata\EmbedVideo\Formatter;

use s9e\TextFormatter\Configurator;

class Configure
{
    public function __invoke(Configurator $config)
    {
        $config->BBCodes->addCustom(
            '[embed-video
                id="{TEXT}"
                url="{ANYTHING}"
                type="{TEXT2}"
                live="{TEXT3}"
                qualities="{ANYTHING2;optional}"
            ]',
            '<div
                id="player-{TEXT}"
                class="dplayer-container"
                data-url="{ANYTHING}"
                data-type="{TEXT2}"
                data-live="{TEXT3}"
                data-qualities="{ANYTHING2}"
            >
            </div>'
        );
    }
}
