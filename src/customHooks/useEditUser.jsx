import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useEditUser() {
  const {
    mutate: edit,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["EditUser"],
    mutationFn: ({ id, editedUser }) => api.patch(`/user/${id}`, editedUser),
    retry: 1,
  });

  return { edit, error, isPending, isSuccess };
}

export default useEditUser;
