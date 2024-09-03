import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/actions";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [params] = useSearchParams();
  console.log("🚀 ~ WatchPage ~ params:", params.get("v"));
  console.log("loading");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="p-6">
      <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + params.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="rounded-lg xsm:max-md:w-full xsm:max-md:h-80"
      ></iframe>
    </div>
  );
};

export default WatchPage;
