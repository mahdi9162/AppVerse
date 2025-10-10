import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import Container from '../Components/Container/Container';
import TrendingApps from '../Components/TrendingApps/TrendingApps';
import loadingAnimation from '../assets/loading.json';
import Lottie from 'lottie-react';
import searchAnimation from '../assets/Searching radius.json';
import emptyBox from '../assets/empty.json';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <Lottie animationData={loadingAnimation} style={{ height: 300 }} />
      </div>
    );

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term)) : apps;

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setIsSearching(true);
    setTimeout(() => {
      setSearch(searchTerm);
      setIsSearching(false);
    }, 500);
  };

  const countApps = searchedApps.length;
  const formatter = new Intl.NumberFormat();
  const labelOfLengthOfApps = countApps === 1 ? 'App Found' : 'Apps Found';

  return (
    <>
      <section>
        <Container>
          <div className="px-3">
            <div className="text-center my-10 md:my-20">
              <h2 className="text-3xl md:text-5xl font-heading mb-3 text-slate-900 font-semibold ">Our All Applications</h2>
              <p className="text-gray-500 font-p text-sm md:text-base">
                Browse all our applications designed <span className="block md:inline-block">to boost your productivity.</span>
              </p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <p className="rounded-full bg-slate-100 text-slate-600 font-p text-sm">
                <span className="font-semibold text-slate-800 mr-1">
                  ({formatter.format(countApps)}) {labelOfLengthOfApps}
                </span>
              </p>
              {/* Search Button */}
              <label className="apps-input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  onChange={handleSearchChange}
                  value={search}
                  type="search"
                  required
                  placeholder="Search your apps"
                  className="font-p"
                />
              </label>
            </div>
          </div>

          {searchedApps.length < 1 && (
            <div>
              <Lottie animationData={emptyBox} loop autoplay className="w-64 mx-auto mt-12" />
              <p className="text-center text-slate-600 mt-4 text-lg hover:text-slate-700 transition">
                📦 No apps found. Try a different name!
              </p>
            </div>
          )}

          {isSearching ? (
            <div className="col-span-full flex justify-center items-center h-96">
              <Lottie animationData={searchAnimation} style={{ height: 300 }} />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-x-6 md:gap-y-8 mb-10 px-3 md:px-0">
              {searchedApps.map((app) => (
                <TrendingApps key={app.id} app={app}></TrendingApps>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Apps;
