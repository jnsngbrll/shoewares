import React from 'react';
import { Shoes } from '../data/Shoes';
import { Shoe } from './Shoe';

export const NewArrival = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">New Arrial</h1>
          <hr className="bg-[#78281F] h-1 w-[30%] rounded-full" />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-4 gap-4">
        {Shoes[1].items.map((item, itemIndex) => (
          <Shoe key={itemIndex} shoeData={item} />
        ))}
      </div>
    </div>
  );
};
