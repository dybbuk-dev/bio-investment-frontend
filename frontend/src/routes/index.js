import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <ChooseRegisterMode />
            </GuestGuard>
          ),
        },
        {
          path: 'register-primary',
          element: (
            <GuestGuard>
              <PersonalMode />
            </GuestGuard>
          ),
        },
        {
          path: 'register-legal',
          element: (
            <GuestGuard>
              <LegalMode />
            </GuestGuard>
          ),
        },
        {
          path: 'register-invest',
          element: (
            <GuestGuard>
              <BusinessMode />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        { path: 'referal-link', element: <GeneralReferal /> },
        { path: 'profile/:page', element: <Profile /> },
        { path: 'buy-token', element: <BuyToken /> },
        { path: 'buy-token/:id', element: <BuyTokenDetail /> },
        { path: 'trading-token', element: <TradingToken /> },
        { path: 'withdraw', element: <Withdraw /> },
        { path: 'deposit', element: <Deposit /> },
        { path: 'my-invest', element: <MyInvestment /> },
        { path: 'banking', element: <GeneralBanking /> },
        { path: 'booking', element: <GeneralBooking /> },
        


      ],
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        // { element: <HomePage />, index: true },
        { element: <Navigate to="/auth/login" replace /> , index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const Register = Loadable(lazy(() => import('../pages/auth/Register')));
const ChooseRegisterMode = Loadable(lazy(() => import('../pages/auth/ChooseRegisterMode')));
const PersonalMode = Loadable(lazy(() => import('../pages/auth/PersonalMode')));
const LegalMode = Loadable(lazy(() => import('../pages/auth/LegalMode')));
const BusinessMode = Loadable(lazy(() => import('../pages/auth/BusinessMode')));

const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// Dashboard
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const GeneralReferal = Loadable(lazy(() => import('../pages/dashboard/GeneralReferal')));
const Profile = Loadable(lazy(() => import('../pages/dashboard/Profile')));
const BuyToken = Loadable(lazy(() => import('../pages/dashboard/BuyToken')));
const MyInvestment = Loadable(lazy(() => import('../pages/dashboard/MyInvestment')));
const BuyTokenDetail = Loadable(lazy(() => import('../pages/dashboard/BuyTokenDetail')));
const TradingToken = Loadable(lazy(() => import('../pages/dashboard/TradingToken')));



const GeneralBanking = Loadable(lazy(() => import('../pages/dashboard/GeneralBanking')));
const GeneralBooking = Loadable(lazy(() => import('../pages/dashboard/GeneralBooking')));

// Transfer
const Withdraw = Loadable(lazy(() => import('../pages/dashboard/Withdraw')));
const Deposit = Loadable(lazy(() => import('../pages/dashboard/Deposit')));

// Main
const HomePage = Loadable(lazy(() => import('../pages/Home')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
