import styled from 'styled-components';

const handleContentLayout = layout => {
  switch (layout) {
    case '/projects':
      return 'grid-row: 3 / span 10; grid-column: 1 / span 8;';
    case 'top':
      return 'grid-row: 3 / span 10; grid-column: 1 / span 10;';
    case 'right':
      return 'grid-row: 3 / span 10; grid-column: 3 / span 10;';
    case 'bottom':
      return 'grid-row: 3 / span 5; grid-column: 1 / span 5;';
    default:
      return '';
  }
};

const Content = styled.main`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  color: var(--white);
  background-color: var(--background);

  .header {
    position: relative;
    grid-row: 1 / span 2;
    grid-column: 1 / span 10;
    display: flex;
    align-items: end;

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
  }

  .content {
    position: relative;
    /* ${({ layout }) => handleContentLayout(layout)} */
    grid-row: 3 / span 10;
    grid-column: 1 / span 8;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    overflow-y: auto;
  }

  .nav {
    position: relative;
    grid-row: 3 / span 10;
    grid-column: 9 / span 10;

    background-color: var(--gray);
  }
`;

function PageLayout(props) {
  return <Content>{props.children}</Content>;
}

export default PageLayout;
