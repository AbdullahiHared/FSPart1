import { useState } from "react";

const Display = () => <h1>Give Feedback</h1>;

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average.toFixed(2)}</p>
      <p>Positive: {positive.toFixed(2)}%</p>
    </div>
  );
};

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const incrementGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    incrementAll();
  };

  const incrementNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    incrementAll();
  };

  const incrementBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    incrementAll();
  };

  const incrementAll = () => {
    const updatedAll = all + 1;
    setAll(updatedAll);
    console.log(updatedAll);
  };

  // Calculations for average and positive
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;

  return (
    <div>
      <Display />
      <div>
        <button onClick={incrementGood}>Good</button>
        <button onClick={incrementNeutral}>Neutral</button>
        <button onClick={incrementBad}>Bad</button>
      </div>

      {/* Use Statistics component to display results */}
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  );
};

export default App;
