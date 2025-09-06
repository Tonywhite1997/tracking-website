import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaRegClock, FaMailBulk } from "react-icons/fa";
import BgImage from "../../public/call-center.jpg";

function CustomerSupport() {
  const form = useRef();
  const [emailRes, setEmailRes] = useState({
    error: "",
    isLoading: false,
    isSuccess: false,
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setEmailRes((prev) => {
      return { ...prev, isLoading: true };
    });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setEmailRes((prev) => {
        return { ...prev, isLoading: false, isSuccess: true };
      });
    } catch (error) {
      setEmailRes((prev) => {
        return { ...prev, isLoading: false, error: "Error Try again" };
      });
    }
  };

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
      <div className="w-full md:w-auto mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Call Us */}
        <div className="relative overflow-hidden shadow-md shadow-orange-400/50 rounded-lg cursor-pointer group">
          {/* Animated Fill */}
          <div className="absolute inset-0 bg-orange-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

          <div className="relative flex flex-col items-center p-6 text-orange-400 group-hover:text-white transition-colors duration-500">
            <FaMailBulk className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-center">Contact Us</h2>
            <p className="text-center">
              Talk to support <br />
              <a href="mailto:support@yoyotrack.com">support@yoyotrack.com</a>
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
          title="YoyoTrack Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.899287424223!2d-74.00594118459344!3d40.71277577933081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31614f0f4d%3A0xbee8bdf3524edb02!2s3261%20Anmoore%20Rd%2C%20Brooklyn%2C%20NY%2011230!5e0!3m2!1sen!2sus!4v1692510000000!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full md:max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">
          Send Us a Message
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="w-full md:col-span-2 bg-orange-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            {emailRes.isLoading
              ? "Sending..."
              : emailRes.isSuccess
              ? "Email Sent"
              : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerSupport;
