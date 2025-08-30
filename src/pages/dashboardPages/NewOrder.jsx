import { useState } from "react";
import useCreateOrder from "../../customHooks/useCreateOrder";

const boilerPlate = {
  receiver: {
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  name: "",
  destination: "",
  currentLocation: "",
};

function NewOrder() {
  const [formData, setFormData] = useState(boilerPlate);

  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrMsg("");

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
  };

  const { createOrder, isPending, isSuccess, error } = useCreateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.receiver.address.trim() ||
      !formData.receiver.email.trim() ||
      !formData.receiver.phone.trim() ||
      !formData.receiver.name.trim() ||
      !formData.currentLocation.trim() ||
      !formData.destination.trim() ||
      !formData.name.trim()
    ) {
      return setErrMsg("All fields required");
    }

    if (error) {
      return setErrMsg(error?.response?.data?.msg);
    }
    try {
      createOrder(formData);
      setFormData(boilerPlate);
    } catch (e) {
      setErrMsg("");
    }
  };
  return (
    <div>
      <form
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Create New Order
        </h2>

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
              type="number"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </div>

        {errMsg && (
          <div className="w-full text-center -mb-2">
            <small className="text-red-500">{errMsg}</small>
          </div>
        )}

        <div className="pt-4">
          <button
            type="submit"
            disabled={isPending}
            className={`w-full cursor-pointer  bg-orange-600  text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition ease-in`}
          >
            {isPending
              ? "Creating..."
              : isSuccess
              ? "Order Created"
              : "Create Order"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewOrder;
