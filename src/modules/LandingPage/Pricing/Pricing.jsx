import { Button } from 'primereact/button';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="surface-0">
        <div className="text-900 font-bold text-6xl mb-4 text-center">
          {/* pricingTitle */}
          {t('landing.pricingTitle')}
        </div>
        <div className="text-500 text-xl mb-6 text-center line-height-3">
          {t('landing.pricingDescription')}
        </div>

        <div className="grid">
          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: '6px' }}
              >
                <div className="text-900 font-medium sm:text-xl lg:text-lg xl-text-xl mb-3">
                  {' '}
                  {t('landing.pricingSectionOneTitle')}
                </div>
                <div className="text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                  {' '}
                  {t('landing.pricingSectionOneDesc')}
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold sm:text-2xl lg:text-xl xl:text-2xl text-900 pl-1">
                    $99.00 USD
                  </span>
                  <span className="ml-2 font-medium text-500">
                    {' '}
                    {t('landing.monthly')}
                  </span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg ">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.firstPricingSectionOnePoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.secondPricingSectionOnePoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.thirdPricingSectionOnePoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.fourPricingSectionOnePoint')}</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label={t('landing.startNow')}
                  className="p-3 w-full mt-auto border-0  bg-primary"
                />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: '6px' }}
              >
                <div className="text-900 font-medium text-xl mb-3 sm:text-xl lg:text-lg xl-text-xl mb-3">
                  {' '}
                  {t('landing.pricingSectionTwoTitle')}
                </div>
                <div className="text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg ">
                  {' '}
                  {t('landing.pricingSectionTwoDesc')}
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold  sm:text-2xl lg:text-xl xl:text-2xl text-900 pl-1 ">
                    $199.00 USD
                  </span>
                  <span className="ml-2 font-medium text-500">
                    {' '}
                    {t('landing.monthly')}
                  </span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3 text-500  line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.firstPricingSectionTwoPoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500  line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.secondPricingSectionTwoPoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.thirdPricingSectionTwoPoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.fourPricingSectionTwoPoint')}</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label={t('landing.startNow')}
                  className="p-3 w-full mt-auto  border-0 bg-primary"
                />
              </div>
            </div>
          </div>

          <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
              <div
                className="shadow-2 p-3 h-full flex flex-column"
                style={{ borderRadius: '6px' }}
              >
                <div className="text-900 font-medium text-xl mb-3 sm:text-xl lg:text-lg xl-text-xl mb-3">
                  {' '}
                  {t('landing.pricingSectionThreeTitle')}
                </div>
                <div className="text-500">
                  {' '}
                  {t('landing.pricingSectionThreeDesc')}
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <div className="flex align-items-center">
                  <span className="font-bold  sm:text-2xl lg:text-xl xl:text-2xl text-900 pl-1">
                    $399.00 USD
                  </span>
                  <span className="ml-2 font-medium text-500">
                    {' '}
                    {t('landing.monthly')}
                  </span>
                </div>
                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                <ul className="list-none p-0 m-0 flex-grow-1">
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.firstPricingSectionThreePoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.secondPricingSectionThreePoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500 line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.thirdPricingSectionThreePoint')}</span>
                  </li>
                  <li className="flex align-items-center mb-3 text-500  line-height-2 sm:text-lg lg:text-base xl:text-lg">
                    <i className="pi pi-check-circle text-green-500 ml-2"></i>
                    <span> {t('landing.fourPricingSectionThreePoint')}</span>
                  </li>
                </ul>
                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                <Button
                  label={t('landing.startNow')}
                  className="p-3 w-full p-button-outlined text-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
