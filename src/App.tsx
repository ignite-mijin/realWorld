import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react";
import Title from "@/components/atomic/Title";
import Button from "@/components/atomic/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title
          type="pageTitle"
          titleText="TitleTest"
          description="blahblah"
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
