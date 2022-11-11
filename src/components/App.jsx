import React, { useState } from "react";
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default: return;
    }
  };

  const  countPositiveFeedbackPercentage = () => (good / total || 1) * 100;
  const total = good + neutral + bad;  
  const options = { good, neutral, bad };
  
    return (
      <>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback} 
        />
      </Section>
      <Section title="Statistics">
        {!total ? (<Notification message="There is no feedback" />) : (
        <Statistics    
          good = {good}
          neutral = {neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage}
        />
         )}
          
      </Section>        
      </>
    );
  }

export default App;