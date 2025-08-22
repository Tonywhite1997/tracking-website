import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import BgImage from "../../public/call-center.jpg";

function CustomerSupport() {
  return (
    <div className="flex flex-col">
      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
        <img
          src={BgImage}
          alt="background image"
          className="absolute filter brightness-40 inset-0 w-full h-full object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Customer Support
        </h1>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Call Us */}
        <div className="relative overflow-hidden shadow-md shadow-orange-400/50 rounded-lg cursor-pointer group">
          {/* Animated Fill */}
          <div className="absolute inset-0 bg-orange-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

          <div className="relative flex flex-col items-center p-6 text-orange-400 group-hover:text-white transition-colors duration-500">
            <FaPhoneAlt className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-center">Call Us</h2>
            <p className="text-center">
              Contact <br />
              Talk to support <br />
              +1 (516) 321-0789
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="relative overflow-hidden shadow-md shadow-orange-400/50 rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-orange-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          <div className="relative flex flex-col items-center p-6 text-orange-400 group-hover:text-white transition-colors duration-500">
            <FaMapMarkerAlt className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-center">Location</h2>
            <p className="text-center">
              Find where we are <br />
              3261 Anmoore Road, NY 11230
            </p>
          </div>
        </div>

        {/* Meet Us */}
        <div className="relative overflow-hidden shadow-md shadow-orange-400/50 rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-orange-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          <div className="relative flex flex-col items-center p-6 text-orange-400 group-hover:text-white transition-colors duration-500">
            <FaRegClock className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-center">Meet Us</h2>
            <p className="text-center">
              Available Hours to meet <br />
              9:00 AM – 8:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96">
        <iframe
          title="ShipTrack Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.899287424223!2d-74.00594118459344!3d40.71277577933081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31614f0f4d%3A0xbee8bdf3524edb02!2s3261%20Anmoore%20Rd%2C%20Brooklyn%2C%20NY%2011230!5e0!3m2!1sen!2sus!4v1692510000000!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">
          Send Us a Message
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-orange-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSupport;
