import React from 'react';
import styled from 'styled-components';
import Screen from './Screen';
import Buttons from './Buttons';

const BodyShape = styled.div`
  width: 34rem;
  height: 42rem;
  position: relative;
  background-color: #f4e1c1;
  border: 0.2rem solid #bca372b0;
  border-radius: 2rem 2rem 7rem 2rem;
  box-sizing: border-box;
  &:before {
    content: '';
    width: 32.7rem;
    height: 40rem;
    position: absolute;
    top: 0.5rem;
    left: 0.4rem;
    background-color: #fdf6d9;
    border-radius: 1.5rem 1.5rem 6.5rem 1.5rem;
    filter: blur(0.2rem);
  }
  &:after {
    content: '';
    width: 31.2rem;
    height: 38.2rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: #f1e1c0;
    box-shadow: 0 0 0.5rem 0.2rem #fdf6d9 inset;
    border: 0.2rem solid #bca3725a;
    border-radius: 1.2rem 1.2rem 6.2rem 1.2rem;
  }
`;

function Machine() {
  return (
    <BodyShape>
      <Screen />
      <Buttons />
    </BodyShape>
  );
}

export default Machine;
