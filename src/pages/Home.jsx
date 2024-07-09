import { Link } from 'react-router-dom';
import home1 from '../assets/home1.jpeg';
import home2 from '../assets/home2.jpeg';

function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-7 relative h-[65dvh] md:h-auto">
        <img src={home1} alt="" className="w-full h-[100%] col-span-3" />
        <img src={home2} alt="" className="w-full h-[100%] col-span-4" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Link
            to="/store"
            className="border-2 border-[#012436] rounded-[5px] px-10 md:px-20 py-2 md:py-2.5 font-semibold"
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
