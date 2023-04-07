import styled from 'styled-components';
import { TopicColors } from '@/styles/colorCode';
import { Tag } from './Tags';

type CardStyleProps = {
  headBg: string;
  headText: string;
  cardBorder: string;
};
const CardStyles = styled.article<CardStyleProps>`
  --spacing: 3rem;
  flex: 1;
  background-color: var(--card-bg);
  display: flex;
  padding: calc(var(--spacing) * 2.5) calc(var(--spacing) * 1.5)
    calc(var(--spacing) * 2.5) calc(var(--spacing) * 1.5);
  overflow: hidden;
  align-items: center;
  box-shadow: var(--base-shadow);
  border-radius: 0.4rem;
  position: relative;
  border-left: 4px solid ${(props) => props.cardBorder};
  &::before {
    content: attr(data-category);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    position: absolute;
    top: 2.5rem;
    font-size: 1.6rem;
    opacity: 0.35;
    text-transform: uppercase;
    letter-spacing: 0.45em;
    font-weight: 700;
    color: ${(props) => props.headText};
  }
  h2 {
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.015em;
    font-size: 2.2rem;
  }
  .tags {
    position: absolute;
    bottom: calc(var(--spacing) * 0.75);
    left: calc(var(--spacing) * 1.5);
  }
  @media screen and (max-width: 1100px) {
    --spacing: 2.3rem;
    h2 {
      font-size: 2rem;
    }
    &::before {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 768px) {
    /* --spacing: 2.3rem; */
    h2 {
      font-size: 1.8rem;
    }
    &::before {
      font-size: 1.2rem;
    }
  }
`;

import { Item } from '@/types';
type CardProps = {
  item: Item;
};
const Card: React.FC<CardProps> = ({ item }) => {
  const { content, category, tags } = item;
  const headingColor = TopicColors[category];
  return (
    <CardStyles
      data-category={category}
      headBg={headingColor.bg}
      headText={headingColor.text}
      cardBorder={headingColor.cardBorder}
    >
      <h2>{content}</h2>
      <div className="tags">
        {tags.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
      </div>
    </CardStyles>
  );
};

type CardSetProps = {
  items: Array<Item>;
};
const CardSet: React.FC<CardSetProps> = ({ items }) => {
  return (
    <div className="cards">
      {items.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
};

export { Card, CardSet };
