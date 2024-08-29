import { useState } from "react";

const Display = () => <h1>give feedback</h1>;
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    console.log(updatedGood);
  };

  const incrementNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    console.log(neutral);
  };

  const incrementBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    console.log(updatedBad);
  };

  return (
    <div>
      <Display />
      <div>
        <button onClick={incrementGood}>Good</button>
        <button onClick={incrementNeutral}>Neutral</button>
        <button onClick={incrementBad}>Bad</button>
      </div>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

export default App;
