import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
  FaMedium,
  FaDev,
} from 'react-icons/fa';

const Container = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
const Span = styled.span`
  text-align: center;
  padding: 5px;
  font-size: 1.3em;
  & > svg {
    padding-right: 10px;
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <H1>Hello, I am Vitor Silva </H1>
        <P>
          JS Dev | [ Automation,Gadget,Self-sustaining ] Fanatic | Dog lover
        </P>
        <Span>
          <FaGithub />
          <FaStackOverflow />
          <FaLinkedin />
          <FaMedium />
          <FaDev />
        </Span>
      </>
    </Container>
  );
};

export default Home;
