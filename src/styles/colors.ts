export const Colors = {
  PRIMARY_TEXT: "#767676",
  SECONDARY_TEXT: "#373a3c",
  HIGHLIGHT_TEXT: "#5cb85c",
  DISABLED_TEXT: "#d9d9d9",
  NOTICE_TEXT: "#b85c5c",

  PRIMARY_TITLE: "#373a3c",
  SECONDARY_TITLE: "#5cb85c",

  PRIMARY_COLOR: "#767676",
  SECONDARY_COLOR: "#373a3c",
  TETIARY_COLOR: "#ffffff",
  HIGHLIGHT_COLOR: "5cb85c",
  DISABLED_COLOR: "#d9d9d9",
  NOTICE_COLOR: "#b85c5c",

  PRIMARY_BACKGROUND: "#ffffff",
  SECONDARY_BACKGROUND: "#fafafa",

  PRIMARY_BORDER: "#cccccc",
  SECONDARY_BORDER: "#dadada",
  HIGHLIGHT_BORDER: "#5cb85c",

  DISABLED_BUTTON_BACKGROUND: "d9d9d9",
  DISABLED_BUTTON_BORDER: "d9d9d9",
  DISABLED_BUTTON_TEXT: "ffffff",

  PRIMARY_BUTTON_BACKGROUND: "#5cb85c",
  PRIMARY_BUTTON_BORDER: "#5cb85c",
  PRIMARY_BUTTON_TEXT: "#ffffff",

  SECONDARY_BUTTON_BACKGROUND: "#ffffff",
  SECONDARY_BUTTON_BORDER: "#5cb85c",
  SECONDARY_BUTTON_TEXT: "#5cb85c",

  NOTICE_BUTTON_BACKGROUND: "#b85c5c",
  NOTICE_BUTTON_TEXT: "#ffffff",
  NOTICE_BUTTON_BORDER: "#b85c5c",
} as const;

export type ColorsKey = keyof typeof Colors;