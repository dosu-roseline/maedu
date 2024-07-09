import store from '../assets/store.png';
import storeSmall from '../assets/storeSmall.png';
import items from '../data/Items';
import Collection from '../components/Collection';

function Store() {
  const categories = [
    {
      title: 'Top Selling',
      items: items.filter((item) => item.category === 'Top Selling'),
    },
    {
      title: 'Vintage Shirts',
      items: items.filter((item) => item.category === 'Vintage Shirts'),
    },
    {
      title: 'Pants',
      items: items.filter((item) => item.category === 'Pants'),
    },
  ];

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
        <Collection key={index} title={category.title} items={category.items} />
      ))}
    </>
  );
}

export default Store;
