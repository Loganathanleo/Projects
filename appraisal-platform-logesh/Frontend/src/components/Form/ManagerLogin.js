import React from "react";
import { useNavigate } from "react-router-dom";

function ManagerLogin() {
  const navigate = useNavigate();

  const goToGoal = () => {
    navigate("/goal");
  };

  const goToManager = () => {
    navigate("");
  };

  const gotoAprcl = () => {
    navigate("/aprclview")
  }

  return (
    <div>
      <div>
        <button onClick={goToGoal}>Set Goal +</button>
      </div>
      <div>
        <button onClick={goToManager}>Dashboard</button>
      </div>
      <div>
        <button onClick={gotoAprcl}>Appraisal Forms</button>
      </div>
    </div>
  );
}

export default ManagerLogin;
