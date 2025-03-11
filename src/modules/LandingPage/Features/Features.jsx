import React from 'react';
import { useTranslation } from 'react-i18next';
import { HomelaptopHero } from '../../../assets/assets';
import { featureimg1 } from '../../../assets/assets';
import { featureimg2 } from '../../../assets/assets';

import Style from './Features.module.css';

const Features = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid mt-8">
        <div className="sm:col-12 md:col-6 md:col-offset-1">
          <h3 className="text-4xl text-blackBold m-0">
            {t('landing.firstFeaturesTitle')} {t('landing.featuresWord')}
          </h3>
          <p className="md:text-base lg:text-lg text-500 mt-4  line-height-4 ">
            {t('landing.secondFeaturesTitle')}
            <span className="font-semibold">{t('landing.colon')}</span>
          </p>
          <p className="md:text-base lg:text-lg text-500 mt-4 text-lg line-height-4">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.fisrt')}
            </p>
            {t('landing.firstFeaturesParagraph')}
          </p>

          <p className="md:text-base lg:text-lg text-500 mt-4 text-lg line-height-4">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.second')}
            </p>
            {t('landing.secondFeaturesParagraph')}
          </p>

          <p className="md:text-base lg:text-lg text-500 mt-4 text-lg line-height-4">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.third')}
            </p>
            {t('landing.thirdFeaturesParagraph')}
          </p>
        </div>
        <div className=" pl-0 sm:hidden md:block md:col-4 md:flex md:align-items-center lg:col-5">
          <img className="w-full pl-0" src={featureimg1} alt="Features Image" />
        </div>
      </div>

      <div className="mt-8 grid h-30rem">
        <div className="sm:hidden md:block md:col-4 md:flex md:align-items-center md:col-offset-1 lg:col-5">
          <img className="w-full" src={featureimg2} />
        </div>
        <div className="sm:col-12 md:col-6">
          <h2 className="text-3xl">{t('landing.thirdFeaturesTitle')}</h2>
          <h3 className="md:text-base lg:text-lg font-light text-500">
            {t('landing.thirdFeaturesSubTitle')}
          </h3>
          <ul className="mt-5">
            <li className="md:text-base lg:text-lg text-500 mt-4">
              {' '}
              {t('landing.firstFeaturesPoint')}{' '}
            </li>
            <li className="md:text-base lg:text-lg text-500 mt-4">
              {t('landing.secondFeaturesPoint')}{' '}
            </li>
            <li className="md:text-base lg:text-lg text-500 mt-4">
              {t('landing.thirdFeaturesPoint')}{' '}
            </li>
            <li className="md:text-base lg:text-lg text-500 mt-4">
              {t('landing.fourFeaturesPoint')}{' '}
            </li>
            <li className="md:text-base lg:text-lg   text-500 mt-4">
              {t('landing.fiveFeaturesPoint')}{' '}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
