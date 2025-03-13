import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="surface-200 p-3 flex justify-content-center  align-items-center flex-wrap">
        {/* <div className="font-bold mr-8">🔥 Hot Deals!</div> */}
        <div className="flex  justify-content-center align-items-center text-lg">
          <span className=" text-500">
            {' '}
            &copy; 2025
            {t('landing.footerDesc')}
          </span>
          <span className=" text-primary px-1 font-bold">
            {' '}
            {t('landing.footerWord')}
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
