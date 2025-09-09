import { Truck, CheckCircle } from "lucide-react";
import { formatDate } from "../helperfuncs/formatDate";

export default function ShipmentTracking({ order }) {
  return (
    <div className="min-h-screen flex flex-col items-center -mt-2 px-6 md:py-8">
      <div className="flex justify-between w-full border-b-orange-500 border-b-10 pb-2">
        <div>
          <h1 className="font-bold">Shipment Dates</h1>
          <p>Depature Date:{new Date(order.createdAt).toLocaleDateString()}</p>
          <p>
            Est. Delivery Date:
            {new Date(order.estimatedDelivery).toLocaleDateString()}
          </p>
        </div>
        <div>
          <h1 className="font-bold">Destination</h1>
          <p>{order.destination}</p>
        </div>
      </div>

      <div className="w-full border-b-orange-500 border-b-10 pb-2">
        <h1 className="font-bold border-b-2 mb-1 border-orange-200">
          Shipment Profile
        </h1>
        <div className="flex justify-between sm:flex-row flex-col gap-4">
          <div>
            <h1 className="underline">Sender Details</h1>
            <p>Name: {order.sender.name}</p>
            <p>Address: {order.sender.address}</p>
            <p>Package Location: {order.currentLocation}</p>
          </div>
          <div>
            <h1 className="underline">Receiver Details</h1>
            <p>Name: {order.receiver.name}</p>
            <p>Address: {order.receiver.address}</p>
            <p>Email: {order.receiver.email}</p>
            <p>Phone: {order.receiver.phone}</p>
          </div>
        </div>
      </div>

      <div className="w-full border-b-orange-500 border-b-10 pb-2">
        <h1 className="font-bold border-b-2 mb-1 border-orange-200">
          Shipment content/description
        </h1>
        <div className="flex gap-2 justify-between mt-2">
          <p>SKU Number: {order.packageDescription.SKU}</p>
          <p>Quantity: {order.packageDescription.quantity}</p>
          <p>Weight: {order.packageDescription.weight}</p>
        </div>
      </div>

      <div className="w-full  border-b-orange-500 border-b-10 pb-2">
        <h1 className="font-bold border-b-2 mb-1 border-orange-200">
          Shipment facts
        </h1>
        <div>
          <p>Content: {order.name}</p>
          <p>Remark: {order.remark}</p>
        </div>
      </div>

      {/* Tracking History Timeline */}
      <div className="w-full max-w-4xl -mt-2 pb-2 ">
        <h2 className="font-bold mb-6 mt-2 border-b-2 border-orange-200">
          Shipment History
        </h2>
        <div className="relative -mt-4">
          <div className="absolute left-3 top-0 h-full w-1 bg-gray-200"></div>
          {order.history
            .slice()
            .reverse()
            .map((item, index) => (
              <div key={item._id} className="relative pl-10 mb-8">
                {/* Icon */}

                <div
                  className={`absolute left-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    index === 0 &&
                    order.history[order.history.length - 1].status !==
                      "Delivered"
                      ? "bg-yellow-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {index === 0 && item.status !== "Delivered" ? (
                    <Truck size={16} />
                  ) : (
                    <CheckCircle size={16} />
                  )}
                </div>

                {/* Content */}
                <p className="font-medium">{item.status}</p>
                <p className=" text-gray-600">{item.remark}</p>
                <p className="text-xs text-gray-600">{item.location}</p>
                <p className="text-xs text-gray-600">{formatDate(item.date)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
