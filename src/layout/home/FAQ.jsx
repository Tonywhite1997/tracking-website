import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I track my shipment?",
      answer:
        "Simply enter your tracking number on our platform, and you'll see real-time updates on your package location and status.",
    },
    {
      question: "Why is my tracking information not updating?",
      answer:
        "Sometimes it takes 24–48 hours for tracking updates to appear after the carrier picks up the package. Don’t worry, your shipment is still on the way.",
    },
    {
      question: "Can I track multiple packages at once?",
      answer:
        "Yes! You can enter multiple tracking numbers separated by commas or use our dashboard to monitor multiple shipments at the same time.",
    },
    {
      question: "What does 'In Transit' mean?",
      answer:
        "It means your package has been shipped and is on its way to the destination but hasn’t yet reached the final delivery hub.",
    },
    {
      question:
        "Why does my package say 'Delivered' but I haven’t received it?",
      answer:
        "Sometimes packages are marked as delivered a few hours before they actually arrive. Check with your neighbors or your local post office if it doesn’t arrive soon.",
    },
    {
      question: "Can I receive notifications about my shipment?",
      answer:
        "Yes, you can enable email or SMS notifications to get instant updates about your shipment status.",
    },
    {
      question: "What should I do if my shipment is delayed?",
      answer:
        "Delays can happen due to weather, customs, or high demand. Contact the carrier directly or use our support system if the delay is unusually long.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-4 text-left text-gray-800 font-medium focus:outline-none hover:bg-orange-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180 text-orange-400" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
