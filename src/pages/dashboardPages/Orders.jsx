import useOrders from "../../customHooks/useOrders";
import OrdersTable from "../../layout/dashboard/OrdersTable";

function Orders() {
  const { orders, isLoading, error, isRefetching } = useOrders();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-orange-500">Orders</h1>
      {orders?.data?.length > 0 && (
        <p className="text-center">Click any order to view details</p>
      )}
      {isLoading && <p className="text-center">loading your oders...</p>}
      {isRefetching && <p className="text-center">Updating your orders...</p>}
      {!orders?.data?.length && !isLoading && (
        <p className="text-center text-xl mb-2 text-red-500">
          You have no available orders
        </p>
      )}
      {error && (
        <p className="text-red-500 text-center">{error?.response?.data?.msg}</p>
      )}
      {orders?.data && <OrdersTable orders={orders} />}
    </div>
  );
}
export default Orders;
