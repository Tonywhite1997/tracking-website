import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useCreateOrder() {
  const {
    mutate: createOrder,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: ["NewOrder"],
    mutationFn: (shippingDetails) => api.post("/order/new", shippingDetails),
    retry: 1,
  });

  return { createOrder, isPending, isSuccess, error };
}

export default useCreateOrder;
