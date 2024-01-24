import { css } from "@emotion/react";

//폰트 굵기 설정 다른곳에서도 사용할 수 있다.
export enum StyleFontWeight {
  REGULAR = 400,
  MEDIUM = 500,
  BOLD = 700,
}

//기본 폰트 설정 - 로컬에서 파일 관리하는 경우
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
  //다른데서도 사용이 가능하다. exprot를 사용하여 내보내준다.
  //사용되는 폰트를 명시적으로 선언 - 사이즈는 REM 단위로 사용
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
} as const; //as const를 사용하여 리터럴 타입으로 실제값을 정의

export type FontsKey = keyof typeof Fonts;
