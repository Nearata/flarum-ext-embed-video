import Button from 'flarum/common/components/Button';
import Modal from 'flarum/common/components/Modal';
import Select from 'flarum/common/components/Select';
import Switch from 'flarum/common/components/Switch';

import { extensions } from '../extensions';

export default class EmbedVideoModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);

        this.videoUrl = '';
        this.videoType = 'normal';
        this.isLive = false;
        this.videoOptions = {
            normal: app.translator.trans('nearata-embed-video.forum.modal.video_types.normal')
        };

        extensions.forEach(ex => {
            if (app.forum.attribute(`embedVideo${ex.attributeName}`)) {
                const exName = ex.attributeName.toLowerCase();
                this.videoOptions[exName] = app.translator.trans(`nearata-embed-video.forum.modal.video_types.${exName}`);
            }
        });
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
                            options: this.videoOptions,
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
                    app.forum.attribute('embedVideoQualitySwitching') ? m('.Form-group', [
                        m('a', {
                            class: 'Button Button--primary',
                            href: 'https://github.com/Nearata/flarum-ext-embed-video/blob/master/QUALITY_SWITCHING.md',
                            target: '_blank'
                        }, 'Quality Switching tutorial')
                    ]) : null,
                    m('.Form-group', [
                        m(Button, {
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading
                        }, app.translator.trans('nearata-embed-video.forum.modal.submit_button'))
                    ])
                ])
            ]),
            m('.Modal-footer', [
                m('span', [
                    'Powered by ',
                    m('a', {
                        href: 'https://github.com/DIYgod/DPlayer',
                        target: '_blank'
                    }, 'DPlayer')
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
