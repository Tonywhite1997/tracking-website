import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useLogin() {
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
  });
  return { login, isPending, error, isSuccess };
}

export default useLogin;
