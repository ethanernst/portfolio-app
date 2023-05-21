import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

let headerLayout = '';
let contentLayout = '';
let navLayout = '';

// handler for dynamic page layouts
function handleLayout(layout) {
  switch (layout) {
    case '/projects':
      headerLayout = ['1 / span 2', '1 / span 10;'];
      contentLayout = ['3 / span 10', '1 / span 8;'];
      navLayout = ['3 / span 10', '9 / span 10;'];
      break;
    case '/videos':
      headerLayout = ['1 / span 2', '1 / span 10;'];
      contentLayout = ['3 / span 10', '3 / span 10;'];
      navLayout = ['3 / span 10', '1 / span 2;'];
      break;
    case '/renders':
      headerLayout = ['9 / span 10', '1 / span 7;'];
      contentLayout = ['1 / span 8', '1 / span 10;'];
      navLayout = ['9 / span 10', '8 / span 10;'];
      break;
    case '/about':
      headerLayout = ['1 / span 2', '1 / span 7;'];
      contentLayout = ['3 / span 10', '1 / span 10;'];
      navLayout = ['1 / span 2', '8 / span 10;'];
      break;
    default: // used for the 404 page
      headerLayout = ['2 / span 4', '3 / span 6;'];
      contentLayout = ['1 / span 10', '1 / span 10;'];
      navLayout = ['6 / span 4', '3 / span 6;'];
      break;
  }
}

let backgroundColor = '';

// handler for dynamic page themes
function handleTheme(layout) {
  switch (layout) {
    case '/projects':
      backgroundColor = 'var(--projects)';
      break;
    case '/videos':
      backgroundColor = 'var(--videos)';
      break;
    case '/renders':
      backgroundColor = 'var(--renders)';
      break;
    case '/about':
      backgroundColor = 'var(--about)';
      break;
    default: // used for the 404 page
      backgroundColor = 'var(--black)';
      break;
  }
}

const Background = styled.main`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  color: var(--white);
  background-color: ${({ color }) => color};
`;

const Header = styled.div`
  position: relative;
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  display: flex;
  align-items: center;

  background-color: var(--transparent);
  backdrop-filter: blur(5px);

  h1 {
    margin: 5px;
    font-size: 5rem;
    padding-left: 20px;
  }

  h2 {
    margin: 5px;
    font-size: 1rem;
    padding-left: 20px;
  }
`;

const Content = styled.div`
  position: relative;
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  overflow-y: auto;
`;

const Nav = styled.div`
  position: relative;
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};

  display: flex;
  padding: 5%;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
`;

function PageLayout({ title, subtitle, content, nav }) {
  const location = useLocation();

  const layout = location.pathname;
  handleLayout(layout);
  handleTheme(layout);

  return (
    <Background color={backgroundColor}>
      <Header row={headerLayout[0]} column={headerLayout[1]}>
        <h1>{title || layout}</h1>
        <h2>{subtitle}</h2>
      </Header>
      <Content row={contentLayout[0]} column={contentLayout[1]}>
        {content}
      </Content>
      <Nav row={navLayout[0]} column={navLayout[1]}>
        {nav}
      </Nav>
    </Background>
  );
}

export default PageLayout;
