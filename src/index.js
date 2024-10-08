import React from 'react';
      import ReactDOM from 'react-dom/client';
      import './index.css';
      import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
      import Root from './routes/root';
      import Signup from './routes/signup';
      import Login from './routes/login';

      const router = createBrowserRouter([
          {
              path: '',
              element: <Root />,
              children: [
                  {
                      index: true, // This makes it the default route for the parent path
                      element: <Navigate to="/signup" replace />, // Redirect to /signup
                  },
                  {
                      path: 'signup',
                      element: <Signup />,
                  },
                  {
                      path: 'login',
                      element: <Login />,
                  },
              ],
          },
      ]);

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
          <React.StrictMode>
              <RouterProvider router={router} />
          </React.StrictMode>
      );