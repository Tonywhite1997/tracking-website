import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useDeleteUser() {
  const {
    mutate: deleteUser,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationKey: ["DeleteUser"],
    mutationFn: ({ userID }) => {
      api.delete("/user/delete-user", { data: { userID } });
    },
    retry: 1,
  });

  return { deleteUser, isSuccess, error, isPending };
}

export default useDeleteUser;
