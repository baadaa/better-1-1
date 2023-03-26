import * as React from 'react';
import Head from 'next/head';
import { Props } from '@/types';
import { Work_Sans } from '@next/font/google';
import Header from './Header';
import styled from 'styled-components';

const ws = Work_Sans({ subsets: ['latin'], display: 'swap' });
const LayoutStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  h1 {
    text-align: center;
    letter-spacing: -0.03em;
  }
  .shuffle {
    display: block;
    margin: 1rem auto 2rem;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    width: 100%;
  }
`;
export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Head>
      <title>Better One-on-One</title>
      <meta name="description" content="Better One-on-One" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="One-on-one meeting discussion prompts based on The Unstuck Box"
      />
      <meta name="og:title" content="Better One-on-One" />
      <meta name="twitter:title" content="Better One-on-One" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Bumhan Yu<bumhan.yu@gmail.com>" />
      <meta name="og:type" content="website" />
      <meta
        name="og:image"
        content="https://syntax.bald.design/og-image-syntax.jpg"
      />
      <meta
        name="og:description"
        content="One-on-one meeting discussion prompts based on The Unstuck Box"
      />
      <meta
        name="twitter:description"
        content="One-on-one meeting discussion prompts based on The Unstuck Box"
      />

      <link rel="icon" href="/barbecue.png" />
    </Head>
    <Header />
    <LayoutStyles className={ws.className}>{children}</LayoutStyles>
  </>
);
