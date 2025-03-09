import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HomelaptopHero } from '../../assets/assets';

export default function HeroSection() {
  const { t } = useTranslation();
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
    </section>
  );
}
