import { db } from "../firebase";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";

const ProductsCollectionRef = collection(db, "products");
const OrdersCollectionRef = collection(db, "orders");
const GuestsCollectionRef = collection(db, "guests");

export function getProducts() {
  return getDocs(ProductsCollectionRef).then((data) =>
    data.docs.map((el) => ({ ...el.data(), id: el.id }))
  );
}

export function addOrder(userId, cart) {
  return addDoc(OrdersCollectionRef, {
    userId,
    cart,
  });
}

export function addGuest(user) {
  return addDoc(GuestsCollectionRef, {
    user,
  });
}

export function filterProducts(nameFilter) {
  const q = query(ProductsCollectionRef, where("title", "==", nameFilter));
  if (nameFilter == "") {
    return getDocs(ProductsCollectionRef).then((data) =>
      data.docs.map((el) => ({ ...el.data(), id: el.id }))
    );
  } else {
    return getDocs(q).then((data) =>
      data.docs.map((el) => ({ ...el.data(), id: el.id }))
    );
  }
}
