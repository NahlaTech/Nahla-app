import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function UserNavbar() {
  const { t } = useTranslation();

  return (
    <nav className="flex align-items-center justify-content-between mb-7">
      <div className="font-bold ml-2 pl-6 py-3 text-primary text-5xl">
        {t('logoTitle')}
      </div>
      <div className='className="flex-1 flex align-items-center justify-content-center font-bold pr-4 py-3 border-round"'>
        <ul className="flex list-none gap-5">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
              }
            >
              {t('Home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item no-underline text-black-alpha-90 ${isActive ? 'text-helper' : ''}`
              }
            >
              {t('landing.about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
              }
            >
              {t('landing.features')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
              }
            >
              {t('landing.blog')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
              }
            >
              {t('landing.prices')}
            </NavLink>
          </li>{' '}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
              }
            >
              {t('landing.contact')}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="font-bold pr-6 py-3 border-round flex gap-3">
        <Link to="/">
          <Button
            label={t('login')}
            className="p-button-secondary bg-primary border-primary px-5"
          />
        </Link>
        <Link to="/">
          <Button
            label={t('createAccount')}
            className="p-button-secondary border-primary bg-white text-primary px-5"
          />
        </Link>
      </div>
    </nav>
  );
}
