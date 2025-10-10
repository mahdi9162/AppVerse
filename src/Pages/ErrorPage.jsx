import React from 'react';
import errorAnimation from '../assets/Page Not Found 404.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Lottie animationData={errorAnimation} loop autoplay className="w-96" />
        <h1 className="text-3xl font-bold text-slate-800 mt-6">Oops! Page not found</h1>
        <p className="text-slate-500 mt-2 text-center">We couldn’t find the page you were looking for.</p>
        <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition cursor-pointer">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
