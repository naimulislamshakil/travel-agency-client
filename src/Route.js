import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/index.jsx'));
const LoginPage = lazy(() => import('./pages/Auth/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage.jsx'));

export { HomePage, LoginPage, RegisterPage };
