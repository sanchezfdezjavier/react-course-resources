import { useSelector, useEffect, useDispatch } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { uiActions } from "./store/ui-slice";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-course-f7e10-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending data cart data failed!");
      }

      const responseData = await response.json();
    };
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      {console.log(showCart)}
      <Products />
    </Layout>
  );
}

export default App;
