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
      <Layout>
        <h1>Today’s Agenda</h1>
        <button className="shuffle" onClick={() => shuffleItems()}>
          shuffle
        </button>
        <div className="cards">
          {picks.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </Layout>
    </>
  );
}
