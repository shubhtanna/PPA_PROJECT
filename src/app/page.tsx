import React from 'react';

import CounterPage from '@/Components/CounterPart/CounterPage';
import CarouselPart from '@/Components/Carousle/Carousle';
import ClientSection from '@/Components/ClientSection/ClientSection';


const Home: React.FC = () => {
  return (
    <div className="">
      <CarouselPart/>
      <ClientSection/>
      <CounterPage/>
    </div>
  );
};

export default Home;
