let iniState = { name: "Foo", age: 30 };

const reducer = (state = iniState, action) => {
  switch (action.type) {
    case "chgName":
      return { ...state, name: action.payload };
    case "chgAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

export default reducer;
