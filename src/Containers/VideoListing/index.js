import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../../Components/VideoCard";
import Button from "../../Components/FormControls/Button";
import { fetchMoreVideos } from "../../REDUX/ActionCreator";

const VideoListing = () => {
  const { videos, activeVideo, nextPageToken } = useSelector((state) => ({ videos: state.videos, activeVideo: state.activeVideo, nextPageToken: state.requestData.nextPageToken }));
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(fetchMoreVideos());
  };

  return (
    <div>
      <h2 className={style.title}>{videos.length === 0 ? "Search Something" : "Videos You Searched"}</h2>

      <div className={style.container}>
        {videos.map((video) => (
          <VideoCard mainListing={Object.keys(activeVideo).length === 0} key={video.etag} data={video} />
        ))}
      </div>

      {nextPageToken ? <Button onClick={loadMore}>Load More...</Button> : null}
    </div>
  );
};

export default VideoListing;
