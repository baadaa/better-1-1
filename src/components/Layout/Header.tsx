import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ToggleBtn } from '../Buttons';

const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: var(--header-height);
  background-color: var(--header-bg);
  box-shadow: var(--base-shadow);
  transition: background-color 0.2s, border-color 0.2s;
  border-bottom: 1px solid var(--header-border);
  .wrapper {
    padding: 0 0 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    margin: 0 auto;
  }
  li {
    border-bottom: 5px solid transparent;
    display: inline-flex;
    align-items: stretch;
  }
  a {
    padding: 2rem 1rem;
    text-decoration: none;
    /* padding: 1.5rem 0 */
    outline: none;
    transition: transform 0.2s;
    &:focus {
      outline: 3px solid var(--sky200);
    }
    &:hover {
      transform: translateY(-0.2rem);
    }
  }
  li + li {
    margin-left: 2rem;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 2rem;
  }
  .active {
    border-bottom-color: var(--current-route);
  }
  h3 {
    font-size: 3rem;
    margin: 0;
  }
  nav {
    align-self: center;
  }
  .mobile {
    position: absolute;
    top: var(--header-height);
    border-radius: 1rem;
    box-shadow: var(--hover-shadow);
    right: 0rem;
    background: var(--header-bg);
    font-size: 1.6rem;
    transform: translateY(-2rem);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s, transform 0.4s;
    padding: 2.5rem 0;
    a {
      width: 20rem;
      padding: 1rem 2.5rem;
      display: block;
      padding-left: 2rem;
      border-left: 6px solid transparent;
      &.active {
        border-left-color: var(--current-route);
      }
    }
    a + a {
      margin-top: 2rem;
    }
    &[data-open='true'] {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    .wrapper {
      width: 100%;
      /* align-items: center; */
    }
    nav {
      display: none;
    }
  }
`;

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <HeaderStyles>
      <div className="wrapper">
        <h3>Better 1:1</h3>
        <nav>
          <ul>
            {[
              { label: "Today's Picks", link: '/' },
              { label: 'Browse by Topics', link: '/browse' },
            ].map((item) => (
              <li
                key={item.label}
                className={currentRoute === item.link ? 'active' : ''}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ToggleBtn>
          <button
            className={
              !isCollapsed
                ? 'hamburger hamburger--spring is-active'
                : 'hamburger hamburger--spring'
            }
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="mobile" data-open={!isCollapsed}>
            {[
              { label: "Today's Picks", link: '/' },
              { label: 'Browse by Topics', link: '/browse' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.link}
                className={currentRoute === item.link ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </ToggleBtn>
      </div>
    </HeaderStyles>
  );
};

export default Header;
