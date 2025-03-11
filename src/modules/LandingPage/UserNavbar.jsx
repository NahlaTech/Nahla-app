// import { useTranslation } from 'react-i18next';
// import { NavLink, Link } from 'react-router-dom';
// import { Button } from 'primereact/button';

// export default function UserNavbar() {
//   const { t } = useTranslation();

//   return (
//     <nav className="flex align-items-center justify-content-between mb-7 ">
//       <div className="font-bold ml-2 pl-6 py-3 text-primary text-5xl">
//         {t('logoTitle')}
//       </div>
//       <div className="flex-1 flex align-items-center justify-content-center font-bold pr-4 py-3 border-round sm:hidden md:flex lg:flex lx:flex">
//         <ul className="flex list-none gap-5">
//           <li>
//             <NavLink
//               to="/home"
//               className={({ isActive }) =>
//                 `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
//               }
//             >
//               {t('Home')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-item no-underline text-black-alpha-90 ${isActive ? 'text-helper' : ''}`
//               }
//             >
//               {t('landing.about')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
//               }
//             >
//               {t('landing.features')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
//               }
//             >
//               {t('landing.blog')}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
//               }
//             >
//               {t('landing.prices')}
//             </NavLink>
//           </li>{' '}
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `nav-item no-underline text-black-alpha-90 ${isActive ? 'color-helper' : ''}`
//               }
//             >
//               {t('landing.contact')}
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="font-bold pr-6 py-3 border-round md:flex gap-3 sm:hidden ">
//         <Link to="/">
//           <Button
//             label={t('login')}
//             className="p-button-secondary bg-primary border-primary px-5"
//           />
//         </Link>
//         <Link to="/">
//           <Button
//             label={t('createAccount')}
//             className="p-button-secondary border-primary bg-white text-primary px-5"
//           />
//         </Link>
//       </div>
//     </nav>
//   );
// }

// ---------------------------------------
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { Bars3Icon } from '@heroicons/react/24/outline';
import HeroSection from './HeroSection';
import Features from './Features/Features';
import Pricing from './Pricing';

export default function UserNavbar() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  // Create refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const blogRef = useRef(null);
  const pricesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = ref => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Navbar menu items
  const items = [
    { label: t('Home'), command: () => scrollToSection(homeRef) },
    { label: t('landing.about'), command: () => scrollToSection(aboutRef) },
    {
      label: t('landing.features'),
      command: () => scrollToSection(featuresRef),
    },
    { label: t('landing.blog'), command: () => scrollToSection(blogRef) },
    { label: t('landing.prices'), command: () => scrollToSection(pricesRef) },
    { label: t('landing.contact'), command: () => scrollToSection(contactRef) },
  ];
  // Navbar menu items
  // const items = [
  //   // icon: 'pi pi-home',
  //   { label: t('Home'), url: '/home' },
  //   { label: t('landing.about'), url: '/' },
  //   { label: t('landing.features'), url: '/' },
  //   { label: t('landing.blog'), url: '/' },
  //   { label: t('landing.prices'), url: '/' },
  //   { label: t('landing.contact'), url: '/' },
  // ];

  const start = (
    <div className="text-primary font-bold text-5xl">{t('logoTitle')}</div>
  );

  const end = (
    <div className="hidden md:flex  gap-3">
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
  );

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full ">
        <Menubar
          className=" md:flex justify-content-between bg-white border-0 p-0 sm:text-base md:text-base lg:text-xs xl:text-lg"
          model={items}
          start={start}
          end={end}
        />
      </div>

      {/* Mobile Navbar */}
      {/* <div className="flex justify-between align-items-center items-center md:hidden w-full ">
        <div className="flex justify-content-start flex-grow-1 ">
          <Bars3Icon
            onClick={() => setVisible(true)}
            className="w-1 h-1 text-gray-600"
          />
        </div>
        {start}
      </div> */}

      {/* Sidebar for Mobile Menu */}
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <Menu model={items} className="w-full border-0" />
        <div className="mt-4 flex flex-col gap-3">
          <Link to="/">
            <Button
              label={t('login')}
              className="p-button-secondary bg-primary border-primary w-full text-sm"
            />
          </Link>
          <Link to="/">
            <Button
              label={t('createAccount')}
              className="p-button-secondary border-primary bg-white text-primary w-full text-sm"
            />
          </Link>
        </div>
      </Sidebar>

      {/* Sections
      <div ref={homeRef}>
        <HeroSection />
      </div>
    
      <div ref={featuresRef}>
        <Features />
      </div>
     
      <div ref={pricesRef}>
        <Pricing />
      </div> */}
    </>
  );
}
