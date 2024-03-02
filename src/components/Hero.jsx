import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';

export const Hero = () => {
  const [currentImage, setCurrentIndex] = useState(0);
  const heroImages = [t3, t2, t1];

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-60 flex items-center justify-center relative">
      <div className="flex items-center w-full">
        <div className="flex flex-col items-center relative">
          <img
            src={heroImages[currentImage]}
            alt=""
            className="-rotate-45 drop-shadow-2xl w-[530px] h-[300px]"
          />
          <div className="absolute bottom-[-5rem] flex gap-3">
            {heroImages.map((_, heroImageIndex) => (
              <div
                key={heroImageIndex}
                onClick={() => setCurrentIndex(heroImageIndex)}
                className={`w-3 h-3 flex border rounded-full cursor-pointer ${
                  heroImageIndex === currentImage
                    ? 'bg-[#78281F]'
                    : 'border-[#78281F]'
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 text-right">
          <h1 className="text-7xl">
            Let's get <br />
            <span className="text-[#78281F] font-bold">outside</span>.
          </h1>
          <p className="text-[--accent] text-sm font-medium">
            I still have my feet on the ground. I just wear better shoes tag
            <br />
            clipped to my shirt with my name printed on it.
          </p>
          <Link
            to="/collections"
            className="text-sm font-semibold hover:text-[#78281F] relative"
          >
            VIEW COLLECTIONS
            <div className="absolute right-0 w-[10%] h-[2px] bg-[#78281F]"></div>
          </Link>
        </div>
      </div>
      <div className="absolute w-full flex justify-between">
        <button
          onClick={prev}
          className="relative w-[40px] h-[40px] flex items-center justify-center border hover:border-[#78281F]"
        >
          <span className="absolute left-3 bg-[--primary] hover:text-[#78281F]">
            PREV
          </span>
        </button>
        <button
          onClick={next}
          className="relative w-[40px] h-[40px] flex items-center justify-center border hover:border-[#78281F]"
        >
          <span className="absolute right-3 bg-[--primary] hover:text-[#78281F]">
            NEXT
          </span>
        </button>
      </div>
      <div className="absolute w-full flex justify-between bottom-0 text-sm font-semibold">
        <p>Shoewares.</p>
        <p>Free shipping on all orders</p>
      </div>
    </div>
  );
};
