import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [isOpen,setIsOpen] = useState(true)
  const [step, Setstep] = useState(1);
  function handlerEvents() {
    if(step>1)Setstep(step - 1);
  }
  function handlerEventsOfNext() {
    if(step<3)Setstep(step + 1);
  }
  return (
    <div>
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 2 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}:{messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlerEvents}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlerEventsOfNext}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
}
export default App;
