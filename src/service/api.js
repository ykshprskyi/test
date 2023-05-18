import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const ProductsCollectionRef = collection(db, "products");

export function getProducts() {
  return getDocs(ProductsCollectionRef).then((data) =>
    data.docs.map((el) => ({ ...el.data(), id: el.id }))
  );
}
