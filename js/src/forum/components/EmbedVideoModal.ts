import { extensions } from "../extensions";
import PointerState from "../states/PointerState";
import QualityState from "../states/QualityState";
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
    videoOptions: any;
    disabled!: boolean;
    editor!: BasicEditorDriver;
    pointers!: { [key: string]: string };
    qualities!: { [key: string]: string };
    currentPointer!: string;
    pointersData!: { [key: string]: PointerState };
    currentQuality!: string;

    oninit(vnode: any) {
        super.oninit(vnode);

        this.editor = this.attrs.editor;

        this.videoOptions = {
            normal: trans("video_types.normal"),
        };
        this.pointers = {
            new: trans("pointer_option_new").toString(),
        };
        this.qualities = {
            new: trans("quality_option_new").toString(),
        };
        this.pointersData = {
            new: new PointerState(),
        };
        this.currentPointer = "new";
        this.currentQuality = "new";

        extensions.forEach((i) => {
            if (app.forum.attribute(i.attributeName)) {
                const name = i.attributeName
                    .toLowerCase()
                    .replace("embedvideo", "");
                this.videoOptions[name] = trans(`video_types.${name}`);
            }
        });

        const pattern =
            /\[embed-video id=\"(?<id>.*?)\" url=\"(?<url>.*?)\" type=\"(?<type>.*?)\" live=\"(?<live>.*?)\" ?(qualities=\"(?<qualities>.*?)\")?\]/gs;
        const match = this.editor.el.value.matchAll(pattern);

        if (match) {
            let count = 1;

            for (const i of match) {
                if (!i.groups) {
                    continue;
                }

                const id = i.groups["id"];
                const url = i.groups["url"];
                const type = i.groups["type"];
                const live = i.groups["live"];

                const pointer = new PointerState(id);

                pointer.url = url;
                pointer.type = type;
                pointer.live = live === "true" ? true : false;

                const qualitiesStr = (i.groups["qualities"] || "").trim();

                if (qualitiesStr.length) {
                    let count1 = 1;

                    for (const i1 of qualitiesStr.split(",")) {
                        const data = i1.trim().split(";");

                        if (data.length < 2) {
                            continue;
                        }

                        const name = data[0];
                        const url = data[1];
                        const type = data[2] || "normal";

                        const quality = new QualityState();

                        quality.name = name;
                        quality.url = url;
                        quality.type = type;

                        pointer.qualities[`#${count1}`] = `#${count1}`;
                        pointer.qualitiesData[`#${count1}`] = quality;

                        count1++;
                    }
                }

                this.pointers[`#${count}`] = `#${count}`;
                this.pointersData[`#${count}`] = pointer;

                count++;
            }
        }
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
                        m("label", trans("pointer_label")),
                        m(Select, {
                            options: this.pointers,
                            value: this.currentPointer,
                            onchange: (value: string) => {
                                this.currentPointer = value;
                                this.currentQuality = "new";

                                this.qualities =
                                    this.pointersData[value].qualities;
                            },
                            disabled: this.loading,
                        }),
                    ]),
                    m(".Form-group", [
                        m("label", trans("video_url_label")),
                        m("input", {
                            type: "name",
                            name: "url",
                            class: "FormControl",
                            disabled: this.loading,
                            oninput: (e: any) =>
                                (this.pointersData[this.currentPointer].url =
                                    e.target.value),
                            autocomplete: "off",
                            placeholder: trans("video_url_placeholder"),
                            value: this.pointersData[this.currentPointer].url,
                        }),
                    ]),
                    m(".Form-group", [
                        m("label", trans("video_type_label")),
                        m(Select, {
                            options: this.videoOptions,
                            value: this.pointersData[this.currentPointer].type,
                            onchange: (value: string) =>
                                (this.pointersData[this.currentPointer].type =
                                    value),
                            disabled: this.loading,
                        }),
                    ]),
                    m(".Form-group", [
                        m(
                            Switch,
                            {
                                onchange: (value: boolean) =>
                                    (this.pointersData[
                                        this.currentPointer
                                    ].live = value),
                                state: this.pointersData[this.currentPointer]
                                    .live,
                                disabled: this.loading,
                            },
                            trans("live_mode")
                        ),
                    ]),
                    m(".Form-group", [
                        this.currentPointer === "new"
                            ? [
                                  m(
                                      Button,
                                      {
                                          className: "Button Button--primary",
                                          loading: this.loading,
                                          disabled: this.loading,
                                          onclick: (_: any) => {
                                              const n = Object.keys(
                                                  this.pointers
                                              ).length;
                                              const index = `#${n}`;

                                              this.pointers[index] = index;
                                              this.pointersData[index] =
                                                  this.pointersData["new"];

                                              this.pointersData["new"] =
                                                  new PointerState();

                                              this.qualities =
                                                  this.pointersData[
                                                      "new"
                                                  ].qualities;

                                              this.currentQuality = "new";
                                          },
                                      },
                                      trans("add_pointer")
                                  ),
                              ]
                            : [
                                  m(
                                      Button,
                                      {
                                          className: "Button Button--primary",
                                          loading: this.loading,
                                          disabled: this.loading,
                                          onclick: (_: any) => {
                                              delete this.pointers[
                                                  this.currentPointer
                                              ];
                                              delete this.pointersData[
                                                  this.currentPointer
                                              ];

                                              this.qualities =
                                                  this.pointersData[
                                                      "new"
                                                  ].qualities;

                                              const keys = Object.keys(
                                                  this.pointers
                                              ).filter((i) => i !== "new");

                                              let count = 1;

                                              for (const i of keys) {
                                                  this.pointers[
                                                      `#${count}`
                                                  ] = `#${count}`;
                                                  this.pointersData[
                                                      `#${count}`
                                                  ] = this.pointersData[i];

                                                  delete this.pointers[i];
                                                  delete this.pointersData[i];

                                                  count++;
                                              }

                                              this.currentPointer = "new";
                                              this.currentQuality = "new";
                                          },
                                      },
                                      trans("remove_pointer")
                                  ),
                              ],
                    ]),
                    app.forum.attribute("embedVideoQualitySwitching")
                        ? [
                              m(".Form-group", [
                                  m("label", trans("qualities_label")),
                                  m(Select, {
                                      options: this.qualities,
                                      value: this.currentQuality,
                                      onchange: (value: string) =>
                                          (this.currentQuality = value),
                                      disabled: this.loading,
                                  }),
                              ]),
                              m(".Form-group", [
                                  m("label", "Name"),
                                  m("input", {
                                      type: "name",
                                      name: "name",
                                      class: "FormControl",
                                      disabled: this.loading,
                                      oninput: (e: any) =>
                                          (this.pointersData[
                                              this.currentPointer
                                          ].qualitiesData[
                                              this.currentQuality
                                          ].name = e.target.value),
                                      autocomplete: "off",
                                      value: this.pointersData[
                                          this.currentPointer
                                      ].qualitiesData[this.currentQuality].name,
                                  }),
                              ]),
                              m(".Form-group", [
                                  m("label", "URL"),
                                  m("input", {
                                      type: "name",
                                      name: "url",
                                      class: "FormControl",
                                      disabled: this.loading,
                                      oninput: (e: any) =>
                                          (this.pointersData[
                                              this.currentPointer
                                          ].qualitiesData[
                                              this.currentQuality
                                          ].url = e.target.value),
                                      autocomplete: "off",
                                      value: this.pointersData[
                                          this.currentPointer
                                      ].qualitiesData[this.currentQuality].url,
                                  }),
                              ]),
                              m(".Form-group", [
                                  m("label", "Type"),
                                  m(Select, {
                                      options: this.videoOptions,
                                      value: this.pointersData[
                                          this.currentPointer
                                      ].qualitiesData[this.currentQuality].type,
                                      onchange: (value: string) =>
                                          (this.pointersData[
                                              this.currentPointer
                                          ].qualitiesData[
                                              this.currentQuality
                                          ].type = value),
                                      disabled: this.loading,
                                  }),
                              ]),
                              m(".Form-group", [
                                  this.currentQuality === "new"
                                      ? m(
                                            Button,
                                            {
                                                className:
                                                    "Button Button--primary",
                                                loading: this.loading,
                                                disabled: this.loading,
                                                onclick: (_: any) => {
                                                    const quality =
                                                        this.pointersData[
                                                            this.currentPointer
                                                        ].qualitiesData["new"];
                                                    const quality1 =
                                                        new QualityState();

                                                    quality1.name =
                                                        quality.name;
                                                    quality1.type =
                                                        quality.type;
                                                    quality1.url = quality.url;

                                                    const n = Object.keys(
                                                        this.qualities
                                                    ).length;

                                                    this.pointersData[
                                                        this.currentPointer
                                                    ].qualities[
                                                        `#${n}`
                                                    ] = `#${n}`;
                                                    this.pointersData[
                                                        this.currentPointer
                                                    ].qualitiesData[`#${n}`] =
                                                        quality1;

                                                    quality.name = "";
                                                    quality.type = "normal";
                                                    quality.url = "";

                                                    this.qualities =
                                                        this.pointersData[
                                                            this.currentPointer
                                                        ].qualities;
                                                },
                                            },
                                            trans("add_quality")
                                        )
                                      : m(
                                            Button,
                                            {
                                                className:
                                                    "Button Button--primary",
                                                loading: this.loading,
                                                disabled: this.loading,
                                                onclick: (_: any) => {
                                                    delete this.pointersData[
                                                        this.currentPointer
                                                    ].qualities[
                                                        this.currentQuality
                                                    ];
                                                    delete this.pointersData[
                                                        this.currentPointer
                                                    ].qualitiesData[
                                                        this.currentQuality
                                                    ];

                                                    const keys = Object.keys(
                                                        this.pointersData[
                                                            this.currentPointer
                                                        ].qualities
                                                    ).filter(
                                                        (i) => i !== "new"
                                                    );

                                                    let count = 1;

                                                    for (const i of keys) {
                                                        this.pointersData[
                                                            this.currentPointer
                                                        ].qualities[
                                                            `#${count}`
                                                        ] = `#${count}`;
                                                        this.pointersData[
                                                            this.currentPointer
                                                        ].qualitiesData[
                                                            `#${count}`
                                                        ] =
                                                            this.pointersData[
                                                                this.currentPointer
                                                            ].qualitiesData[i];

                                                        delete this
                                                            .pointersData[
                                                            this.currentPointer
                                                        ].qualities[i];
                                                        delete this
                                                            .pointersData[
                                                            this.currentPointer
                                                        ].qualitiesData[i];

                                                        count++;
                                                    }

                                                    this.qualities =
                                                        this.pointersData[
                                                            this.currentPointer
                                                        ].qualities;

                                                    this.currentQuality = "new";
                                                },
                                            },
                                            trans("remove_quality")
                                        ),
                              ]),
                          ]
                        : null,
                    m(".Form-group", [
                        m(
                            Button,
                            {
                                className:
                                    "Button Button--primary Button--block",
                                type: "submit",
                                loading: this.loading,
                                disabled: this.loading,
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

        this.loading = true;

        const pKeys = Object.keys(this.pointers).filter((i) => i !== "new");

        for (const i of pKeys) {
            const data = this.pointersData[i];
            const qKeys = Object.keys(data.qualities).filter(
                (i) => i !== "new"
            );

            let qualities = "";

            for (const i1 of qKeys) {
                const quality = data.qualitiesData[i1];

                qualities += `${quality.name};${quality.url};${quality.type},`;
            }

            const find = `\\[embed-video id=\\"${data.id}\\" .*?\\]`;
            const replacement = `[embed-video id="${data.id}" url="${data.url}" type="${data.type}" live="${data.live}" qualities="${qualities}"]`;
            const pattern = new RegExp(find, "s");

            if (pattern.test(this.editor.el.value)) {
                this.editor.el.value = this.editor.el.value.replace(
                    pattern,
                    replacement
                );
            } else {
                this.editor.insertAtCursor(replacement);
            }
        }

        this.hide();
    }
}
