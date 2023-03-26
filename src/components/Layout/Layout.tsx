import * as React from 'react';
import { Props } from '@/types';
import { Work_Sans } from '@next/font/google';
import styled from 'styled-components';

const ws = Work_Sans({ subsets: ['latin'], display: 'swap' });
const LayoutStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  .cards {
    display: flex;
    width: 100%;
  }
`;
export const Layout: React.FC<Props> = ({ children }) => (
  <LayoutStyles className={ws.className}>
    <div className="cards" style={{ display: 'flex' }}>
      {children}
    </div>
  </LayoutStyles>
);
