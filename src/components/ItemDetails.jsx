import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import back from '../assets/back.svg';
import col1 from '../assets/col1.svg';
import col2 from '../assets/col2.svg';
import cartWhite from '../assets/cartWhite.svg';
import rating from '../assets/rating.png';
import items from '../data/Items';

export default function ItemDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = items[id];

  const [selectedSize, setSelectedSize] = useState('M');

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="px-[20px] md:px-[50px] py-10 flex flex-col md:flex-row items-start">
      <div className="bg-[#EBEBEB] rounded-lg px-10 flex-1">
        <img
          src={item.img}
          className="w-full h-auto max-h-[650px]"
          alt={item.description}
        />
      </div>

      <div className="text-[#183864] pt-8 lg:pl-10 lg:pr-16 flex-1">
        <p className="text-[24px]">{item.description}</p>
        <p className="font-semibold">${item.price}</p>
        <div className="flex items-center gap-1">
          <p className="">3.9</p>
          <img src={rating} alt="" />
          <p className="lg:pl-10 text-[#712F79] text-[14px]">
            See all 260 reviews
          </p>
        </div>

        <div className="py-8">
          <p className="">Color</p>
          <div className="flex items-center h-[40px]">
            <img src={col1} alt="" className="h-full" />
            <img src={col2} alt="" className="h-full" />
          </div>
        </div>

        <div className="md:space-x-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`py-2 rounded border w-[3rem] ${
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

      <button onClick={() => navigate(-1)}>
        <img src={back} alt="" />
      </button>
    </div>
  );
}
