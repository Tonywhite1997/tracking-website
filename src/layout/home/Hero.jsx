function Main() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-50">
        Never Lose Sight of Your Package Again
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mt-3 md:mt-4 max-w-xl">
        Get real-time delivery updates and notifications for all your packages
      </p>

      <div className="mt-10 w-full max-w-3xl flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Enter your tracking code"
          className="flex-1 px-4 py-3 md:py-4 border-none focus:outline-none text-black"
        />
        <button className="bg-orange-400 text-white px-6 py-3 md:py-4 hover:bg-orange-600 font-semibold cursor-pointer mt-2 md:mt-0">
          Track now
        </button>
      </div>
    </main>
  );
}

export default Main;
