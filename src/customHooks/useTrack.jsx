import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { api } from "../main";

function useTrack(trackingCode) {
  const {
    refetch: trackOrder,
    isFetching,
    isSuccess,
    error,
    data,
  } = useQuery({
    queryKey: ["Track Order"],
    queryFn: () => api.get(`/order/track/${trackingCode}`),
    enabled: false,
    retry: 1,
  });

  return { data, trackOrder, isFetching, isSuccess, error };
}

export default useTrack;
