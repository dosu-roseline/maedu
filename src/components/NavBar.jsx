import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart.svg';
import bell from '../assets/bell.svg';
import profile from '../assets/profile.svg';

function NavBar() {
  return (
    <header className="bg-[#160632] px-[20px] md:px-[50px] py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between md:border-b-[0.5px] border-[#CBCAD3] md:pb-4">
        <Link to="/">
          <img src={logo} alt="Maedu Logo" className="h-[30px]" />
        </Link>

        <input
          type="text"
          placeholder="Search"
          className="hidden md:block bg-[#CBCAD3] py-2 px-5 w-[35%] rounded-lg outline-none placeholder:text-white"
        />
        <div className="items-center space-x-4 hidden md:flex">
          <Link to="/cart">
            <img src={cart} alt="Cart Icon" className="h-[20px]" />
          </Link>
          <img src={bell} alt="Notification Icon" className="h-[25px]" />
          <img src={profile} alt="Profile Icon" className="h-[30px]" />
        </div>
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
