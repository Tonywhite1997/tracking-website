import { useState } from "react";
import useOrders from "../../customHooks/useOrders";
import OrdersTable from "../../layout/dashboard/OrdersTable";

function Orders() {
  const { orders, isLoading, error, isRefetching } = useOrders();

  // console.log(orders?.data);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-500">Orders</h1>
      <p>Click any order to view details</p>
      {isLoading && <div>loading your oders...</div>}
      {isRefetching && <p>Updating your orders...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {orders?.data && <OrdersTable orders={orders} />}
    </div>
  );
}
export default Orders;
