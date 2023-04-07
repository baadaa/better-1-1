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
  transition: background 0.2s, color 0.2s, border 0.2s;
`;

type TagProps = {
  tag: Category;
};

export const Tag: React.FC<TagProps> = ({ tag }) => (
  <TagStyles
    style={{
      background: TopicColors[tag].bg,
      color: TopicColors[tag].text,
      border: `1px solid ${TopicColors[tag].border}`,
    }}
  >
    {tag}
  </TagStyles>
);
