import React, { useState, useEffect } from 'react';
import { CardSet } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { pickRandomItems, setLocalStorage } from '@/utils/utils';
import { Item } from '@/types';
import { itemPool } from '@/data/items';

export default function Home() {
  const [picks, setPicks] = useState<Array<Item>>([]);

  const shuffleItems = () => {
    const randomPicks = pickRandomItems(itemPool, 3);
    setLocalStorage('b_1:1_picks', JSON.stringify(randomPicks));
    setLocalStorage('b_1:1_timestamp', JSON.stringify(new Date().getTime()));
    setPicks(randomPicks);
  };
  useEffect(() => {
    const savedItems = localStorage.getItem('b_1:1_picks');
    const lastSaved = localStorage.getItem('b_1:1_timestamp');
    const now = new Date().getTime();
    const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
    if (!savedItems) {
      shuffleItems();
      return;
    }
    if (lastSaved && now - parseFloat(lastSaved) < DAY_IN_MILLISECONDS) {
      setPicks(JSON.parse(savedItems));
      return;
    } else {
      shuffleItems();
    }
  }, []);
  return (
    <>
      <Layout title="Today's Picks">
        <h1>Today’s Picks</h1>
        <button className="shuffle" onClick={() => shuffleItems()}>
          shuffle cards
        </button>
        <CardSet items={picks} isBig />
      </Layout>
    </>
  );
}
