import React from 'react';
import useApps from '../Hooks/useApps';
import HeroSection from '../Components/HeroSection/HeroSection';
import Container from '../Components/Container/Container';
import TrendingApps from '../Components/TrendingApps/TrendingApps';
import { Link } from 'react-router';
import loadingAnimation from '../assets/loading.json';
import Lottie from 'lottie-react';

const Home = () => {
  const { apps, loading } = useApps();
  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <Lottie animationData={loadingAnimation} style={{ height: 300 }} />
      </div>
    );

  const trendingApps = apps.slice(0, 8);

  return (
    <>
      <HeroSection></HeroSection>
      {/* Trending Section */}
      <section className="my-10 md:my-20 px-3 lg:px-0">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-heading mb-3 text-slate-900 font-semibold">Trending Apps</h2>
            <p className="text-gray-500 font-p text-sm md:text-base">
              Explore our hand-picked trending apps <span className="block md:inline">built for everyday productivity</span>
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-x-6 md:gap-y-8 mb-10 px-3 md:px-0 cursor-pointer">
            {trendingApps.map((app) => (
              <TrendingApps key={app.id} app={app}></TrendingApps>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/apps" className="secondary-btn-style font-p">
              Show all
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
