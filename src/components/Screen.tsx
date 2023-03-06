import React from 'react';
import styled from 'styled-components';

const ScreenFrame = styled.div`
  width: 28rem;
  height: 22rem;
  position: absolute;
  top: 2.45rem;
  left: 2.56rem;
  background-color: #bca372;
  border: 0.2rem solid #fdf6d9d2;
  clip-path: polygon(100% 0, 100% 100%, 48% 100%, 40% 90%, 0 90%, 0% 0%);
  z-index: 1;
  &:before {
    content: '';
    width: 27rem;
    height: 21rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: #25221d;
    clip-path: polygon(100% 0, 100% 100%, 49% 100%, 40% 89%, 0 89%, 0% 0%);
    z-index: 1;
  }
  &:after {
    content: 'MIZZU GAMES';
    color: #ffffffc0;
    position: absolute;
    right: 2.2rem;
    bottom: 1.45rem;
    font-size: 0.95rem;
    z-index: 1;
    filter: blur(0.03rem);
  }
`;

const ScreenGlass = styled.div`
  width: 28rem;
  height: 22rem;
  position: absolute;
  background: linear-gradient(
    72deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.1) 70%,
    rgba(255, 255, 255, 0.3) 90%,
    rgba(255, 255, 255, 0.5) 100%
  );
  filter: blur(0.2rem);
  z-index: 2;
`;

const ContentsArea = styled.div`
  width: 23.5rem;
  height: 16.5rem;
  background-color: #716a71;
  position: absolute;
  top: 1.5rem;
  left: 2.15rem;
  border: 0.1rem solid #716a71;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.2rem 0.5rem #25221d inset;
  z-index: 1;
`;

const TetrisBox = styled.div`
  width: 10.5rem;
  height: 12.5rem;
  margin: 1.75rem;
  position: relative;
  background-color: #57526379;
  border: 0.2rem solid #25221d;
  border-left: none;
  border-radius: 0.5rem;
  &:before {
    content: '';
    width: 10.5rem;
    height: 12.5rem;
    position: absolute;
    left: -0.45rem;
    border-right: 0.24rem solid #25221d5a;
    border-left: none;
    border-radius: 0.5rem;
    filter: blur(0.04rem);
  }
`;

function Screen() {
  return (
    <ScreenFrame>
      <ScreenGlass />
      <ContentsArea>
        <TetrisBox />
      </ContentsArea>
    </ScreenFrame>
  );
}

export default Screen;
