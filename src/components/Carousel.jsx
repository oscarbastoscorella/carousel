import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Slider from "./Slider";

export default function Carousel({ items, maxNumberPerPage }) {
  const [position, setPosition] = useState(0);
  const [{ x }, set] = useSpring(() => ({ x: "0%" }));

  useEffect(() => {
    set({ x: `${position}%` });
  }, [set, position]);

  function displayPreviousButton() {
    return position < 0;
  }

  function displayNextButton() {
    if (items.length <= maxNumberPerPage) return false;
    const numberOfPages = Math.floor(items.length / maxNumberPerPage);
    return position > numberOfPages * -100;
  }

  return (
    <Container>
      {displayPreviousButton() && (
        <Button
          side={"left"}
          onClick={() => setPosition((curPosition) => curPosition + 100)}
        >
          previous
        </Button>
      )}
      <MovingStripe style={{ x }}>
        {items.map((item) => (
          <Slider key={item} image={item} maxNumberPerPage={maxNumberPerPage} />
        ))}
      </MovingStripe>
      {displayNextButton() && (
        <Button
          side={"right"}
          onClick={() => setPosition((curPosition) => curPosition - 100)}
        >
          next
        </Button>
      )}
    </Container>
  );
}

const Container = styled(animated.div)`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
`;

const MovingStripe = styled(animated.div)`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  right: ${(props) => (props.side === "left" ? 100 : 0)};
  z-index: 2;
`;
