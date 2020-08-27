import React, { FC } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaMedium, FaDev } from 'react-icons/fa';
import { Container, Header, Link } from '../components';

const H1 = styled.h1`
  text-align: center;
`;

const P = styled.p`
  text-align: center;
  font-size: 1.2em;
`;

const Span = styled.span`
  text-align: center;
  padding: 5px;
  font-size: 1.3em;
  & > a {
    padding-right: 10px;
  }
`;

const Home: FC = () => {
  return (
    <Container>
      <Header />
      <H1>{"👋 Hello, I'm Vitor Silva "}</H1>
      <P>
        {'Web Dev | [ Automation,Gadget,Self-sustaining ] fanatic | Dog lover '}
      </P>
      <Span>
        <Link href="https://github.com/ksvitorsilva">
          <FaGithub />
        </Link>
        <Link href="https://pt.linkedin.com/in/ksvitorsilva">
          <FaLinkedin />
        </Link>
        <Link href="https://medium.com/@ksvitorsilva">
          <FaMedium />
        </Link>
        <Link href="https://dev.to/ksvitorsilva">
          <FaDev />
        </Link>
      </Span>
    </Container>
  );
};

export default Home;
