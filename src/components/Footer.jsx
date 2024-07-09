import { Link } from 'react-router-dom';
import logo from '../assets/footerLogo.svg';
import logo2 from '../assets/footerLogo2.svg';
import mastercard from '../assets/mastercard.svg';
import dhl from '../assets/dhl.svg';
import fedEx from '../assets/fedEx.svg';
import max from '../assets/max.svg';
import visa from '../assets/visa.svg';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

function Footer() {
  return (
    <footer className="px-[20px] md:px-[50px] bg-[#FAFAFA] py-8">
      <div className="flex items-end md:justify-end pb-4 md:pb-8">
        <img src={logo} alt="" className="h-[40px] md:h-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-5">
        <div className="col-span-2 md:col-span-4 lg:col-span-3 md:order-5 md:pt-8">
          <h1 className="pb-3 md:text-[20px]">New to Maedu?</h1>
          <p className="text-[14px] pb-3">
            Subscribe to our newsletter to get latest update on our offers.
          </p>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[65%] text-[14px] md:text-[16px] md:w-[70%] rounded-[8px] bg-[#E3E3E3] placeholder:text-[#898384] px-[20px] py-[10px]"
            />
            <button
              type="submit"
              className="w-[35%] text-[14px] md:text-[16px] md:w-[30%] bg-[#5E2764] text-white px-[20px] py-[10px] rounded-[8px]"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="pb-3 md:text-[20px]">Company</h1>
          <ul className="">
            <li>
              <Link className="">Home</Link>
            </li>
            <li>
              <Link className="">Store</Link>
            </li>
            <li>
              <Link className="">Style</Link>
            </li>
            <li>
              <Link className="">About</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="pb-3 md:text-[20px]">Useful Links</h1>
          <ul className="">
            <li>
              <Link className="">Service center</Link>
            </li>
            <li>
              <Link className="">Delivery Options</Link>
            </li>
            <li>
              <Link className="">Return Policy</Link>
            </li>
            <li>
              <Link className="">Report a Product</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="pb-3 md:text-[20px]">Need Help?</h1>
          <ul className="">
            <li>
              <Link className="">Chat with us</Link>
            </li>
            <li>
              <Link className="">Help center</Link>
            </li>
            <li>
              <Link className="">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="pb-3 md:text-[20px]">Legal</h1>
          <ul className="">
            <li>
              <Link className="">Claim</Link>
            </li>
            <li>
              <Link className="">Privacy</Link>
            </li>
            <li>
              <Link className="">Terms</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20 pt-8 md:pt-16 pb-4 md:pb-8">
        <div className="">
          <h1 className="pb-3 md:text-[20px]">
            Payment Options And Delivery Partners
          </h1>
          <div className="flex items-center gap-4 md:gap-8">
            <img src={mastercard} alt="" className="h-7 md:h-auto" />
            <img src={max} alt="" />
            <img src={visa} alt="" />
            <img src={fedEx} alt="" />
            <img src={dhl} alt="" />
          </div>
        </div>
        <div className="">
          <h1 className="pb-3 md:text-[20px]">Follow Us</h1>
          <div className="flex items-center gap-7 md:gap-8">
            <img src={youtube} alt="" className="h-5 md:h-auto" />
            <img src={facebook} alt="" className="h-5 md:h-auto" />
            <img src={instagram} alt="" className="h-5 md:h-auto" />
            <img src={twitter} alt="" className="h-5 md:h-auto" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#E3E3E3] flex justify-center pt-3">
        <img src={logo2} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
