// Note: Title Component
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Fonts } from "@/styles/fonts";
import { Colors } from "@/styles/colors";
import { ReactNode } from "react";

type Type = "page" | "section";

type StyleProps = {
  type: Type;
  color?: string;
};

//초반에 string | React.ReactNode로 했는데,  React.ReactNode에는 string이 포함되어 있다 하여 하나로 선언함
interface TitleProps extends StyleProps {
  text: string;
  description?: ReactNode;
}

export default function Title({
  color,
  type = "page",
  text,
  description,
  ...props
}: PropsWithChildren<TitleProps>) {
  const styleProps = { type, color };
  return (
    <div className="title-section" css={styles.title(styleProps)} {...props}>
      <h1>{text}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

const makeTitleStyles = (type: Type) => css`
  ${type === "page" &&
  css`
    ${Fonts.BOLD_40}
    color: ${Colors.PRIMARY_TITLE};
  `}

  ${type === "section" &&
  css`
    ${Fonts.BOLD_32}
    color: ${Colors.SECONDARY_TITLE};
  `}
`;

const styles = {
  title: ({ type, color }: StyleProps) => css`
    h1 {
      ${makeTitleStyles(type)};
      color: ${color};
    }
    p {
      ${Fonts.REGULAR_16}
      color:${Colors.HIGHLIGHT_TEXT}
    }
  `,
};
