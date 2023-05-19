import QualityState from "./QualityState";
import app from "flarum/forum/app";

export default class PointerState {
  id: string;
  url: string;
  type: string;
  live: boolean;
  qualities: { [key: string]: string };
  qualitiesData: { [key: string]: QualityState };

  constructor(id: string = window.crypto.randomUUID()) {
    this.id = id;
    this.url = "";
    this.type = "normal";
    this.live = false;
    this.qualities = {
      new: app.translator
        .trans("nearata-embed-video.forum.modal.quality_option_new")
        .toString(),
    };
    this.qualitiesData = {
      new: new QualityState(),
    };
  }
}
