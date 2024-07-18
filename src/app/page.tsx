"use client"

import React from 'react';
import CounterPage from '@/Components/CounterPart/CounterPage';
import CarouselPart from '@/Components/Carousle/Carousle';
import ClientSection from '@/Components/ClientSection/ClientSection';
import CommunitySection from '@/Components/CommunitySection/Community';
import DemoSection from '@/Components/DemoSection/Demo';
import MarketingSection from '@/Components/MarketingSection/Market';
import CustomerSection from '@/Components/CustomerSection/CustomerSection';
import LearnSection from '@/Components/LearnSection/LearnSection';
import LOGIN from "../assets/Login_img.png"
import MOBILE from "../assets/mobile_img.png"
import modeStore from '@/stores/modeStore';
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";

const Home: React.FC = () => {
  const {mode} = modeStore((state) => ({mode:state.mode}));
  return (
    <div className={`${mode === "dark" ? "bg-black" : "bg-white"}`}>
      <Navbar/>
      <CarouselPart/>
      <ClientSection/>
      <CommunitySection/>
      <LearnSection image={LOGIN} heading="The unseen of spending three years at Pixelgrade"
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio." button="Learn More"/>
      <CounterPage/>
      <LearnSection image={MOBILE} heading="How to design your site footer like we did"
        Text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida." button="Learn More"/>
      <CustomerSection/>
      <MarketingSection/>
      <DemoSection/>
      <Footer/>
    </div>
  );
};

export default Home;
