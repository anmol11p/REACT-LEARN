import React, { useEffect, useState } from "react";
import styled from "./Style.module.css";
import Faq from "../API/Faq.json";
const Accordion2 = () => {
  const [data, setData] = useState(null);
  const [isActive, setIsactive] = useState(null);
  const handleToggle = (id) => {
    setIsactive((prev) => {
      return prev === id ? null : id;
    });
  };

  useEffect(() => {
    setData(Faq);
  }, []);

  return (
    <section>
      <span className={styled.heading}>
        <h2>The Accordion</h2>
      </span>
      <ul className={styled.parent}>
        {data &&
          data.map((currelem) => {
            return (
              <li
                key={currelem.id}
                className={`${styled.list} ${
                  !(isActive === currelem.id) ? styled.active : " "
                }`}
              >
                <span className={styled.first_span}>
                  {currelem.question}
                  <button
                    className={
                      isActive === currelem.id ? styled.hide : styled.show
                    }
                    onClick={() => handleToggle(currelem.id)}
                    style={{
                      transform:
                        isActive === currelem.id ? "translateX(-20rem)" : "",
                      opacity: isActive === currelem.id && !0,
                    }}
                  >
                    {isActive === currelem.id ? "hide" : "show"}
                  </button>
                </span>
                {isActive === currelem.id && (
                  <span className={styled.second_span}>{currelem.answer}</span>
                )}
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Accordion2;
