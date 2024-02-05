import React from "react";
import { css } from "@emotion/react";
import { FaGithub } from "react-icons/fa";
import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

export default function Footer() {
  return (
    <footer css={styles}>
      <a
        href="https://github.com/gothinkster/realworld"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub className="icon" />
        Fork on Github
      </a>
    </footer>
  );
}

const styles = css`
  width: 100%;
  min-width: 1140px;
  display: flex;
  justify-content: center;
  padding: 15px;
  color: #fff;
  background-color: ${Colors.SECONDARY_COLOR};
  ${Fonts.BOLD_32}
  .icon {
    margin-right: 10px;
  }
  a {
    display: flex;
    width: 1140px;
    align-items: center;
    justify-content: center;
    &:hover,
    &:focus {
      color: ${Colors.HIGHLIGHT_TEXT};
    }
  }
`;
