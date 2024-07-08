import { Link } from 'react-router-dom';
import home1 from '../assets/home1.jpeg';
import home2 from '../assets/home2.jpeg';

function Home() {
  return (
    <div className="">
      <div className="flex relative h-[60dvh] md:h-[100dvh]">
        <img src={home1} alt="" className="w-[45%] h-[100%]" />
        <img src={home2} alt="" className="w-[55%] h-[100%]" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Link
            to="/store"
            className="border-2 border-[#012436] px-10 md:px-20 py-1 md:py-2 font-semibold"
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
