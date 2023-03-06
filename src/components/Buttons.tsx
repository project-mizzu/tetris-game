import React from 'react';
import styled from 'styled-components';

interface BtnTypes {
  rotate: string;
  top: string;
  left: string;
}

const ArrowBtnWrap = styled.div`
  width: 11rem;
  height: 11rem;
  position: absolute;
  left: 2.6rem;
  bottom: 6.5rem;
  background-color: #f4e1c1;
  border: 0.2rem solid #fdf6d99a;
  box-shadow: 0 0 0.5rem 0.2rem #bca3725a inset;
  border-radius: 6rem;
  z-index: 1;
`;

const ArrowBtnGroup = styled.div`
  width: inherit;
  height: inherit;
  position: relative;
`;

const ArrowBtn = styled.button<BtnTypes>`
  width: 2.5rem;
  height: 4rem;
  position: absolute;
  top: ${(props) => props.top}rem;
  left: ${(props) => props.left}rem;
  background-color: white;
  transform: rotate(${(props) => props.rotate}deg);
`;

function Buttons() {
  return (
    <ArrowBtnWrap>
      <ArrowBtnGroup>
        <ArrowBtn top="1" left="4" rotate="0" />
        <ArrowBtn top="4" left="1" rotate="90" />
        <ArrowBtn top="6" left="4" rotate="180" />
        <ArrowBtn top="4" left="7" rotate="270" />
      </ArrowBtnGroup>
    </ArrowBtnWrap>
  );
}

export default Buttons;
