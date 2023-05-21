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

  const NAV = (
    <>
      <button
        key={1}
        value="/projects"
        type="button"
        className="projects"
        onMouseEnter={handleHover}
        onMouseLeave={handleReset}
        onClick={handleNavigate}
      >
        Projects
      </button>
      <button
        key={2}
        value="/videos"
        type="button"
        className="videos"
        onMouseEnter={handleHover}
        onMouseLeave={handleReset}
        onClick={handleNavigate}
      >
        Videos
      </button>
      <button
        key={3}
        value="/renders"
        type="button"
        className="renders"
        onMouseEnter={handleHover}
        onMouseLeave={handleReset}
        onClick={handleNavigate}
      >
        Renders
      </button>
      <button
        key={4}
        value="/about"
        type="button"
        className="about"
        onMouseEnter={handleHover}
        onMouseLeave={handleReset}
        onClick={handleNavigate}
      >
        About
      </button>
    </>
  );

  return (
    <HomeLayout
      backgroundImg={BACKGROUNDIMG}
      title={TITLE}
      nav={NAV}
      popouts={POPOUTS}
    />
  );
}

export default Home;
