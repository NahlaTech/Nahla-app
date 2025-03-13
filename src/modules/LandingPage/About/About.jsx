import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import Style from './About.module.css';

const About = () => {
  const { t } = useTranslation();
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className={`${Style.bgSection} mt-5 md:mt-7 pb-8 pt-3`}>
        <h2 className="text-center text-primary font-bold text-5xl">
          {' '}
          {t('landing.aboutTitle')}
        </h2>
        <Slider {...settings}>
          <div className="text-center">
            <h3 className="my-4">{t('landing.aboutsectionOneTitle')}</h3>
            <p className="text-500">{t('landing.aboutsectionOneDesc')}</p>
          </div>
          <div className="text-center">
            <h3 className="my-4">{t('landing.aboutsectionTwoTitle')}</h3>
            <p className="text-500">{t('landing.aboutsectionTwoDesc')}</p>
          </div>
          <div className="text-center">
            <h3 className="my-4">{t('landing.aboutsectionThirdTitle')}</h3>
            <p className="text-500">{t('landing.aboutsectionThirdDesc')}</p>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default About;
