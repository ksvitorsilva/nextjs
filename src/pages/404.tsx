import React from 'react';
import styled from 'styled-components';
import { Container } from '../components';

const Image = styled.img`
  max-height: 6rem;
  max-width: 6rem;
  margin: 3rem;
`;

const H1 = styled.h1`
  font-size: 8em;
  margin: 0;
  font-family: 'Montserrat-Bold';
`;

const P = styled.p`
  font-size: 1.2em;
  margin: 0;
`;

const Header = (): JSX.Element => (
  <Container>
    <H1>404</H1>
    <P>Lost in space?</P>
    <Image alt="404" src="/milky-way.png" />
  </Container>
);

export default Header;
