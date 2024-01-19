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
  fontSize: string,
  fontWeight: number | string,
  lineHeight: number | string
) => {
  return css`
    font-size: () => (${fontSize} / 10) + "rem";
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

export const Fonts = {
  BOLD_40: makeFonts("40px", StyleFontWeight.BOLD, "1.4"),
  BOLD_28: makeFonts("28px", StyleFontWeight.BOLD, "1.6"),
  BOLD_22: makeFonts("22px", StyleFontWeight.BOLD, "1.4"),
  BOLD_18: makeFonts("18px", StyleFontWeight.BOLD, "1.4"),
  BOLD_16: makeFonts("16px", StyleFontWeight.BOLD, "1.4"),
  BOLD_14: makeFonts("14px", StyleFontWeight.BOLD, "1.4"),
  BOLD_13: makeFonts("13px", StyleFontWeight.BOLD, "1.4"),

  REGULAR_20: makeFonts("20px", StyleFontWeight.REGULAR, "1.4"),
  REGULAR_18: makeFonts("18px", StyleFontWeight.REGULAR, "1.4"),
  REGULAR_16: makeFonts("16px", StyleFontWeight.REGULAR, "1.4"),
  REGULAR_14: makeFonts("14px", StyleFontWeight.REGULAR, "1.4"),

  ROOT: (() => {
    return css`
      font-size: () => 10px;
      font-weight: ${StyleFontWeight.REGULAR};
      line-height: 1.4;
    `;
  })(),
} as const;

export type FontsKey = keyof typeof Fonts;
