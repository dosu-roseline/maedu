import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import checkout from '../assets/checkout.svg';
import shopLine from '../assets/shopLine.svg';
import CartCard from '../components/CartCard';

function Cart() {
  const { cart, removeFromCart, updateItemQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="py-10 px-[20px] md:px-[50px]">
        <h2 className="text-[24px] text-center font-semibold">
          Your Cart is Empty
        </h2>
        <Link to="/store">
          <span className="text-[#712F79] flex justify-center mt-5 items-center gap-1">
            Start Shopping <img src={shopLine} alt="" />
          </span>
        </Link>
      </div>
    );
  }

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => {
      const description = JSON.parse(item.description);
      const amount = parseFloat(description.amount);
      const quantity = item.quantity || 1;
      return acc + amount * quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const shippingEstimate = subtotal * 0.1;
  const taxEstimate = subtotal * 0.02;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="px-[20px] md:px-[50px] py-10">
      <h1 className="pb-5 text-[25px] md:text-[30px] text-center">
        Shopping Cart
      </h1>
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20">
        <div className="divide-y divide-[#CCCBCB] md:border-y border-[#CCCBCB] md:w-[55%]">
          {cart.map((cartItem, i) => (
            <CartCard
              key={i}
              item={cartItem}
              removeFromCart={removeFromCart}
              updateItemQuantity={updateItemQuantity}
              bg="bg-[#EBEBEB]"
            />
          ))}
        </div>
        <div className="w-full md:w-[45%] bg-[#EBEBEB] px-5 py-14 rounded-lg">
          <h1 className="text-[22px]">Order summary</h1>
          <div className=" divide-y divide-[#CCCBCB] flex flex-col space-y-5">
            <div className="flex items-center justify-between pt-5">
              <p className="">Subtotal</p>
              <p className="font-semibold">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="">Shipping estimate</p>
              <p className="font-semibold">${shippingEstimate.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="">Tax Estimate</p>
              <p className="font-semibold">${taxEstimate.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="font-semibold">Order Total</p>
              <p className="font-semibold">${orderTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="">
            <Link
              to="/store/checkout"
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

export default Cart;
