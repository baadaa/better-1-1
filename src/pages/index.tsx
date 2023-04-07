import React, { useState, useEffect } from 'react';
import { CardSet } from '@/components/Card';
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
      <Layout>
        <h1>Today’s Picks</h1>
        <button className="shuffle" onClick={() => shuffleItems()}>
          shuffle cards
        </button>
        <CardSet items={picks} />
      </Layout>
    </>
  );
}
