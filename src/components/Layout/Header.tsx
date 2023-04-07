import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
`;

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
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
      </div>
    </HeaderStyles>
  );
};

export default Header;
