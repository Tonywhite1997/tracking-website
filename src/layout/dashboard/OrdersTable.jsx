import { useState, useEffect } from "react";

function OrderForm({ order }) {
  const shippingOptions = ["Pending", "In Transit", "Delivered", "Cancelled"];

  const [formData, setFormData] = useState({
    receiver: {
      name: "",
      phone: "",
      email: "",
      address: "",
    },
    name: "",
    trackingCode: "",
    origin: "",
    destination: "",
    currentLocation: "",
    shippingStatus: "",
  });

  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (order) {
      setFormData({
        receiver: {
          name: order.receiver?.name || "",
          phone: order.receiver?.phone || "",
          email: order.receiver?.email || "",
          address: order.receiver?.address || "",
        },
        name: order.name || "",
        trackingCode: order.trackingCode || "",
        origin: order.origin || "",
        destination: order.destination || "",
        currentLocation: order.currentLocation || "",
        shippingStatus: order.shippingStatus || "Pending",
      });
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated form:", formData);
    // Call API here
    setIsDirty(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit Order</h2>

      {/* Receiver Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Receiver Name</label>
          <input
            type="text"
            value={formData.receiver.name}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Receiver Phone</label>
          <input
            type="text"
            value={formData.receiver.phone}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Receiver Email</label>
          <input
            type="email"
            value={formData.receiver.email}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Receiver Address</label>
          <input
            type="text"
            value={formData.receiver.address}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
      </div>

      {/* Order Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={formData.name}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tracking Code</label>
          <input
            type="text"
            value={formData.trackingCode}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Origin</label>
          <input
            type="text"
            value={formData.origin}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Destination</label>
          <input
            type="text"
            value={formData.destination}
            disabled
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Current Location</label>
          <input
            type="text"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Shipping Status</label>
          <select
            name="shippingStatus"
            value={formData.shippingStatus}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          >
            {shippingOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Edit Button */}
      {isDirty && (
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Save Changes
          </button>
        </div>
      )}
    </form>
  );
}

export default OrderForm;
