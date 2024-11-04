import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleIsCartOpen = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar onClickCart={handleIsCartOpen} />
      {isCartOpen ? <Cart onClickCart={handleIsCartOpen} /> : <Products />}
    </>
  );
}

export default App;
