import React from 'react';
import Head from 'next/head';

type HeaderProps = {
  title?: string;
};

const Header = ({ title = 'ksvitorsilva' }: HeaderProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="Description" content="👋 Hello, I'm Vitor Silva" />
    <meta name="keywords" content="vitor silva, ksvitorsilva, web dev" />
  </Head>
);

export default Header;
