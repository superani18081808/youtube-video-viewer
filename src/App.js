// import { useEffect, useState } from "react";

import Header from "./Containers/Header";
import Main from "./Containers/Main";

import { useDispatch } from "react-redux";
import useMediaQuery from "./Utilities/useMediaQuery";
import { useEffect } from "react";
import ActionTypes from "./REDUX/ActionTypes";

function App() {
  const dispatch = useDispatch();
  const mediaQuerySize = "(max-width: 770px)";
  const mediaMatches = useMediaQuery(mediaQuerySize);

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_MEDIA_QUERY, payload: mediaMatches });
  }, [dispatch, mediaMatches]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
