import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../state/index";

function Home() {
  const dispatch = useDispatch();

  const { chgName, chgAge } = bindActionCreators(actions, dispatch);
  const { age, name } = useSelector((state) => state.form);

  const handleChange = (event) => {
    if (event.target.name === "username") chgName(event.target.value);
    if (event.target.name === "age") chgAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(" from reducer " + name + " " + age);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Modify name{" "}
        <input
          type="text"
          name="username"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Age{" "}
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Home;
