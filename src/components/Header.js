/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { CartLogo, LogoDark } from '../assets/index.js';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img src={LogoDark} alt="LogoDark" className="w-28" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
              Elementh
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img src={CartLogo} alt="Cart" className="w-8" />
              <span className="absolute w-6 top-0 left-2 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              src={
                userInfo
                  ? userInfo.image
                  : 'https://www.cust2mate.com/wp-content/uploads/2022/01/V47.904-3-914x1024.jpg'
              }
              className="w-8 h-8 rounded-full"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
