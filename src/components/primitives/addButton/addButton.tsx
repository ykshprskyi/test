import { useState } from "react";
//@ts-ignore
import { ReactComponent as Plus } from "../../../assets/images/plus.svg";
//@ts-ignore
import { ReactComponent as Check } from "../../../assets/images/check.svg";
import "./addButton.scss";
interface AddButtonProps {
  id: string;
}
export const AddButton = ({ id }: AddButtonProps) => {
  const [Added, setAdded] = useState(false);
  const AddToCartHandler = (e) => {
    e.stopPropagation();
    setAdded(true);
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
