import React, { useState, useEffect, FormEvent } from 'react';
import styled from 'styled-components';
import { Card } from '@/components/Card';
import { Layout } from '@/components/Layout';
import { Item, Category } from '@/types';
import { shuffledPool } from '@/data/items';

const Selector = styled.form`
  box-sizing: border-box;
  display: flex;
  margin: 1rem auto 2rem;
  justify-content: center;
  flex-wrap: wrap;
  .dropdown {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    display: none;
  }
  select {
    border: 1px solid var(--dropdown-border);
    border-radius: 0.6rem;
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    flex: 1;
    margin-left: 0.6rem;
    outline: none;
    &:focus {
      outline: 3px solid var(--sky200);
      outline-offset: 2px;
    }
  }
  @media screen and (max-width: 768px) {
    .dropdown {
      display: flex;
    }
    .pills {
      display: none;
    }
  }
`;
const PillStyles = styled.label`
  font-size: 1.15rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border: 1px solid var(--pill-border);
  background-color: var(--pill-bg);
  color: var(--pill-text);
  border-radius: 0.6rem;
  font-weight: 500;
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
    color: var(--pill-active-text);
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
  <PillStyles
    htmlFor={tag.split(' ').join('')}
    data-selected={active}
    className="pills"
  >
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
