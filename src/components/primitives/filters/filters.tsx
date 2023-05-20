import { useState } from "react";
import "./filters.scss";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../../service/services/products";

export const Filters = () => {
  const dispatch: any = useDispatch();
  const [filter, setFilter] = useState("");
  const inputHandler = (e) => {
    setFilter(e.target.value);
  };
  const btnHandler = (e) => {
    e.preventDefault();
    dispatch(filterProducts(filter));
    setFilter("");
  };
  const inputBtnHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(filterProducts(filter));
      setFilter("");
    }
  };
  return (
    <div className="filters">
      <input
        value={filter}
        type="text"
        className="filters_input"
        onInput={inputHandler}
        onKeyPress={inputBtnHandler}
      />
      <button className="filters_btn" onClick={btnHandler}>
        Filter
      </button>
    </div>
  );
};
