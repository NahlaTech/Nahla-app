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
        <div className="col-6 col-offset-1">
          <h3 className="text-4xl text-blackBold m-0">
            {t('landing.firstFeaturesTitle')} {t('landing.featuresWord')}
          </h3>
          <p className="text-500 mt-4 text-lg line-height-4">
            {t('landing.secondFeaturesTitle')}
            <span className="font-semibold">{t('landing.colon')}</span>
          </p>
          <p className="text-500 mt-4 text-lg line-height-4">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.fisrt')}
            </p>
            {t('landing.firstFeaturesParagraph')}
          </p>

          <p className="text-500 mt-4 text-lg line-height-4">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.second')}
            </p>
            {t('landing.secondFeaturesParagraph')}
          </p>

          <p className="text-500 mt-4 text-lg line-height-4">
            <p className="font-semibold inline text-black-alpha-80">
              {t('landing.third')}
            </p>
            {t('landing.thirdFeaturesParagraph')}
          </p>
        </div>
        <div className="col-5 pl-0">
          <img className="w-full pl-0" src={featureimg1} alt="Features Image" />
        </div>
      </div>

      <div className="mt-8 flex h-30rem">
        <div className="w-6">
          <img className="w-full" src={featureimg2} />
        </div>
        <div className="w-6 px-6">
          <h2 className="text-3xl">{t('landing.thirdFeaturesTitle')}</h2>
          <h3 className="font-light text-500">
            {t('landing.thirdFeaturesSubTitle')}
          </h3>
          <ul className="mt-5">
            <li className="text-lg text-500 mt-4">
              {' '}
              {t('landing.firstFeaturesPoint')}{' '}
            </li>
            <li className="text-lg text-500 mt-4">
              {t('landing.secondFeaturesPoint')}{' '}
            </li>
            <li className="text-lg text-500 mt-4">
              {t('landing.thirdFeaturesPoint')}{' '}
            </li>
            <li className="text-lg text-500 mt-4">
              {t('landing.fourFeaturesPoint')}{' '}
            </li>
            <li className="text-lg   text-500 mt-4">
              {t('landing.fiveFeaturesPoint')}{' '}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Features;
