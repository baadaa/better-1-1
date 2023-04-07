import styled from 'styled-components';

const Selector = styled.form`
  box-sizing: border-box;
  display: flex;
  margin: 1rem auto 2rem;
  justify-content: center;
  flex-wrap: wrap;
  .dropdown {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    display: none;
  }
  select {
    border: 1px solid var(--dropdown-border);
    border-radius: 0.6rem;
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    flex: 1;
    margin-left: 0.6rem;
    outline: none;
    &:focus {
      outline: 3px solid var(--sky200);
      outline-offset: 2px;
    }
  }
  @media screen and (max-width: 768px) {
    .dropdown {
      display: flex;
    }
    .pills {
      display: none;
    }
  }
`;
const PillStyles = styled.label`
  font-size: 1.15rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border: 1px solid var(--pill-border);
  background-color: var(--pill-bg);
  color: var(--pill-text);
  border-radius: 0.6rem;
  font-weight: 500;
  display: flex;
  transition: transform 0.2s;
  text-transform: capitalize;
  cursor: pointer;
  input[type='radio'] {
    width: 0;
    height: 0;
    overflow: none;
  }
  &[data-selected='true'] {
    background-color: var(--pill-active-bg);
    color: var(--pill-active-text);
  }
  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: var(--base-shadow);
  }
  &:focus,
  &:has(input:focus) {
    outline: 3px solid var(--sky200);
    outline-offset: 2px;
  }
  margin: 0 0.25rem;
`;
const Pill = ({ tag = '', active = false }) => (
  <PillStyles
    htmlFor={tag.split(' ').join('')}
    data-selected={active}
    className="pills"
  >
    <input type="radio" id={tag.split(' ').join('')} name="tag" value={tag} />
    {tag}
  </PillStyles>
);

export { Pill, Selector };
