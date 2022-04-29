import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import formReducer from "./formReducer";

const reducers = combineReducers({
  account: accountReducer,
  form: formReducer,
});

export default reducers;
