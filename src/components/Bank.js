import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../state/index";

function Bank() {
  const dispatch = useDispatch();

  const { deposit, withdraw } = bindActionCreators(actions, dispatch);

  return (
    <>
      <button
        onClick={() => {
          deposit(100);
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          withdraw(100);
        }}
      >
        Withdraw
      </button>
    </>
  );
}
export default Bank;
