import axios from "axios";
import ActionTypes from "./ActionTypes";

const API_KEY = "AIzaSyBPkEAQyteJmdj10_KcfMBwdvGm8dLAAqw";

export const fetchVideos = (searchKeyword) => {
  return (dispatch) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&type=video&q=${searchKeyword}&key=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        dispatch({ type: ActionTypes.STORE_VIDEOS, payload: response.data });
        dispatch({ type: ActionTypes.SET_REQUEST_DATA, payload: { nextPageToken: response.data.nextPageToken, searchKeyword } });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchMoreVideos = () => {
  return (dispatch, getState) => {
    const { nextPageToken, searchKeyword } = getState().requestData;

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&type=video&q=${searchKeyword}&pageToken=${nextPageToken}&key=${API_KEY}`;

    axios
      .get(url)
      .then((response) => {
        dispatch({ type: ActionTypes.APPEND_VIDEOS, payload: response.data });
        dispatch({ type: ActionTypes.SET_REQUEST_DATA, payload: { nextPageToken: response.data.nextPageToken, searchKeyword } });
      })
      .catch((error) => console.log(error));
  };
};
