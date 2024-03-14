import { useState } from 'react';
import './App.css';

function App() {
  const [creditScore, setCreditScore] = useState(0);
  const [previousScore, setPreviousScore] = useState(0);
  const [nextUpdateDate, setNextUpdateDate] = useState("");
  const [showWaysToIncrease, setShowWaysToIncrease] = useState(false);

  // Function to generate next update date (13th of next month)
  function getNextUpdateDate() {
    const today:any = new Date();
    let nextUpdate: any = new Date(today.getFullYear(), today.getMonth(), 13);
    if (today.getDate() >= 13) {
      nextUpdate = new Date(today.getFullYear(), today.getMonth() + 1, 13);
    }
    const daysToNextUpdate = Math.ceil((nextUpdate - today) / (1000 * 60 * 60 * 24));
    return `${nextUpdate.toLocaleDateString()} (${daysToNextUpdate} days)`;
  }

  const updateCreditScore = () => {
    if (!creditScore) {
      const newScore = Math.floor(Math.random() * (850 - 300 + 1) + 300); // Random score between 300 and 850
      setCreditScore(newScore);
      setNextUpdateDate(getNextUpdateDate());
    }
  };

  const checkNextUpdate = () => {
    if (nextUpdateDate) {
      alert(`Next update is in ${nextUpdateDate}`);
    } else {
      alert('You need to check your credit score first.');
    }
  };

  const showPreviousScore = () => {
    if (previousScore) {
      const prevScore = previousScore
      const difference = creditScore - previousScore;
      setPreviousScore(difference)
      alert(`Your previous credit score was ${prevScore}. It changed by ${previousScore > 0 ? 'increased' : 'decreased'} ${Math.abs(previousScore)} points.`);
    } else {
      alert('You have not checked your credit score before.');
    }
  };

  const waysToIncreaseScore = [
    "Lower your credit utilization rate.",
    "Ask for late payment forgiveness.",
    "Dispute inaccurate information on your credit reports.",
    "Add utility and phone payments to your credit report.",
    "Check and understand your credit score.",
    "The bottom line about building credit fast."
  ];

  return (
    <div className="App">
      <header>
        <h2>Welcome to CRED</h2>
        <h1 className="title">Credit Monitoring System</h1>
        {creditScore && <p>Your current credit score is: <strong>{creditScore}</strong></p>}
      </header>
      <main>
        {!creditScore && <button onClick={updateCreditScore}>Check My Credit Score</button>}
        {creditScore && <button onClick={showPreviousScore}>Previous Score</button>}
        {creditScore && (
          <button onClick={() => setShowWaysToIncrease(!showWaysToIncrease)}>
            {showWaysToIncrease ? 'Close Ways to Increase' : 'Ways to Increase Credit Score'}
          </button>
        )}
        {showWaysToIncrease && (
          <div className="ways-to-increase">
            <button className="close-button" onClick={() => setShowWaysToIncrease(false)}>X</button>
            {waysToIncreaseScore.map((way, index) => (
              <p key={index}>{way}</p>
            ))}
          </div>
        )}
        {creditScore && <button onClick={checkNextUpdate}>Next Update</button>}
      </main>
      <footer>
        <p>Next update: {nextUpdateDate ? nextUpdateDate : 'N/A'}</p>
      </footer>
    </div>
  );
}

export default App;