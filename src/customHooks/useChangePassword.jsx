import { useMutation } from "@tanstack/react-query";
import { api } from "../main";

function useChangePassword() {
  const {
    mutate: changePassword,
    error: passwordError,
    isPending: isChangingPassword,
    isSuccess: isPasswordSuccess,
  } = useMutation({
    mutationKey: ["ChangePassword"],
    mutationFn: ({ currentPassword, newPassword }) =>
      api.post("/user/change-password", { currentPassword, newPassword }),
    retry: 1,
  });

  return {
    changePassword,
    passwordError,
    isPasswordSuccess,
    isChangingPassword,
  };
}

export default useChangePassword;
