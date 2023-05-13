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
    <>
      {/* 

      === Testing multiple animated layers on one page change ===

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={navRef}
          timeout={200}
          classNames={navigatorAnimation}
          unmountOnExit
        >
          {_ => (
            <div ref={navRef} className={'navigator'}>
              <Navigator routes={routes} />
            </div>
          )}
        </CSSTransition>
      </SwitchTransition> */}
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={200}
          classNames={pageAnimation}
          unmountOnExit
        >
          {_ => (
            <div ref={nodeRef} className={'panel'}>
              {currentPageOutlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default RouteAnimator;
