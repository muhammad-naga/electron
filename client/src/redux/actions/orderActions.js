import axios from "axios";
import actionTypes from "../types";

export const addOrderItemsData = orderData => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_ITEMS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/v1/orders`, orderData, config);

    dispatch({
      type: actionTypes.ORDER_ITEMS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ORDER_ITEMS_ERROR,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
