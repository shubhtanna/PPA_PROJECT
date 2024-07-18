import React from 'react';

import CounterPage from '@/Components/CounterPart/CounterPage';
import CarouselPart from '@/Components/Carousle/Carousle';
import ClientSection from '@/Components/ClientSection/ClientSection';
import CommunitySection from '@/Components/CommunitySection/Community';
import DemoSection from '@/Components/DemoSection/Demo';
import MarketingSection from '@/Components/MarketingSection/Market';

const Home: React.FC = () => {
  return (
    <div className="">
      <CarouselPart/>
      <ClientSection/>
      <CommunitySection/>
      <CounterPage/>
      <MarketingSection/>
      <DemoSection/>
    </div>
  );
};

export default Home;
