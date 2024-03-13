import React from 'react';
import nikeLogo from '../assets/nike-logo.png';
export const Product = ({ productData }) => {
  return (
    <div className="cursor-pointer group">
      <div className="py-10 px-8 bg-[--secondary] group-hover:bg-[--primary]">
        <img src={nikeLogo} alt="" className="absolute w-[30px]" />
        <img
          src={productData.img}
          alt=""
          className="w-[200px] h-[100px] rotate-[-40deg] group-hover:rotate-0 drop-shadow-2xl"
        />
      </div>
      <h1 className="text-sm font-semibold line-clamp-1">{productData.name}</h1>
      <p className="text-sm text-[#78281F] font-semibold">
        ₱{productData.price.toLocaleString()} PHP
      </p>
    </div>
  );
};
