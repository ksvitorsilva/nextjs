import React from 'react';
import Head from 'next/head';

type HeaderProps = {
  title?: string;
};

const Header = ({ title = 'ksvitorsilva' }: HeaderProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Header;
