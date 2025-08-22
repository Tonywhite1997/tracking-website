import DHL from "/public/dhl-logo.svg";
import Fedex from "/public/fedex-logo.png";
import UPS from "/public/ups-logo.svg";
import USPS from "/public/usps-logo.svg";

function CustomersCount() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">
          Trusted by <span className="text-orange-400">25,000+</span> Customers
          Worldwide
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From individuals to e-commerce businesses, our platform has tracked
          over{" "}
          <span className="font-semibold text-gray-800">
            1 million shipments
          </span>{" "}
          across 50+ carriers — delivering peace of mind and reliable updates
          every day.
        </p>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-orange-400">1M+</h3>
            <p className="mt-2 text-gray-600">Shipments Tracked</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-orange-400">50+</h3>
            <p className="mt-2 text-gray-600">Carriers Supported</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-orange-400">98%</h3>
            <p className="mt-2 text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-orange-400">25k+</h3>
            <p className="mt-2 text-gray-600">Active Customers</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
          <img src={DHL} alt="DHL" className="h-10" />
          <img src={Fedex} alt="FedEx" className="h-10" />
          <img src={UPS} alt="UPS" className="h-10" />
          <img src={USPS} alt="USPS" className="h-10" />
        </div>
      </div>
    </section>
  );
}

export default CustomersCount;
