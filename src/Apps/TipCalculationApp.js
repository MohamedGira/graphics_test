import SelectComponent from "../components/Tip Calculator/SelectComponent.mjs";
import InputComponent from "../components/Tip Calculator/InputComponent.mjs";
import { useState } from "react";

function TipCalculationApp() {
  
  const options = [
    { value: 0, label: "dissatisfied" },
    { value: 5, label: "it was ok" },
    { value: 10, label: "it was good" },
    { value: 20, label: "abslutely amazing" },
  ];
  const [urrate, setUrrate] = useState(0);
  const [urfrrate, setUrfrrate] = useState(0);
  const [bill, setBill] = useState("");
  const tip = (bill * (Number(urfrrate) + Number(urrate))) / 200;
  function reset() {
    setUrfrrate(0);
    setUrrate(0);
    setBill("");
  }
  return (
    <>
      <form>
        <InputComponent
          label="Bill Amount"
          type="number"
          name="bill"
          value={bill}
          handleChange={setBill}
        />
        <SelectComponent
          label="your stuff"
          type="select"
          name="you"
          handleChange={setUrrate}
          value={urrate}
        >
          {options.map((option) => (
            <option value={option.value}>
              {option.label} ({option.value}%)
            </option>
          ))}
        </SelectComponent>
        <SelectComponent
          label="your friendstuff"
          type="select"
          name="yourfriend"
          handleChange={setUrfrrate}
          value={urfrrate}
        >
          {options.map((option) => (
            <option value={option.value}>
              {option.label} ({option.value}%)
            </option>
          ))}
        </SelectComponent>
      </form>
      <button onClick={reset}>Reset</button>
      {bill != "" ? (
        <p>
          you pay ${tip + Number(bill)} (${bill} bill + ${tip} )
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default TipCalculationApp;
