import { useContext } from 'react';
import { useOutlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { GlobalContext } from '../store/GlobalContext';

function RouteAnimator() {
  const location = useLocation();
  const currentPageOutlet = useOutlet();

  const { routes } = useContext(GlobalContext);

  const currentRoute = routes
    ? routes.find(route => route.path === location.pathname) ?? {}
    : {};
  const { nodeRef } = currentRoute;

  const pageAnimation = currentRoute.animation;

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={250}
        classNames={pageAnimation}
      >
        {_ => (
          <div ref={nodeRef} className={'panel'}>
            {currentPageOutlet}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default RouteAnimator;
