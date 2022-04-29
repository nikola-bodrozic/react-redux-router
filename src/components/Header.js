import { useSelector } from "react-redux";

function Header() {
  const account = useSelector((state) => state.account);
  const { name, age } = useSelector((state) => state.form);

  return (
    <>
      <h1>
        {name} has {account} dollars and is {age} old
      </h1>
    </>
  );
}
export default Header;
