import { api } from "../main";
import { useQuery } from "@tanstack/react-query";

function useGetUser(userID) {
  const {
    data: user,
    isRefetching,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["User"],
    queryFn: () => api.get(`/user/${userID}`),
    retry: 1,
  });

  return { user, isRefetching, error, isLoading };
}

export default useGetUser;
