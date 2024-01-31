import { Fonts } from "@/styles/fonts";
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
  isHidden?: boolean;
}

export default function Label({
  htmlFor,
  children,
  isHidden,
  ...props
}: LabelProps) {
  return (
    <label htmlFor={htmlFor} css={styles.label(isHidden)} {...props}>
      {children}
    </label>
  );
}

const styles = {
  label: (isHidden?: boolean) => css`
    ${isHidden &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
    `}
    ${Fonts.REGULAR_16}
  `,
};
