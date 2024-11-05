import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleIsCartOpen = () => {
    setIsCheckoutOpen(false);
    setIsCartOpen((prev) => !prev);
  };

  const handleIsCheckoutOpen = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar onClickCart={handleIsCartOpen} />
      {isCartOpen && !isCheckoutOpen ? (
        <Cart
          onClickCart={handleIsCartOpen}
          onClickCheckout={handleIsCheckoutOpen}
        />
      ) : !isCartOpen && isCheckoutOpen ? (
        <Checkout onClickBack={handleIsCartOpen} />
      ) : (
        <Products />
      )}
    </>
  );
}

export default App;
