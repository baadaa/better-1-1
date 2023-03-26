import { Category } from '@/types';
import { TopicColors } from '@/styles/colorCode';
import styled from 'styled-components';

const TagStyles = styled.span`
  padding: 1rem;
  font-size: 1.2rem;
  display: inline-block;
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
