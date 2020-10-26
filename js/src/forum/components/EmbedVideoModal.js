import Button from 'flarum/components/Button';
import Modal from 'flarum/components/Modal';
import Select from 'flarum/components/Select';
import Switch from 'flarum/components/Switch';

export default class EmbedVideoModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.videoUrl = '';
        this.videoType = 'normal';
        this.isLive = false;
    }

    className() {
        return 'EmbedVideoModal Modal--small';
    }

    title() {
        return app.translator.trans('nearata-embed-video.forum.modal.title');
    }

    content() {
        return [
            m('.Modal-body', [
                m('.Form', [
                    m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-video.forum.modal.video_url_label')),
                        m('input', {
                            type: 'name',
                            name: 'url',
                            class: 'FormControl',
                            disabled: this.disabled,
                            oninput: e => this.videoUrl = e.target.value,
                            autocomplete: 'off',
                            placeholder: app.translator.trans('nearata-embed-video.forum.modal.video_url_placeholder')
                        })
                    ]),
                    m('.Form-group', [
                        m('label', app.translator.trans('nearata-embed-video.forum.modal.video_type_label')),
                        m(Select, {
                            options: {
                                normal: app.translator.trans('nearata-embed-video.forum.modal.video_types.normal'),
                                dash: app.translator.trans('nearata-embed-video.forum.modal.video_types.dash'),
                                flv: app.translator.trans('nearata-embed-video.forum.modal.video_types.flv'),
                                hls: app.translator.trans('nearata-embed-video.forum.modal.video_types.hls'),
                                shaka: app.translator.trans('nearata-embed-video.forum.modal.video_types.shaka'),
                                webtorrent: app.translator.trans('nearata-embed-video.forum.modal.video_types.webtorrent')
                            },
                            value: this.videoType,
                            onchange: value => this.videoType = value
                        })
                    ]),
                    m('.Form-group', [
                        m(Switch, {
                            onchange: value => this.isLive = value,
                            state: this.isLive
                        }, app.translator.trans('nearata-embed-video.forum.modal.live_mode'))
                    ]),
                    m('.Form-group', [
                        m(Button, {
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading
                        }, app.translator.trans('nearata-embed-video.forum.modal.submit_button'))
                    ])
                ])
            ])
        ]
    }

    onsubmit(e) {
        e.preventDefault();

        const playerUUID = window.crypto.getRandomValues(new Uint16Array(1))[0];

        this.attrs.editor.insertAtCursor(`[embed-video id="${playerUUID}" url="${this.videoUrl}" type="${this.videoType}" live="${this.isLive}"]`);
        this.hide()
    }
}
