export const deposit = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const chgName = (name) => {
  return (dispatch) => {
    dispatch({
      type: "chgName",
      payload: name,
    });
  };
};

export const chgAge = (age) => {
  return (dispatch) => {
    dispatch({
      type: "chgAge",
      payload: age,
    });
  };
};
