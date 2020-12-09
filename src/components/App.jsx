import React from "react";
import "./App.css";
import styled from "styled-components";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Container>
      <MainPage />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
