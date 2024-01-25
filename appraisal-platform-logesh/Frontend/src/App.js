import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Appraisal from "./components/Form/Appraisal";
import Login from "./components/Form/Login";
import Common from "./components/Common";
import ManagerForm from "./components/Form/ManagerForm";
import GoalSetting from "./GoalComponent/GoalSetting";
import AppraisalForm from "./components/Form/AppraisalForm";
import AppraisalView from "./components/Form/AppraisalView";

const client_id = "655473859186-ik3la7q2a6olcd7a74vdo8o6k9iftbca.apps.googleusercontent.com"; 

function App() {
  return (
    <GoogleOAuthProvider clientId={client_id}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/aprcl" element={<Appraisal />} />
            <Route path="/common" element={<Common />} />
            <Route path="/manage" element={<ManagerForm />} />
            <Route path="/goal" element={<GoalSetting />} />
            <Route path="/appraisal" element={<AppraisalForm />}/>
            <Route path="/aprclview" element={<AppraisalView />} />
          </Routes>
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
