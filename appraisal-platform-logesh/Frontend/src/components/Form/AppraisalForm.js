import React, { useState } from "react";
import { Form, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import Appraisal from "./Appraisal";
import TechnicalShowcase from "./TechnicalShowcase";
import Projects from "./Project";
import "../styles/AppraisalForm.css";
import "../styles/Appraisal.css";

function AppraisalForm() {
  const [showCompetencies, setShowCompetencies] = useState(true);
  const [showTechnicalShowcase, setShowTechnicalShowcase] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showpopup, setShowpopup] = useState(false);
  const [showRating, setShowRating] = useState(false);

  const toggleComponent = (component) => {
    setShowCompetencies(component === "competencies");
    setShowTechnicalShowcase(component === "technicalShowcase");
    setShowProjects(component === "projects");
  };

  return (
    <div>
      <header>
        <ul>
          <li id="selfheading">Self Appraisal Form</li>
          <li>
            <DropdownToggle onClick={() => setShowpopup(!showpopup)}>
              Guidelines
            </DropdownToggle>
          </li>
          <li>
            <DropdownToggle onClick={() => setShowRating(!showRating)}>
              Rating Description
            </DropdownToggle>
          </li>
        </ul>
      </header>

      <div className="Split">
        <div id="splitbutton">
          <button onClick={() => toggleComponent("competencies")}>
            COMPETENCIES
          </button>
        </div>
        <div id="splitbutton">
          <button onClick={() => toggleComponent("technicalShowcase")}>
            TECHNICAL SHOWCASE
          </button>
        </div>
        <div id="splitbutton">
          <button onClick={() => toggleComponent("projects")}>PROJECTS</button>
        </div>
      </div>
      {showCompetencies && (
        <Form className="competencies">
          <Appraisal />
        </Form>
      )}
      {showTechnicalShowcase && (
        <Form>
          <TechnicalShowcase />
        </Form>
      )}
      {showProjects && (
        <Form>
          <Projects />
        </Form>
      )}

{showpopup && (
        <div className="guidelines" id="popup">
        <table>
          <tr>
            <th>Sections</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Dimensions Section</td>
            <td>Manager fills the comments and ratings section based on inputs received by the employee and his own
              assessment</td>
          </tr>
          <tr>
            <td>Objectives Section</td>
            <td>Manager documents that achievements of the employee against each objective set and rates the
              achievement. Goals needs to be objective as possible. While setting the objectives, remember the acronym

              SMART. The objectives should be: S = Specific, M = Measurable, A = Attainable, R = Relevant, T = Time-
              bound.</td>
          </tr>
          <tr>
            <td>Future objectives</td>
            <td>During the 1/1 meeting to discuss the review, the employee and manager should discuss and mutually agree
              upon the future objectives. "Improvement in Job Knowledge" is treated as a mandatory objective for all
              employees.</td>
          </tr>
          <tr>
            <td>Rating Guidelines</td>
            <td>The ratings are accorded for performance during the review period as against expectations considering the
              skills, position & period of service in Divum. So, it is possible that an employee be rated higher in the area of
              job knowledge even though his level, role and tenure in the organisation is lower than another employee who
              is at a different level, role and tenure. This is because the expectations are different due to their positions &
              service. Please refer to the next worksheet for the rating scale. Manager calls for a one on one discussion
              with the employee and discusses the review. There will be quarterly and annual review for each employee.</td>
          </tr>
        </table>
      </div>
      )}
      {showRating && (
        <div className="ratingdescription" id="rating">
        <table>
          <tr>
            <th>Rating</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Excellent</td>
            <td>Demonstrates consistently high level of skills and abilities to deliver high
              quality results that always exceed job expectation. Your initiative and drive
              help you go beyond your role to provide innovative solutions for business
              needs.Your peers and team look up to you for your technical and leadership
              skills. You are able to impact people not only within but also outside of your
              immediate team/group and you are able to impact Business growth.</td>
          </tr>
          <tr>
            <td>Exceeds
              Expectations</td>
            <td>At this level job expectations are always met and often exceeded.
              Performance is consistent and contribution to the team is significant. You are
              viewed as highly knowledgeable in one or more areas. You provide
              innovative solutions to meet business needs. You are a strong team member
              and may demonstrate leadership potential.</td>
          </tr>
          <tr>
            <td>Proficient</td>
            <td>At this level all desired outcomes are achieved consistently and in a timely
              manner. Deliverables meet specified quality standards. Team requirements
              are met and work is performed effectively to acheive business goals.</td>
          </tr>
          <tr>
            <td>Needs
              Development</td>
            <td>Demonstrates abilities to complete the task however there is inconsistency in
              performance. Further coaching may be necessary for conistent performance.
              The output does not meet acceptable levels and may not be submited in
              time. You may need to be put on additional coaching or on a developmental
              plan. This rating may also signify that performance is below expectations for
              known reasons (like being new to the job/role) but progressing steadily
              toward standard levels</td>
          </tr>
        </table>
      </div>
      )}
    </div>
  );
}

export default AppraisalForm;
