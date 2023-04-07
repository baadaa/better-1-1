import styled from 'styled-components';

export const ToggleBtn = styled.div`
  z-index: 100;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 2rem;
  bottom: 0;
  border: none;
  display: none;
  button {
    transition: all 0.2s;
    border-radius: 1rem;
    outline: none;
  }
  button:focus {
    outline: 3px solid var(--sky200);
    box-shadow: 0 0 0 3px rgba(13, 155, 213, 0.2);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
