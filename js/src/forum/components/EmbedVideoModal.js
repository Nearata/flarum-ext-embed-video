import Button from 'flarum/components/Button';
import Modal from 'flarum/components/Modal';
import Select from 'flarum/components/Select';
import Switch from 'flarum/components/Switch';

export default class EmbedVideoModal extends Modal {
    init() {
        this.videoUrl = m.prop('');
        this.videoType = m.prop('normal');
        this.isLive = m.prop(false);
    }

    className() {
        return 'EmbedVideoModal Modal--small';
    }

    title() {
        return app.translator.trans('nearata-embed-video.forum.modal.title');
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form">
                    <div className="Form-group">
                        <label>{app.translator.trans('nearata-embed-video.forum.modal.video_url_label')}</label>
                        <input
                            type="name"
                            name="url"
                            className="FormControl"
                            disabled={this.loading}
                            oninput={e => this.videoUrl(e.target.value)}
                            autocomplete="off"
                            placeholder={app.translator.trans('nearata-embed-video.forum.modal.video_url_placeholder')}
                        />
                    </div>
                    <div className="Form-group">
                        <label>{app.translator.trans('nearata-embed-video.forum.modal.video_type_label')}</label>
                        {Select.component({
                            options: {
                                normal: app.translator.trans('nearata-embed-video.forum.modal.video_types.normal'),
                                dash: app.translator.trans('nearata-embed-video.forum.modal.video_types.dash'),
                                flv: app.translator.trans('nearata-embed-video.forum.modal.video_types.flv'),
                                hls: app.translator.trans('nearata-embed-video.forum.modal.video_types.hls'),
                                shaka: app.translator.trans('nearata-embed-video.forum.modal.video_types.shaka'),
                                webtorrent: app.translator.trans('nearata-embed-video.forum.modal.video_types.webtorrent')
                            },
                            value: this.videoType(),
                            onchange: this.videoType
                        })}
                    </div>
                    <div className="Form-group">
                        {Switch.component({
                            children: app.translator.trans('nearata-embed-video.forum.modal.live_mode'),
                            onchange: this.isLive,
                            state: this.isLive()
                        })}
                    </div>
                    <div className="Form-group">
                        {Button.component({
                            className: 'Button Button--primary Button--block',
                            type: 'submit',
                            loading: this.loading,
                            children: app.translator.trans('nearata-embed-video.forum.modal.submit_button'),
                        })}
                    </div>
                </div>
            </div>
        )
    }

    onsubmit(e) {
        e.preventDefault();

        const playerUUID = window.crypto.getRandomValues(new Uint16Array(1))[0];

        this.props.insertAtCursor(`[embed-video id="${playerUUID}" url="${this.videoUrl()}" type="${this.videoType()}" live="${this.isLive()}"]`);
        this.hide()
    }
}