import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Card } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { pickRandomItems } from '@/utils/utils';
import { Item } from '@/types';
import { itemPool } from '@/data/items';

export default function Home() {
  const [picks, setPicks] = useState<Array<Item>>([]);

  const shuffleItems = () => setPicks(pickRandomItems(itemPool, 3));
  useEffect(() => {
    shuffleItems();
  }, []);
  return (
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
      <Layout>
        <button onClick={() => shuffleItems()}>shuffle</button>
        {picks.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </Layout>
    </>
  );
}
