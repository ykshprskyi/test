import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/pages/products/products.tsx";
import { Layout } from "./components/pages/layout/Layout";
import { Cart } from "./components/pages/cart/cart.tsx";
import { ErrorPage } from "./components/pages/errorPage/errorPage";
import { useDispatch } from "react-redux";
import "./styles/main.scss";
import { actions } from "./service/actions/actions.js";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  const dispatch = useDispatch();
  dispatch(actions.setCart());
  return <RouterProvider router={router} />;
}

export default App;
