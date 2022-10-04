import React from "react";
import "./Dashboard.css";

export default function Deals() {
  return (
    <div className="tasks-container">
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
        <h4>Tasks</h4>
        <div>
          Show: <span style={{ color: "#109CF1" }}>This Month
          </span>
        </div>
      </div>
      <img src="./images/tasks.png" alt="delasGraphic" style={{ margin: '30px' }} />
    </div>
  );
}
