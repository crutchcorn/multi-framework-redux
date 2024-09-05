import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../store";
import {addToCart} from "../store/cart-slice.ts";
import {v4} from "uuid";
import {useCallback} from "react";

export const ReactApp = () => {
  const cart = useSelector((store: RootState) => store.cart.value)
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch(addToCart({
      id: v4(),
      price: 10,
      name: "Some good",
      quantity: 1
    }))
  }, [dispatch]);

  return (
    <>
    <p>Hello from React {cart.length}!</p>
      <button onClick={add}>Add one</button>
    </>
  );
}
