import React from 'react';
import Container from '../Container/Container';
import playStoreImg from '../../assets/playstore.png';
import appStoreImg from '../../assets/appstore.svg';
import heroImg from '../../assets/hero.png';

const HeroSection = () => {
  return (
    <>
      <section className="mt-10 md:mt-20">
        {/* Hero section part 1 */}
        <Container>
          <div className="px-3 md:px-0 flex flex-col justify-center items-center text-center">
            <div className="mb-8 md:mb-10">
              <h1 className="font-heading text-2xl md:text-7xl  md:leading-20 font-bold md:font-semibold text-slate-800">
                <span className="md:block">We Build</span>{' '}
                <span className="bg-gradient-to-r from-[#8b5cf6] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
                  Productive{' '}
                </span>
                Apps
              </h1>
              <p className="text-gray-600  w-72 md:w-auto mx-auto mt-3 md:mt-5 font-p text-sm md:text-lg leading-relaxed">
                We craft innovative apps that simplify your daily life and <span className="md:block">amplify your productivity.</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mb-10 gap-3 md:gap-4">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex h-12">
                <img src={playStoreImg} alt="Google Play" className='hero-btn'/>
              </a>

              <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="inline-flex h-12">
                <img src={appStoreImg} alt="App Store" className='hero-btn'/>
              </a>
            </div>
            <div>
              <img src={heroImg} alt="Hero Image" />
            </div>
          </div>
        </Container>
        {/* Hero section part 2 */}
        <div
          className="bg-gradient-to-r from-[#7B5CF5] via-[#9B6CF9] to-[#C084FC]
            py-10 md:py-20 text-center">
          <Container>
            <h2
              className="text-[#F8FAFC] drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]
               font-heading font-semibold text-lg md:text-3xl lg:text-5xl">
              Trusted by Millions, Built for You
            </h2>
            <div className="px-3 md:px-0 flex justify-center items-center flex-col lg:flex-row mt-5 md:mt-10 gap-6 lg:gap-10 ">
              <div className="hero-card font-p bg-gradient-to-r from-purple-500 to-pink-500">
                <p className="text-[#E0F2FF] text-sm md:text-base">Total Downloads</p>
                <p className="hero-card-details">
                  29.6M
                </p>
                <p className="text-[#E0F2FF] text-sm md:text-base">21% more than last month</p>
              </div>
              <div className="hero-card font-p bg-gradient-to-r from-sky-500 to-blue-600">
                <p className="text-[#E0F2FF] text-sm md:text-base">Total Reviews</p>
                <p className="hero-card-details">
                  906K
                </p>
                <p className="text-[#E0F2FF] text-sm md:text-base">46% more than last month</p>
              </div>
              <div className="hero-card font-p bg-gradient-to-r from-emerald-500 to-teal-400">
                <p className="text-[#E0F2FF] text-sm md:text-base">Active Apps</p>
                <p className="hero-card-details">
                  132+
                </p>
                <p className="text-[#E0F2FF] text-sm md:text-base">31 more will Launch</p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
