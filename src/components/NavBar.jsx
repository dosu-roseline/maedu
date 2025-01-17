import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import logo from '../assets/logo.png';
import cart from '../assets/cart.svg';
import bell from '../assets/bell.svg';
import profile from '../assets/profile.svg';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-[#160632] px-[20px] md:px-[50px] py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between md:border-b-[0.5px] border-[#CBCAD3] md:pb-4">
        <Link to="/">
          <img src={logo} alt="Maedu Logo" className="h-[30px]" />
        </Link>

        {!isHomePage && (
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block bg-[#CBCAD3] py-2 px-5 w-[35%] rounded-lg outline-none placeholder:text-white"
          />
        )}

        <div className="items-center space-x-4 hidden md:flex">
          <Link to="/store/cart">
            <img src={cart} alt="Cart Icon" className="h-[20px]" />
          </Link>
          <img src={bell} alt="Notification Icon" className="h-[25px]" />
          <img src={profile} alt="Profile Icon" className="h-[30px]" />
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  dark:text-gray-400 "
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <IoMdClose color="#fff" size="30" />
          ) : (
            <RxHamburgerMenu color="#fff" size="30" />
          )}
        </button>
      </div>
      <nav className="hidden md:block pt-4">
        <ul className="space-x-4">
          {data.map((data, index) => (
            <NavLink
              key={index}
              to={data.src}
              className="text-[14px] font-normal text-[#FBFBFE] uppercase"
            >
              {data.label}
            </NavLink>
          ))}
        </ul>
      </nav>
      {isMenuOpen && (
        <div
          className={`w-full md:w-auto absolute top-[4.3rem] left-0 md:hidden`}
          id="navbar-default"
        >
          <ul className="flex flex-col px-5 py-7 gap-5 z-50 bg-white w-full h-[100vh]">
            {/* Map over the navLinks array */}
            {data.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.src}
                  onClick={closeMenu}
                  className="font-semibold text-[20px]"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

const data = [
  {
    label: 'Home',
    src: '/',
  },
  {
    label: 'Store',
    src: '/store',
  },
  {
    label: 'About',
    src: '/about',
  },
];

export default NavBar;
