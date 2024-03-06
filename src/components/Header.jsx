import React, { useContext } from 'react';
import nikeLogo from '../assets/nike-logo.png';
import {
  IoSearchOutline,
  IoHeartOutline,
  IoCartOutline,
} from 'react-icons/io5';
import { SearchBar } from './SearchBar';
import { Context } from '../context/Context';

export const Header = () => {
  const { showSearchBar, setShowSearchBar } = useContext(Context);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <img src={nikeLogo} alt="" className="w-[50px]" />
        <div className="flex gap-8 text-xl">
          <button
            onClick={() => setShowSearchBar(true)}
            className={`${!showSearchBar ? 'block' : 'hidden'}`}
          >
            <IoSearchOutline />
          </button>
          <IoHeartOutline />
          <IoCartOutline />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};
