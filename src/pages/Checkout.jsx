import { Link } from 'react-router-dom';
import shopLine from '../assets/shopLine.svg';
import cart1 from '../assets/ts1.png';
import cart2 from '../assets/ts4.png';
import cart3 from '../assets/ts4.png';

function Checkout() {
  return (
    <div className="px-[50px] py-14">
      <h1 className="pb-5 md:text-[30px] text-center">Checkout</h1>
      <div className="flex gap-10">
        <form action="" className="w-[50%] flex flex-col gap-2">
          <h1 className="pb-2 md:text-[18px] font-semibold">
            Contact information
          </h1>
          <div className="pb-5">
            <label htmlFor="" className="form-label">
              Email address
            </label>
            <input type="text" name="" id="" className="form-input" />
          </div>

          <h1 className="pb-2 md:text-[18px] font-semibold">Payment details</h1>
          <div className="pb-5">
            <label htmlFor="" className="form-label">
              Card number
            </label>
            <input type="text" name="" id="" className="form-input" />
          </div>

          <div className="grid grid-cols-3 gap-5 pb-5">
            <div className="col-span-2">
              <label htmlFor="" className="form-label">
                Expiration date (MM/YY)
              </label>
              <input type="text" name="" id="" className="form-input" />
            </div>
            <div className="">
              <label htmlFor="" className="form-label">
                Cvc
              </label>
              <input type="text" name="" id="" className="form-input" />
            </div>
          </div>

          <h1 className="pb-2 md:text-[18px] font-semibold">
            Shipping address
          </h1>
          <div className="pb-5">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <input type="text" name="" id="" className="form-input" />
          </div>

          <div className="grid grid-cols-3 gap-5 pb-5">
            <div className="">
              <label htmlFor="" className="form-label">
                City
              </label>
              <input type="text" name="" id="" className="form-input" />
            </div>

            <div className="">
              <label htmlFor="" className="form-label">
                State/Province
              </label>
              <input type="text" name="" id="" className="form-input" />
            </div>

            <div className="">
              <label htmlFor="" className="form-label">
                Postal code
              </label>
              <input type="text" name="" id="" className="form-input" />
            </div>
          </div>

          <h1 className="pb-2 md:text-[18px] font-semibold">
            Billing information
          </h1>
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" className="" />
            <label htmlFor="" className="form-label">
              Same as shipping address
            </label>
          </div>

          <div className="flex items-center gap-10">
            <Link
              to="/checkout"
              className="w-[50%] mt-8 px-4 py-3 text-center bg-[#712F79] text-white rounded"
            >
              Pay Now
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
        </form>
        <div className="w-[50%] bg-[#712F79] rounded-[8px] px-10 py-10 text-white">
          <h1 className="pb-2 md:text-[18px] font-semibold">Amount due</h1>
          <h1 className="pb-2 md:text-[25px] font-semibold">$328</h1>
          <div className="divide-y divide-[#CCCBCB]">
            {data.map((cart, i) => (
              <div className="w-full flex py-5" key={i}>
                <div className="bg-[#7C3D84] w-[40%] rounded-[8px] shadow-sm">
                  <img src={cart.item} alt="" className="w-full" />
                </div>
                <div className="w-full px-4">
                  <div className="flex justify-between">
                    <p className="font-semibold">{cart.label}</p>
                    <p className="font-semibold">$315</p>
                  </div>
                  <p className="">
                    {cart.color}{' '}
                    <span className="font-semibold border-l-2 pl-2 border-[#7C3D84]">
                      {cart.size}
                    </span>
                  </p>
                  <p className="font-semibold">${cart.price}</p>
                </div>
              </div>
            ))}

            <div className="space-y-3 py-5">
              <div className="flex items-center justify-between">
                <p className="">Subtotal</p>
                <p className="font-semibold">$328</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="">Shipping</p>
                <p className="font-semibold">$25</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="">Taxes</p>
                <p className="font-semibold">$38</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-5">
              <p className="">Total</p>
              <p className="font-semibold">$391</p>
            </div>
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

export default Checkout;
