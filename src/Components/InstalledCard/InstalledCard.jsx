import React from 'react';
import { GoDownload } from 'react-icons/go';
import { formatNumber } from '../../utils/formatNumber';
import { IoMdStar } from 'react-icons/io';

const InstalledCard = ({ app, handleUninstall }) => {

  const { id, downloads, image, ratingAvg, size, title } = app;

  const handleRemoveBtn = (id) => {
    handleUninstall(id)
  }
  return (
    <>
      <div className="install-card-main">
        {/* Left Content */}
        <div className="flex items-center gap-6">
          <figure>
            <img className="w-20 h-20 rounded-2xl object-cover shadow-lg ring-1 ring-sky-100" src={image} alt="" />
          </figure>

          <div>
            <h2 className="font-semibold font-heading text-slate-800 text-lg md:text-xl mb-1">{title}</h2>
            <div className="flex items-center gap-4 font-p text-slate-600">
              <p className="flex items-center gap-1 text-emerald-600 font-medium">
                <GoDownload className="text-lg" /> {formatNumber(downloads)}
              </p>
              <p className="flex items-center gap-1 text-amber-500 font-medium">
                <IoMdStar className="text-lg" /> {ratingAvg}
              </p>
              <p className="text-slate-500">{size} MB</p>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <button onClick={() => handleRemoveBtn(id)} className="uninstall-btn">Uninstall</button>
      </div>
    </>
  );
};

export default InstalledCard;
