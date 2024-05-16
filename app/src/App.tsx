import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Privacy } from './pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'privacy-policy',
      element: <Privacy />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
