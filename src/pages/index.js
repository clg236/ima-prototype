import * as React from "react";
import Iframe from "react-iframe";
import stled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from 'gatsby'
import Layout from "../components/layout";
import { MenuProvider } from "../state";
import Navbar from "../components/nav";
import Featured from "../components/featured"
import reset from "styled-reset";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <GlobalStyle />
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        
      </div>
      <p>Heeeeeey</p>
    </React.Fragment>
  );
};
// Step 3: Export your component
export default IndexPage;
