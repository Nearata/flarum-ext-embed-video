import app from 'flarum/app';

app.initializers.add('nearata-embed-video', () => {
    app.extensionData.for('nearata-embed-video')
        .registerPermission({
            icon: 'fas fa-tag',
            label: app.translator.trans('nearata-embed-video.admin.settings.permissions.can_create_video_player'),
            permission: 'nearata.embedvideo.create',
        }, 'start', 95);
});
