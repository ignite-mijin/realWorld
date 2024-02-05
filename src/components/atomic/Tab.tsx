import { css } from "@emotion/react";
import { useState } from "react";
import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

type List = Array<{
  id: string;
  title: string;
}>;

interface TabProps {
  list: List;
  onClick?: (id: string) => void;
}

export default function Tab({
  list,
  onClick = (id: string) => undefined,
  ...props
}: TabProps) {
  const [currentId, setCurrentId] = useState<string | null>(list[0].id);

  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    const id = e.currentTarget.getAttribute("href");
    e.preventDefault();
    setCurrentId(id);
    onClick?.(id || "");
  };

  return (
    <ul css={styles}>
      {list.map((item) => (
        <li key={item.id} className={item.id === currentId ? "active" : ""}>
          <a href={item.id} onClick={handleClick}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

const styles = css`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px solid ${Colors.PRIMARY_BORDER};
  li {
    flex-grow: 0;
    flex-basis: 100px;
    flex-shrink: 1;
    vertical-align: middle;
    height: 40px;
    padding: 10px 20px;
    box-sizing: border-box;
    &.active {
      a {
        color: ${Colors.HIGHLIGHT_TEXT};
      }
    }
    a {
      display: block;
      height: 100%;
      color: ${Colors.PRIMARY_TEXT};
      ${Fonts.REGULAR_16};
      text-decoration: none;
      box-sizing: border-box;
    }
    a:hover {
      color: ${Colors.HIGHLIGHT_TEXT};
      cursor: pointer;
    }
  }
`;
