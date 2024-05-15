import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'privacy-policy',
      element: <div>Privacy policy</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
