import React from 'react';
import { ProductsData } from '../data/ProductsData';

export const TopCollections = () => {
  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Top Collections</h1>
        <hr className="bg-[#78281F] h-1 w-[30%] rounded-full" />
      </div>
      <div className="mt-20 w-full h-[200px] flex justify-center p-4 bg-[--secondary] relative">
        <div className="absolute top-[-3rem] flex gap-8">
          {ProductsData[0].items.map((item, itemIndex) => (
            <img
              key={itemIndex}
              src={item.img}
              alt=""
              className="w-[200px] bg-[--secondary] p-4 border-[13px] border-[--primary]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
