import { css } from "@emotion/react";

import { Colors } from "./colors";
import { BASE_FONTS, StyleFontWeight, Fonts } from "./fonts";

//reset은 CPO-BO보니 에릭마이어 reset css쓰시는거같아서 그대로 가져왔습니다.
const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: normal;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const globalStyles = css`
  ${reset};
  ${BASE_FONTS};

  html {
    font-family: "Noto Sans KR", sans-serif;
    -webkit-text-size-adjust: none;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${Fonts.ROOT} //root font설정 10px
    letter-spacing: -0.02em;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    color: ${Colors.PRIMARY_TEXT};
  }

  #root {
    height: 100%;
  }

  :focus:not(:focus-visible) {
    outline: 0;
  }

  body,
  input,
  select,
  button,
  textarea,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  table {
    letter-spacing: inherit;
    color: inherit;
  }

  textarea {
    resize: none;
  }

  input[type="text"],
  input[type="password"],
  input[type="submit"],
  input[type="tel"],
  input[type="number"],
  input[type="email"],
  input[type="url"],
  input[type="search"],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  strong,
  b {
    font-weight: ${StyleFontWeight.BOLD};
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  img,
  a {
    -webkit-user-drag: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default globalStyles;
