import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import "./Common.css";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

function Common() {
  let navigate = useNavigate();
  const [image, setImage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const logout = () => {
    googleLogout({});
    navigate("/");
  };

  const goToAprcl = () => {
    navigate("/appraisal");
  };

  const goToManager = () => {
    navigate("/manage");
  }

  const goToGoal = () => {
    navigate("/goal");
  };

  useEffect(() => {
    const data = {
      rating: 3,
      goals: 4,
    };
    fetch("http://127.0.0.1:5000/graph/growth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const blobdata = await res.blob();
        const url = URL.createObjectURL(blobdata);
        setImage(url);
        console.log(url);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="header">
        <div>
          <Link to="https://divum.in/" target="_blank">
            <img
              src="https://content.jdmagicbox.com/comp/bangalore/23/080p3033723/catalogue/divum-corportate-services-pvt-ltd-domlur-bangalore-computer-software-developers-0fdbsyb7ib-250.jpg"
              alt="divum-logo"
              className="img-logo"
            />
          </Link>
        </div>
        <div>
          <button onClick={logout} className="logout">
            Log out
          </button>
        </div>
        <Dropdown show={showDropdown} onToggle={toggleDropdown}>
          <DropdownToggle
            variant="success"
            id="dropdown-basic"
            className="link A"
          >
            Form
          </DropdownToggle>
          <DropdownMenu className="Form-dropdown">
            <DropdownItem onClick={goToAprcl} className="drpdn-item">Appraisal Form</DropdownItem>
            <DropdownItem onClick={goToManager} className="drpdn-item">Manager Form</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <button onClick={goToGoal} className="link B">
          Set Goal
        </button>
      </div>
      <div>
        <h1>{}</h1>
      </div>
      <img src={image} alt=""/>
    </div>
  );
}

export default Common;
