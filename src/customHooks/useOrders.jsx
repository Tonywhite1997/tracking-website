import { useQuery } from "@tanstack/react-query";
import { api } from "../main";

function useOrders() {
  const {
    data: orders,
    isLoading,
    error,
    isRefetching,
    isSuccess,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: () => api.get("/order/my-orders"),
    retry: 1,
  });

  return { orders, isSuccess, isRefetching, isLoading, error };
}

export default useOrders;
