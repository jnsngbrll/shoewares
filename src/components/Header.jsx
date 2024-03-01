import React from 'react';
import nikeLogo from '../assets/nike-logo.png';
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
} from 'react-icons/io5';

export const Header = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between">
        <img src={nikeLogo} alt="" className="w-[50px]" />
        <div className="flex gap-8 text-xl">
          <IoSearchOutline />
          <IoHeartOutline />
          <IoCartOutline />
        </div>
      </div>
    </div>
  );
};
