import style from "./style.module.css";

const VideoPlayer = ({ videoId }) => {
  return (
    <iframe
      className={style.videoPlayer}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; gyroscope; picture-in-picture; fullscreen"
      title="My Video Player"
    ></iframe>
  );
};

export default VideoPlayer;
