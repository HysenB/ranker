import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Users } from './pages/users/Users';

import { createRoot } from "react-dom/client";
import NewUser from './pages/users/NewUser';
import EditUser from './pages/users/EditUser';
import DeleteUser from './pages/users/DeleteUser';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />
  },
  {
    path: "/users",
    element: <Users />,
    children: [
      {
        path: 'new',
        element: <NewUser />
      },
      {
        path: 'edit/:id',
        element: <EditUser />
      },
      {
        path: 'delete/:id',
        element: <DeleteUser />
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(

//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <App /> */}
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
