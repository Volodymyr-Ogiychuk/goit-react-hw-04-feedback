import React, { Component } from "react";
import FeedBackOptions from './FeedBackOptions/FeedBackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    this.setState(prev => ({ [option]: prev[option] + 1 }));
  };

  countTotalFeedback = () => Object.values(this.state).reduce((acc, item) => { return acc + item }, 0);

  countPositiveFeedbackPercentage = () => (this.state.good / (this.countTotalFeedback() || 1)) * 100;

  render() {
    const total = this.countTotalFeedback();
    console.log('total', total);
    const options = Object.keys(this.state);
    return (
      <>
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback} 
        />
      </Section>
      <Section title="Statistics">
        {!total ? (<Notification message="There is no feedback" />) : (
        <Statistics    
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad={this.state.bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
         )}
          
      </Section>        
      </>
    );
  }
}

export default App;