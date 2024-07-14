import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import shopLine from '../assets/shopLine.svg';

function Checkout() {
  const { cart, emptyCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="py-10 px-[20px] md:px-[50px]">
        <h2 className="text-[24px] text-center font-semibold">
          You have nothing to checkout
        </h2>
        <Link to="/store">
          <span className="text-[#712F79] flex justify-center mt-5 items-center gap-1">
            Start Shopping <img src={shopLine} alt="" />
          </span>
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.expirationDate)
      newErrors.expirationDate = 'Expiration date is required';
    if (!formData.cvc) newErrors.cvc = 'CVC is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emptyCart();
      navigate('/success');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="px-[20px] md:px-[50px] py-14">
      <h1 className="pb-5 text-[25px] md:text-[30px] text-center">Checkout</h1>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[50%] flex flex-col gap-2"
        >
          <h1 className="pb-2 text-[18px] font-semibold">
            Contact information
          </h1>
          <div className="pb-5">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <h1 className="pb-2 md:text-[18px] font-semibold">Payment details</h1>
          <div className="pb-5">
            <label htmlFor="cardNumber" className="form-label">
              Card number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              className="form-input"
              value={formData.cardNumber}
              onChange={handleInputChange}
            />
            {errors.cardNumber && (
              <p className="text-red-500">{errors.cardNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-5 pb-5">
            <div className="col-span-2">
              <label htmlFor="expirationDate" className="form-label">
                Expiration date (MM/YY)
              </label>
              <input
                type="text"
                name="expirationDate"
                id="expirationDate"
                className="form-input"
                value={formData.expirationDate}
                onChange={handleInputChange}
              />
              {errors.expirationDate && (
                <p className="text-red-500">{errors.expirationDate}</p>
              )}
            </div>
            <div>
              <label htmlFor="cvc" className="form-label">
                CVC
              </label>
              <input
                type="text"
                name="cvc"
                id="cvc"
                className="form-input"
                value={formData.cvc}
                onChange={handleInputChange}
              />
              {errors.cvc && <p className="text-red-500">{errors.cvc}</p>}
            </div>
          </div>

          <h1 className="pb-2 md:text-[18px] font-semibold">
            Shipping address
          </h1>
          <div className="pb-5">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="form-input"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && <p className="text-red-500">{errors.address}</p>}
          </div>

          <div className="grid grid-cols-3 gap-5 pb-5">
            <div>
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-input"
                value={formData.city}
                onChange={handleInputChange}
              />
              {errors.city && <p className="text-red-500">{errors.city}</p>}
            </div>

            <div>
              <label htmlFor="state" className="form-label">
                State/Province
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-input"
                value={formData.state}
                onChange={handleInputChange}
              />
              {errors.state && <p className="text-red-500">{errors.state}</p>}
            </div>

            <div>
              <label htmlFor="postalCode" className="form-label">
                Postal code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                className="form-input"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
              {errors.postalCode && (
                <p className="text-red-500">{errors.postalCode}</p>
              )}
            </div>
          </div>

          <h1 className="pb-2 md:text-[18px] font-semibold">
            Billing information
          </h1>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="sameAsShipping"
              id="sameAsShipping"
              className=""
            />
            <label htmlFor="sameAsShipping" className="form-label">
              Same as shipping address
            </label>
          </div>

          <div className="flex mt-8 justify-between md:justify-normal items-center gap-2 md:gap-10">
            <button
              type="submit"
              className="w-[40%] md:w-[50%] px-4 py-3 text-center bg-[#712F79] text-white rounded"
            >
              Pay Now
            </button>

            <p className="flex items-center gap-2 font-semibold justify-center">
              Or
              <Link to="/store">
                <span className="text-[#712F79] text-[14px] md:text-[16px] flex items-center gap-1">
                  Continue Shopping{' '}
                  <img src={shopLine} alt="" className="h-2 md:h-auto" />
                </span>
              </Link>
            </p>
          </div>
        </form>
        <div className="w-full md:w-[50%] bg-[#712F79] rounded-[8px] px-10 py-10 text-white">
          <h1 className="pb-2 md:text-[18px] font-semibold">Amount due</h1>
          <h1 className="pb-2 md:text-[25px] font-semibold">$328</h1>
          <div className="divide-y divide-[#CCCBCB]">
            {cart.map((item, i) => {
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
                <div className="w-full flex py-5" key={i}>
                  <div className="bg-[#7C3D84] w-[40%] rounded-[8px] shadow-sm">
                    <img
                      src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                      alt={item.name}
                      className="w-full"
                    />
                  </div>
                  <div className="w-full px-4 space-y-3">
                    <div className="flex justify-between">
                      <p className="font-semibold">{item.name}</p>
                      <p className="font-semibold">${amount}</p>
                    </div>
                    <p className="">
                      {color}{' '}
                      <span className="font-semibold border-l-2 pl-2 border-[#7C3D84]">
                        {item.selectedSize}
                      </span>
                    </p>
                    <p className="font-semibold">${amount}</p>
                  </div>
                </div>
              );
            })}

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

export default Checkout;
