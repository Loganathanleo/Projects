import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/Appraisal.css";

function Appraisal() {
  const [contribution, setContribution] = useState("");
  const [communication, setCommunication] = useState("");
  const [initiatives, setInitiatives] = useState("");
  const [teamwork, setTeamwork] = useState("");
  const [potential, setPotential] = useState("");
  const [technicalexpertise, setTechnicalExpertise] = useState("");
  const [showTechnicalShowcase, setShowTechnicalShowcase] = useState(false);

  // const toggleTechnicalShowcase = () => {
  //   setShowTechnicalShowcase(!showTechnicalShowcase);
  // };

  return (
    <div>
      <Form className="appraisal form">
        <div className="fields">
          <label htmlFor="contribution" className="selflabel">Contribution</label>
          <textarea
            id="contribution"
            className="selftextarea"
            rows={5}
            cols={5}
            onChange={(e) => setContribution(e.target.value)}
          />
        </div>
        <div className="fields">
          <label htmlFor="teamwork" className="selflabel">Teamwork</label>
          <textarea
            id="teamwork"
            className="selftextarea"
            rows={5}
            cols={5}
            onChange={(e) => setTeamwork(e.target.value)}
          />
        </div>

        <div className="fields">
          <label htmlFor="technicalexpertise" className="selflabel">Technical Expertise</label>
          <textarea
            id="technicalexpertise"
            className="selftextarea"
            rows={5}
            cols={5}
            onChange={(e) => setTechnicalExpertise(e.target.value)}
          />
        </div>
        <div className="fields">
          <label htmlFor="initiatives" className="selflabel">Initiatives</label>
          <textarea
            id="initiatives"
            className="selftextarea"
            rows={5}
            cols={5}
            onChange={(e) => setInitiatives(e.target.value)}
          />
        </div>

        <div className="fields">
          <label htmlFor="communication" className="selflabel">Communication</label>
          <textarea
            id="communication"
            className="selftextarea"
            rows={5}
            cols={5}
            onChange={(e) => setCommunication(e.target.value)}
          />
        </div>
        <div className="fields">
          <label htmlFor="potential" className="selflabel">Potential</label>
          <textarea
            id="potential"
            className="selftextarea"
            rows={5}
            cols={5}
            onChange={(e) => setPotential(e.target.value)}
          />
        </div>
      </Form>
      <div className="submitbutton">
            <button>NEXT</button>
      </div>
    </div>
  );
}

export default Appraisal;
