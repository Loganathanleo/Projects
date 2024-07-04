import React, { useEffect, useState } from "react";
import { CardFooter, CardTitle, Table } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card } from "react-bootstrap";

function GoalSetting() {
  const [percentage, setPercentage] = useState(0);
  const [inputField, setinputField] = useState([]);
  const [range, setRange] = useState([]);
  const [Goals, setGoals] = useState(0);

  useEffect(() => {
    const temp = 0;
    for(let i =0;i < range.length ; i++){
        temp += range[i];
        console.log(range[i]);
    }
    console.log(temp);
    let perce = setGoals * 100;
    setPercentage(temp/perce);
  }, [percentage]);

  const addInput = () => {
    setinputField([
      ...inputField,
      {
        Project_Name: "",
        Progress: 0,
        Status: "No Progress",
        Last_Updated: "",
      },
    ]);

    setRange([...range, 0]);
    setGoals(Goals + 1);
  };

  const updateStatus = (index, newValue) => {
    const updatedInputField = [...inputField];
    const status = newValue === 0 ? "No Progress" : newValue < 100 ? "In Progress" : "Completed";
    updatedInputField[index].Progress = newValue;
    updatedInputField[index].Status = status;

    setinputField(updatedInputField);
  };

  const getStatusCount = (status) => {
    return inputField.reduce((count, item) => (item.Status === status ? count + 1 : count), 0);
  };


  const no = getStatusCount("No Progress");
  const inpro = getStatusCount("In Progress");
  const com = getStatusCount("Completed");

  return (
    <div>
      <header style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ textAlign: "center" }}>
            <h4>Your Progress</h4>
            <div style={{ width: 100, marginLeft: 21, height: 100 }}>
              <CircularProgressbar className="bar" value={percentage} text={`${percentage}%`} />
            </div>
          </div>
        </div>
        <div className="card-container">
            <Card className="cards">
                <CardTitle className="card-title">{Goals}</CardTitle>
                <CardFooter className="card-footer">No.of Goals</CardFooter>
            </Card>
            <Card className="cards">
                <CardTitle className="card-title">{inpro}</CardTitle>
                <CardFooter className="card-footer">In Progress</CardFooter>
            </Card>
            <Card className="cards">
                <CardTitle className="card-title">{com}</CardTitle>
                <CardFooter className="card-footer">Completed</CardFooter>
            </Card>
            <Card className="cards">
                <CardTitle className="card-title">{no}</CardTitle>
                <CardFooter className="card-footer">No Progress</CardFooter>
            </Card>
        </div>
        <button onClick={addInput} className="goalAdd ">Add Goal+</button>
      </header>
      <Table>
        <thead>
          <tr className="thead-goal">
            <th>Goal</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {inputField.map((field, index) => (
            <tr key={index} className="thead-goal">
              <td>
                <input
                  type="text"
                  name={`Project_Name_${index}`}
                  placeholder="Set the Goal"
                  value={field.Project_Name}
                  onChange={(e) => {
                    const updatedInputField = [...inputField];
                    updatedInputField[index].Project_Name = e.target.value;
                    setinputField(updatedInputField);
                  }}
                />
              </td>
              <td>
                <input
                  type="range"
                  name={`Progress_${index}`}
                  min={0}
                  max={100}
                  onChange={(e) => updateStatus(index, parseInt(e.target.value))}
                  value={field.Progress}
                />{field.Progress}
              </td>
              <td>
                {field.Status}
              </td>
              <td>
                <input
                  type="date"
                  name={`Last_Update_${index}`}
                  max={new Date().toISOString().split('T')[0]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GoalSetting;
