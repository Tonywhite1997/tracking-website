import { useQuery } from "@tanstack/react-query";
import { api } from "../main";

function useOrder(id) {
  const {
    data: order,
    isLoading,
    error,
    isRefetching,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: () => api.get(`/order/${id}`),
  });

  return { order, isRefetching, isLoading, error };
}

export default useOrder;
