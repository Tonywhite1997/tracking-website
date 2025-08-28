import { useQuery } from "@tanstack/react-query";
import { api } from "../main";

function useOrders() {
  const {
    data: orders,
    isLoading,
    error,
    isRefetching,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: () => api.get("/order/my-orders"),
  });

  return { orders, isRefetching, isLoading, error };
}

export default useOrders;
