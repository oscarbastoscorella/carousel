import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Card from "./Card";
import Control from "./Control";

export default function Carousel({ items, maxNumberPerPage }) {
  const [position, setPosition] = useState(0);
  const [{ x }, set] = useSpring(() => ({ x: "0%" }));

  useEffect(() => {
    set({ x: `${position}%` });
  }, [set, position]);

  function handlePrevious() {
    setPosition((curPosition) => curPosition + 100);
  }

  function handleNext() {
    setPosition((curPosition) => curPosition - 100);
  }

  function hasPrevious() {
    return position < 0;
  }

  function hasNext() {
    if (items.length <= maxNumberPerPage) return false;
    const numberOfPages = Math.floor(items.length / maxNumberPerPage);
    return position > numberOfPages * -100;
  }

  return (
    <Container>
      <Control side={"left"} action={handlePrevious} show={hasPrevious()} />
      <MovingStripe style={{ x }}>
        {items.map((item) => (
          <Card key={item} image={item} maxNumberPerPage={maxNumberPerPage} />
        ))}
      </MovingStripe>

      <Control side={"right"} action={handleNext} show={hasNext()} />
    </Container>
  );
}

const Container = styled(animated.div)`
  width: 85%;
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
