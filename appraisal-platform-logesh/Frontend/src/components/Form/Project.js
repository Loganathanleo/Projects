import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "../styles/Appraisal.css";
import "../styles/Projects.css";

function Projects() {
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState([]);

  const link = "http://localhost:8081/getData/naveen@gmail.com";
  console.log(data, "data");
  const fetchProject = async () => {
    try {
      const res = await fetch(link);
      const d = await res.json();
      console.log(d);
      setData((prevState) => {
        const updatedData = prevState ? [...prevState] : prevState;
        updatedData.push(d[0]);
        console.log(updatedData, "Updated");
        return updatedData;
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div>
      <Form>
        {data &&
          data.map((project, index) => {
            return (
              <div key={index}>
              {console.log(project)}
                <div className="fields">
                  <label htmlFor={`projectname_${index}`} className="selflabel">
                    Project Name
                  </label>
                  <input
                    id={`projectname_${index}`}
                    type="text"
                    value={project?.projects[index]?.projectName}
                    readOnly
                    className="selftextarea"
                  />
                </div>
                <div className="fields">
                  <label
                    htmlFor={`projectdescription_${index}`}
                    className="selflabel"
                  >
                    Project Description
                  </label>
                  <input
                    id={`projectdescription_${index}`}
                    type="text"
                    value={project.projectDescription}
                    onChange={(e) => {
                      setDesc(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="selftextarea"
                  />
                </div>
              </div>
            );
          })}
      </Form>
      <div className="submitbutton">
        <button id="submit">SUBMIT</button>
      </div>
    </div>
  );
}

export default Projects;
