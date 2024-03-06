import React from 'react';
import { ProductsData } from '../data/ProductsData';
import { Product } from './Product';

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
        {ProductsData[1].items.map((item, itemIndex) => (
          <Product key={itemIndex} productData={item} />
        ))}
      </div>
    </div>
  );
};
