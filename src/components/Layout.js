import styled from 'styled-components';
import { colors } from '../themes/palette';

const handleLayout = layout => {
  switch (layout) {
    case 'center':
      return 'grid-row: 1 / span 3; grid-column: 1 / span 5;';
    case 'left':
      return 'grid-row: 1 / span 5; grid-column: 1 / span 3;';
    case 'right':
      return 'grid-row: 1 / span 5; grid-column: 3 / span 5;';
    case 'down':
      return 'grid-row: 3 / span 5; grid-column: 1 / span 5;';
    default:
      return 'grid-row: 1 / span 3; grid-column: 1 / span 5;';
  }
};

const Layout = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};

  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);

  a {
    text-decoration: none;
    color: ${colors.text};
  }

  a:hover {
    color: ${colors.textHover};
  }

  a:active {
    color: ${colors.secondary};
  }

  .content {
    margin: 2vw;
    border-radius: 25px;
    ${({ layout }) => handleLayout(layout)}
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${colors.primary};
  }

  .title {
    font-size: 5vw;
    color: ${colors.secondary};
  }

  .subtitle {
    font-size: 4vw;
    font-weight: bold;
  }
`;

export default Layout;
