import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Product from "./Pages/Product";
import Layout from "./Applayout/Layout";
import Cart from "./Pages/Cart";
function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
