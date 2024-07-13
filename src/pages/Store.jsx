import { useEffect, useState } from 'react';
import axios from 'axios';
import store from '../assets/store.png';
import storeSmall from '../assets/storeSmall.png';
import Collection from '../components/Collection';

const apiKey = 'ab73904f1bbf4ff7b98490b36188b29720240712130313022852';
const apiId = 'U7JQ5YL02DO9POE';
const orgzId = '2d77a1f80e424633b8737bc04e828804';

function Store() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `api/products?organization_id=${orgzId}&reverse_sort=false&size=16&Appid=${apiId}&Apikey=${apiKey}`
        );
        const products = response.data.items;

        const categorizedProducts = [
          {
            title: 'Top Selling',
            items: products
              .filter((item) =>
                item.categories.some(
                  (category) => category.name === 'top selling'
                )
              )
              .reverse(),
          },
          {
            title: 'Vintage Shirts',
            items: products
              .filter((item) =>
                item.categories.some(
                  (category) => category.name === 'vintage shirts'
                )
              )
              .reverse(),
          },
          {
            title: 'Pants',
            items: products
              .filter((item) =>
                item.categories.some((category) => category.name === 'pants')
              )
              .reverse(),
          },
        ];
        setCategories(categorizedProducts);
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
    <>
      <div className="px-[20px] md:px-[50px] py-10">
        <img
          src={store}
          className="w-full min-h-[400px] h-auto hidden md:block"
          alt=""
        />
        <img src={storeSmall} className="w-full h-auto md:hidden" alt="" />
      </div>
      {categories.map((category, index) => (
        <Collection key={index} items={category.items} title={category.title} />
      ))}
    </>
  );
}

export default Store;
