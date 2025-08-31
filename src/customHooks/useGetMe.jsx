import { api } from "../main";
import { useQuery } from "@tanstack/react-query";

function useGetMe() {
  const getMequery = useQuery({
    queryKey: ["Me"],
    queryFn: () => api.get("/user"),
    retry: 1,
  });

  return { getMequery };
}

export default useGetMe;
