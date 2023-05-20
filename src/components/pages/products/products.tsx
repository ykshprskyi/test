import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../service/services/products";
import { ProductCard } from "../../primitives/productCard/productCard";
import { Iproduct } from "../../primitives/productCard/productCard";
import { Filters } from "../../primitives/filters/filters";
import "./products.scss";

const Products = ({ getProducts: any }) => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products: Array<Iproduct> = useSelector((state: any) => state.products);
  return (
    <div className="products">
      <div className="products_filters">
        <h2>Title filter</h2>

        <Filters />
      </div>
      <div className="products_view">
        {products.map((el: Iproduct) => {
          return <ProductCard key={el.id} {...el} />;
        })}
        {products.length === 0 ? (
          <div>
            <h2>Products list is empty</h2>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Products;
