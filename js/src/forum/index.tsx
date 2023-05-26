import PlayerState from "./states/PlayerState";
import Button from "flarum/common/components/Button";
import TextEditor from "flarum/common/components/TextEditor";
import Tooltip from "flarum/common/components/Tooltip";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import CommentPost from "flarum/forum/components/CommentPost";
import ComposerPostPreview from "flarum/forum/components/ComposerPostPreview";

app.initializers.add("nearata-embed-video", () => {
  app.nearataEmbedVideoState = (async () => {
    const state = new PlayerState();

    await state.loadExtensions();

    return state;
  })();

  extend(TextEditor.prototype, "controlItems", function (items) {
    const text = app.translator.trans(
      "nearata-embed-video.forum.button_tooltip_title"
    );

    items.add(
      "nearataEmbedVideo",
      <Tooltip text={text}>
        <Button
          icon="fas fa-cat"
          class="Button Button--icon"
          onclick={() => {
            this.attrs.composer.editor.insertAtCursor(
              `[embed-video id="${window.crypto.randomUUID()}" url="" type="normal" live="false" qualities=""]`
            );
          }}
        />
      </Tooltip>
    );
  });

  extend(CommentPost.prototype, "refreshContent", function () {
    const canView: boolean = this.attrs.post
      .discussion()
      .attribute("canNearataEmbedVideoView");

    app.nearataEmbedVideoState.then((a: PlayerState) =>
      a.render(this.element, canView)
    );
  });

  extend(ComposerPostPreview.prototype, "oncreate", function () {
    let preview = "";

    const updatePreview = () => {
      if (!this.attrs.composer.isVisible()) {
        return;
      }

      const content = this.attrs.composer.fields.content();

      if (preview === content) {
        return;
      }

      preview = content;

      app.nearataEmbedVideoState.then((a: PlayerState) =>
        a.render(this.element, true)
      );
    };

    updatePreview();

    this.updateInterval2 = setInterval(updatePreview, 50);
  });

  extend(ComposerPostPreview.prototype, "onremove", function () {
    clearInterval(this.updateInterval2);
  });
});
