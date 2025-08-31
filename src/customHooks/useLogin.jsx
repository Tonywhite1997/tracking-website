import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../main";

function useLogin() {
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending,
    error,
    isSuccess,
  } = useMutation({
    mutationKey: ["Login"],
    mutationFn: ({ email, password }) => {
      return api.post("/user/login", { email, password });
    },
    retry: 1,
    onSuccess: () => {
      queryClient.invalidateQueries({ refetchType: "active" });
      queryClient.clear();
    },
  });
  return { login, isPending, error, isSuccess };
}

export default useLogin;
