import style from "./style.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../../REDUX/ActionCreator";
import Button from "../FormControls/Button";
import Input from "../FormControls/Input";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setSearchKeyword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword.trim() === "") return;

    dispatch(fetchVideos(searchKeyword));
    setSearchKeyword("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.searchBar}>
      <Input type="search" placeholder="Search Video" value={searchKeyword} onChange={handleChange} />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
