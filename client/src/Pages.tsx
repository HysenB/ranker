import React from 'react';
import Welcome from './pages/Welcome';
import { AppPage, state } from './state';
import { Create } from './pages/Create';
import { Join } from './pages/Join';
import { CSSTransition } from 'react-transition-group';
import { useSnapshot } from 'valtio';


const routerConfig = {
  [AppPage.Welcome]: Welcome,
  [AppPage.Create]: Create,
  [AppPage.Join]: Join,
}

const Pages: React.FC = () => {
  const currentState = useSnapshot(state);
  return (
    <>
      {Object.entries(routerConfig).map(([page, Component]) => (
        <CSSTransition
          key={page}
          in={page === currentState.currentPage}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="max-w-screen-sm px-4 py-8 mx-auto page mobile-height">
            <Component />
          </div>
        </CSSTransition>
      ))}
    </>

  )
}
export default Pages