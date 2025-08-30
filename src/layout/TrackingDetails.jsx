import { MapPin, Truck, CheckCircle } from "lucide-react";
import optimizedStatus from "../helperfuncs/optimizedStatus";

export default function ShipmentTracking({ order }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Shipment Updates</h1>

      {/* Tracking Summary Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="text-gray-500">Tracking Code</p>
            <p className="font-semibold text-xl">{order.trackingCode}</p>
          </div>
          <div>
            <p className="text-gray-500">Destination</p>
            <p className="font-medium flex items-center gap-2">
              <MapPin size={18} className="text-green-500" />{" "}
              {order.destination}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Package Name</p>
            <p className="font-medium flex items-center gap-2">{order.name}</p>
          </div>
        </div>
      </div>

      {/* Tracking History Timeline */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-6">Shipment History</h2>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-1 bg-gray-200"></div>
          {order.history
            .slice()
            .reverse()
            .map((item, index) => (
              <div key={item._id} className="relative pl-10 mb-8">
                {/* Icon */}
                <div
                  className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-yellow-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {index === 0 ? (
                    <Truck size={16} />
                  ) : (
                    <CheckCircle size={16} />
                  )}
                </div>

                {/* Content */}
                <p className="font-medium">{optimizedStatus(item.status)}</p>
                <p className="text-sm text-gray-600">{item.location}</p>
                <p className="text-xs font-bold text-gray-400">
                  {new Date(item.date).toLocaleString()}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
