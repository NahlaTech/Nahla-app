import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router';
// import authImg from '../assets/auth.jpg';
import './Auth.css';
const AuthenticationLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <>
      <div className="grid m-0">
        <div className="col-12 lg:col-7 p-0">
          <Outlet />
        </div>
        <div className="lg:col-5 imgParent text-center p-0">
          <p>
            {' '}
            {location.pathname === '/auth/signup'
              ? t('signupJoinWithUs')
              : t('loginJoinWithUs')}{' '}
          </p>
          {/* <img className="w-12 h-full imgChild" src={authImg} alt="img" /> */}
        </div>
      </div>
    </>
  );
};

export default AuthenticationLayout;
