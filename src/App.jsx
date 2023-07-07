import "./App.css";
import Card from "./components/Card";
import Board from "./components/Board";
import x from "./assets/x.png";
import o from "./assets/o.png";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isX, setIsX] = useState(false);

  const handleSubmit = (isX = true) => {
    setIsSubmitted(true);
    setIsX(isX);
  };

  return (
    <>
      <div className="container">
        {isSubmitted ? (
          <Card>
            <Board isX={isX} setIsSubmitted={setIsSubmitted}/>
          </Card>
        ) : (
          <Card setIsSubmitted={setIsSubmitted}>
            <h3>TIC-TAC-TOE</h3>
            <span>Pick who goas first?</span>
            <div className="xo">
              <img
                src={x}
                alt=""
                height={80}
                width={80}
                onClick={() => handleSubmit()}
              />
              <img
                src={o}
                alt=""
                height={80}
                width={80}
                onClick={() => handleSubmit(false)}
              />
            </div>
          </Card>
        )}
      </div>
    </>
  );
}

export default App;
