import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto 2rem;
  a {
    text-decoration: none;
    display: inline-flex;
    padding: 1rem 0;
    border-bottom: 5px solid transparent;
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
  }
`;

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <HeaderStyles>
      <h3>Better 1:1</h3>
      <nav>
        <ul>
          {[
            { label: "Today's Agenda", link: '/' },
            { label: 'Browse All', link: '/browse' },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className={currentRoute === item.link ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
