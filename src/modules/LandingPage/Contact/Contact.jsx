import { Button } from 'primereact/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Style from './Contact.module.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${Style.bgSection} p-7 mt-5 md:mt-8`}>
        <div className="text-700 text-center ">
          <div className="text-blue-600 font-bold mb-3 text-primary">
            {/* <i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD */}
            {t('landing.contactTitle')}
          </div>
          <div className="text-900 font-bold text-5xl mb-3">
            {t('landing.contactTitleTwo')}
          </div>
          <div className="text-500 text-2xl mb-5 py-3">
            {t('landing.contactDesc')}
          </div>
          <a href="mailto:hlaelgibaly22@gmail.com">
            <Button
              label={t('landing.joinNow')}
              //   icon="pi pi-discord"
              className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap bg-primary"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
