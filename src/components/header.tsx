/**
 * Module dependencies.
 */

import Head from 'next/head';

/**
 * Types.
 */

type HeaderProps = {
  title?: string;
};

/**
 * Header.
 */

const Header = ({ title = 'ksvitorsilva' }: HeaderProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="Description" content="👋 Hello, I'm Vitor Silva" />
    <meta name="keywords" content="vitor silva, ksvitorsilva, web dev" />
  </Head>
);

/**
 * Export Header.
 */

export default Header;
