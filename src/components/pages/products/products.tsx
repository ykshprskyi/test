import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../service/services/products";
import { ProductCard } from "../../primitives/productCard/productCard";
import { IproductCard } from "../../primitives/productCard/productCard";
import "./products.scss";

const Products = ({ getProducts: any }) => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products: Array<IproductCard> = useSelector(
    (state: any) => state.products
  );
  return (
    <div className="products">
      {products.map((el: IproductCard) => {
        return <ProductCard key={el.id} {...el} />;
      })}
    </div>
  );
};
export default Products;
