import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../App';
import HomeLayout from '../components/Layout/HomeLayout';

import backgroundImg from '../images/backgrounds/background.webp';

function Home() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // handler functions
  const handleHover = element => {
    if (activeLink === element.target.value) return;

    setActiveLink(element.target.value);
  };

  const handleReset = () => {
    if (!activeLink) return;

    setActiveLink(null);
  };

  const handleNavigate = () => {
    if (!activeLink) return;

    navigate(activeLink, { state: { fromHome: true } });
  };

  // background image animator
  useEffect(() => {
    const handleMouseMove = e => {
      const newX = e.clientX - window.innerWidth / 2;
      const newY = e.clientY - window.innerHeight / 2;
      setCursorPosition({ x: newX, y: newY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const TITLE = 'Welcome';

  const BACKGROUNDIMG = (
    <img
      className="background"
      src={backgroundImg}
      alt="background"
      style={{
        transform: `translate(-50%, -50%) translate(${
          -cursorPosition.x / 15
        }px, ${-cursorPosition.y / 15}px)`,
      }}
    />
  );

  const directions = ['up', 'down', 'left', 'right'];
  const activeDirection = routes.find(
    route => route.path === activeLink
  )?.animation;

  const POPOUTS = directions.map((direction, i) => {
    const classes =
      direction === activeDirection
        ? `${direction} ${direction}-active`
        : direction;

    return <div className={classes} key={i} />;
  });

  const pages = ['projects', 'renders', 'about', 'videos'];
  const NAV = pages.map((page, index) => (
    <button
      key={index}
      type="button"
      value={`/${page}`}
      className={page}
      onMouseEnter={handleHover}
      onMouseLeave={handleReset}
      onClick={handleNavigate}
    >
      {page[0].toUpperCase() + page.substring(1)}
    </button>
  ));

  const SIZE = [window.innerWidth, window.innerHeight];

  return (
    <HomeLayout
      title={TITLE}
      backgroundImg={BACKGROUNDIMG}
      popouts={POPOUTS}
      nav={NAV}
      size={SIZE}
    />
  );
}

export default Home;
