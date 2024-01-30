import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react";
import Title from "@/components/atomic/Title";
import Button from "@/components/atomic/Button";
import Input from "@/components/atomic/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title type="page" text="TitleTest" />
        <Title type="section" text="TitleTest" />
        <Title
          type="page"
          text="TitleTest"
          description="기본타이틀 색상도 지정되어있음"
        />
        <Title
          type="section"
          text="TitleTest"
          description="보통은 기본 타이틀 색이 정해져있으나 변경도 가능"
          color="#fff"
        />
        <Button type="button" buttonType="primary" size="large">
          button
        </Button>
        <Button type="button" buttonType="secondary" size="medium">
          button
        </Button>
        <Button type="button" buttonType="notice" size="small">
          button
        </Button>
        <p
          css={css`
            color: green;
          `}
        >
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
