import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { AppContext } from "./app-context/AppContext";
import AppControls from "./components/app-controls/AppControls";
import AppHeader from "./components/app-header/AppHeader";
import AppInput from "./components/app-input/AppInput";

const App = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SectionWrapper>
          <Container className="h-100 d-flex justify-content-center align-items-center">
            <Col sm={7} lg={5}>
              <main className="calculator-app">
                <AppHeader />
                <AppInput />
                <AppControls />
              </main>
            </Col>
          </Container>
        </SectionWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap');
    * {
      margin: 0;
      padding: 0;
      font-weight: 700;
      box-sizing: border-box;
      font-family: 'League Spartan', sans-serif;
    }

    input {
      border: none;
      &:focus {
        outline: none;
      } 
    }
  }

`;

const SectionWrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.mainBackground};

  .calculator-app {
    padding: 1.5rem;
  }
`;
