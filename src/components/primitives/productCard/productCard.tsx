import { AddButton } from "../addButton/addButton";
import "./productCard.scss";

export interface IproductCard {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
}

export const ProductCard = (product: IproductCard) => {
  return (
    <div className="product-card">
      <div className="product-card_wrapper">
        <h2 className="product-card__title product-card__item">
          {product.title}
        </h2>
        <h4 className="product-card__desc product-card__item">
          {product.description}
        </h4>
        <div className="product-card__price product-card__item">
          <span className="product-card__price__price ">{product.price}</span>
          <span className="product-card__price__currency">
            {product.currency}
          </span>
        </div>
        <div className="product-card__btn">
          <AddButton id={product.id} />
        </div>
      </div>
    </div>
  );
};
