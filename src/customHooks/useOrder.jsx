import { useQuery, useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useOrder(id) {
  const {
    data: order,
    isLoading,
    error,
    isRefetching,
  } = useQuery({
    queryKey: ["Order"],
    queryFn: () => api.get(`/order/${id}`),
    retry: 1,
  });

  return { order, isRefetching, isLoading, error };
}

export default useOrder;
