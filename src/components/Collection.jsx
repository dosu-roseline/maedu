import { Link } from 'react-router-dom';
import heart from '../assets/heart.svg';

function Collection({ items, title }) {
  return (
    <div className="px-[20px] md:px-[50px] py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] md:text-[24px] font-semibold text-[#183864]">
          {title}
        </h2>
        <Link
          to="/store/list"
          className="text-[16px] md:text-[20px] text-[#883992] font-semibold"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 md:gap-7">
        {items.map((item) => {
          let color = '';
          let amount = '';

          if (item && item.description) {
            try {
              const descriptionObj = JSON.parse(item.description);
              color = descriptionObj.color;
              amount = descriptionObj.amount;
            } catch (err) {
              console.error('Error parsing description JSON', err);
            }
          }
          return (
            <div key={item.unique_id}>
              <div className="h-[180px] md:h-[350px] bg-[#EBEBEB] rounded-lg relative">
                <img
                  src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                  alt=""
                  className="h-full w-full object-contain md:object-cover"
                />
                <Link to={`/store/items/${item.id}`} className="">
                  <img
                    src={heart}
                    alt=""
                    className="h-7 md:h-auto absolute top-2 right-2"
                  />
                </Link>
              </div>
              <div className="text-[#183864] pt-4">
                <p className="md:text-[18px]">{item.name}</p>
                <p className="text-[14px] md:text-[16px]">{color}</p>
                <p className="text-[14px] md:text-[16px] font-semibold">
                  ${amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Collection;
