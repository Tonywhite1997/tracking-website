import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useDeleteOrder() {
  const {
    mutate: deleteOrder,
    error: deleteError,
    isPending: isDeleting,
    isSuccess: deleteSuccess,
  } = useMutation({
    mutationKey: ["DeleteOrder"],
    mutationFn: (id) =>
      api.delete("/order/delete-orders", { data: { orderID: id } }),
  });

  return {
    deleteOrder,
    deleteError,
    isDeleting,
    deleteSuccess,
  };
}

export default useDeleteOrder;
