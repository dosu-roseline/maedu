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
      <section className="section-about text-white px-28 py-10">
        <h1 className="text-[60px] font-[Lora] leading-tight">
          Maedu: Crafted Confidence for the Modern Man
        </h1>
        <p className="pt-8 text-[25px] font-semibold">
          Maedu is more than just clothing; it&apos;s an attitude. We create
          statement pieces for the man who appreciates exceptional style and
          wants to feel confident in his own skin.
        </p>

        <div className="flex justify-center pb-5">
          <Link
            to="/store"
            className="mt-8 px-4 py-3 bg-[#712F79] text-white rounded flex items-center w-[50%] justify-center gap-2"
          >
            Explore Our Latest Collection{' '}
            <img src={arrowWhite} alt="" className="h-[20px]" />
          </Link>
        </div>

        <div className="flex items-center justify-between pt-8">
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[35px]">2012</h1>
            <p className="">Maedu was founded</p>
          </div>
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[35px]">200+</h1>
            <p className="">Fashion Designers</p>
          </div>
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[35px]">520k</h1>
            <p className="">Customers Worldwide</p>
          </div>
          <div className="border-l-[3px] border-[#FAFAFA] pl-3">
            <h1 className="text-[35px]">600M</h1>
            <p className="">Delivery Worldwide</p>
          </div>
        </div>
      </section>
      <div className="px-20 py-20">
        <h1 className="md:text-[25px] font-semibold pb-5">Our values</h1>
        <div className="grid grid-cols-2 gap-8">
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

      <div className="bg-[#712F79] text-white px-[50px] py-20 flex items-center gap-10">
        <div className="w-[50%]">
          <img src={about2} alt="" className="w-full rounded-lg" />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[30px] pb-5">Join our team</h1>
          <p className="pb-5">
            Maedu isn&apos;t just a clothing brand; it&apos;s a movement for the
            modern man who embraces confidence and individuality. We&apos;re
            looking for talented individuals to join our growing team and help
            us redefine what men&apos;s fashion can be.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="">A great work environment</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="">Annual team retreat</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="">Competitive salary</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="">Paid vacation</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="">Flexible work hours</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={check} alt="" />
              <p className="">worker’s family benefits</p>
            </div>
          </div>

          <div className="flex items-start justify-start pt-8 text-[20px]">
            <Link to="/">
              <span className="text-[#D29CD9] font-semibold flex items-center gap-2">
                See our job postings <img src={checkOut2} alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
