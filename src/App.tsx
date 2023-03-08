import React from 'react';
import styled from 'styled-components';
import Machine from 'components/Machine';

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <ContentsWrap>
      <h1>Tetris Game</h1>
      <Machine />
    </ContentsWrap>
  );
}

export default App;
