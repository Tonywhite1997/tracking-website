import { Truck, PackageCheck, MapPin, CheckCircle } from "lucide-react";
import CardContent from "../../UI/CardContent";
import Card from "../../UI/TrackingCard";

function TrackingDetails({ order }) {
  console.log(order);
  return (
    <section className="w-full max-w-5xl mx-auto p-4 md:p-6">
      {/* Order Summary */}
      <Card className="mb-6 shadow-lg rounded-2xl">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {order?.name}
              </h2>
              <p className="text-sm text-gray-500">
                Tracking Code:{" "}
                <span className="font-mono">{order?.trackingCode}</span>
              </p>
              <p className="mt-1">
                Status:{" "}
                <span className="font-medium text-orange-600">
                  {order?.shippingStatus}
                </span>
              </p>
            </div>
            <Truck className="w-12 h-12 text-orange-500 mt-4 md:mt-0" />
          </div>
        </CardContent>
      </Card>

      {/* Receiver Info */}
      <Card className="mb-6 shadow-lg rounded-2xl">
        <CardContent className="p-4 md:p-6">
          <h3 className="text-lg font-semibold mb-4">Receiver Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {order?.receiver?.name}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {order?.receiver?.phone}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {order?.receiver?.email}
            </p>
            <p className="md:col-span-2">
              <span className="font-semibold">Address:</span>{" "}
              {order?.receiver?.address}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Route */}
      <Card className="mb-6 shadow-lg rounded-2xl">
        <CardContent className="p-4 md:p-6">
          <h3 className="text-lg font-semibold mb-4">Shipping Route</h3>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-center">
            <div>
              <MapPin className="w-6 h-6 text-gray-600 mx-auto" />
              <p className="mt-1 text-sm">Origin</p>
              <p className="font-medium">{order?.origin}</p>
            </div>
            <div className="hidden md:block flex-1 border-t-2 border-dashed border-gray-300" />
            <div>
              <MapPin className="w-6 h-6 text-blue-600 mx-auto" />
              <p className="mt-1 text-sm">Current Location</p>
              <p className="font-medium">{order?.currentLocation}</p>
            </div>
            <div className="hidden md:block flex-1 border-t-2 border-dashed border-gray-300" />
            <div>
              <MapPin className="w-6 h-6 text-green-600 mx-auto" />
              <p className="mt-1 text-sm">Destination</p>
              <p className="font-medium">{order?.destination}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Timeline */}
      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-4 md:p-6">
          <h3 className="text-lg font-semibold mb-4">Delivery Progress</h3>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {["Shipped", "In Transit", "Out for Delivery", "Delivered"].map(
              (step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border-2 
                    ${
                      step === order?.shippingStatus ||
                      (i < 3 && order?.shippingStatus !== "Pending")
                        ? "bg-orange-500 text-white border-orange-500"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {step === "Delivered" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <PackageCheck className="w-5 h-5" />
                    )}
                  </div>
                  <p className="mt-2 text-sm">{step}</p>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default TrackingDetails;
