import { Category } from '@/types';
import { TopicColors } from '@/styles/colorCode';
import styled from 'styled-components';

const TagStyles = styled.span`
  font-size: 1rem;
  padding: 0.5em 1em;
  font-weight: 600;
  border-radius: 2rem;
  display: inline-block;
  margin-right: 0.5em;
`;

type TagProps = {
  tag: Category;
};

export const Tag: React.FC<TagProps> = ({ tag }) => (
  <TagStyles
    style={{ background: TopicColors[tag].bg, color: TopicColors[tag].text }}
  >
    {tag}
  </TagStyles>
);
