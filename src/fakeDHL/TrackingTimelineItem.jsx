import React, { useState } from "react";
import { CheckCircle, Truck, MapPin } from "lucide-react";

const TrackingTimelineItem = ({ status, date, completed }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="flex flex-col items-center mr-4">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500"
          }`}
        >
          <CheckCircle size={20} />
        </div>
        <div
          className={`w-1 h-full ${completed ? "bg-green-500" : "bg-gray-300"}`}
        ></div>
      </div>
      <div>
        <p
          className={`font-semibold ${
            completed ? "text-black" : "text-gray-400"
          }`}
        >
          {status}
        </p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default function DHLTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipment, setShipment] = useState(null);

  const fakeShipmentData = {
    number: "JD1234567890",
    estimatedDelivery: "2025-09-03",
    history: [
      { status: "Shipment picked up", date: "2025-08-28", completed: true },
      { status: "In transit", date: "2025-08-29", completed: true },
      {
        status: "Arrived at local facility",
        date: "2025-08-30",
        completed: false,
      },
      { status: "Out for delivery", date: "2025-09-02", completed: false },
      { status: "Delivered", date: "2025-09-03", completed: false },
    ],
  };

  const handleTrack = () => {
    // For demo purposes, we just set the fake data
    setShipment(fakeShipmentData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">DHL Shipment Tracking</h1>

      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={handleTrack}
            className="bg-yellow-500 text-white px-4 py-2 rounded-r hover:bg-yellow-600 transition"
          >
            Track
          </button>
        </div>

        {shipment && (
          <div>
            <div className="mb-6">
              <p className="text-gray-500">Tracking Number:</p>
              <p className="font-semibold text-lg">{shipment.number}</p>
              <p className="text-gray-500 mt-2">
                Estimated Delivery:{" "}
                <span className="font-semibold">
                  {shipment.estimatedDelivery}
                </span>
              </p>
            </div>

            <div>
              {shipment.history.map((item, idx) => (
                <TrackingTimelineItem key={idx} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
