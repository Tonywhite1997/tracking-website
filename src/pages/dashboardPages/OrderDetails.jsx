import { useParams } from "react-router-dom";
import OrderForm from "../../layout/dashboard/EditOrderForm";
import useOrder from "../../customHooks/useOrder";

function OrderDetails() {
  const { id } = useParams();
  const { order, isLoading, error, isRefetching } = useOrder(id);

  console.log(order?.data);
  return (
    <div>
      {isLoading && <p>Loading order details...</p>}
      {isRefetching && <p>Updating order details...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <OrderForm order={order?.data} />
    </div>
  );
}

export default OrderDetails;
