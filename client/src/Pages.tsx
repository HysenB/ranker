import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSnapshot } from 'valtio';
import { WaitingRoom } from './pages/WaitingRoom';
import Welcome from './pages/Welcome';
import { actions, AppPage, state } from './state';
import { Create } from './pages/Create';
import { Join } from './pages/Join';

const routeConfig = {
  [AppPage.Welcome]: Welcome,
  [AppPage.Create]: Create,
  [AppPage.Join]: Join,
  [AppPage.WaitingRoom]: WaitingRoom,
};

const Pages: React.FC = () => {
  const currentState = useSnapshot(state);

  useEffect(() => {
    if (currentState.me?.id && !currentState.poll?.hasStarted) {
      actions.setPage(AppPage.WaitingRoom);
    }

    // add sequential check here
  }, [currentState.me?.id, currentState.poll?.hasStarted]);

  return (
    <>
      {Object.entries(routeConfig).map(([page, Component]) => (
        <CSSTransition
          key={page}
          in={page === currentState.currentPage}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div className="max-w-screen-sm px-4 py-8 mx-auto overflow-y-auto page mobile-height">
            <Component />
          </div>
        </CSSTransition>
      ))}
    </>
  );
};

export default Pages;