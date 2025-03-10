import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomelaptopHero } from '../../../assets/assets';
import Style from './Features.module.css';

const Features = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid mt-8">
        <div className="col-6 col-offset-1">
          <h3 className="text-5xl text-blackBold m-0">
            {t('landing.firstFeaturesTitle')} {t('landing.featuresWord')}
          </h3>
          <p className="font-light text-500 mt-4">
            {t('landing.secondFeaturesTitle')}
            <span className="font-semibold">{t('landing.colon')}</span>
          </p>
          <p className=" font-light text-500 mt-6">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.fisrt')}
            </p>
            {t('landing.firstFeaturesParagraph')}
          </p>

          <p className=" font-light text-500 mt-6">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.second')}
            </p>
            {t('landing.secondFeaturesParagraph')}
          </p>

          <p className=" font-light text-500 mt-6">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.third')}
            </p>
            {t('landing.thirdFeaturesParagraph')}
          </p>
        </div>
        <div className="col-5">
          <img
            className="w-full p-5 "
            src={HomelaptopHero}
            alt="Features Image"
          />
        </div>
      </div>

      <div className="mt-8 flex h-30rem">
        <div className="w-6">
          <img className="w-full" src={HomelaptopHero} />
        </div>
        <div className="w-6 px-6">
          <h2 className="text-3xl">aaa</h2>
          <h3 className="font-light text-500">aaa</h3>
          <ul className="mt-5">
            <li className="font-light text-500 mt-4">
              {' '}
              {t('landing.firstFeaturesPoint')}{' '}
            </li>
            <li className="font-light text-500 mt-4">
              {t('landing.secondFeaturesPoint')}{' '}
            </li>
            <li className="font-light text-500 mt-4">
              {t('landing.thirdFeaturesPoint')}{' '}
            </li>
            <li className="font-light text-500 mt-4">
              {t('landing.fourFeaturesPoint')}{' '}
            </li>
            <li className="font-light text-500 mt-4">
              {t('landing.fiveFeaturesPoint')}{' '}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
