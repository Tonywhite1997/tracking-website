import { FaQuoteLeft } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Seller",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Tracking my packages has never been this easy. The updates are always accurate and I feel at ease knowing exactly where my order is.",
    },
    {
      name: "Michael Carter",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I ship globally and this platform gives me peace of mind. The real-time updates and SMS alerts are game changers.",
    },
    {
      name: "David Wilson",
      role: "Frequent Shopper",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "Super reliable tracking service. I recommend it to anyone who wants a simple, professional, and transparent shipping experience.",
    },
    {
      name: "Emma Brown",
      role: "Online Retailer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "This platform has saved me so much time. Tracking is seamless and the dashboard is extremely user-friendly.",
    },
    {
      name: "James Lee",
      role: "Logistics Manager",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "Real-time updates, reliable notifications, and accurate delivery status — exactly what I needed for my logistics workflow.",
    },
  ];

  return (
    <section className="bg-orange-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex space-x-6 overflow-x-auto no-scrollbar py-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
              <p className="text-gray-600 mb-6">{t.text}</p>
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-2 border-2 border-orange-400"
                />
                <h3 className="font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
