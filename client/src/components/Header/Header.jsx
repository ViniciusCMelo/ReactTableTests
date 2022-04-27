import React from 'react';
import './Header.css';
import Button from "../Button/Button";

function Header(props) {
  return (
    <div className="header">
      <Button title={"Orders"} action={() => alert('Navigate to Orders')}/>
      <Button title={"Info"} action={() => alert('Navigate to Info')}/>
    </div>
  );
}

export default Header;