import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`https://furlenco-backend.herokuapp.com/cart`, {
        method: "GET",
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(...cartData));
    } catch (err) {}
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(`https://furlenco-backend.herokuapp.com/cart/1`, {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "content-type": "application/json;charset=UTF-8",
        },
      });
    };

    try {
      const res = await sendRequest();
      console.groupCollapsed(res, "response");
    } catch (error) {}
  };
};
