import "../AccordionApp.css";
import AccodionList from "../components/Accordion/AccodionList.mjs";

let accordions = [
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library created by Facebook in 2011.",
  },
  {
    question: "What is JSX?",
    answer:
      "JSX is a syntax extension to JavaScript and comes with the full power of JavaScript.",
  },
];
function App() {
  return (
    <>
      <AccodionList accordions={accordions} />
    </>
  );
}

export default App;
