import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import Home from './home.tsx';
import FAQ from './faq.tsx';
import Repository from './repo.tsx';
import Spaces from './spaces_main.tsx';
import Profile from './profile.tsx';
import Login from './login.tsx';
import SignUp from './signup.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/repository', element: <Repository /> },
  { path: '/spaces', element: <Spaces /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/profile', element: <Profile /> },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);