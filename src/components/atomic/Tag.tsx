import { css } from "@emotion/react";
import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

interface TagProps {
  // 의미별 정의할 경우 컬러/디자인을 다르게 하여 타입정의를 해줄 수 있음
  text: string;
}

export default function Tag({ text = "태그명" }: TagProps) {
  return <span css={styles}>{text}</span>;
}

const styles = css`
  display: inline-block;
  padding: 0 20px;
  height: 24px;
  line-height: 24px;
  border-radius: 50%;
  background-color: ${Colors.HIGHLIGHT_BACKGROUND};
  color: #fff;
  ${Fonts.REGULAR_16}
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  cursor: default;
`;
