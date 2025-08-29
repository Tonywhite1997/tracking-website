import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteOrder from "../../customHooks/useDeleteOrder";
import useEditOrder from "../../customHooks/useEditOrder";
useEditOrder;

function OrderForm({ order }) {
  const shippingOptions = [
    "On Hold",
    "Pending",
    "Processing",
    "In Transit",
    "Lost",
    "Damaged",
    "Out For Delivery",
    "Delivered",
  ];

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

    if (name.startsWith("receiver.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        receiver: {
          ...prev.receiver,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setIsDirty(true);
  };

  const { deleteOrder, deleteError, isDeleting, deleteSuccess } =
    useDeleteOrder();

  const { edit, isPending, error, isSuccess } = useEditOrder();

  const handleSubmit = (e) => {
    e.preventDefault();
    edit({ editedOrder: formData, id: order._id });
    setIsDirty(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    deleteSuccess && navigate("/dashboard/order");
  }, [deleteSuccess]);

  return (
    <div>
      <div className="flex justify-center items-center gap-2 flex-col mb-4">
        {order && <h1 className="font-bold text-3xl">{order.name}</h1>}
        <button
          className="border p-2 rounded bg-red-500 text-white hover:bg-amber-500 transition ease-in cursor-pointer"
          disabled={isDeleting}
          onClick={() => deleteOrder(order._id)}
        >
          {isDeleting
            ? "Deleting..."
            : deleteSuccess
            ? "Order Deleted"
            : "Delete Order"}
        </button>
      </div>
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
              name="receiver.name"
              value={formData.receiver.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Receiver Phone</label>
            <input
              type="text"
              name="receiver.phone"
              value={formData.receiver.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Receiver Email</label>
            <input
              type="email"
              name="receiver.email"
              value={formData.receiver.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Receiver Address
            </label>
            <input
              type="text"
              name="receiver.address"
              value={formData.receiver.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* Order Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Tracking Code</label>
            <input
              type="text"
              name="trackingCode"
              readOnly
              value={formData.trackingCode}
              onChange={handleChange}
              className="w-full border bg-gray-200 rounded-lg p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Origin</label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">
              Current Location
            </label>
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

        {error && <small>{editError}</small>}

        {/* Edit Button */}

        <div className="pt-4">
          <button
            type="submit"
            disabled={isPending || !isDirty}
            className={`w-full cursor-pointer  ${
              isDirty ? "bg-orange-500" : "bg-gray-600"
            } text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition`}
          >
            {isPending
              ? "Saving changes"
              : isSuccess
              ? "Changes Saved"
              : "Edit Order"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
