import React from 'react';
import useApps from '../Hooks/useApps';
import HeroSection from '../Components/HeroSection/HeroSection';

const Home = () => {
  const data = useApps();
  console.log(data);

  return (
    <>
      <HeroSection></HeroSection>
    </>
  );
};

export default Home;
