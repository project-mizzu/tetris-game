import React from 'react';
import styled from 'styled-components';

interface BtnTypes {
  rotate: string;
  top: string;
  left: string;
}

const BtnArea = styled.section`
  width: 28rem;
  height: 15.8rem;
  position: absolute;
  left: 2.8rem;
  bottom: 2.2rem;
  z-index: 1;
`;

const ArrowBtnWrap = styled.div`
  width: 11rem;
  height: 11rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f4e1c1;
  border: 0.2rem solid #fdf6d99a;
  box-shadow: 0 0 0.2rem 0.2rem #bca37270 inset;
  border-radius: 6rem;
  z-index: 1;
`;

const ArrowBtnGroup = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`;

const ArrowBtn = styled.button<BtnTypes>`
  width: 3rem;
  height: 4rem;
  position: absolute;
  top: ${(props) => props.top}rem;
  left: ${(props) => props.left}rem;
  background-color: #fff;
  border: 0.2rem solid #bca372c0;
  box-shadow: 0 0 0.1rem 0.2rem #f0e8c8 inset;
  border-radius: 0.7rem 0.7rem 50% 50%;
  transform: rotate(${(props) => props.rotate}deg);
  cursor: pointer;
  &:active {
    background-color: #fdf6e9;
    border: 0.2rem solid #a68f60d4;
    box-shadow: 0 0 0.2rem 0.3rem #e5dcb7 inset;
  }
`;

const MenuArea = styled.div`
  display: felx;
  width: 14.8rem;
  height: 8.5rem;
  position: absolute;
  top: 2.5rem;
  right: 0;
  z-index: 1;
`;

const MenuBtnWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 9rem;
  height: inherit;
`;

const MenuBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 4rem;
  height: 3.2rem;
  p {
    color: #25221d;
    font-size: 0.05rem;
    filter: blur(0.02rem);
  }
`;

const MenuBtn = styled.button`
  width: 2.6rem;
  height: 2rem;
  background-color: #fff;
  border: 0.2rem solid #bca372c0;
  border-radius: 0.95rem;
  box-shadow: 0 0 0.1rem 0.2rem #f0e8c8 inset;
  cursor: pointer;
  &:active {
    background-color: #fdf6e9;
    border: 0.2rem solid #a68f60d4;
    box-shadow: 0 0 0.2rem 0.3rem #e5dcb7 inset;
  }
`;

const RotateBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 1.65rem;
  right: 1.08rem;
  background-color: #fff;
  border: 0.2rem solid #bca372c0;
  border-radius: 2rem;
  box-shadow: 0 0 0.1rem 0.2rem #f0e8c8 inset;
  z-index: 1;
  cursor: pointer;
  &:active {
    background-color: #fdf6e9;
    border: 0.2rem solid #a68f60d4;
    box-shadow: 0 0 0.2rem 0.3rem #e5dcb7 inset;
  }
`;

const RotateText = styled.svg`
  width: 30%;
  height: auto;
  position: absolute;
  top: 0.2rem;
  right: 0;
  transform-origin: center;
  fill: #25221d;
  filter: blur(0.02rem);
`;

function Buttons() {
  return (
    <BtnArea>
      <ArrowBtnWrap>
        <ArrowBtnGroup>
          <ArrowBtn top="0.8" left="4" rotate="0" />
          <ArrowBtn top="3.52" left="6.9" rotate="90" />
          <ArrowBtn top="6.2" left="4" rotate="180" />
          <ArrowBtn top="3.52" left="1.1" rotate="270" />
        </ArrowBtnGroup>
      </ArrowBtnWrap>
      <MenuArea>
        <MenuBtnWrap>
          <MenuBtnGroup>
            <MenuBtn />
            <p>MUSIC</p>
          </MenuBtnGroup>
          <MenuBtnGroup>
            <MenuBtn />
            <p>RESET</p>
          </MenuBtnGroup>
          <MenuBtnGroup>
            <MenuBtn />
            <p>STOP</p>
          </MenuBtnGroup>
          <MenuBtnGroup>
            <MenuBtn />
            <p>ON/OFF</p>
          </MenuBtnGroup>
        </MenuBtnWrap>
        <RotateBtn />
        <RotateText viewBox="0 0 95 95" width="50" height="50">
          <defs>
            <path
              id="circle"
              d="
                  M 50, 50
                  m -51, 15
                  a 37,37 0 1,1 78,0
                  a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="0.85rem">
            <textPath xlinkHref="#circle">&nbsp;&nbsp;&nbsp;&nbsp;ROTATE</textPath>
          </text>
        </RotateText>
      </MenuArea>
    </BtnArea>
  );
}

export default Buttons;
