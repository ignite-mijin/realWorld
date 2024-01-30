import { css } from "@emotion/react";
import { ReactNode } from "react";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { Colors, ColorsKey } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

//하단의 스타일 선언에서 타입 변수로 사용하기 위해 선언했으나, 사실상 사용자 지정타입의 경우는 따로 선언하는게 명시적이려나 싶음
type Size = "large" | "medium" | "small";
type Type = "primary" | "secondary" | "notice";

//emotion에서 사용하기 위해 따로 작성한 타입
type StyleProps = {
  // 기본적으로 필요한 스타일 속성
  buttonType?: Type;
  size?: Size;
};

//외부에서 버튼컴포넌트를 확장할 수 도 있어서 내보내는 타입인가
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyleProps {
  // StyleProps를 상속받아서 확장하는 이유는, ButtonProps에는 StyleProps에 없는 속성들이 있기 때문
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

//버튼 컴포넌트
export default function Button({
  type = "button",
  size,
  buttonType,
  children = "버튼",
  disabled = false,
  loading = false,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) {
  // PropsWithChildren은 children이라는 속성을 포함하는 타입 - 리액트 제공

  const stylesProps = { size, buttonType };

  return (
    <button
      css={styles.button(stylesProps)}
      type={type}
      disabled={loading || disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button"; //debugging 용도로 사용 - 컴포넌트 구분의 용도

//[질문]하기 스타일링들에 관하여 export로 모듈을 내보낼 필요가 있는지, 보통 얼만큼의 규모가 되면 export를 하는지

export const makeButtonSizeStyle = (size?: Size) => css`
  ${size === "large" &&
  css`
    min-width: 180px;
    padding-left: 30px;
    padding-right: 30px;
    min-height: 40px;
    ${Fonts.REGULAR_28};
  `}
  ${size === "medium" &&
  css`
    min-width: 140px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 36px;
    ${Fonts.REGULAR_22};
  `}

${size === "small" &&
  css`
    min-width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    min-height: 28px;
    ${Fonts.REGULAR_16};
  `}
`;

export const makeButtonTypeStyle = (buttonType?: Type) => {
  if (!buttonType) return;
  const type = buttonType.toUpperCase();
  return css`
    background-color: ${Colors[`${type}_BUTTON_BACKGROUND` as ColorsKey]};
    border: 1px solid ${Colors[`${type}_BUTTON_BORDER` as ColorsKey]};
    color: ${Colors[`${type}_BUTTON_TEXT` as ColorsKey]};
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      background-image: linear-gradient(
        to bottom,
        ${Colors[`${type}_BUTTON_BACKGROUND` as ColorsKey]},
        rgba(0, 0, 0, 0.4)
      );
    }
  `;
};

export const styles = {
  button: ({ size, buttonType }: StyleProps) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    border-radius: 4px;
    min-width: 110px;
    min-height: 28px;
    white-space: nowrap;
    line-height: normal;
    padding-left: 10px;
    padding-right: 10px;
    ${Fonts.REGULAR_16};

    //버튼 사이즈
    ${makeButtonSizeStyle(size)}

    //기본 버튼 스타일
    background-color: transparent;
    color: ${Colors.PRIMARY_TEXT};
    border: 1px solid ${Colors.PRIMARY_BORDER};

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      backgrond-color: rgba(0, 0, 0, 0.2);
    }

    //타입별 버튼 스타일
    ${makeButtonTypeStyle(buttonType)}

    //disabled 버튼 스타일
    &:disabled {
      background-color: ${Colors.DISABLED_BUTTON_BACKGROUND};
      border: 1px solid ${Colors.DISABLED_BUTTON_BORDER};
      color: ${Colors.DISABLED_BUTTON_TEXT};
      cursor: not-allowed;

      &:hover {
        background-image: linear-gradient(
          to bottom,
          ${Colors.DISABLED_BUTTON_BACKGROUND},
          rgba(0, 0, 0, 0.4)
        );
      }
    }
  `,
};
