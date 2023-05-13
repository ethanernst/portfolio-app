import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomeLayout from '../components/Layout/HomeLayout';

import defaultImg from '../images/backgrounds/background.webp';
import codeImg from '../images/backgrounds/projects.webp';
import dronesImg from '../images/backgrounds/videos.webp';
import aboutImg from '../images/backgrounds/about.webp';
import artImg from '../images/backgrounds/art.webp';

function Home() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [image, setImage] = useState(defaultImg);
  const [imageLoaded, setImageLoaded] = useState(true);

  // returns the correct image based on the active link
  const getImageFromLink = () => {
    let imgSrc;

    switch (activeLink) {
      case 'projects':
        imgSrc = codeImg;
        break;
      case 'videos':
        imgSrc = dronesImg;
        break;
      case 'art':
        imgSrc = artImg;
        break;
      case 'about':
        imgSrc = aboutImg;
        break;
      default:
        imgSrc = defaultImg;
        break;
    }

    return imgSrc;
  };

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

    navigate(`/${activeLink}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // background image preloader
  useEffect(() => {
    let imgSrc = getImageFromLink();
    if (imgSrc === image) return;
    setImageLoaded(false);

    const img = new Image();
    img.src = imgSrc;
    img.onload = handleImageLoad;
    setImage(imgSrc);
  }, [activeLink]);

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

  return (
    <HomeLayout>
      <TransitionGroup>
        {imageLoaded && (
          <CSSTransition
            timeout={300}
            classNames="background-transition"
            key={image}
          >
            <img
              className="background"
              src={image}
              alt="background"
              style={{
                transform: `translate(-50%, -50%) translate(${
                  -cursorPosition.x / 15
                }px, ${-cursorPosition.y / 15}px)`,
              }}
              onLoad={handleImageLoad}
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      <div className="island">
        <div className="nav">
          <button
            className={`top ${
              activeLink
                ? activeLink === 'art'
                  ? 'btn-active'
                  : 'btn-inactive'
                : ''
            }`}
            value="art"
            type="button"
            onMouseEnter={handleHover}
            onMouseLeave={handleReset}
            onClick={handleNavigate}
          >
            3D
          </button>
          <button
            className={`right ${
              activeLink
                ? activeLink === 'videos'
                  ? 'btn-active'
                  : 'btn-inactive'
                : ''
            }`}
            value="videos"
            type="button"
            onMouseEnter={handleHover}
            onMouseLeave={handleReset}
            onClick={handleNavigate}
          >
            Videos
          </button>
          <button
            className={`bottom ${
              activeLink
                ? activeLink === 'about'
                  ? 'btn-active'
                  : 'btn-inactive'
                : ''
            }`}
            value="about"
            type="button"
            onMouseEnter={handleHover}
            onMouseLeave={handleReset}
            onClick={handleNavigate}
          >
            About
          </button>
          <button
            className={`left ${
              activeLink
                ? activeLink === 'projects'
                  ? 'btn-active'
                  : 'btn-inactive'
                : ''
            }`}
            value="projects"
            type="button"
            onMouseEnter={handleHover}
            onMouseLeave={handleReset}
            onClick={handleNavigate}
          >
            Projects
          </button>
        </div>
        <div className={`content ${activeLink ? 'nav-active' : ''}`}>
          <h1 className="title">Welcome</h1>
          {/* <a className="subtitle" href="http://www.github.com/ethanernst">
            <span>git</span>
          </a> */}
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
