import React from "react";
import styled from "styled-components";

export default function Card({ image, maxNumberPerPage }) {
  return (
    <Container perpage={100 / maxNumberPerPage}>
      <ImageContainer>
        <Image>{image}</Image>
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
  border-radius: 5px;
  padding-top: 65%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.div`
  height: 100%;
  background: #bbbbbb;
  width: 100%;
  position: absolute;
  top: 0px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
