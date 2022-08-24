import EmbedVideoModal from "./components/EmbedVideoModal";
import { playerData, extensions } from "./extensions";
import load from "external-load";
import Button from "flarum/common/components/Button";
import TextEditor from "flarum/common/components/TextEditor";
import Tooltip from "flarum/common/components/Tooltip";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import CommentPost from "flarum/forum/components/CommentPost";
import ComposerPostPreview from "flarum/forum/components/ComposerPostPreview";

const createInstance = (
    container: HTMLElement,
    canView: boolean | undefined
) => {
    const videoUrl = container.dataset.url;
    const videoType = container.dataset.type;
    const liveMode = container.dataset.live;
    const qualities = container.dataset.qualities;

    let qualitySwitching = [];

    if (qualities) {
        if (videoUrl) {
            qualitySwitching.push({
                name: "default",
                url: videoUrl,
                type: videoType,
            });
        }

        qualities.split(",").forEach((q) => {
            const qData = q.split(";");

            if (qData.length < 2) {
                return;
            }

            qualitySwitching.push({
                name: qData[0],
                url: qData[1],
                type: qData.length < 3 ? "auto" : qData[2],
            });
        });
    }

    const isQualitySwitching =
        app.forum.attribute("embedVideoQualitySwitching") &&
        qualitySwitching.length > 0;

    // @ts-ignore
    const dp = new DPlayer({
        container: container,
        live: liveMode === "true" ? true : false,
        theme: app.forum.attribute("embedVideoTheme") || "#b7daff",
        logo: app.forum.attribute("embedVideoLogo") || "",
        lang: app.forum.attribute("embedVideoLang") || "",
        airplay: app.forum.attribute("embedVideoAirplay") || false,
        hotkey: app.forum.attribute("embedVideoHotkey") || false,
        video: isQualitySwitching
            ? { quality: qualitySwitching, defaultQuality: 0 }
            : {
                  url: videoUrl,
                  type: videoType,
                  customType: {
                      dash: (video: any, player: any) => {
                          window.dashjs
                              .MediaPlayer()
                              .create()
                              .initialize(video, video.src, false);
                      },
                      shaka: (video: any, player: any) => {
                          if (shaka.Player.isBrowserSupported()) {
                              new shaka.Player(video)
                                  .load(video.src)
                                  .then(() => {})
                                  .catch((e: any) => console.error(e));
                          } else {
                              console.error("Error: Shaka is not supported.");
                          }
                      },
                  },
              },
    });

    if (typeof canView !== "undefined") {
        dp.notice(
            app.translator.trans("nearata-embed-video.forum.cannot_view"),
            0
        );
    }
};

const loadScript = async (extension: any) => {
    if (extension.loaded) {
        return;
    }

    await load.js(extension.url);

    extension.loaded = true;
};

const loadExtensions = async () => {
    for (const i of extensions) {
        const isExtensionEnabled = app.forum.attribute(i.attributeName);

        if (isExtensionEnabled) {
            await loadScript(i);
        }
    }
};

const loadPlayer = async () => {
    return await loadScript(playerData);
};

const init = () => {
    return Promise.all([loadExtensions(), loadPlayer()]);
};

app.initializers.add("nearata-embed-video", () => {
    extend(TextEditor.prototype, "controlItems", function (items) {
        if (!app.forum.attribute("embedVideoCreate")) {
            return;
        }

        const editor = this.attrs.composer.editor;

        items.add(
            "nearataEmbedVideo",
            m(
                Tooltip,
                {
                    text: app.translator.trans(
                        "nearata-embed-video.forum.button_tooltip_title"
                    ),
                },
                [
                    m(Button, {
                        icon: "fas fa-cat",
                        class: "Button Button--icon",
                        onclick: () =>
                            app.modal.show(EmbedVideoModal, { editor: editor }),
                    }),
                ]
            )
        );
    });

    extend(CommentPost.prototype, "refreshContent", function () {
        const containers = this.element.querySelectorAll(".dplayer-container");
        const canView: boolean | undefined = this.attrs.post.attribute(
            "nearataEmbedVideoCanView"
        );

        if (containers.length) {
            init().then((_) => {
                for (const i of containers) {
                    if (i.children.length) {
                        continue;
                    }

                    createInstance(i, canView);
                }
            });
        }
    });

    extend(ComposerPostPreview.prototype, "oncreate", function () {
        let preview;

        const updatePreview = () => {
            if (!this.attrs.composer.isVisible()) {
                return;
            }

            const content = this.attrs.composer.fields.content();

            if (preview === content) {
                return;
            }

            preview = content;

            const containers =
                this.element.querySelectorAll(".dplayer-container");

            if (containers.length) {
                init().then((_) => {
                    for (const i of containers) {
                        if (i.children.length) {
                            continue;
                        }

                        createInstance(i, undefined);
                    }
                });
            }
        };

        updatePreview();

        this.updateInterval2 = setInterval(updatePreview, 50);
    });

    extend(ComposerPostPreview.prototype, "onremove", function () {
        clearInterval(this.updateInterval2);
    });
});
