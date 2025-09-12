import { Link } from "react-router-dom";
import useOrders from "../../customHooks/useOrders";
function Invoices() {
  const { orders } = useOrders();
  return (
    <div>
      <div className="overflow-x-scroll w-full no-scrollbar">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-orange-50 text-gray-700">
            <tr>
              {/* Name now spans 2 columns */}
              <th colSpan={2} className="text-left py-3 px-4">
                Name
              </th>
              <th className="text-left py-3 px-4">Tracking Code</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.map((order) => (
              <tr
                key={order._id}
                className="border-b last:border-none hover:bg-orange-50 transition"
              >
                {/* Data cell also spans 2 columns */}
                <td colSpan={2} className="py-3 px-4 max-w-xs">
                  {order.name}
                </td>
                <td className="py-3 px-4 max-w-xs">{order.trackingCode}</td>

                <td className="py-3 px-4 max-w-xs">{order.receiver.email}</td>

                <td className="py-3 px-4 max-w-xs">
                  <Link
                    to={`/dashboard/invoice/${order._id}`}
                    className="block w-full text-center bg-orange-400 text-white p-2 px-4 cursor-pointer h-full border rounded-md"
                  >
                    Print
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Invoices;
