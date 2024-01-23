import { css } from "@emotion/react";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

type ButtonSize = "large" | "medium" | "small";
type ButtonType = "primary" | "secondary" | "notice";

//emotion에서 사용하기 위해 따로 작성한 타입
type StyleProps = {
  // 기본적으로 필요한 스타일 속성
  buttonType?: ButtonType;
  size?: ButtonSize;
};

//외부에서 버튼컴포넌트를 확장할 수 도 있어서 내보내는 타입인가
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyleProps {
  // StyleProps를 상속받아서 확장하는 이유는, ButtonProps에는 StyleProps에 없는 속성들이 있기 때문
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  handleClick?: () => void;
}

//버튼 컴포넌트
export default function Button({
  type = "button",
  size,
  buttonType,
  children = "버튼",
  disabled = false,
  loading = false,
  handleClick,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  // PropsWithChildren은 children이라는 속성을 포함하는 타입 - 리액트 제공

  const stylesProps = { size, buttonType };

  return (
    <button
      css={styles.button(stylesProps)}
      type={type}
      disabled={loading || disabled}
      {...rest}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button"; //debugging 용도로 사용

//[질문]하기 스타일링들에 관하여 export로 모듈을 내보낼 필요가 있는지, 보통 얼만큼의 규모가 되면 export를 하는지

export const buttonSizeStyles = (size?: ButtonSize) => css`
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

export const buttonTypeStyles = (buttonType?: ButtonType) => {
  if (!buttonType) return;
  const type = buttonType.toUpperCase();
  return css`
    background-color: ${(Colors as any)[`${type}_BUTTON_BACKGROUND`]};
    border: 1px solid ${(Colors as any)[`${type}_BUTTON_BORDER`]};
    color: ${(Colors as any)[`${type}_BUTTON_TEXT`]};
    &:not(:disabled):hover,
    &:not(:disabled):focus {
      background-image: linear-gradient(
        to bottom,
        ${(Colors as any)[`${type}_BUTTON_BACKGROUND`]},
        rgba(0, 0, 0, 0.4)
      );
    }
  `;
  // return css`
  //   ${buttonType === "primary" &&
  //   css`
  //     background-color: ${Colors.PRIMARY_BUTTON_BACKGROUND};
  //     border: 1px solid ${Colors.PRIMARY_BUTTON_BORDER};
  //     color: ${Colors.PRIMARY_BUTTON_TEXT};
  //     &:not(:disabled):hover,
  //     &:not(:disabled):focus {
  //       background-image: linear-gradient(
  //         to bottom,
  //         ${Colors.PRIMARY_BUTTON_BACKGROUND},
  //         rgba(0, 0, 0, 0.4)
  //       );
  //     }
  //   `}
  //   ${buttonType === "secondary" &&
  //   css`
  //     background-color: ${Colors.SECONDARY_BUTTON_BACKGROUND};
  //     border: 1px solid ${Colors.SECONDARY_BUTTON_BORDER};
  //     color: ${Colors.SECONDARY_BUTTON_TEXT};
  //     &:not(:disabled):hover,
  //     &:not(:disabled):focus {
  //       background-image: linear-gradient(
  //         to bottom,
  //         ${Colors.SECONDARY_BACKGROUND},
  //         rgba(0, 0, 0, 0.4)
  //       );
  //     }
  //   `}
  //     ${buttonType === "notice" &&
  //   css`
  //     background-color: ${Colors.NOTICE_BUTTON_BACKGROUND};
  //     border: 1px solid ${Colors.NOTICE_BUTTON_BORDER};
  //     color: ${Colors.NOTICE_BUTTON_TEXT};
  //     &:not(:disabled):hover,
  //     &:not(:disabled):focus {
  //       background-image: linear-gradient(
  //         to bottom,
  //         ${Colors.NOTICE_BUTTON_BACKGROUND},
  //         rgba(0, 0, 0, 0.4)
  //       );
  //     }
  //   `}
  // `;
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
    ${Fonts.REGULAR_16};

    //버튼 사이즈
    ${buttonSizeStyles(size)}

    //기본 버튼 스타일
    background-color: transparent;
    color: ${Colors.PRIMARY_TEXT};
    border: 1px solid ${Colors.PRIMARY_BORDER};

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      backgrond-color: rgba(0, 0, 0, 0.2);
    }

    //타입별 버튼 스타일
    ${buttonTypeStyles(buttonType)}

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
