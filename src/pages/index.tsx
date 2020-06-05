import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const H1 = styled.h1`
  margin: 5em;
  padding: 0.5em 1em;
`;

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <H1>
          Welcome to
          <a href="https://nextjs.org">Next.js!</a>
        </H1>
      </>
    </div>
  );
};

export default Home;
