import React, { useState, useEffect, FormEvent } from 'react';
import { Card } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { Item, Category } from '@/types';
import { shuffledPool } from '@/data/items';
import { Selector, Pill } from '@/components/Buttons';

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
    setFilter(target.value);
    console.log(filter);
    if (target.value === 'all') return setPicks(shuffledPool);
    const filteredList = shuffledPool.filter(
      (item) => item.tags.indexOf(target.value) !== -1
    );
    setPicks(filteredList);
  };
  useEffect(() => {
    setPicks(shuffledPool);
  }, []);
  return (
    <>
      <Layout title="Browse by Topics">
        <h1>Browse by Topics</h1>
        <Selector onChange={filterCards}>
          <Pill tag="all" active={filter === 'all'} />
          {tags.map((tag) => (
            <Pill key={tag} tag={tag} active={filter === tag} />
          ))}
          <label htmlFor="tag-filter" className="dropdown">
            Choose topic:
            <select name="tag-filter" id="tag-filter">
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
        </Selector>
        <h3>
          Total <span>{picks.length}</span> cards in <span>{filter}</span>
        </h3>
        <div className="cards">
          {picks.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </Layout>
    </>
  );
}
