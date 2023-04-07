import * as React from 'react';
import styled from 'styled-components';

const Notes = styled.div`
  position: fixed;
  z-index: 90;
  border-radius: 1rem;
  top: calc(var(--header-height) - 0.75rem);
  left: 3rem;
  width: 29rem;
  box-shadow: var(--hover-shadow);
  border: 1px solid var(--cool700);
  background-color: rgba(0, 10, 20, 0.95);
  color: var(--neutral200);
  font-size: 1.3rem;
  line-height: 1.4;
  padding: 2rem;
  opacity: 0;
  text-align: left;
  transform: translateY(-3rem);
  pointer-events: none;
  transition: opacity 0.5s, transform 0.5s;
  p + p {
    margin-top: 1rem;
  }
  p a {
    padding: 0;
    color: var(--lemon300);
    /* text-decoration: underline; */
  }
  &[data-showing='true'] {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }
`;
const AboutBtn = styled.button`
  /* position: fixed; */
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  /* top: 1rem;
  right: 1rem; */
  font-size: 1.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  z-index: 99;
  background-color: var(--lemon500);
  color: var(--lemon900);
  font-weight: 800;
  cursor: pointer;
  transition: background-color 0.5s, color 0.25s, transform 0.25s;
  box-shadow: var(--base-shadow);
  &:hover {
    box-shadow: var(--hover-shadow);
    transform: translateY(-1px);
  }
  &[data-showing='true'] {
    background-color: var(--tomato500);
    color: white;
  }
`;
type AboutProp = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};
export const AboutButton: React.FC<AboutProp> = ({ isActive, setIsActive }) => (
  <AboutBtn data-showing={isActive} onClick={() => setIsActive(!isActive)}>
    {isActive ? '×' : '?'}
  </AboutBtn>
);
export const AboutNotes: React.FC<AboutProp> = ({ isActive }) => (
  <Notes data-showing={isActive}>
    <p>
      Based on{' '}
      <a
        href="https://unstuckbox.com/products/the-unstuck-box-one-to-ones"
        target="_blank"
        rel="noreferrer noopener"
      >
        The Unstuck Box: One to Ones
      </a>
      , and all rights are reserved by the original creators at{' '}
      <a
        href="https://unstuckbox.com/products/the-unstuck-box-one-to-ones"
        target="_blank"
        rel="noreferrer noopener"
      >
        The Unstuck Box
      </a>
      .
    </p>
    <p>
      Built by{' '}
      <a href="https://bald.design" target="_blank" rel="noreferrer">
        <strong>B</strong>
      </a>{' '}
      with TypeScript and Next.js to better utilize the content. Browse the code
      at{' '}
      <a
        href="https://github.com/baadaa/better-1-1"
        target="_blank"
        rel="noreferrer noopener"
      >
        the GitHub repo
      </a>
    </p>
  </Notes>
);
