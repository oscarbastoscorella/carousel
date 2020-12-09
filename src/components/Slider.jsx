import React from "react";
import styled from "styled-components";

export default function Slider({ image, maxNumberPerPage }) {
  return (
    <Container perpage={100 / maxNumberPerPage}>
      <CardContainer>
        <Card>{image}</Card>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 2px;
  flex: 0 0 auto;
  width: calc(${(props) => props.perpage}% - 4px);
`;

const CardContainer = styled.div`
  border-radius: 5px;
  padding-top: 65%;
  position: relative;
  overflow: hidden;
`;

const Card = styled.div`
  height: 100%;
  background: hotpink;
  width: 100%;
  position: absolute;
  top: 0px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
