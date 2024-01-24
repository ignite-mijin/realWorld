import { css } from "@emotion/react";

export enum StyleFontWeight {
  REGULAR = 400,
  MEDIUM = 500,
  BOLD = 700,
}

export const BASE_FONTS = css`
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('@/assets/fonts/NotoSansKR-Regular.woff2') format('woff2');
      format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    src: url('@/assets/fonts/NotoSansKR-Medium.woff2') format('woff2');
      format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('@/assets/fonts/NotoSansKR-Bold.woff2') format('woff2');
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;

export const makeFonts = (
  //사용되는 폰트를 명시적으로 선언
  fontSize: number,
  fontWeight: number | string
) => {
  const remSize = `${fontSize / 10}rem`;
  return css`
    font-size: ${remSize};
    font-weight: ${fontWeight};
  `;
};

export const Fonts = {
  BOLD_40: makeFonts(40, StyleFontWeight.BOLD),
  BOLD_32: makeFonts(32, StyleFontWeight.BOLD),
  BOLD_28: makeFonts(28, StyleFontWeight.BOLD),
  BOLD_22: makeFonts(22, StyleFontWeight.BOLD),
  BOLD_18: makeFonts(18, StyleFontWeight.BOLD),
  BOLD_16: makeFonts(16, StyleFontWeight.BOLD),
  BOLD_14: makeFonts(14, StyleFontWeight.BOLD),

  REGULAR_40: makeFonts(40, StyleFontWeight.REGULAR),
  REGULAR_28: makeFonts(28, StyleFontWeight.REGULAR),
  REGULAR_22: makeFonts(22, StyleFontWeight.REGULAR),
  REGULAR_18: makeFonts(18, StyleFontWeight.REGULAR),
  REGULAR_16: makeFonts(16, StyleFontWeight.REGULAR),
  REGULAR_14: makeFonts(14, StyleFontWeight.REGULAR),

  ROOT: (() => css`
    font-size: 10px;
    font-weight: ${StyleFontWeight.REGULAR};
    line-height: 1.4;
  `)(),
} as const;

export type FontsKey = keyof typeof Fonts;
