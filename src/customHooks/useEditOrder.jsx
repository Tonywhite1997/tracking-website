import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useEditOrder() {
  const {
    mutate: edit,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["EditOrder"],
    mutationFn: ({ id, editedOrder }) =>
      api.patch(`/order/edit-order/${id}`, editedOrder),
  });

  return { edit, error, isPending, isSuccess };
}

export default useEditOrder;
