// Note: Title Component
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Fonts } from "@/styles/fonts";
import { Colors } from "@/styles/colors";

type titleType = "page" | "section";

type StyleProps = {
  type: titleType;
  color?: string;
};

//초반에 string | React.ReactNode로 했는데,  React.ReactNode에는 string이 포함되어 있다 하여 하나로 선언함
interface TitleProps extends StyleProps {
  text: React.ReactNode;
  description?: React.ReactNode;
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
      <p>{description}</p>
    </div>
  );
}

//emotion css 의 중복호출 부분을 줄이도록 생각
const TitleType = (type: titleType) => css`
  ${type === "page" &&
  css`
    ${Fonts.BOLD_40}
    color:${Colors.PRIMARY_TITLE}
  `}

  ${type === "section" &&
  css`
    ${Fonts.BOLD_32}
    color:${Colors.SECONDARY_TITLE}
  `}
`;

const styles = {
  title: ({ type, color }: StyleProps) => css`
    h1 {
      ${TitleType(type)};
      color: ${color};
    }
    p {
      ${Fonts.REGULAR_16}
      color:${Colors.HIGHLIGHT_TEXT}
    }
  `,
};
