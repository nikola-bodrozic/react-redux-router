import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let { id } = useParams();
  return (
    <div>
      from URL id is {id}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        Change to about page
      </button>
    </div>
  );
}

export default Profile;
