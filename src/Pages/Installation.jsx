import React, { useState } from 'react';
import { loadInstalledData, removeCard } from '../utils/localStorage';
import useApps from '../Hooks/useApps';
import Container from '../Components/Container/Container';
import InstalledCard from '../Components/InstalledCard/InstalledCard';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState(loadInstalledData);
  const [sortOrder, setSortOrder] = useState('none');

  const handleUninstall = (id) => {
    removeCard(id);
    const updatedList = loadInstalledData();
    setInstalledApps(updatedList);
  };

  const { apps, loading } = useApps();

  if (loading) return <p>Loading...</p>;
  const data = apps.filter((app) => installedApps.includes(app.id));

  const countApps = data.length;
  const formatter = new Intl.NumberFormat();
  const labelOfLengthOfApps = countApps === 1 ? 'App' : 'Apps';

  let sortedData;

  if (sortOrder === 'downloads-asc') {
    sortedData = [...data].sort((a, b) => a.downloads - b.downloads);
  } else if (sortOrder === 'downloads-dsc') {
    sortedData = [...data].sort((a, b) => b.downloads - a.downloads);
  } else {
    sortedData = data;
  }

  return (
    <>
      <section className="px-3 md:px-0">
        <Container>
          <div className="text-center my-10 md:my-20">
            <h2 className="text-3xl md:text-5xl font-heading mb-3 text-slate-900 font-semibold ">Your Installed Apps</h2>
            <p className="text-gray-500 font-p text-sm md:text-base">Explore your installed apps in one place.</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold text-sm md:text-base text-slate-800 mr-1">
                ({formatter.format(countApps)}) {labelOfLengthOfApps} Found
              </span>
            </div>
            <label className="md:w-full md:max-w-xs font-p">
              <select className="sort-style font-p" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="none"> Sort by Downloads </option>
                <option value="downloads-asc"> Low-High </option>
                <option value="downloads-dsc"> High-Low </option>
              </select>
            </label>
          </div>

          <div className={`${installedApps.length < 1 ? 'text-center mt-20 block' : 'hidden'}`}>
            <p className="animate-bounce text-4xl mb-2">🤖</p>
            <h2 className="text-lg font-semibold text-slate-700">Your installed apps will appear here!</h2>
            <p className="text-sm text-slate-400">Go ahead, install something cool! ⚡</p>
          </div>

          <div className="mt-6 mb-10 md:mb-30 flex flex-col gap-4">
            {sortedData.map((app) => (
              <InstalledCard key={app.id} app={app} handleUninstall={handleUninstall}></InstalledCard>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Installation;
