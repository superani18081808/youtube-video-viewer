import style from "./style.module.css";
import VideoListing from "../VideoListing";
import ActiveVideoContainer from "../ActiveVideoContainer";
import { useSelector } from "react-redux";

const Main = () => {
  const activeVideo = useSelector((state) => state.activeVideo);
  const showVideo = Object.keys(activeVideo).length !== 0;

  return (
    <main className={`${style.main} ${!showVideo ? style.mainListing : ""}`}>
      {showVideo && <ActiveVideoContainer />}
      <VideoListing />
    </main>
  );
};

export default Main;
