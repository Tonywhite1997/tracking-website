import React from "react";

function Main() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center h-full text-amber-50 text-center">
      <h1 className="text-5xl font-bold">
        Never Lose Sight of Your Package Again
      </h1>
      <p className="text-2xl text-gray-200 mt-2">
        Get real-time delivery updates and notifications for all your packages
      </p>
      <div className="mt-5 w-120 bg-white rounded-md shadow-md flex overflow-hidden">
        <input
          type="text"
          placeholder="Enter your tracking code"
          className="flex-1 px-4 py-4 border-none focus:outline-none text-black"
        />
        <button className="bg-orange-400 text-white px-6 py-4 hover:bg-orange-600 font-semibold">
          Track now
        </button>
      </div>
    </main>
  );
}

export default Main;
