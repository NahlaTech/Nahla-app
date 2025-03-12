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
import './UserNavbar.css';

export default function UserNavbar({
  heroRef,
  featuresRef,
  pricingRef,
  contactRef,
}) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  // Scroll to section function
  const scrollToSection = ref => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(ref.current);
    // setVisible(false); // Close sidebar after clicking a link
  };

  // Navbar menu items with scroll functionality
  const items = [
    { label: t('Home'), command: () => scrollToSection(heroRef) },
    { label: t('landing.about'), command: () => scrollToSection(aboutRef) },
    {
      label: t('landing.features'),
      command: () => scrollToSection(featuresRef),
    },
    { label: t('landing.blog'), command: () => scrollToSection(blogRef) },
    { label: t('landing.prices'), command: () => scrollToSection(pricingRef) },
    { label: t('landing.contact'), command: () => scrollToSection(contactRef) },
  ];

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
      <div className="w-full sectionPadding md:px-7 ">
        <Menubar
          className=" md:flex justify-content-between bg-white border-0 p-0 sm:text-base md:text-base lg:text-xs xl:text-lg"
          model={items}
          start={start}
          end={end}
        />
      </div>
    </>
  );
}
