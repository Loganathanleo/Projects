import React, { useEffect, useState } from "react";
import axios from "axios";

function AppraisalView() {
  const [appraisalData, setAppraisalData] = useState([]);
  const [selectYear, setSelectYear] = useState("");
  const [selectAppraisalForm, setSelectAppraisalForm] = useState("");
  const [selectAppraisal, setSelectAppraisal] = useState(null);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setAppraisalData(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching data: ", error);
      });
  }, []);

  const handleSubmit = () => {
    if (selectYear !== "" && selectAppraisalForm !== "") {
      const selectedAppraisalYear = appraisalData.find(
        (appraisal) => appraisal.year === selectYear
      );

      if (selectedAppraisalYear) {
        const selectedForm = selectedAppraisalYear.appraisalForms.find(
          (form) => form.name === selectAppraisalForm
        );

        if (selectedForm) {
          setSelectAppraisal(selectedForm);
        } else {
          setSelectAppraisal(null);
          console.log(
            `No data found for ${selectAppraisalForm} in ${selectYear}`
          );
        }
      } else {
        setSelectAppraisal(null);
        console.log("No data found on the selected year");
      }
    } else {
      console.log("No year or appraisal form is selected");
    }
  };

  const handleYearChange = (e) => {
    setSelectYear(e.target.value);
    setSelectAppraisalForm("");
  };

  const handleAppraisalFormChange = (e) => {
    setSelectAppraisalForm(e.target.value);
  };

  return (
    <div>
      <select value={selectYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        {appraisalData.map((appraisal) => {
          return (
            <option key={appraisal.year} value={appraisal.year}>
              {appraisal.year}
            </option>
          );
        })}
      </select>
      <select value={selectAppraisalForm} onChange={handleAppraisalFormChange}>
        <option value="">Select Appraisal Form</option>
        {appraisalData
          .find((appraisal) => appraisal.year === selectYear)
          ?.appraisalForms.map((form) => (
            <option key={form.name} value={form.name}>
              {form.name}
            </option>
          ))}
      </select>
      <button onClick={handleSubmit}>Views Details</button>

      {selectAppraisal && (
        <div>
          <h1>Appraisal Details</h1>
          <pre>{JSON.stringify(selectAppraisal, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AppraisalView;
