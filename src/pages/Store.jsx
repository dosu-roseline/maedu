import { Link } from 'react-router-dom';
import store from '../assets/store.png';
import heart from '../assets/heart.svg';
import ts1 from '../assets/ts1.png';
import ts2 from '../assets/ts2.png';
import ts3 from '../assets/ts3.png';
import ts4 from '../assets/ts4.png';

function Store() {
  return (
    <>
      <div className="md:px-[50px] py-10">
        <img src={store} className="w-full h-auto" alt="" />
      </div>
      <div className="md:px-[50px] py-20 grid grid-cols-1 md:grid-cols-4 gap-7">
        {topSelling.map((ts, index) => (
          <div className="" key={index}>
            <div className="h-[350px] bg-[#EBEBEB] rounded-lg relative">
              <img src={ts.img} alt="" className="h-full w-full obje" />
              <Link to={`/item/${index}`} className="">
                <img src={heart} alt="" className="absolute top-2 right-2" />
              </Link>
            </div>
            <div className="text-[#183864] pt-4">
              <p className="text-[18px]">{ts.description}</p>
              <p className="">{ts.color}</p>
              <p className="font-semibold">${ts.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const topSelling = [
  {
    img: ts1,
    description: 'Brown Leather Shirt',
    color: 'Brown',
    price: '400',
  },
  {
    img: ts2,
    description: 'Afriture Vintage',
    color: 'Black',
    price: '99',
  },
  {
    img: ts3,
    description: 'Pant',
    color: 'Gray',
    price: '75',
  },
  {
    img: ts4,
    description: 'Pant',
    color: 'Fiesta Jean',
    price: '120',
  },
];

export default Store;
