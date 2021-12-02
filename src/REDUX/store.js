import { createStore, applyMiddleware } from "redux";
import ReduxThunkMiddleware from "redux-thunk";
import ActionTypes from "./ActionTypes";

const defaultState = {
  requestData: {},
  videos: [],
  activeVideo: {},
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SET_REQUEST_DATA:
      return { ...state, requestData: action.payload };
    case ActionTypes.STORE_VIDEOS: {
      const videos = action.payload.items.filter((item) => item.id.kind === "youtube#video");
      return { ...state, videos };
    }
    case ActionTypes.APPEND_VIDEOS: {
      const videos = action.payload.items.filter((item) => item.id.kind === "youtube#video");
      return { ...state, videos: [...state.videos, ...videos] };
    }
    case ActionTypes.SET_ACTIVE_VIDEO:
      return { ...state, activeVideo: action.payload };
    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(ReduxThunkMiddleware));
