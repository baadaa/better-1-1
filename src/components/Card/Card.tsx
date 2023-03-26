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
  padding: calc(var(--spacing) * 2) var(--spacing) calc(var(--spacing) * 2.5);
  overflow: hidden;
  box-shadow: var(--base-shadow);
  border-radius: 0.8rem;
  position: relative;
  &::before {
    content: attr(data-category);
    display: flex;
    align-items: center;
    padding: 0 var(--spacing);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 2.75rem;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${(props) => props.headBg};
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

export { Card };
