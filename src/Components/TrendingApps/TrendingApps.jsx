import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { formatNumber } from '../../utils/formatNumber';
import { IoIosStar } from 'react-icons/io';

const TrendingApps = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;

  const download = formatNumber(downloads);

  return (
    <>
      <div className=" trending-card-style">
        <figure>
          <img className="w-full h-40 md:h-56 object-cover rounded-xl " src={image} loading="lazy" alt="" />
        </figure>
        <h3 className="font-heading font-semibold text-slate-800 my-3">{title}</h3>
        <div className="flex justify-between">
          <p
            className="flex items-center font-p px-2 py-1 rounded-md bg-sky-50 text-sky-600 
            transition-transform hover:scale-[1.03] text-sm md:text-base"
          >
            <MdOutlineFileDownload className="mr-1" /> {download}
          </p>
          <p className="flex items-center font-p text-sm md:text-base">
            <IoIosStar className="text-amber-500 mr-1 " /> {ratingAvg}
          </p>
        </div>
      </div>
    </>
  );
};

export default TrendingApps;
