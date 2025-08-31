import { api } from "../main";
import { useQuery } from "@tanstack/react-query";

function useUsers() {
  const {
    data: users,
    isLoading,
    isRefetching,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["AllUsers"],
    queryFn: () => api.get("/user/users"),
    retry: 1,
  });

  return { users, isSuccess, isLoading, isRefetching, error };
}

export default useUsers;
