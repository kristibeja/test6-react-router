import React from "react";
import "./Dashboard.css";

export default function Deals() {
  return (
    <div className="deals-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #EBEFF2",
          marginBottom: '15px',
          padding: '15px'
        }}
      >
        <h4>Deals</h4>
        <div>
          Show <span style={{ color: "#109CF1" }}>Monthly</span>
        </div>
      </div>
      <img src="./images/deals_graphic.png" alt="dealsGraphic" />
    </div>
  );
}
