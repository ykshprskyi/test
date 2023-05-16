import { Header } from "../../primitives/header/header.tsx";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
