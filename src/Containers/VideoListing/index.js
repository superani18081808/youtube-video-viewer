import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../../Components/VideoCard";
import Button from "../../Components/FormControls/Button";
import { fetchMoreVideos } from "../../REDUX/ActionCreator";

const VideoListing = () => {
  const { videos, activeVideo } = useSelector((state) => ({ videos: state.videos, activeVideo: state.activeVideo }));
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(fetchMoreVideos());
  };

  return (
    <div>
      <h2 className={style.title}>Videos You Searched</h2>

      <div className={style.container}>
        {videos.map((video) => (
          <VideoCard mainListing={Object.keys(activeVideo).length === 0} key={video.etag} data={video} />
        ))}
      </div>

      <Button onClick={loadMore}>Load More...</Button>
    </div>
  );
};

export default VideoListing;
