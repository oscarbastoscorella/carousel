import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import { items } from "./items";

export default function MainPage() {
  return (
    <Container>
      <Carousel items={items} maxNumberPerPage={6} />
    </Container>
  );
}

const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
