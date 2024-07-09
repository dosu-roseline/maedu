import { Link } from 'react-router-dom';
import checkout from '../assets/checkout.svg';
import shopLine from '../assets/shopLine.svg';
import cart1 from '../assets/ts1.png';
import cart2 from '../assets/ts4.png';
import cart3 from '../assets/ts4.png';
import CartCard from '../components/CartCard';

function Cart() {
  return (
    <div className="px-[20px] md:px-[50px] py-10">
      <h1 className="pb-5 md:text-[30px] text-center">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row items-start gap-20">
        <div className="divide-y divide-[#CCCBCB] border-y border-[#CCCBCB] md:w-[55%]">
          {data.map((cart, i) => (
            <CartCard
              key={i}
              label={cart.label}
              size={cart.size}
              item={cart.item}
              color={cart.color}
              price={cart.price}
              bg="bg-[#EBEBEB]"
            />
          ))}
        </div>
        <div className="w-full md:w-[45%] bg-[#EBEBEB] px-5 py-14 rounded-lg">
          <h1 className="text-[22px]">Order summary</h1>
          <div className=" divide-y divide-[#CCCBCB] flex flex-col space-y-5">
            <div className="flex items-center justify-between pt-5">
              <p className="">Subtotal</p>
              <p className="font-semibold">$315</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="">Shipping estimate</p>
              <p className="font-semibold">$5</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="">Tax Estimate</p>
              <p className="font-semibold">$8</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="font-semibold">Order Total</p>
              <p className="font-semibold">$328</p>
            </div>
          </div>
          <div className="">
            <Link
              to="/checkout"
              className="mt-8 px-4 py-3 bg-[#712F79] text-white rounded flex items-center w-full justify-center gap-2"
            >
              <img src={checkout} alt="" className="h-[20px]" /> Checkout
            </Link>

            <p className="pt-5 flex items-center gap-2 font-semibold justify-center">
              Or
              <Link to="/store">
                <span className="text-[#712F79] flex items-center gap-1">
                  Continue Shopping <img src={shopLine} alt="" />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    item: cart1,
    label: 'Brown Leather Shirt',
    color: 'Gray',
    size: 'M',
    price: '75',
  },
  { item: cart2, label: 'Fiesta Jean', color: 'Blue', size: 'M', price: '120' },
  {
    item: cart3,
    label: 'Limpopo Vintage',
    color: 'Combo',
    size: 'L',
    price: '75',
  },
];

export default Cart;
