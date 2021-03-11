import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import CommentPost from 'flarum/components/CommentPost';
import TextEditor from 'flarum/components/TextEditor';

import { playerData, extensions } from './extensions';
import EmbedVideoModal from './components/EmbedVideoModal';

app.initializers.add('nearata-embed-video', () => {
    extend(TextEditor.prototype, 'controlItems', function (items) {
        if (!app.forum.attribute('embedVideoCreate')) {
            return;
        }

        const editor = this.attrs.composer.editor;

        items.add(
            'nearataEmbedVideo',
            m(Button, {
                icon: 'fas fa-cat',
                class: 'Button Button--icon',
                onclick: () => app.modal.show(EmbedVideoModal, { editor: editor })
            }, app.translator.trans('nearata-embed-video.forum.button_tooltip_title'))
        );
    });

    const loadPlayers = containers => {
        for (const p of containers) {
            const videoUrl = p.dataset.url;
            const videoType = p.dataset.type;
            const liveMode = p.dataset.live;

            new DPlayer({
                container: p,
                live: liveMode === 'true' ? true : false,
                theme: app.forum.attribute('embedVideoTheme') || '#b7daff',
                logo: app.forum.attribute('embedVideoLogo') || '',
                video: {
                    url: videoUrl,
                    type: videoType,
                    customType: {
                        dash: (video, player) => {
                            window.dashjs.MediaPlayer().create().initialize(video, video.src, false);
                        },
                        shaka: (video, player) => {
                            if (shaka.Player.isBrowserSupported()) {
                                new shaka.Player(video)
                                    .load(video.src)
                                    .then(() => { })
                                    .catch(e => console.error(e));
                            } else {
                                console.error('Error: Shaka is not supported.');
                            }
                        }
                    }
                }
            });
        }
    };

    const loadScript = extension => {
        return new Promise(resolve => {
            const script = document.createElement('script');
            script.src = extension.url;

            if (extension.integrity) {
                script.integrity = extension.integrity;
                script.crossOrigin = 'anonymous';
            }

            script.async = true;
            script.onload = resolve;
            document.body.appendChild(script);
        });
    };

    extend(CommentPost.prototype, 'oncreate', function () {
        const containers = this.element.querySelectorAll('.dplayer-container');

        if (containers.length) {
            const initPlayer = new Promise(resolve => {
                if (playerData.loaded) {
                    const interval = setInterval(async () => {
                        if (window.DPlayer) {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 1000);
                } else {
                    playerData.loaded = true;
                    loadScript(playerData).then(() => resolve());
                }
            }).then(() => {
                return new Promise(resolve => {
                    const extensionsPromise = new Promise(resolveExtensions => {
                        extensions.forEach(ex => {
                            if (ex.loaded) {
                                const interval = setInterval(() => {
                                    if (ex.window) {
                                        clearInterval(interval);
                                    }
                                }, 1000);
                            }

                            if (app.forum.attribute(`embedVideo${ex.attributeName}`) && !ex.loaded) {
                                ex.loaded = true;
                                loadScript(ex);
                            }
                        });

                        resolveExtensions();
                    });

                    extensionsPromise.then(() => resolve());
                });
            });

            initPlayer.then(() => loadPlayers(containers));
        }
    });
});
