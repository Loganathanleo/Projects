import axios from "axios";
import React, { useState } from "react";
import "../styles/ManagerForm.css";
import { useNavigate } from "react-router-dom";

function ManagerForm() {
  const [empid, setEmpid] = useState("");
  const [Qua, setQua] = useState("");
  const [Tw, setTw] = useState("");
  const [CS, setCS] = useState("");
  const [contribution, setContribution] = useState("");
  const [contributionRating, setContributionRating] = useState("");
  const [te, setTe] = useState("");
  const [tefeed, setTeFeed] = useState("");
  const [ir, setIr] = useState("");
  const [irFeed, setIrFeed] = useState("");
  const [potential, setPotential] = useState("");
  const [potentialFeed, setPotentialFeed] = useState("");
  const [reuse, setReuse] = useState("");
  const [Oer, setOer] = useState("");
  const [TT, setTT] = useState("");
  const [feedback, setFeedback] = useState("");
  const [QuaFeed, setQuaFeed] = useState("");
  const [TwFeed, setTwFeed] = useState("");
  const [CSFeed, setCSFeed] = useState("");
  const [reuseFeed, setReuseFeed] = useState("");
  const [TTFeed, setTTFeed] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      empId: empid,
      qualityOfWorkRating: Qua,
      qualityOfWorkFeedback: QuaFeed,
      teamWorkRating: Tw,
      teamWorkFeedback: TwFeed,
      contributionRating:contribution,
      contributionFeedback:contributionRating,
      technicalExpertiseRating:te,
      technicalExpertiseFeedback:tefeed,
      initiativesRating:ir,
      initiativesFeedback:irFeed,
      potentialRating:potential,
      potentialFeedback:potentialFeed,
      communicationRating: CS,
      communicationFeedback: CSFeed,
      reusableLibrariesRating: reuse,
      reusableLibrariesFeedback: reuseFeed,
      techTalksRating: TT,
      techTalksFeedback: TTFeed,
      overAllRating: Oer,
      feedback: feedback,
    };

    try {
      await axios.post("http://localhost:8081/Manager/addManagerForm", formData);
      console.log("Data submitted successfully");
    } catch (error) {
      console.log("Error submitting data: ", error);
    }
  };

  return (
    <div>
      <div >
        <button className="Back" onClick={() => navigate("/common")}> Back </button>
      </div>
      <div className="ManagerForm">
        <h1 className="ManagerFormTitle">Manager Review</h1>
        <form onSubmit={handleSubmit} className="form-con">
          <div className="form-emp">
            <label htmlFor="empid">Employee-Id:</label>
            <input id="empid" className="input" onChange={(e) => setEmpid(e.target.value)}/>
          </div>
          <div className="form-div">
            <label htmlFor="qua">Quality of Work: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="qua1"
                name="1"
                onChange={(e) => setQua(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="qua2"
                name="2"
                onChange={(e) => setQua(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="qua3"
                name="3"
                onChange={(e) => setQua(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="qua4"
                name="4"
                onChange={(e) => setQua(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="qua5"
                name="5"
                onChange={(e) => setQua(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setQuaFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="tw">Team Work: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="tw1"
                name="1"
                onChange={(e) => setTw(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="tw2"
                name="2"
                onChange={(e) => setTw(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="tw3"
                name="3"
                onChange={(e) => setTw(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="tw4"
                name="4"
                onChange={(e) => setTw(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="tw5"
                name="5"
                onChange={(e) => setTw(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setTwFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="con">Contribution: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="con1"
                name="1"
                onChange={(e) => setContribution(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="con2"
                name="2"
                onChange={(e) => setContribution(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="con3"
                name="3"
                onChange={(e) => setContribution(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="con4"
                name="4"
                onChange={(e) => setContribution(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="con5"
                name="5"
                onChange={(e) => setContribution(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setContributionRating(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="ter">Technical Expertise: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="ter1"
                name="1"
                onChange={(e) => setTe(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="ter2"
                name="2"
                onChange={(e) => setTe(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="ter3"
                name="3"
                onChange={(e) => setTe(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="ter4"
                name="4"
                onChange={(e) => setTe(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="ter5"
                name="5"
                onChange={(e) => setTe(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setTeFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="it">Initaitives: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="it1"
                name="1"
                onChange={(e) => setIr(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="it2"
                name="2"
                onChange={(e) => setIr(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="it3"
                name="3"
                onChange={(e) => setIr(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="it4"
                name="4"
                onChange={(e) => setIr(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="it5"
                name="5"
                onChange={(e) => setIr(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setIrFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="po">Potential: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="po1"
                name="1"
                onChange={(e) => setPotential(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="po2"
                name="2"
                onChange={(e) => setPotential(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="po3"
                name="3"
                onChange={(e) => setPotential(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="po4"
                name="4"
                onChange={(e) => setPotential(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="po5"
                name="5"
                onChange={(e) => setPotential(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setPotentialFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="commskl">Communication Skills: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="commskl1"
                name="1"
                onChange={(e) => setCS(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="commskl2"
                name="2"
                onChange={(e) => setCS(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="commskl3"
                name="3"
                onChange={(e) => setCS(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="commskl4"
                name="4"
                onChange={(e) => setCS(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="commskl5"
                name="5"
                onChange={(e) => setCS(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setCSFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="tech">Tech Talks: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="tech1"
                name="1"
                onChange={(e) => setTT(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="tech2"
                name="2"
                onChange={(e) => setTT(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="tech3"
                name="3"
                onChange={(e) => setTT(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="tech4"
                name="4"
                onChange={(e) => setTT(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="tech5"
                name="5"
                onChange={(e) => setTT(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setTTFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="reuse">Reusable Libraries: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="reuse1"
                name="1"
                onChange={(e) => setReuse(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="reuse2"
                name="2"
                onChange={(e) => setReuse(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="reuse3"
                name="3"
                onChange={(e) => setReuse(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="reuse4"
                name="4"
                onChange={(e) => setReuse(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="reuse5"
                name="5"
                onChange={(e) => setReuse(e.target.value)}
              />
              5
            </div>
          </div>
          <div>
            <textarea
              rows={5}
              maxLength={200}
              onChange={(e) => setReuseFeed(e.target.value)}
              className="feedbacks"
            />
          </div>
          <div className="form-div">
            <label htmlFor="oer">Overall Employee Rating: </label>
            <div className="inputs">
              <input
                type="radio"
                value={1}
                id="oer1"
                name="1"
                onChange={(e) => setOer(e.target.value)}
              />
              1
              <input
                type="radio"
                value={2}
                id="oer2"
                name="2"
                onChange={(e) => setOer(e.target.value)}
              />
              2
              <input
                type="radio"
                value={3}
                id="oer3"
                name="3"
                onChange={(e) => setOer(e.target.value)}
              />
              3
              <input
                type="radio"
                value={4}
                id="oer4"
                name="4"
                onChange={(e) => setOer(e.target.value)}
              />
              4
              <input
                type="radio"
                value={5}
                id="oer5"
                name="5"
                onChange={(e) => setOer(e.target.value)}
              />
              5
            </div>
          </div>
          <div className="feedback">
            <label htmlFor="fb">Feedback: </label>
            <textarea
              id="fb"
              maxLength={300}
              onChange={(e) => setFeedback(e.target.value)}
              rows={5}
              cols={20}
              className="feedbacks"
            />
          </div>
          <div className="btn-con">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagerForm;
