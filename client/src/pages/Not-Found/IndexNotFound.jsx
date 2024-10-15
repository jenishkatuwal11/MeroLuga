import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function IndexNotFound() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass("animate-bounce");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-center p-4">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 blur-lg rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-pulse"></div>
        <h1
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white relative ${animationClass} transition-transform`}
        >
          404
        </h1>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-8 drop-shadow-lg">
        Uh-oh! You're lost...
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-100 mt-2 mb-8 px-4 drop-shadow-md max-w-lg">
        The page you're looking for doesn't exist. How about we get you back on
        track?
      </p>

      <Link
        to="/"
        className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-white text-indigo-600 rounded-full shadow-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-300 ease-in-out"
      >
        Go Home
      </Link>

      <div className="mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white animate-spin-slow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-6a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default IndexNotFound;
