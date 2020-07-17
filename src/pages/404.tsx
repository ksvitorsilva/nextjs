import React from 'react';
import styled from 'styled-components';
import Container from '../components/container';

const NotFound: React.FC = () => {
  const H1 = styled.h1`
    text-align: center;
    font-family: 'Fredoka One';
  `;

  const P = styled.p`
    text-align: center;
    font-family: 'Coiny';
    font-size: 3em;
  `;

  const Background = styled.div`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    background-image: url(/static/assets/404-v2.svg);
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    background-size: 60%;
  `;

  return (
    <Container>
      <Background>
        <H1>Lost in space?</H1>
        <P>404</P>
      </Background>
    </Container>
  );
};

export default NotFound;
