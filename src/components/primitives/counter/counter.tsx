import { useDispatch } from "react-redux";
import { actions } from "../../../service/actions/actions";
import "./counter.scss";

interface CounterProps {
  id: string;
  count: number;
}
export const Counter = ({ id, count }: CounterProps) => {
  const dispatch: any = useDispatch();
  const IncHandler = (e) => {
    e.stopPropagation();
    let newcount: number = ++count;
    dispatch(actions.changeCount(id, newcount));
  };
  const DecHandler = (e) => {
    e.stopPropagation();
    let newcount: number = --count;
    if (newcount === 0) {
      dispatch(actions.deleteProduct(id));
    } else {
      dispatch(actions.changeCount(id, newcount));
    }
  };
  return (
    <div className="cart-item_counter">
      <div className="cart-item_counter__minus" onClick={DecHandler}>
        -
      </div>
      <div className="cart-item_counter__count">{count}</div>
      <div className="cart-item_counter__plus" onClick={IncHandler}>
        +
      </div>
    </div>
  );
};
