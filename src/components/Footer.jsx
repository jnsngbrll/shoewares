import React from 'react';
import nikeLogo from '../assets/nike-logo-white.png';
import { FooterData } from '../data/FooterData';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';

export const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 px-4">
      <div className="p-8 bg-black">
        <div className="grid grid-cols-5">
          <div>
            <img src={nikeLogo} alt="" className="w-[50px]" />
          </div>
          {FooterData.map((FootData) => (
            <div className="space-y-2">
              <h1 className="text-xs font-bold text-[--primary]">
                {FootData.title}
              </h1>
              <div className="space-y-1">
                {FootData.contents.map((content) => (
                  <p className="text-xs text-[--accent] cursor-pointer hover:text-[--secondary]">
                    {content.label}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-xs font-bold text-[--primary]">Socials</h1>
              <div className="flex gap-4 text-[--accent]">
                <FaFacebook />
                <FaInstagram />
                <FaTiktok />
                <FaTwitter />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-xs font-bold text-[--primary]">Message</h1>
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="w-full text-xs py-2 pl-2 pr-8 border outline-none"
                />
                <button className="absolute right-0 p-1 text-black border-l border-black">
                  <IoIosSend />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-xs text-[--accent]">
          <h1>Shoewares.</h1>
          <p>&copy;Shoewares.</p>
        </div>
      </div>
    </div>
  );
};
