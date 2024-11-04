import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const prevState = [...state.items];

      if (existingItemIndex > -1) {
        const updatedItem = {
          ...prevState[existingItemIndex],
          quantity: prevState[existingItemIndex].quantity + 1,
        };
        prevState[existingItemIndex] = updatedItem;
      } else {
        prevState.push({
          ...action.item,
          quantity: 1,
        });
      }
      return { ...state, items: prevState };
    }

    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const prevState = [...state.items];

      if (existingItemIndex > -1) {
        const existingItem = prevState[existingItemIndex];
        if (existingItem.quantity === 1) {
          prevState.splice(existingItemIndex, 1);
        } else {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
          prevState[existingItemIndex] = updatedItem;
        }
      }
      return { ...state, items: prevState };
    }

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addCart = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item,
    });
  };

  const removeCart = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      id,
    });
  };
  console.log(state);

  return (
    <CartContext.Provider value={{ state, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
