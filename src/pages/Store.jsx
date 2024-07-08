import { Link } from 'react-router-dom';
import store from '../assets/store.png';
import heart from '../assets/heart.svg';
import ts1 from '../assets/ts1.png';
import ts2 from '../assets/ts2.png';
import ts3 from '../assets/ts3.png';
import ts4 from '../assets/ts4.png';
import vint1 from '../assets/vint1.png';
import vint2 from '../assets/vint2.png';
import vint4 from '../assets/vint4.png';
import pant1 from '../assets/pant1.png';
import pant2 from '../assets/pant2.png';
import pant3 from '../assets/pant3.png';
import pant4 from '../assets/pant4.png';

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
const vintageShirts = [
  {
    img: vint1,
    description: 'Limpopo Vintage',
    color: 'Combo',
    price: '160',
  },
  {
    img: vint2,
    description: 'Jonkoso Vintage',
    color: 'White/Nevy Blue',
    price: '55',
  },
  {
    img: ts2,
    description: 'Afriture Vintage',
    color: 'Black',
    price: '99',
  },
  {
    img: vint4,
    description: 'Fire/Ash Vintage Shirt',
    color: 'Gray',
    price: '85',
  },
];
const pants = [
  {
    img: pant1,
    description: 'Pant',
    color: 'Vanilla White',
    price: '80',
  },
  {
    img: pant2,
    description: 'Pant',
    color: 'Combat Green',
    price: '100',
  },
  {
    img: pant3,
    description: 'Pant',
    color: 'Afriture Combat',
    price: '99',
  },
  {
    img: pant4,
    description: 'Pant',
    color: 'Ninja Cargo',
    price: '85',
  },
];

function Collection({ title, items }) {
  return (
    <div className="px-[20px] md:px-[50px] py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[24px] font-semibold text-[#183864]">{title}</h2>
        <Link className="text-[20px] text-[#883992] font-semibold">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {items.map((item, index) => (
          <div key={index}>
            <div className="h-auto md:h-[350px] bg-[#EBEBEB] rounded-lg relative">
              <img
                src={item.img}
                alt=""
                className="h-full w-full object-cover"
              />
              <Link to={`/item/${index}`} className="">
                <img src={heart} alt="" className="absolute top-2 right-2" />
              </Link>
            </div>
            <div className="text-[#183864] pt-4">
              <p className="text-[18px]">{item.description}</p>
              <p className="">{item.color}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Store() {
  return (
    <>
      <div className="px-[20px] md:px-[50px] py-10">
        <img src={store} className="w-full h-auto" alt="" />
      </div>
      {/* <div className="md:px-[50px] py-20 grid grid-cols-1 md:grid-cols-4 gap-7">
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
      </div> */}

      <Collection title="Top Selling" items={topSelling} />
      <Collection title="Vintage Shirts" items={vintageShirts} />
      <Collection title="Pant Collections" items={pants} />
    </>
  );
}

export default Store;
