import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useCreateUser() {
  const {
    mutate: createUser,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationKey: ["Create New User"],
    mutationFn: ({ email, password, username }) => {
      return api.post("/user/sign-up", { email, password, name: username });
    },
  });
  return { createUser, isPending, isSuccess, error };
}

export default useCreateUser;
