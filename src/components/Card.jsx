import React from "react";
import styled from "styled-components";
import CoolPig from "./CoolPig";

export default function Card({ color, maxNumberPerPage }) {
  return (
    <Container perpage={100 / maxNumberPerPage}>
      <ImageContainer>
        <Image>
          <CoolPig color={color} />
        </Image>
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2px;
  flex: 0 0 auto;
  width: calc(${(props) => props.perpage}% - 4px);
`;

const ImageContainer = styled.div`
  background: #d2d2d2;
  border-radius: 5px;
  padding-top: 65%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Image = styled.div`
  height: 61%;
  width: 61%;
  position: absolute;
  top: 0px;
`;
