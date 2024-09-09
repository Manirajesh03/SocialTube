import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/actions";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [params] = useSearchParams();
  const data = params.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <>
      <div className="p-6">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-lg xsm:max-md:w-full xsm:max-md:h-80"
        ></iframe>
      </div>
      <CommentsContainer />
    </>
  );
};

export default WatchPage;
