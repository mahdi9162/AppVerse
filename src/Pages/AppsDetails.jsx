import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import Container from '../Components/Container/Container';
import { MdOutlineFileDownload } from 'react-icons/md';
import { formatNumber } from '../utils/formatNumber';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';
import averageReviewsIcon from '../assets/icon-review.png';
import AppChart from '../Components/AppChart/AppChart';
import { useEffect, useState } from 'react';
import { loadInstalledData, updateInstalledData } from '../utils/localStorage';
import loadingAnimation from '../assets/loading.json';
import Lottie from 'lottie-react';
import { toast } from 'sonner';

const AppsDetails = () => {
  const [isInstall, setIsInstall] = useState(false);

  const params = useParams();
  const paramsNum = Number(params.id);

  useEffect(() => {
    const loadData = loadInstalledData();
    const isAlreadyInstalled = loadData.includes(paramsNum);
    if (isAlreadyInstalled) setIsInstall(true);
  }, [paramsNum]);

  const { apps, loading } = useApps();
  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <Lottie animationData={loadingAnimation} style={{ height: 300 }} />
      </div>
    );
  const appDetail = apps.find((app) => app.id === paramsNum);
  const { id, companyName, downloads, image, description, ratingAvg, ratings, reviews, title } = appDetail;

  const handleInstallBtn = (id) => {
    updateInstalledData(id);
    setIsInstall(true);
    toast.success(`${title} has been successfully installed 🚀`, {
      style: {
        background: '#ecfdf5',
        color: '#065f46',
        border: '1px solid #6ee7b7',
        boxShadow: '0 4px 12px rgba(16,185,129,0.2)',
      },
    });
  };

  return (
    <>
      <section className="flex mt-10 mb-10 lg:mb-20 lg:mt-20">
        <Container>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 pb-8 md:pb-14 border-b border-gray-400/40 px-3 lg:px-0">
            {/* div left */}
            <figure className="mx-auto">
              <img className="w-30 md:h-80 md:object-cover md:w-96 rounded-2xl shadow-lg" src={image} alt="" />
            </figure>

            <div className="flex-1">
              {/* div right */}
              {/* title and company name */}
              <div className="text-center lg:text-start border-b border-gray-400/40 pb-3 md:pb-4">
                <h1 className="text-2xl  md:text-4xl font-semibold font-heading mb-1">{title}</h1>
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
              <div className="text-center lg:text-start font-p">
                <button disabled={isInstall} onClick={() => handleInstallBtn(id)} className="install-btn ">{`${
                  isInstall ? 'Installed' : 'Install'
                }`}</button>
              </div>
            </div>
          </div>

          <AppChart ratings={ratings}></AppChart>

          <div className="px-3 md:px-0 w-92 md:max-w-3xl lg:w-full text-center mx-auto">
            <h1 className="font-heading font-heading text-3xl font-semibold mb-6 text-slate-800 relative inline-block">
              Description
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-52 h-[3px] bg-gradient-to-r from-blue-500 to-indigo-500/50 rounded-full"></span>
            </h1>
            <p className="font-p text-sm md:text-lg text-slate-600 leading-relaxed text-justify md:text-center">{description}</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AppsDetails;
