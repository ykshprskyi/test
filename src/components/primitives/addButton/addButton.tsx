import { useEffect, useState } from "react";
//@ts-ignore
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
//@ts-ignore
import { ReactComponent as Check } from "../../../assets/images/check.svg";
import { useDispatch, useSelector } from "react-redux";
import "./addButton.scss";
import { actions } from "../../../service/actions/actions";

interface AddButtonProps {
  id: string;
}
export const AddButton = ({ id }: AddButtonProps) => {
  const [Added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const cart: Array<any> = useSelector((state: any) => state.cart);
  useEffect(() => {
    setAdded(cart.some((el) => el.id === id));
  }, [cart]);
  const AddToCartHandler = (e) => {
    e.stopPropagation();
    if (!Added) {
      dispatch(actions.addProduct(id));
    } else {
      dispatch(actions.deleteProduct(id));
    }
  };
  return (
    <div className="add-btn" onClick={AddToCartHandler}>
      {Added ? (
        <div className="add-btn_wrapper added">
          <div className="add-btn__icon">
            <Check />
          </div>
          <div className="add-btn__text"> Added to Cart </div>
        </div>
      ) : (
        <div className="add-btn_wrapper">
          <div className="add-btn__icon">
            <Plus />
          </div>
          <div className="add-btn__text"> Add to Cart </div>
        </div>
      )}
    </div>
  );
};
