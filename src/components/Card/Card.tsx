import styled from 'styled-components';
import { TopicColors } from '@/styles/colorCode';
import { Tag } from './Tags';

type CardStyleProps = {
  headBg: string;
  headText: string;
};
const CardStyles = styled.article<CardStyleProps>`
  --spacing: 3rem;
  flex: 1;
  background-color: #fff;
  font-size: 1.5rem;
  display: flex;
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 1)
    calc(var(--spacing) * 2.5) calc(var(--spacing) * 1.5);
  overflow: hidden;
  align-items: center;
  box-shadow: var(--base-shadow);
  border-radius: 0.4rem;
  position: relative;
  border-left: 4px solid ${(props) => props.headText};
  &::before {
    content: attr(data-category);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    position: absolute;
    /* left: 0; */
    right: 2rem;
    top: 2rem;
    height: 2rem;
    font-size: 3rem;
    opacity: 0.1;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
    /* background-color: ${(props) => props.headBg}; */
    color: ${(props) => props.headText};
  }
  h2 {
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: -0.015em;
    font-size: 2.5rem;
  }
  .tags {
    position: absolute;
    bottom: 1.5rem;
    left: var(--spacing);
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
