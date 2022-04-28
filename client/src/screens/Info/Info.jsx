import React from 'react';
import Header from "../../components/Header/Header";
import "./Info.css"
import InfoCard from "../../components/Card/InfoCard";

function Info(props) {
  return (
    <div className="infoContainer">
      <Header/>
      <h1>This project was created by Vinícius Melo</h1>
      <h2>In this project was used:</h2>
      <div className="cardContainer">
        {["Node.js", "Express", "React", "Jest"].map(tech => (
          <InfoCard title={tech}/>
        ))}
      </div>
    </div>
  );
}

export default Info;