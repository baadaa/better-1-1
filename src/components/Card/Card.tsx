import styled from 'styled-components';
import { TopicColors } from '@/styles/colorCode';
import { Tag } from './Tags';

type CardStyleProps = {
  headBg: string;
  headText: string;
};
const CardStyles = styled.article<CardStyleProps>`
  flex: 1;
  margin: 0 1rem;
  background-color: #fff;
  font-size: 1.5rem;
  padding: 4rem 2rem 2rem;
  overflow: hidden;
  box-shadow: var(--base-shadow);
  border-radius: 0.8rem;
  position: relative;
  &::before {
    content: attr(data-category);
    display: flex;
    align-items: center;
    padding: 0 2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: ${(props) => props.headBg};
    color: ${(props) => props.headText};
  }
  h2 {
    font-weight: 400;
    font-size: 3rem;
  }
`;

import { Category, Item } from '@/types';
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
      <div>
        {tags.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
      </div>
    </CardStyles>
  );
};

export { Card };
