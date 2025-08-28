import { api } from "../main";
import { useQuery } from "@tanstack/react-query";

function useGetMe() {
  const getMequery = useQuery({ queryKey: ["me"], queryFn: api.get("/user") });

  return { getMequery };
}

export default useGetMe;
