import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HomelaptopHero } from '../../assets/assets';
import img4 from '../../images/airbnb.png';
import img2 from '../../images/book.png';
import img1 from '../../images/google.png';
import img3 from '../../images/verboo.png';
import './HeroSection.css';

export default function HeroSection() {
  const { t } = useTranslation();
  console.log(t);
  return (
    <section className="mb-8">
      <div className="flex">
        <div className="mt-5 pl-8">
          <h2 className="text-5xl text-blackBold m-0">
            {t('landing.firstHeroTitle')}
          </h2>
          <p className="min-w-8 textGray  line-height-4 text-lg text-wrap break-words py-3 mt-0 text-500">
            {t('landing.firstHeroDescription')}
          </p>
          <Link to="/" className="no-underline block w-full">
            <Button
              label={t('landing.getStarted')}
              className="p-button-secondary border-primary bg-primary text-primary px-6"
            />
          </Link>
        </div>
        <div className="w-7 ">
          <img
            className="w-full pt-5"
            src={HomelaptopHero}
            alt="laptop picture as a hero photo"
          />
        </div>
      </div>

      <div className="container">
        <div class="grid mt-8">
          <div class="col-3 flex justify-content-center">
            <img src={img1} w-full height={75} />
          </div>
          <div class="col-3 flex justify-content-center">
            <img src={img2} w-full height={75} />
          </div>
          <div class="col-3 flex justify-content-center">
            <img src={img3} w-full height={75} />
          </div>
          <div class="col-3 flex justify-content-center">
            <img src={img4} w-full height={75} />
          </div>
        </div>
      </div>
    </section>
  );
}
