import {
  forwardRef,
  useMemo,
  InputHTMLAttributes,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";

import { css } from "@emotion/react";
import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

type Size = "large" | "medium" | "small";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  id?: string;
  type?: "text" | "password" | "email";
  size?: Size;
  isValid?: boolean;
  errorMessage?: string;
  placeholder?: string;
  fullWidth?: boolean;
  setValue?: Dispatch<SetStateAction<string>> | (() => void); //useState를 사용하여 value를 관리하는 경우, setValue를 전달받아서 사용
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; //input의 onChange 이벤트를 전달받아서 사용
}

//forwardRef를 사용하면, 함수형에서 ref를 가질수 없는부분을 보완할 수 있음,  부모 컴포넌트에서 자식요소의 DOM접근가능 (autoFocus기능이나, positon등 참조 시)
export default forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    type = "text",
    size = "medium",
    isValid,
    errorMessage,
    placeholder,
    fullWidth,
    value,
    defaultValue,
    setValue = () => undefined,
    onChange = () => undefined,
    onInput,
    maxLength = 100,
    ...rest
  },
  ref
) {
  //error가 발생했을때, 에러메세지를 보여주기 위한 로직
  const showError: boolean = useMemo(
    () => isValid === false && !!errorMessage,
    [isValid, errorMessage]
  );

  //input Change 이벤트 발생 시 내부 처리 후 props로 전달받은 onChange를 실행
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e?.target?.value;
      setValue(value);
      onChange(e);
    },
    [onChange, setValue]
  );

  return (
    <div className="input-item" css={styles.input(size, fullWidth, isValid)}>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
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
        ref={ref}
        {...rest}
      />
      {showError && <span className="error-message">{errorMessage}</span>}
    </div>
  );
});

const styles = {
  input: (size: Size, fullWidth?: boolean, isValid?: boolean) => css`
    display: inline-flex;
    flex-direction: column;
    input {
      width: ${fullWidth ? "100%" : "auto"};
      border: 1px solid ${Colors.PRIMARY_BORDER};
      background-color: ${Colors.PRIMARY_BACKGROUND};
      border-radius: 4px;
      &:focus,
      &:hover {
        border-color: ${Colors.HIGHLIGHT_BORDER};
      }
      ${size === "large" &&
      css`
        width: 240px;
        height: 44px;
        ${Fonts.REGULAR_22}
      `}
      ${size === "medium" &&
      css`
        width: 200px;
        height: 40px;
        ${Fonts.REGULAR_18}
      `}
      ${size === "small" &&
      css`
        width: 150px;
        height: 34px;
        ${Fonts.REGULAR_16}
      `}
        ${isValid === false &&
      css`
        border-color: ${Colors.NOTICE_BORDER};
      `}
      &:disabled {
        background-color: ${Colors.SECONDARY_BACKGROUND};
        border-color: ${Colors.DISABLED_COLOR};
        color: ${Colors.DISABLED_TEXT};
        cursor: not-allowed;
      }
    }
    .error-message {
      ${Fonts.REGULAR_14}
      color: ${Colors.NOTICE_TEXT};
      margin-top: 4px;
    }
  `,
};
