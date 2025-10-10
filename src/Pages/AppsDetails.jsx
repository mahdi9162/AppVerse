import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Container from '../Components/Container/Container';
import { MdOutlineFileDownload } from 'react-icons/md';
import { formatNumber } from '../utils/formatNumber';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import averageReviewsIcon from '../assets/icon-review.png';
import AppChart from '../Components/AppChart/AppChart';
import { useState } from 'react';

const AppsDetails = () => {
  const [isInstall, setIsInstall] = useState(false);
  const params = useParams();
  const paramsNum = Number(params.id);

  const { apps, loading } = useApps();
  if (loading) return <p>Loading...</p>;
  const appDetail = apps.find((app) => app.id === paramsNum);
  const { companyName, description, downloads, image, ratingAvg, ratings, reviews, title } = appDetail;

  const handleInstallBtn = () => {
    setIsInstall(true);
  };
  console.log('Current install state:', isInstall);
  return (
    <>
      <section className="flex mt-10 md:mt-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 md:pb-14 border-b border-gray-400/40 px-3 md:px-0">
            {/* div left */}
            <figure className="mx-auto">
              <img className="w-30 md:h-80 md:object-cover md:w-96 rounded-2xl shadow-lg" src={image} alt="" />
            </figure>

            <div className="flex-1">
              {/* div right */}
              {/* title and company name */}
              <div className="text-center md:text-start border-b border-gray-400/40 pb-3 md:pb-4">
                <h1 className="text-2xl md:text-4xl font-semibold font-heading mb-1">{title}</h1>
                <p className="text-gray-400 text-sm font-p">
                  Developed by <span className="text-blue-600 font-medium">{companyName}</span>
                </p>
              </div>

              {/* Details */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-6 text-center bg-white/60 backdrop-blur-sm rounded-xl p-5 md:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/40">
                {/* Download */}
                <div className="flex-1">
                  <img src={downloadIcon} alt="Download Icon" className="mx-auto w-7 md:w-auto" />
                  <p className="text-sm font-medium text-slate-500 my-1">Downloads</p>
                  <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent tracking-tight">
                    {formatNumber(downloads)}
                  </p>
                </div>
                {/* Average Ratings */}
                <div className="flex-1 rating-card">
                  <img src={ratingIcon} alt="Download Icon" className="mx-auto w-8 md:w-auto" />
                  <p className="text-sm font-medium text-slate-500 my-1">Rating</p>
                  <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-tight">
                    {ratingAvg}
                  </p>
                </div>
                {/* Total Reviews */}
                <div className="flex-1">
                  <img src={averageReviewsIcon} alt="Download Icon" className="mx-auto w-8 md:w-auto" />
                  <p className="text-sm font-medium text-slate-500 my-1">
                    <span className="hidden md:inline">Total</span> Reviews
                  </p>
                  <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent tracking-tight">
                    {formatNumber(reviews)}
                  </p>
                </div>
              </div>
              <div className="text-center md:text-start font-p">
                <button disabled={isInstall} onClick={handleInstallBtn} className= 'install-btn '>{`${isInstall ? 'Installed' : 'Install'}`}</button>
              </div>
            </div>
          </div>

          <AppChart ratings={ratings}></AppChart>
        </Container>
      </section>
    </>
  );
};

export default AppsDetails;
