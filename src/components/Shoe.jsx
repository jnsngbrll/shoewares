import React from 'react';
import nikeLogo from '../assets/nike-logo.png';
export const Shoe = ({ shoeData }) => {
  return (
    <div className="cursor-pointer group">
      <div className="py-10 px-8 bg-[--secondary] group-hover:bg-[--primary]">
        <img src={nikeLogo} alt="" className="absolute w-[30px]" />
        <img
          src={shoeData.img}
          alt=""
          className="w-[200px] h-[100px] -rotate-45 group-hover:rotate-0 drop-shadow-2xl"
        />
      </div>
      <h1 className="text-sm font-semibold">{shoeData.name}</h1>
      <p className="text-sm text-[#78281F] font-semibold">
        ₱{shoeData.price.toLocaleString()}
      </p>
    </div>
  );
};
