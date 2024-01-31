import {
  Dispatch,
  forwardRef,
  SetStateAction,
  TextareaHTMLAttributes,
} from "react";

import { css } from "@emotion/react";
import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

type StyleProps = {
  width?: number | string;
  height?: number | string;
};

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    StyleProps {
  id?: string;
  isValid?: boolean;
  errorMessage?: string;
  setValue?: Dispatch<SetStateAction<string>> | (() => void);
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      value,
      width = "100%",
      height = "100px",
      maxLength = 1000,
      setValue = () => undefined,
      onChange = () => undefined,
      onInput,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
      const value = e?.target?.value;
      setValue(value);
      onChange(e);
    };
    return (
      <div css={styles.textarea(width, height)}>
        <textarea
          id={id}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          onInput={(e) => {
            //제어할 내용 , maxLength를 넘어가는 경우, maxLength만큼만 입력되도록 처리
            const target = e.target as HTMLInputElement; //타입단언의 이유는 이벤트 타입이 HTMLInputElement가 아니기 때문에 EventTarget 타입이라서.
            const { value } = target as HTMLInputElement;
            if (!target) {
              return;
            }

            if (value.length > maxLength) {
              target.value = value.slice(0, maxLength);
            }

            onInput?.(e);
          }}
          ref={ref as React.RefObject<HTMLTextAreaElement>} //RefObject자체는 제네릭파라미터이므로 타입단언을 해줘야한다.
          {...props}
        ></textarea>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

const styles = {
  textarea: (width?: number | string, height?: number | string) => css`
    display: inline-flex;
    flex-direction: column;
    textarea {
      width: ${Number(width) ? `${width}px` : width};
      height: ${Number(height) ? `${height}px` : height};
      border: 1px solid ${Colors.PRIMARY_BORDER};
      background-color: ${Colors.PRIMARY_BACKGROUND};
      border-radius: 4px;
      padding-top: 10px;
      padding-bottom: 10px;
      ${Fonts.REGULAR_18}
      color
      &:focus,
      &:hover {
        border-color: ${Colors.HIGHLIGHT_BORDER};
      }
      &:disabled {
        background-color: ${Colors.SECONDARY_BACKGROUND};
        border-color: ${Colors.DISABLED_COLOR};
        color: ${Colors.DISABLED_TEXT};
        cursor: not-allowed;
      }
    }
  `,
};
