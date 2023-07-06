import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmount, setTotalAmount] = useState('');
  const [paynow, setPaynow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  const CheckOut = () => {
    if (userInfo) {
      setPaynow(true);
    } else {
      toast.error('Please Sign in to procced');
    }
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        alt="cardImage"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compare"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              SubTotal{' '}
              <span className="font-titleFont font-bold text-lg">
                ${totalAmount}
              </span>
            </p>
            <p className="flex items-center gap-4 text-base">
              Shipping{' '}
              <span>
                here, we are entering some text to explain the shipping and
                details about
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total : <span className="text-xl font-bold">$ {totalAmount}</span>
          </p>
          <button
            onClick={CheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800"
          >
            Procced to checkout
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
};

export default Cart;
