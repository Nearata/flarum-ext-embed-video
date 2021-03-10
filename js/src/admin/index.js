import app from 'flarum/app';

app.initializers.add('nearata-embed-video', () => {
    app.extensionData.for('nearata-embed-video')
        .registerSetting(
            {
                setting: 'nearata-embed-video.admin.settings.video_type.dash',
                label: app.translator.trans('nearata-embed-video.admin.settings.video_types.dash'),
                type: 'boolean'
            }
        )
        .registerSetting(
            {
                setting: 'nearata-embed-video.admin.settings.video_type.flv',
                label: app.translator.trans('nearata-embed-video.admin.settings.video_types.flv'),
                type: 'boolean'
            }
        )
        .registerSetting(
            {
                setting: 'nearata-embed-video.admin.settings.video_type.hls',
                label: app.translator.trans('nearata-embed-video.admin.settings.video_types.hls'),
                type: 'boolean'
            }
        )
        .registerSetting(
            {
                setting: 'nearata-embed-video.admin.settings.video_type.shaka',
                label: app.translator.trans('nearata-embed-video.admin.settings.video_types.shaka'),
                type: 'boolean'
            }
        )
        .registerSetting(
            {
                setting: 'nearata-embed-video.admin.settings.video_type.webtorrent',
                label: app.translator.trans('nearata-embed-video.admin.settings.video_types.webtorrent'),
                type: 'boolean'
            }
        )
        .registerPermission(
            {
                icon: 'fas fa-tag',
                label: app.translator.trans('nearata-embed-video.admin.settings.permissions.can_create_video_player'),
                permission: 'nearata.embedvideo.create',
            },
            'start',
            95
        );
});
