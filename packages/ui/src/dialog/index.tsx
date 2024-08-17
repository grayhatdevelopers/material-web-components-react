import React from "react";

import { MdDialog } from "@material/web/dialog/dialog.js";
import { createComponent } from "@lit/react";

export type { MdDialog as MdDialogType } from "@material/web/dialog/dialog";

const events = {
  onOpen: "open",
  onOpened: "opened",
  onClose: "close",
  onClosed: "closed",
  onCancel: "cancel",
};

export const Dialog = createComponent({
  tagName: "md-dialog",
  elementClass: MdDialog,
  react: React,
  events: events,
});

export default Dialog;
