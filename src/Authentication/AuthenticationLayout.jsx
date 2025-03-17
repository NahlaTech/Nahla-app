import React from 'react';
import { Outlet } from 'react-router';

const AuthenticationLayout = () => {
  return (
    <>
      <div className="grid w-full h-screen">
        <div className="col-6">
          <Outlet />
        </div>
        <div className="col-6">
          <div>layout</div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationLayout;
