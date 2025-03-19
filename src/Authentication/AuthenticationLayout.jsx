import React from 'react';
import { Outlet } from 'react-router';
// import authImg from '../assets/auth.jpg';

const AuthenticationLayout = () => {
  return (
    <>
      <div className="grid ">
        <div className="col-12 lg:col-7 ">
          <Outlet />
        </div>
        <div className="lg:col-5 p-0 imgParent text-center">
          {/* <p className="text-4xl text-primary z-4">سجل معانا</p> */}
          {/* <img className="w-12 h-full imgChild" src={authImg} alt="img" /> */}
        </div>
      </div>
    </>
  );
};

export default AuthenticationLayout;
