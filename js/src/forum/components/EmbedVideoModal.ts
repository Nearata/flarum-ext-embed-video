import { extensions } from "../extensions";
import Button from "flarum/common/components/Button";
import Modal, { IInternalModalAttrs } from "flarum/common/components/Modal";
import Select from "flarum/common/components/Select";
import Switch from "flarum/common/components/Switch";
import BasicEditorDriver from "flarum/common/utils/BasicEditorDriver";
import app from "flarum/forum/app";

const trans = (key: string) => {
    return app.translator.trans(`nearata-embed-video.forum.modal.${key}`);
};

interface Attrs extends IInternalModalAttrs {
    editor: BasicEditorDriver;
}

export default class EmbedVideoModal extends Modal<Attrs> {
    videoUrl!: string;
    videoType!: string;
    isLive!: boolean;
    videoOptions!: any;
    disabled!: boolean;
    editor!: BasicEditorDriver;

    oninit(vnode: any) {
        super.oninit(vnode);

        this.videoUrl = "";
        this.videoType = "normal";
        this.isLive = false;
        this.videoOptions = {
            normal: trans("video_types.normal"),
        };
        this.editor = this.attrs.editor;

        extensions.forEach((i) => {
            if (app.forum.attribute(`embedVideo${i.attributeName}`)) {
                const name = i.attributeName.toLowerCase();
                this.videoOptions[name] = trans(`video_types.${name}`);
            }
        });
    }

    className() {
        return "EmbedVideoModal Modal--small";
    }

    title() {
        return trans("title");
    }

    content() {
        return [
            m(".Modal-body", [
                m(".Form", [
                    m(".Form-group", [
                        m("label", trans("video_url_label")),
                        m("input", {
                            type: "name",
                            name: "url",
                            class: "FormControl",
                            disabled: this.disabled,
                            oninput: (e: any) =>
                                (this.videoUrl = e.target.value),
                            autocomplete: "off",
                            placeholder: trans("video_url_placeholder"),
                        }),
                    ]),
                    m(".Form-group", [
                        m("label", trans("video_type_label")),
                        m(Select, {
                            options: this.videoOptions,
                            value: this.videoType,
                            onchange: (value: string) =>
                                (this.videoType = value),
                            disabled: this.disabled,
                        }),
                    ]),
                    m(".Form-group", [
                        m(
                            Switch,
                            {
                                onchange: (value: boolean) =>
                                    (this.isLive = value),
                                state: this.isLive,
                                disabled: this.disabled,
                            },
                            trans("live_mode")
                        ),
                    ]),
                    app.forum.attribute("embedVideoQualitySwitching")
                        ? m(".Form-group", [
                              m(
                                  "a",
                                  {
                                      class: "Button Button--primary",
                                      href: "https://github.com/Nearata/flarum-ext-embed-video/blob/master/QUALITY_SWITCHING.md",
                                      target: "_blank",
                                  },
                                  trans("quality_switching_tutorial")
                              ),
                          ])
                        : null,
                    m(".Form-group", [
                        m(
                            Button,
                            {
                                className:
                                    "Button Button--primary Button--block",
                                type: "submit",
                                loading: this.loading,
                                disabled: this.disabled,
                            },
                            trans("submit_button")
                        ),
                    ]),
                ]),
            ]),
            m(".Modal-footer", [
                m("span", [
                    "Powered by ",
                    m(
                        "a",
                        {
                            href: "https://github.com/DIYgod/DPlayer",
                            target: "_blank",
                        },
                        "DPlayer"
                    ),
                ]),
            ]),
        ];
    }

    onsubmit(e: any) {
        e.preventDefault();

        this.disabled = true;

        const id = window.crypto.getRandomValues(new Uint16Array(1))[0];

        this.editor.insertAtCursor(
            `[embed-video id="${id}" url="${this.videoUrl}" type="${this.videoType}" live="${this.isLive}"]`
        );
        this.hide();
    }
}
