import "./singleDay.css";
import React, { useState, useEffect } from "react";
export const SingleDay = ({ day, t1, t2, r1, r2 }) => {
  useEffect(() => {
    // code to run after render goes here
    if (day !== "") {
      if (day % 2 === 0) {
        document.getElementById(day + "a").style.backgroundColor =
          "rgb(255, 201, 170,.500)";
        if (r2 !== "") {
          document.getElementById(day + "b").style.backgroundColor =
            "rgb(169, 255, 246,.500)";
        } else {
          document.getElementById(day + "b").style.backgroundColor =
            "transparent";
        }
      } else {
        document.getElementById(day + "a").style.backgroundColor =
          "rgb(169, 255, 246,.500)";
        if (r2 !== "") {
          document.getElementById(day + "b").style.backgroundColor =
            "rgb(255, 201, 170,.500)";
        } else {
          document.getElementById(day + "b").style.backgroundColor =
            "transparent";
        }
      }
    } else {
      console.log("nothin");
    }
  }, []);

  return (
    <div className="dayOfMonth">
      <p>{day}</p>
      <div className={`remOne reminder ${day}`} id={`${day + "a"}`}>
        <div className="timeContainer">{t1}</div>
        <div className="reminderText">{r1}</div>
      </div>
      <div className={`remTwo reminder ${day + "b"}`} id={`${day + "b"}`}>
        <div className="timeContainer">{t2}</div>
        <div className="reminderText">{r2}</div>
      </div>
    </div>
  );
};
