// Note: Title Component
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Fonts } from "@/styles/fonts";
import { Colors } from "@/styles/colors";

type titleType = "pageTitle" | "sectionTitle";

type StyleProps = {
  type: titleType;
  color?: string;
};

interface TitleProps extends StyleProps {
  titleText: React.ReactNode;
  description?: React.ReactNode;
}

export default function Title({
  color,
  type = "pageTitle",
  titleText,
  description,
  ...props
}: PropsWithChildren<TitleProps>) {
  const styleProps = { type, color };
  return (
    <div className="title-section" css={styles.title(styleProps)} {...props}>
      <h1>{titleText}</h1>
      <p>{description}</p>
    </div>
  );
}

const makeTitleStyle = (type: titleType) => css`
  ${type === "pageTitle" &&
  css`
    ${Fonts.BOLD_40}
    color:${Colors.PRIMARY_TITLE}
  `}

  ${type === "sectionTitle" &&
  css`
    ${Fonts.BOLD_32}
    color:${Colors.SECONDARY_TITLE}
  `}
`;

const styles = {
  title: ({ type, color }: StyleProps) => css`
    h1 {
      ${makeTitleStyle(type)};
      color: ${color};
    }
    p {
      ${Fonts.REGULAR_16}
      color:${Colors.HIGHLIGHT_TEXT}
    }
  `,
};
