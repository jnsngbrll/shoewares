import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { Context } from '../context/Context';
import { ProductsData } from '../data/ProductsData';
import { Link } from 'react-router-dom';

export const SearchBar = () => {
  const { showSearchBar, setShowSearchBar } = useContext(Context);
  const [searchInput, setSearchInput] = useState('');
  const [filteredShoes, setFilteredShoes] = useState([]);

  const searchBarRef = useRef();

  useEffect(() => {
    const result = ProductsData.filter((shoes) =>
      shoes.items.some((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredShoes(searchInput ? result : []);
  }, [searchInput]);

  useEffect(() => {
    const outsideSearchBarClick = (event) => {
      if (!searchBarRef.current.contains(event.target)) {
        setShowSearchBar(false);
      }
    };
    document.addEventListener('mousedown', outsideSearchBarClick);
    return () => {
      document.removeEventListener('mousedown', outsideSearchBarClick);
    };
  });

  return (
    <div ref={searchBarRef} className="relative">
      <div
        className={`${
          !showSearchBar ? 'hidden' : 'flex items-center relative'
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="w-full py-2 px-4 outline-none border"
        />
        <button
          onClick={() => setShowSearchBar(false)}
          className="absolute right-4 text-xl"
        >
          <IoCloseOutline />
        </button>
      </div>
      {showSearchBar && (
        <div className="absolute w-full bg-[--primary] z-10">
          {filteredShoes.map((filteredShoe, parentIdx) => (
            <div key={parentIdx} className="flex flex-col">
              {filteredShoe.items.map((item, childIdx) => (
                <Link
                  key={childIdx}
                  to={`/shoe-details/${item.id}`}
                  className="py-1 px-4 border-b border-x hover:bg-[--secondary]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
