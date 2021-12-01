import style from "./style.module.css";
import VideoPlayer from "../../Components/VideoPlayer";
import { useSelector } from "react-redux";
import getDisplayTimeFromTimeStamp from "../../Utilities/getDisplayTimeFromTimeStamp";

const ActiveVideoContainer = () => {
  const activeVideo = useSelector((state) => state.activeVideo);

  const {
    id: { videoId },
    snippet: { title, description, channelTitle, publishTime },
  } = activeVideo;

  return (
    <div>
      <VideoPlayer videoId={videoId} />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>{channelTitle}</h3>
        <span className={style.videoPublishTime}>{getDisplayTimeFromTimeStamp(publishTime)}</span>
      </div>
    </div>
  );
};

export default ActiveVideoContainer;
