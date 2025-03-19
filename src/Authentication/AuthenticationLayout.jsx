import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router';
// import authImg from '../assets/auth.jpg';

const AuthenticationLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <>
      <div className="grid h-full m-0">
        <div className="col-12 lg:col-7  h-full">
          <Outlet />
        </div>
        <div className="lg:col-5 p-0 imgParent text-center h-screen">
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
