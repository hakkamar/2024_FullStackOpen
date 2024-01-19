import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ statistiikka, text }) => (
  <tr>
    <td> {text} </td>
    <td>
      {statistiikka} {text == "Positive" && "%"}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad, yhteensa, keskiarvo, prosentti }) => {
  //console.log("Content: ", props);
  return (
    <div>
      <h2>Statics</h2>
      {yhteensa == 0 ? (
        <h4>No feedback given</h4>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="Good" statistiikka={good} />
            <StatisticLine text="Neutral" statistiikka={neutral} />
            <StatisticLine text="Bad" statistiikka={bad} />
            <StatisticLine text="All" statistiikka={yhteensa} />
            <StatisticLine text="Average" statistiikka={keskiarvo} />
            <StatisticLine text="Positive" statistiikka={prosentti} />
          </tbody>
        </table>
      )}
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGoodByOne = () => setGood(good + 1);
  const increaseNeutralByOne = () => setNeutral(neutral + 1);
  const increaseBadByOne = () => setBad(bad + 1);

  const yhteensa = good + neutral + bad;
  //debugger;
  let keskiarvo = 0;
  let prosentti = 0;
  if (good + bad > 0) {
    keskiarvo = (good + bad * -1) / yhteensa;
    prosentti = (good / yhteensa) * 100;
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button handleClick={increaseGoodByOne} text="Good" />
      <Button handleClick={increaseNeutralByOne} text="Neutral" />
      <Button handleClick={increaseBadByOne} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        yhteensa={yhteensa}
        keskiarvo={keskiarvo}
        prosentti={prosentti}
      />
    </div>
  );
};

export default App;
