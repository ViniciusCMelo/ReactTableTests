import React from 'react';
import './Header.css';
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';
function Header() {
  let navigate = useNavigate();

  return (

    <div className="header">
      <Button title={"Orders"} action={() => navigate("/")}/>
      <Button title={"Info"} action={() => navigate("/info")}/>
    </div>
  );
}

export default Header;