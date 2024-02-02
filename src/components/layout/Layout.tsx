import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { css } from "@emotion/react";
import RouterIndex from "@/router/RouterIndex";
import routes from "@/router/routes";

export default function Layout() {
  return (
    <div id="wrapper" css={styles}>
      <Header />
      <div id="container">
        <RouterIndex routes={routes} />
      </div>
      <Footer />
    </div>
  );
}

const styles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    box-sizing: border-box;
  }
  #container {
    flex: 1;
    display: flex;
    min-width: 1140px;
    justify-content: center;
    box-sizing: border-box;
  }
  footer {
    box-sizing: border-box;
  }
`;
