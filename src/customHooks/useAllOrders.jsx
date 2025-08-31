import { useQuery } from "@tanstack/react-query";
import { api } from "../main";

function useAllOrders() {
  const {
    data: allOrders,
    isLoading,
    error,
    isRefetching,
    isSuccess,
  } = useQuery({
    queryKey: ["AllOrders"],
    queryFn: () => api.get("/order/all-orders"),
    retry: 1,
  });

  return { allOrders, isSuccess, isRefetching, isLoading, error };
}

export default useAllOrders;
