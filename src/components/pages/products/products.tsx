import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../service/services/products";
import { ProductCard } from "../../primitives/productCard/productCard";
import { Iproduct } from "../../primitives/productCard/productCard";
import "./products.scss";

const Products = ({ getProducts: any }) => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products: Array<Iproduct> = useSelector((state: any) => state.products);
  return (
    <div className="products">
      {products.map((el: Iproduct) => {
        return <ProductCard key={el.id} {...el} />;
      })}
    </div>
  );
};
export default Products;
