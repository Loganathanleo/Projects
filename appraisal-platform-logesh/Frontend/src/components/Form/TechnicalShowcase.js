import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/Appraisal.css";

function TechnicalShowcase(){

    const [Tech, setTech] = useState([]);

    const onUpdate = (data) => {
        setTech(...Tech,{[data.target.value]:data.target.value})
    } 
    return(
        <div>
            <Form className="appraisal form">
            <div className="fields">
              <label htmlFor="reusablelibraries" className="selflabel">Reusable Libraries</label>
              <textarea id="reusablelibraries" className="selftextarea" rows={5} cols={5} onChange={(e)=>onUpdate(e.target.value)} />
            </div>
            <div className="fields">
              <label htmlFor="techtalk" className="selflabel">Tech Talks</label>
              <textarea id="techtalk" className="selftextarea" rows={5} cols={5} onChange={(e)=>onUpdate(e.target.value)}/>
            </div>
            <div className="fields">
              <label htmlFor="techcertificates" className="selflabel">Tech Certifications</label>
              <textarea id="techcertificates" className="selftextarea" rows={5} cols={5} onChange={(e)=>onUpdate(e.target.value)}/>
            </div>
            <div className="fields">
              <label htmlFor="otherprojects" className="selflabel">Contribution to other Projects</label>
              <textarea id="otherprojects" className="selftextarea" rows={5} cols={5} onChange={(e)=>onUpdate(e.target.value)}/>
            </div>
            <div className="fields">
              <label htmlFor="anyother" className="selflabel">Anything else</label>
              <textarea id="anyother" className="selftextarea" rows={5} cols={5} onChange={(e)=>onUpdate(e.target.value)}/>
            </div>
            </Form>
            <div className="submitbutton">
              <button id="submit">
                NEXT
              </button>
            </div>
        </div>
    );
}

export default TechnicalShowcase;