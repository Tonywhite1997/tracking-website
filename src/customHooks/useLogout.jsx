import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../main";

function useLogout() {
  const queryClient = useQueryClient();
  const {
    mutate: logout,
    isSuccess,
    isPending,
  } = useMutation({
    mutationKey: ["Logout"],
    mutationFn: () => {
      return api.post("/user/logout");
    },
    retry: 1,
    onSuccess: () => {
      queryClient.clear();
      queryClient.invalidateQueries({ refetchType: "active" });
    },
  });
  return { logout, isSuccess, isPending };
}

export default useLogout;
