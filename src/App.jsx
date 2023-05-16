import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Products } from "./components/pages/products/products.tsx";
import { Layout } from "./components/pages/layout/Layout";
import { Cart } from "./components/pages/cart/cart.tsx";
import { ErrorPage } from "./components/pages/errorPage/errorPage";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/products",
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
  return <RouterProvider router={router} />;
}

export default App;
