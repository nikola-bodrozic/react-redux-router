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
          navigate("/bank");
        }}
      >
        {" "}
        Change to bank page
      </button>
    </div>
  );
}

export default Profile;
