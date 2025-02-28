import React, { useState } from "react";
import Faq from "../API/Faq.json";
import styled from "../App.module.css";
import { FaqComp } from "./Faq";

const Accordion = () => {
  const [active, Setactive] = useState(null); // Track the ID of the active item
  
  const handletoggle = (id) => {
    Setactive((prev) => (prev === id ? null : id)); // Toggle based on id
  };

  return (
    <>
      <section>
        <span className={styled.heading}>
          <h2>the accordion</h2>
        </span>
        <ul className={styled.outerContainer}>
          {Faq.map((currElem) => (
            <FaqComp
              key={currElem.id}
              currElem={currElem}
              active={active === currElem.id} // Check if active
              handletoggle={() => handletoggle(currElem.id)} // Pass handler
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Accordion;
