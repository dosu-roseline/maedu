import { useEffect, useState } from 'react';
import axios from 'axios';
import productes from '../data/products';
import { Link } from 'react-router-dom';
import heart from '../assets/heart.svg';

const apiKey = 'ab73904f1bbf4ff7b98490b36188b29720240712130313022852';
const apiId = 'U7JQ5YL02DO9POE';
const orgzId = '2d77a1f80e424633b8737bc04e828804';

function StoreList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `api/products?organization_id=${orgzId}&reverse_sort=false&size=16&Appid=${apiId}&Apikey=${apiKey}`
        );
        const products = response.data;
        console.log(products, 'here');

        setProducts(products);
        setLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
    <div className="py-10 md:py-16 px-[20px] md:px-[50px]">
      <h2 className="text-[18px] md:text-[24px] pb-8 text-center font-semibold text-[#183864]">
        Top Selling
      </h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 md:gap-7">
        {productes.map((item) => (
          <div key={item.id}>
            <div className="h-[180px] sm:h-[270px] md:h-[350px] bg-[#EBEBEB] rounded-lg relative">
              <img
                src={item.img}
                alt=""
                className="h-full w-full object-contain md:object-cover"
              />
              <Link to={`/store/products/${item.id}`} className="">
                <img
                  src={heart}
                  alt=""
                  className="h-7 md:h-auto absolute top-2 right-2"
                />
              </Link>
            </div>
            <div className="text-[#183864] pt-4">
              <p className="md:text-[18px]">{item.description}</p>
              <p className="text-[14px] md:text-[16px]">{item.color}</p>
              <p className="text-[14px] md:text-[16px] font-semibold">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreList;
