import tick from '../assets/tick.svg';
import close from '../assets/close.svg';

function CartCard({ item, label, color, size, price, bg }) {
  return (
    <div className="flex justify-between py-10 items-start">
      <div className="flex items-start h-[235px] w-full">
        <div className={`${bg} rounded-lg px-10 h-full md:w-[45%]`}>
          <img src={item} className="h-full w-full" alt="" />
        </div>
        <div className="flex flex-col h-full py-2 justify-between pl-4 md:pl-8">
          <div className="">
            <h1 className="">{label}</h1>
            <p className="">
              {color}
              <span className="border-l-2 border-[#B5B3B3] ml-2 pl-2 font-semibold">
                {size}
              </span>
            </p>
            <h1 className="">${price}</h1>
          </div>
          <div className="flex items-center gap-1">
            <img src={tick} alt="" className="" />
            <p className="">In Stock</p>
          </div>
        </div>
      </div>
      <img src={close} alt="" className="" />
    </div>
  );
}

export default CartCard;
