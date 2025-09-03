import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">YoyoTrack</h2>
          <p className="mt-4 text-gray-400">
            Reliable shipment tracking made simple. Stay updated on all your
            deliveries in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-orange-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ShipTrack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
