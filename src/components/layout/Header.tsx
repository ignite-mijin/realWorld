import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Colors } from "@/styles/colors";
import { Fonts } from "@/styles/fonts";

interface HeaderProps {
  linkList?: { id: string; name: string }[];
}

export default function Header({
  linkList = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "login",
      name: "Sign in",
    },
    {
      id: "join",
      name: "Sign up",
    },
  ],
}: HeaderProps) {
  return (
    <>
      <header css={styles}>
        <div className="header-wrapper">
          <h1 className="logo">
            <Link to="/">conduit</Link>
          </h1>
          <nav>
            <ul className="gnb">
              {linkList.map((link) => (
                <li key={link.id}>
                  <Link to={`/${link.id}`}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

const styles = css`
  position: relative;
  width: 100%;
  min-width: 1140px;
  .header-wrapper {
    width: 1140px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    a {
      color: ${Colors.HIGHLIGHT_TEXT};
      ${Fonts.BOLD_28};
    }
  }
  .gnb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      margin-left: 20px;
      a {
        &:hover,
        &:focus,
        &.active {
          color: ${Colors.SECONDARY_TEXT};
        }
        ${Fonts.REGULAR_18};
      }
    }
  }
`;
