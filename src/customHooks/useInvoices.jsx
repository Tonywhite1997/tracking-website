import { useQuery } from "@tanstack/react-query";
import { api } from "../main";

function useInvoices(id) {
  const {
    data: invoices,
    isLoading,
    error,
    isRefetching,
  } = useQuery({
    queryKey: ["Order"],
    queryFn: () => api.get(`/invoices/${id}`),
    retry: 1,
  });

  return { invoices, isRefetching, isLoading, error };
}

export default useInvoices;
