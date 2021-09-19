import * as React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from 'gatsby'
import { MenuProvider } from "../state";
import Navbar from "../components/nav";
import reset from "styled-reset";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: Metropolis, sans-serif;
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

const Wrapper = styled.div`
  // background-color: black;
  display: flex;
  flex-direction: column;
  align-content: space-around;
`

const Hero = styled.div`
  // background-color: red;
  display: flex;
  flex-direction: row;
  height: 30%;
`

const Brand = styled.div`
  // background-color: lightblue;
  width: 300px;
  height: 400px;
`

const Featured = styled.div`
  //background-color: red;
  flex: 3;
  padding: 0px 10px 0 150px;
  height: 500px;
  scrolling: no;
  //overflow:hidden;
`

const Dot = styled.div`
  position: absolute;
  top: 150px;
  left: 100px;
  background: white;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  z-index: 1;
`

const DotTitle = styled.h1`
  font-family: Metropolis-Black;
  font-size: 2.5em;
  text-align: left;
  padding: 50px 0 0 50px;
`

const DotBody = styled.p`
  font-family: Metropolis-Thin;
  font-size: 2em;
  text-align: left;
  padding: 10px 0 0 50px;
`

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      
      <Wrapper>
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <Hero>
          <Brand />
          <Dot>
            <DotTitle>Welcome to Interactive Media Arts</DotTitle>
            <DotBody>exploring the expressive possibilities of interactive media</DotBody>
          </Dot>
          <Featured><iframe src="https://preview.p5js.org/p5/present/h9x7m-UpU3K" height="500px" width="100%" scrolling="no" ></iframe></Featured>
        </Hero>
        
      </Wrapper>
    </React.Fragment>
  );
};
// Step 3: Export your component
export default IndexPage;
