import React from "react";
import styled from "../App.module.css";

export const FaqComp = ({ currElem, active, handletoggle }) => {
  const { question, answer } = currElem;

  return (
    <li className={styled.innerContainer}>
      <div className={styled.question}>
        {question}{" "}
        <button
          className={!active ? styled.showbtn : styled.hidebtn} // Toggle class based on active state
          onClick={handletoggle} // Call the handler passed from Accordion
        >
          {active ? "hide" : "show"}
        </button>
      </div>
      {active && <span className={styled.answer}>{answer}</span>} {/* Show answer only if active */}
    </li>
  );
};
