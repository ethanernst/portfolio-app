import { useMemo } from 'react';
import styled from 'styled-components';
import { colors } from '../themes/palette';
import { Link, useLocation } from 'react-router-dom';

import nav from '../images/nav.png';
import home from '../images/home.png';

const Nav = styled.div`
  position: inherit;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 100;

  transition: all 0.15s ease-in-out;
  transition-delay: 0.18s;
  height: clamp(50px, 15vw, 300px);
  width: clamp(50px, 15vw, 300px);
  border-radius: 75px;
  background-color: ${colors.primary};

  :hover {
    width: ${state => (state.home ? 'clamp(50px, 15vw, 300px)' : '40vw')};
    transition-delay: 0s;
  }

  :hover ul {
    transition-delay: 0.2s;
    opacity: 1;
  }

  :hover img {
    opacity: ${state => (state.home ? 1 : 0)};
    transition-delay: 0s;
  }

  img {
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.1s ease-in-out 0.3s;
    z-index: 100;
  }

  ul {
    position: absolute;
    padding: 0px;
    opacity: 0;
    transition: opacity 0.15s ease-in-out 0s;
    z-index: 150;
  }

  li {
    display: inline-block;
    padding: 10px;
    font-size: clamp(20px, 3vw, 150px);
    text-align: center;
    list-style: none;
    border: 5px;
    border-radius: 50px;
    border-color: ${colors.accent};
  }

  a {
    text-decoration: none;
    color: ${colors.text};
  }

  a:hover {
    color: ${colors.textHover};
  }

  a:active {
    color: ${colors.text};
  }
`;

function Navigator(props) {
  const routes = props.routes;
  const location = useLocation();
  const currentLocation = useMemo(() => location.pathname, []);

  const isHomepage = currentLocation === '/';

  return (
    <>
      {isHomepage && (
        <Nav>
          <img src={nav} alt={'navigation'} />
          <ul>
            {routes
              .filter(route => route.path !== '/' && route.path !== '*')
              .map(route => (
                <li>
                  <Link key={route.path} to={route.path}>
                    {route.name}
                  </Link>
                </li>
              ))}
          </ul>
        </Nav>
      )}
      {!isHomepage && (
        <Link key={-1} to={-1}>
          <Nav home>
            <img src={home} alt={'home'} />
          </Nav>
        </Link>
      )}
    </>
  );
}

export default Navigator;
