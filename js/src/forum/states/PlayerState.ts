import { extensions } from "../extensions";
// @ts-expect-error
import load from "external-load";
import extractText from "flarum/common/utils/extractText";
import app from "flarum/forum/app";

export default class PlayerState {
  extensions: {
    attributeName: null | string;
    url: string;
    loaded: boolean;
  }[];

  constructor() {
    this.extensions = extensions;
  }

  async loadExtensions() {
    for (const i of this.extensions) {
      if (i.loaded) {
        continue;
      }

      if (i.attributeName && !app.forum.attribute(i.attributeName)) {
        continue;
      }

      await load.js(i.url);

      i.loaded = true;
    }
  }

  render(element: Element, canView: boolean) {
    const containers = element.querySelectorAll(".dplayer-container");

    for (const i of containers) {
      if (i.children.length) {
        continue;
      }

      this.loadPlayer(i, canView);
    }
  }

  private loadPlayer(container: HTMLElement, canView: boolean) {
    const videoUrl = container.dataset.url;
    const videoType = container.dataset.type;
    const liveMode = container.dataset.live;
    const qualities = container.dataset.qualities;

    const qualitySwitching = [];

    if (qualities) {
      if (videoUrl) {
        qualitySwitching.push({
          name: "default",
          url: videoUrl,
          type: videoType,
        });
      }

      for (const i of qualities.split(",")) {
        const data = i.split(";");

        if (data.length < 2) {
          return;
        }

        qualitySwitching.push({
          name: data[0],
          url: data[1],
          type: data.length < 3 ? "auto" : data[2],
        });
      }
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

    if (!canView) {
      dp.notice(
        extractText(
          app.translator.trans("nearata-embed-video.forum.cannot_view")
        ),
        0
      );
    }
  }
}
