import { useOutlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function RouteAnimator(props) {
  const routes = props.routes;

  const location = useLocation();
  const currentPageOutlet = useOutlet();

  const currentRoute =
    routes.find(route => route.path === location.pathname) ?? {};
  const { nodeRef } = currentRoute;

  const pageAnimation = currentRoute.animation;

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={200}
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
