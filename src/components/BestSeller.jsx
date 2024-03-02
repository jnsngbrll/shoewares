import React from 'react';
import { ShoesData } from '../data/ShoesData';
import { Shoe } from './Shoe';

export const BestSeller = () => {
  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Best Seller</h1>
          <hr className="bg-[#78281F] h-1 w-[30%] rounded-full" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4">
        {ShoesData[1].items.map((item, itemIndex) => (
          <Shoe key={itemIndex} shoeData={item} />
        ))}
      </div>
    </div>
  );
};
