import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useLogin({ email, password }) {
  const mutation = useMutation({
    mutationKey: ["Login"],
    mutationFn: (event) => {
      event.preventDefault();
      return api.post("/user/login", { email, password });
    },
  });
  return { mutation };
}

export default useLogin;
