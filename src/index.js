import React from 'react';
      import ReactDOM from 'react-dom/client';
      import './index.css';
      import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
      import Root from './routes/root';
      import Login from './routes/Login';
    import Home from './routes/home';
import { AuthProvider } from './context/AuthContext';
      const router = createBrowserRouter([
          {
              path: '',
              element: <Root />,
              children: [
                  {
                      index: true, // This makes it the default route for the parent path
                      element: <Navigate to="/home" replace />, // Redirect to /home
                  },
                  {
                      path: 'login',
                      element: <Login />,
                  },
                  {
                      path: 'home',
                      element: <Home />,
                  },

              ],
          },
      ]);

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
          <React.StrictMode>
            <AuthProvider>
              <RouterProvider router={router} />
              </AuthProvider>
          </React.StrictMode>
      );