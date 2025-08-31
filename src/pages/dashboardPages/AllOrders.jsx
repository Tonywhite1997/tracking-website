import { Link } from "react-router-dom";
import useAllOrders from "../../customHooks/useAllOrders";

function AllOrders() {
  const {
    allOrders: orders,
    isSuccess,
    isLoading,
    isRefetching,
    error,
  } = useAllOrders();
  return (
    <div className="overflow-x-auto w-full">
      <h1 className="text-2xl font-bold mb-4 text-orange-500">All Orders</h1>
      {isLoading && <p className="text-center">Loading...</p>}
      {isRefetching && <p className="text-center">Updating orders...</p>}
      {error && (
        <p className="text-center text-red-500 text-2xl">
          {error?.response?.data?.msg}
        </p>
      )}
      {isSuccess && (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Tracking Code</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Creator</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order) => (
              <tr
                key={order._id}
                className="border-b last:border-none hover:bg-orange-50 transition"
              >
                <td className="py-3 px-4 break-words break-all whitespace-normal max-w-xs">
                  <Link
                    to={`/dashboard/order/${order._id}`}
                    className="block w-full h-full"
                  >
                    {order.name}
                  </Link>
                </td>
                <td className="py-3 px-4 break-words break-all whitespace-normal max-w-xs">
                  <Link
                    to={`/dashboard/order/${order._id}`}
                    className="block w-full h-full"
                  >
                    {order.trackingCode}
                  </Link>
                </td>
                <td className="py-3 px-4">
                  <Link
                    to={`/dashboard/order/${order._id}`}
                    className="block w-full h-full"
                  >
                    <span
                      className={`px-2 py-1 rounded-full text-white text-sm ${
                        order.shippingStatus === "Delivered"
                          ? "bg-green-500"
                          : order.shippingStatus === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {order.shippingStatus}
                    </span>
                  </Link>
                </td>
                <td className="py-3 px-4 break-words break-all whitespace-normal max-w-xs">
                  <Link
                    to={`/dashboard/order/${order._id}`}
                    className="block w-full h-full"
                  >
                    {order.creator.email}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllOrders;
