import { Link } from 'react-router-dom';
import heart from '../assets/heart.svg';

function Collection({ title, items }) {
  return (
    <div className="px-[20px] md:px-[50px] py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] md:text-[24px] font-semibold text-[#183864]">
          {title}
        </h2>
        <Link className="text-[16px] md:text-[20px] text-[#883992] font-semibold">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {items.map((item) => (
          <div key={item.id}>
            <div className="h-[350px] bg-[#EBEBEB] rounded-lg relative">
              <img
                src={item.img}
                alt=""
                className="h-full w-full object-cover"
              />
              <Link to={`/store/${item.id}`} className="">
                <img src={heart} alt="" className="absolute top-2 right-2" />
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

export default Collection;
