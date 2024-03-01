import React from 'react';
import { Hero } from '../components/Hero';
import { TopCollections } from '../components/TopCollections';
import { NewArrival } from '../components/NewArrival';
import { TopRated } from '../components/TopRated';
import { BestSeller } from '../components/BestSeller';

export const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Hero />
      <TopCollections />
      <NewArrival />
      <TopRated />
      <BestSeller />
    </div>
  );
};
