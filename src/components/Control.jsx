import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import leftArrow from "./assets/arrow_left.svg";
import rightArrow from "./assets/arrow_right.svg";

export default function Control({ side, action, show }) {
  const [{ scale }, set] = useSpring(() => ({ scale: 1 }));

  useEffect(() => {
    if (!show) set({ scale: 1 });
  }, [show, set]);

  return (
    <>
      {show && (
        <Container
          side={side}
          opacity={show ? 1 : 0}
          onMouseEnter={() => set({ scale: 1.3 })}
          onMouseLeave={() => set({ scale: 1 })}
        >
          <Icon
            onClick={action}
            src={side === "left" ? leftArrow : rightArrow}
            style={{ scale }}
          />
        </Container>
      )}
    </>
  );
}

const Container = styled(animated.div)`
  background: #656565b8;
  width: 75px;
  height: 100%;
  position: absolute;
  opacity: ${(props) => props.opacity};
  right: ${(props) => (props.side === "left" ? 100 : 0)};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(animated.img)`
  width: 75%;
  cursor: pointer;
`;
