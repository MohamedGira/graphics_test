function Accordion({ number, question, children, setActive, active }) {
  const isme = active === number;
  return (
    <div
      className={`accordion ${isme ? "active" : ""}`}
      onClick={() => (isme ? setActive(-1) : setActive(number))}
    >
      <div className="question">
        <h3 className="number">{number < 9 ? `0${number + 1}` : number + 1}</h3>
        <h3 className="text">{question}</h3>
        <button className="btn">{isme ? "–" : "+"}</button>
      </div>
      <div className="answer">{children}</div>
    </div>
  );
}

export default Accordion;
