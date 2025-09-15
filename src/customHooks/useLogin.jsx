import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../main";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
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
      // queryClient.clear();
      navigate("/dashboard");
    },
  });
  return { login, isPending, error, isSuccess };
}

export default useLogin;
