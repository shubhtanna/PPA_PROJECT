import React from 'react';

import CounterPage from '@/Components/CounterPart/CounterPage';
import CarouselPart from '@/Components/Carousle/Carousle';


const Home: React.FC = () => {
  return (
    <div className="">
      <CarouselPart/>
      <CounterPage/>
      
    </div>
  );
};

export default Home;
