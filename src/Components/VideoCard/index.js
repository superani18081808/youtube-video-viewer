import style from "./style.module.css";
import { useDispatch } from "react-redux";
import ActionTypes from "../../REDUX/ActionTypes";
import getDisplayTimeFromTimeStamp from "../../Utilities/getDisplayTimeFromTimeStamp";

const VideoCard = ({ data, mainListing }) => {
  const dispatch = useDispatch();

  const {
    snippet: { title, thumbnails, channelTitle, publishTime },
  } = data;

  const playVideo = (videoData) => {
    dispatch({ type: ActionTypes.SET_ACTIVE_VIDEO, payload: { ...videoData } });
  };

  return (
    <div className={`${style.card} ${mainListing ? style.main : ""}`} onClick={() => playVideo(data)}>
      <picture className={style.imageWrapper}>
        <img src={thumbnails.medium.url} alt={title} />
      </picture>

      <div className={style.content}>
        <h3 className={style.videoTitle}>{title}</h3>
        <div>
          <h5 className={style.channelName}>{channelTitle}</h5>
          <span className={style.time}>{getDisplayTimeFromTimeStamp(publishTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
