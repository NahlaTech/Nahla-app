import React from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // To handle navigation
  return (
    <div className="flex flex-column align-items-center justify-content-center  w-full h-screen p-4 md:p-0 ">
      <h1 className="text-8xl font-bold mb-4 mt-0 text-center text-primary  ">
        404
      </h1>
      <p className="text-center mt-5 mb-4 text-500">
        {t('notFound.notFoundDesc')}
      </p>

      <button
        onClick={() => navigate('/')}
        className="bg-primary font-bold border-round-2xl border-none mx-auto p-3 text-white "
      >
        {t('notFound.notFoundgoHome')}
      </button>
    </div>
  );
};

export default NotFoundPage;
