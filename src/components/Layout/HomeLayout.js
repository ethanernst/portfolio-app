import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
    top: 50%;
    left: 50%;

    filter: brightness(75%);
    transition: transform 150ms ease-out;

    z-index: var(--z-index-home-background);
  }

  .background-transition-enter {
    opacity: 0;
  }

  .background-transition-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  .background-transition-exit {
    opacity: 1;
  }

  .background-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .island {
    position: relative;
    width: 75vh;
    height: 75vh;

    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5, 20%);
    border-radius: 10px;

    z-index: var(--z-index-home-content);
  }

  /* attempt at responsive island sizing, needs work */
  @media screen and (min-height: 1100px) {
    .island {
      width: 75vw;
      height: 75vw;
    }
  }

  @media screen and (min-width: 1100px) {
    .island {
      width: 75vh;
      height: 75vh;
    }
  }

  .nav {
    grid-column: 1 / span 5;
    grid-row: 1 / span 5;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5, 20%);

    button {
      opacity: 1;
      padding: 0;
      margin: 0;
      border: none;
      font: inherit;
      outline: inherit;
      font-size: 2rem;

      color: var(--white);
      background-color: var(--transparent);
      backdrop-filter: blur(5px);
      transition: opacity 0.2s ease-out;
    }

    .btn-active {
      background-color: var(--white);
      color: var(--black);
    }

    .btn-inactive {
      opacity: 0.5;
    }

    .top {
      grid-area: 1 / 2 / span 1 / span 3;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }

    .right {
      grid-area: 2 / 5 / span 3 / span 1;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    .bottom {
      grid-area: 5 / 2 / span 1 / span 3;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
    }

    .left {
      grid-area: 2 / 1 / span 3 / span 1;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }
  }

  .content {
    grid-row: 2 / span 3;
    grid-column: 2 / span 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    opacity: 1;
    transition: opacity 0.2s ease-out;
    background-color: var(--transparent);
    backdrop-filter: blur(5px);

    a {
      text-decoration: none;
    }

    .title {
      margin: 0;
      font-size: 5rem;
      color: var(--white);
    }
    .subtitle {
      font-size: 3rem;
      font-weight: bold;
      color: var(--white);
    }
  }

  .nav-active {
    opacity: 0.5;
  }
`;

function HomeLayout(props) {
  return <Container>{props.children}</Container>;
}

export default HomeLayout;
