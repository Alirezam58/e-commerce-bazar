import React from 'react';
import { LogoLight, paymentLogo } from '../assets';
import Payment from '../assets/Payment.jpg';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img src={LogoLight} alt="Logo" className="w-28" />
          <p>@ Npisoftware.ir</p>
          <img src={Payment} alt="payment" width="200px" height="60px" />
          <div className="flex gap-5 text-lg text-gray-500">
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Munich ,Bavaria, Germany</p>
            <p>Mobile : +491777801882</p>
            <p>www.Npisoftware.netlify.app</p>
            <p>Email : developer@npisoftware.ir</p>
          </div>
        </div>
        <div className="text-base flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white mb-1">Profile</h2>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPersonFill />
            </span>
            My Acount
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <FaHome />
            </span>
            Order Tracking
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <BsPaypal />
            </span>
            Check Out
          </p>
          <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
            <span>
              <MdLocationOn />
            </span>
            Service & Setup
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="Email"
            type="email"
          />
          <button className="text-sm text-white border-t-0 hover:bg-gray-800 active:bg-white active:text-black py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
