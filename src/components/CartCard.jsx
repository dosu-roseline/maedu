import tick from '../assets/tick.svg';
import close from '../assets/close.svg';
import { useState } from 'react';

function CartCard({ item, bg, removeFromCart, updateItemQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateItemQuantity(item.id, newQuantity);
  };

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
    <div className="flex justify-between py-10 items-start gap-2">
      <div className="flex items-start h-[180px] md:h-[235px] w-full">
        <div
          className={`${bg} rounded-lg px-2 md:px-10 h-full w-[45%] md:w-[40%]`}
        >
          <img
            src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
            alt={item.name}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col h-full md:py-2 justify-between pl-4 md:pl-8">
          <div className="flex items-start gap-2 md:gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-[12px] md:text-[20px] font-semibold">
                {item.name}
              </h1>
              <p className="text-[12px] md:text-[16px]">
                {color}
                <span className="border-l-2 border-[#B5B3B3] ml-2 pl-2 font-semibold">
                  {item.selectedSize}
                </span>
              </p>
              <h1 className="text-[12px] md:text-[20px]">
                ${(amount * quantity).toFixed(2)}
              </h1>
            </div>
            <div className="border-[0.9px] border-[#B5B3B3] py-0.5 px-1.5 md:px-5 md:py-2">
              <select
                name="quantity"
                id="quantity"
                className="text-[12px] md:text-[20px] outline-none"
                value={quantity}
                onChange={handleQuantityChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={tick} alt="" className="" />
            <p className="text-[12px] md:text-[20px]">In Stock</p>
          </div>
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)}>
        <img src={close} alt="" className="h-4 md:h-auto" />
      </button>
    </div>
  );
}

export default CartCard;
