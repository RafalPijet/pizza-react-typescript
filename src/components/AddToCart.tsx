import React from "react";
import { useStateDispatch, CartItem } from "./AppState";

export interface AddToCartProps {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

export function withAddToCart<OrginalProps extends AddToCartProps>(
  ChildComonent: React.ComponentType<OrginalProps>
) {
  const AddToCartHOC = (props: Omit<OrginalProps, keyof AddToCartProps>) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick: AddToCartProps["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item,
        },
      });
    };
    return (
      <ChildComonent
        {...(props as OrginalProps)}
        addToCart={handleAddToCartClick}
      />
    );
  };
  return AddToCartHOC;
}

export const WithAddToCartProps: React.FC<{
  children: (props: AddToCartProps) => JSX.Element;
}> = ({ children }) => {
  const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return children({ addToCart });
};

export const useAddToCart = () => {
    const dispatch = useStateDispatch();
  const addToCart: AddToCartProps["addToCart"] = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item,
      },
    });
  };
  return addToCart;
}