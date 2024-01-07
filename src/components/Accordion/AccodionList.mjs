import { useState } from "react";
import Accordion from "./Accordion.mjs";

function AccodionList({ accordions }) {
  const [active, setActive] = useState(0);

  return (
    <ul className="accordions-list">
      {accordions.map((accordion, index) => (
        <Accordion
          className={index === active ? "active" : ""}
          question={accordion.question}
          number={index}
          setActive={setActive}
          active={active}
        >
          {accordion.answer}
        </Accordion>
      ))}
    </ul>
  );
}

export default AccodionList;
