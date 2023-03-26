import React, { useState, useEffect, FormEvent } from 'react';
import { Card } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { Item, Category } from '@/types';
import { itemPool } from '@/data/items';

export default function Home() {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [picks, setPicks] = useState<Array<Item>>([]);
  const tags: Array<Category> = [
    'Weekly',
    'Teamwork',
    'Goals',
    'Feedback',
    'Onboarding',
    'Well-being',
    'Career Growth',
  ];
  const filterCards = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    if (target.value === 'all') return setPicks(itemPool);
    const filteredList = itemPool.filter(
      (item) => item.tags.indexOf(target.value) !== -1
    );
    setPicks(filteredList);
  };
  useEffect(() => {
    setPicks(itemPool);
  }, []);
  return (
    <>
      <Layout>
        <h1>Browse All Topics</h1>
        <form className="filters" onChange={filterCards}>
          <input type="radio" id="all" name="tag" value="all" />
          <label htmlFor="all">All</label>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <input
                type="radio"
                id={tag.split(' ').join('')}
                name="tag"
                value={tag}
              />
              <label htmlFor={tag}>{tag}</label>
            </React.Fragment>
          ))}
        </form>
        <div className="cards">
          {picks.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </Layout>
    </>
  );
}
