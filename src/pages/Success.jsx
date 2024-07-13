import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="py-10 px-[20px] md:px-[50px] text-center">
      <h1 className="text-[30px] font-semibold">Payment Successful!</h1>
      <p className="text-[18px] mt-5">
        Thank you for your purchase. Please check your email for more
        information.
      </p>
      <Link
        to="/store"
        className="mt-8 inline-block px-4 py-3 bg-[#712F79] text-white rounded"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default Success;
