import React from "react";
import "./Card.css";

export default function Card({ title, note , date, img, name, buttonText, color }) {
  return (
    <div className="card-container">

      <div className="flex">
        <h4>{title}</h4>
        <h6>{note}</h6>
      </div>
      
      <div className="date">Dua date: <span>{date}</span></div>

      <div className="flex">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={img} style={{ borderRadius: "50%" }} />
          <span>{name}</span>
        </div>
        <div className="button" style={{ backgroundColor: `${color}` }}>{buttonText}</div>
      </div>

    </div>
  );
}
