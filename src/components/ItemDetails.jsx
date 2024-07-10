import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import back from '../assets/back.svg';
import col1 from '../assets/col1.svg';
import col2 from '../assets/col2.svg';
import cartWhite from '../assets/cartWhite.svg';
import rating from '../assets/rating.png';
import items from '../data/Items';
import products from '../data/products';

export default function ItemDetails() {
  const navigate = useNavigate();
  const { source, id } = useParams();
  const data = source === 'products' ? products : items;
  const item = data.find((item) => item.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="px-[20px] md:px-[50px] py-10 flex flex-col md:flex-row items-start">
      <div className="md:hidden grid grid-cols-6 pb-5">
        <button className="md:hidden col-span-2" onClick={() => navigate(-1)}>
          <img src={back} alt="Back" className="h-7" />
        </button>
        <h1 className="text-center flex-grow col-span-3">Product Details</h1>
      </div>

      <div className="bg-[#EBEBEB] rounded-lg px-10 flex-1">
        <img
          src={item.img}
          className="w-full h-auto max-h-[650px]"
          alt={item.description}
        />
      </div>

      <div className="text-[#183864] w-full pt-8 lg:pl-10 lg:pr-16 md:flex-1">
        <div className="flex gap-x-10 items-start">
          <div className="w-[55%] md:w-auto">
            <p className="text-[24px]">{item.description}</p>
            <p className="font-semibold">${item.price}</p>
          </div>
          <div className="md:hidden">
            <p className="">Color</p>
            <div className="flex items-center h-[40px]">
              <img src={col1} alt="" className="h-full" />
              <img src={col2} alt="" className="h-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between md:justify-normal items-center gap-1 pt-2">
          <div className="flex gap-1">
            <p className="">3.9</p>
            <img src={rating} alt="" className="h-4 md:h-auto" />
          </div>
          <p className="lg:pl-10 text-[#712F79] text-[14px] md:text-[16px]">
            See all 260 reviews
          </p>
        </div>
        <div className="py-8 hidden md:block">
          <p className="">Color</p>
          <div className="flex items-center h-[40px]">
            <img src={col1} alt="" className="h-full" />
            <img src={col2} alt="" className="h-full" />
          </div>
        </div>
        <p className="lg:pl-10 text-[#712F79] text-[14px] md:text-[16px] md:text-right pt-10 pb-2">
          Size guide
        </p>
        <div className="flex gap-x-1 md:space-x-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`py-2 rounded border w-[14.28%] ${
                size === selectedSize
                  ? 'bg-[#712F79] text-white'
                  : size === 'XXL'
                  ? 'text-[#B5B3B3]'
                  : 'bg-white text-[#183864]'
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <Link
          to="/store/cart"
          className="mt-8 px-4 py-3 bg-[#712F79] text-white rounded flex items-center w-full justify-center gap-2"
        >
          <img src={cartWhite} alt="" className="h-[20px]" /> Add to Cart
        </Link>
      </div>

      <button className="hidden md:block" onClick={() => navigate(-1)}>
        <img src={back} alt="" />
      </button>
    </div>
  );
}
