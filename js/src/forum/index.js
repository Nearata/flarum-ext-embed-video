import app from 'flarum/app';
import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import CommentPost from 'flarum/components/CommentPost';
import DiscussionPage from 'flarum/components/DiscussionPage';
import PostEdited from 'flarum/components/PostEdited';
import TextEditor from 'flarum/components/TextEditor';

import EmbedVideoModal from './components/EmbedVideoModal';

import dashjs from 'dashjs';
import FlvJs from 'flv.js';
import Hls from 'hls.js';
import muxjs from 'mux.js';
import shaka from 'shaka-player';
import WebTorrent from 'webtorrent/webtorrent.min';
import DPlayer from 'dplayer';

app.initializers.add('nearata/flarum-ext-embed-video', () => {
    window.dashjs = dashjs;
    window.flvjs = FlvJs;
    window.Hls = Hls;
    window.muxjs = muxjs;
    window.WebTorrent = WebTorrent;

    extend(TextEditor.prototype, 'controlItems', function(items) {
        items.add(
            'nearataEmbedVideo',
            Button.component({
                icon: 'fas fa-cat',
                className: 'Button Button--icon',
                onclick: () => app.modal.show(new EmbedVideoModal(this)),
                title: app.translator.trans('nearata-embed-video.forum.button_tooltip_title')
            })
        )
    });

    let playersList = [];
    extend(CommentPost.prototype, 'config', () => {
        const players = document.getElementsByClassName('dplayer-container');

        for (let item of players) {
            if (!playersList.includes(item.id)) {
                playersList.push(item.id);
                const id = item.id;
                const videoUrl = item.dataset.url;
                const videoType = item.dataset.type;
                const liveMode = item.dataset.live;

                new DPlayer({
                    container: document.getElementById(id),
                    live: liveMode === 'true' ? true : false,
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
                                    .then(() => {})
                                    .catch(e => console.error(e));
                                } else {
                                    console.error('Error: Shaka is not supported.');
                                }
                            }
                        }
                    }
                });
            }
        }
    });

    extend(DiscussionPage.prototype, 'init', () => playersList = []);
    extend(PostEdited.prototype, 'config', () => playersList = [])
});
