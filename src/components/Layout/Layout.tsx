import * as React from 'react';
import { Props } from '@/types';
import { Work_Sans } from '@next/font/google';
import { Metadata } from './Metadata';
import Header from './Header';
import styled from 'styled-components';
import { ColorModeButton, GitHub } from '../Buttons';
import { useTheme, Theme } from '@/contexts/ThemeContext';
import { toggleColorMode } from '@/utils/utils';

const ws = Work_Sans({ subsets: ['latin'], display: 'swap' });
const LayoutStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  h1 {
    text-align: center;
    letter-spacing: -0.03em;
    font-size: 3.6rem;
    font-weight: 400;
  }
  .shuffle {
    display: block;
    margin: 1rem auto 2rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: none;
    outline: none;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: var(--main-button);
    text-transform: capitalize;
    color: var(--cool900);
    transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
    &:hover {
      background-color: var(--main-button-hover);
      transform: translateY(-0.15rem);
      box-shadow: var(--hover-shadow);
    }
    &:focus {
      outline: 3px solid var(--sky200);
      outline-offset: 2px;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 3.2rem;
    }
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    .cards {
      grid-template-columns: auto;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2.6rem;
    }
  }
`;
type LayoutProps = Props & { title: string };

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { theme, setTheme } = useTheme();
  const toggleColor = () => {
    const target = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setTheme(target);
    toggleColorMode(target);
  };
  return (
    <>
      <Metadata
        title={`Better 1:1 - ${title}`}
        description="One-on-one meeting discussion prompts based on The Unstuck Box"
        ogImage="https://res.cloudinary.com/dm4tymaa3/image/upload/v1680876353/og-image-better_falja6.png"
        favicon="/favicon.png"
      />
      <Header />
      <GitHub />
      <ColorModeButton onClick={toggleColor} />
      <LayoutStyles className={ws.className}>{children}</LayoutStyles>
    </>
  );
};
