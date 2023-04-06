import React, { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { Card } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { Item, Category } from '@/types';
import { shuffledPool } from '@/data/items';

const PillStyles = styled.label`
  font-size: 1.2rem;
  box-sizing: border-box;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--pill-border);
  background-color: var(--pill-bg);
  border-radius: 3rem;
  display: flex;
  transition: transform 0.2s;
  text-transform: capitalize;
  cursor: pointer;
  input[type='radio'] {
    width: 0;
    height: 0;
    overflow: none;
  }
  &[data-selected='true'] {
    background-color: var(--pill-active-bg);
  }
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: var(--base-shadow);
  }
  &:focus,
  &:has(input:focus) {
    outline: 3px solid var(--sky200);
    outline-offset: 2px;
  }
  margin: 0 0.25rem;
`;
const Pill = ({ tag = '', active = false }) => (
  <PillStyles htmlFor={tag.split(' ').join('')} data-selected={active}>
    <input type="radio" id={tag.split(' ').join('')} name="tag" value={tag} />
    {tag}
  </PillStyles>
);

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
      <Layout>
        <h1>Browse by Topics</h1>
        <form
          className="filters"
          onChange={filterCards}
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            margin: '1rem auto 2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Pill tag="all" active={filter === 'all'} />
          {tags.map((tag) => (
            <Pill key={tag} tag={tag} active={filter === tag} />
          ))}
        </form>
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
