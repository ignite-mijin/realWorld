import React from "react";
import { Global } from "@emotion/react";
import global from "../src/styles/global"; //이모션으로 작성된 글로벌 스타일

const GlobalStyles = () => <Global styles={global} />;

export default GlobalStyles;
