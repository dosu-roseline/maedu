import { Link } from 'react-router-dom';
import about2 from '../assets/about2.jpeg';
import confident from '../assets/confident.svg';
import arrowWhite from '../assets/arrowWhite.svg';
import standOut from '../assets/standOut.svg';
import elevated from '../assets/elevated.svg';
import quality from '../assets/quality.svg';
import check from '../assets/check.svg';
import checkOut2 from '../assets/checkOut2.svg';

function About() {
  return (
    <div className="">
      <section className="section-about text-white px-8 md:px-28 py-10">
        <h1 className="text-[30px] md:text-[60px] font-[Lora] leading-tight">
          Maedu: Crafted Confidence for the Modern Man
        </h1>
        <p className="pt-8 md:text-[25px] font-semibold">
          Maedu is more than just clothing; it&apos;s an attitude. We create
          statement pieces for the man who appreciates exceptional style and
          wants to feel confident in his own skin.
        </p>

        <div className="flex justify-center pb-5">
          <Link
            to="/store"
            className="mt-8 w-full md:px-4 py-4 bg-[#712F79] text-[14px] md:text-[16px] text-white rounded flex items-center md:w-[50%] justify-center gap-3"
          >
            Explore Our Latest Collection{' '}
            <img src={arrowWhite} alt="" className="h-3 md:h-[20px]" />
          </Link>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-y-8 md:grid-cols-4 pt-8">
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[25px] md:text-[35px]">2012</h1>
            <p className="text-[14px] md:text-[16px]">Maedu was founded</p>
          </div>
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[25px] md:text-[35px]">200+</h1>
            <p className="text-[14px] md:text-[16px]">Fashion Designers</p>
          </div>
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[25px] md:text-[35px]">520k</h1>
            <p className="text-[14px] md:text-[16px]">Customers Worldwide</p>
          </div>
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[25px] md:text-[35px]">600M</h1>
            <p className="text-[14px] md:text-[16px]">Delivery Worldwide</p>
          </div>
        </div>
      </section>

      <div className="md:hidden px-[20px] grid grid-cols-2 gap-x-2 gap-y-8 pt-8">
        <div className="border-l-[1.86px] border-[#183864] pl-1.5">
          <h1 className="text-[25px] md:text-[35px]">2012</h1>
          <p className="text-[11px] font-extrabold md:text-[16px]">
            Maedu was founded
          </p>
        </div>
        <div className="border-l-[1.86px] border-[#183864] pl-1.5">
          <h1 className="text-[25px] md:text-[35px]">200+</h1>
          <p className="text-[11px] font-extrabold md:text-[16px]">
            Fashion Designers
          </p>
        </div>
        <div className="border-l-[1.86px] border-[#183864] pl-1.5">
          <h1 className="text-[25px] md:text-[35px]">520k</h1>
          <p className="text-[11px] font-extrabold md:text-[16px]">
            Customers Worldwide
          </p>
        </div>
        <div className="border-l-[1.86px] border-[#183864] pl-1.5">
          <h1 className="text-[25px] md:text-[35px]">600M</h1>
          <p className="text-[11px] font-extrabold md:text-[16px]">
            Delivery Worldwide
          </p>
        </div>
      </div>

      <div className="px-[20px] md:px-20 py-20">
        <h1 className="text-[25px] font-semibold pb-5">Our values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pr-8 md:pr-0">
          <div className="flex items-start gap-5">
            <img src={elevated} alt="" className="h-6" />
            <p className="">
              <strong>Elevated Essentials:</strong> We take classic menswear
              pieces and elevate them with thoughtful design, premium fabrics,
              and impeccable tailoring.
            </p>
          </div>
          <div className="flex items-start gap-5">
            <img src={standOut} alt="" className="h-8" />
            <p className="">
              <strong>Standing Out:</strong> Our clothing isn&apos;t for the
              faint of heart. It&apos;s for the man who wants to make a bold and
              individual statement.
            </p>
          </div>
          <div className="flex items-start gap-5">
            <img src={quality} alt="" className="h-6" />
            <p className="">
              <strong>Quality Without Compromise:</strong> We source
              high-quality materials and employ meticulous craftsmanship to
              ensure our garments are built to last.
            </p>
          </div>
          <div className="flex items-start gap-5">
            <img src={confident} alt="" className="h-6" />
            <p className="">
              <strong>Confident Expression:</strong> Maedu prioritizes clothing
              that empowers men to express their unique style and individuality.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#712F79] text-white px-[20px] md:px-[50px] py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-[50%]">
          <img src={about2} alt="" className="w-full rounded-lg" />
        </div>
        <div className="w-full md:w-[50%]">
          <h1 className="text-[25px] md:text-[30px] pb-5">Join our team</h1>
          <p className="pb-5">
            Maedu isn&apos;t just a clothing brand; it&apos;s a movement for the
            modern man who embraces confidence and individuality. We&apos;re
            looking for talented individuals to join our growing team and help
            us redefine what men&apos;s fashion can be.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="text-[14px] md:text-[16px]">
                A great work environment
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="text-[14px] md:text-[16px]">Annual team retreat</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="text-[14px] md:text-[16px]">Competitive salary</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="text-[14px] md:text-[16px]">Paid vacation</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="text-[14px] md:text-[16px]">Flexible work hours</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="text-[14px] md:text-[16px]">
                Worker’s family benefits
              </p>
            </div>
          </div>

          <div className="flex justify-center md:items-start md:justify-start pt-8">
            <Link to="/">
              <span className="text-[#D29CD9] font-semibold flex items-center gap-2 text-[18px] md:text-[20px]">
                See our job postings{' '}
                <img src={checkOut2} alt="" className="h-4 md:h-[20px]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
