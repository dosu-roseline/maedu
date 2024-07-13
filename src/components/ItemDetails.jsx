import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import back from '../assets/back.svg';
import col1 from '../assets/col1.svg';
import col2 from '../assets/col2.svg';
import cartWhite from '../assets/cartWhite.svg';
import rating from '../assets/rating.png';
import { CartContext } from '../context/CartContext';

const apiKey = 'ab73904f1bbf4ff7b98490b36188b29720240712130313022852';
const apiId = 'U7JQ5YL02DO9POE';
const orgzId = '2d77a1f80e424633b8737bc04e828804';

export default function ItemDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `https://timbu-get-single-product.reavdev.workers.dev/${id}?organization_id=${orgzId}&Appid=${apiId}&Apikey=${apiKey}`
          // `api/products/${id}?organization_id=${orgzId}&Appid=${apiId}&Apikey=${apiKey}`
        );
        const itemData = response.data;
        console.log(itemData.name, 'itemData');
        setLoading(false);

        // const item = itemData.find((item) => item.unique_id === parseInt(id));
        setItem(itemData);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  const handleAddToCart = () => {
    const itemWithSize = { ...item, selectedSize };
    addToCart(itemWithSize);
    navigate('/store/cart');
  };

  if (loading) {
    return (
      <div className="absolute bg-slate-200/20 inset-0 backdrop-blur-sm flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
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
          src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
          className="w-full h-auto max-h-[650px]"
          alt="Product Image"
        />
      </div>

      <div className="text-[#183864] w-full pt-8 lg:pl-10 lg:pr-16 md:flex-1">
        <div className="flex gap-x-10 items-start">
          <div className="w-[55%] md:w-auto">
            <p className="text-[24px]">{item.name}</p>
            {/* <p className="font-semibold">${item.price}</p> */}
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
        <button
          onClick={handleAddToCart}
          className="mt-8 px-4 py-3 bg-[#712F79] text-white rounded flex items-center w-full justify-center gap-2"
        >
          <img src={cartWhite} alt="" className="h-[20px]" /> Add to Cart
        </button>
      </div>

      <button className="hidden md:block" onClick={() => navigate(-1)}>
        <img src={back} alt="" />
      </button>
    </div>
  );
}
