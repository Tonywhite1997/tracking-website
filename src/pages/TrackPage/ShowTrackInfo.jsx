import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import useTrack from "../../customHooks/useTrack";
import TrackingDetails from "../../layout/TrackingDetails";

function ShowTrackInfo() {
  const { trackingCode } = useParams();

  const { trackOrder, isFetching, data, isSuccess, error } =
    useTrack(trackingCode);

  useEffect(() => {
    if (trackingCode) {
      trackOrder();
    }
  }, [trackingCode]);

  return (
    <div className="min-h-screen flex flex-col items-center py-6">
      {!trackingCode && (
        <div className="p-6 flex flex-col justify-center items-center gap-2">
          <h1>No Tracking Code found!</h1>
          <NavLink to="/">
            <button className="border cursor-pointer py-2 px-6 bg-amber-500 text-white rounded-md font-bold">
              Try Again
            </button>
          </NavLink>
        </div>
      )}
      {isFetching && (
        <div className="text-center">
          <h1 className="text-2xl">Please wait...</h1>
          <p>Server is fetching your order</p>
        </div>
      )}
      {error && (
        <div className="flex flex-col gap-5 py-10 px-4 items-center justify-center">
          <p className="text-xl">{error?.response?.data?.msg}</p>
          <NavLink to="/">
            <button className="border cursor-pointer py-2 px-6 bg-amber-500 text-white rounded-md font-bold">
              Try Again
            </button>
          </NavLink>
        </div>
      )}
      {isSuccess && <TrackingDetails order={data.data} />}
    </div>
  );
}

export default ShowTrackInfo;
