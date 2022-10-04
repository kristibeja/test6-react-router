import React from "react";
import "./Dashboard.css";
import Card from "./Card";

export default function LeftDashboard() {
  const cardArray = [
    {
      title: "Send benefit review by Sunday",
      note: "Reminder",
      date: "December 23, 2018",
      img: "https://picsum.photos/25",
      name: "George Fields",
      buttonText: "Completed",
    },
    {
      title: "Invite to office meet-up",
      note: "Call",
      date: "December 23, 2018",
      img: "https://picsum.photos/id/1/25/25",
      name: "Rebecca Moore",
      buttonText: "Ended",
    },
    {
      title: "Office meet-up",
      note: "Event",
      date: "December 23, 2018",
      img: "https://picsum.photos/id/1001/25/25",
      name: "Lindsey Stroud",
      buttonText: "Completed",
    },
  ];

  return (
    <div className="left-dashboard">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #EBEFF2",
          marginBottom: "15px",
        }}
      >
        <h4>8 tasks completed out of 10</h4>
        <div>
          Show: <span style={{ color: "#109CF1" }}>This week</span>
        </div>
      </div>
      <img alt="tasks completed" src="./images/completed.png" />

      {cardArray.map((val, ind) => {
        const obj = {
            Completed: '#2ED47A',
            Ended: '#F7685B'
        }

        return (
          <Card
            key={ind}
            title={val.title}
            note={val.note}
            date={val.date}
            img={val.img}
            name={val.name}
            buttonText={val.buttonText}
            color={obj[val.buttonText]}
          />
        );
      })}
    </div>
  );
}
