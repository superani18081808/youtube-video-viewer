import style from "./style.module.css";
import SearchBar from "../../Components/SearchBar";
import { useDispatch } from "react-redux";
import ActionTypes from "../../REDUX/ActionTypes";

const Header = () => {
  const dispatch = useDispatch();

  const gotoHome = () => {
    dispatch({ type: ActionTypes.SET_ACTIVE_VIDEO, payload: {} });
  };

  return (
    <header className={style.header}>
      <div>
        <h1 onClick={gotoHome} className={style.logo}>
          YouTube
        </h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
