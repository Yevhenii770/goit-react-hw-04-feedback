import { useState } from 'react';
import { Div } from './App.styled';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/Feedback';
import Section from './components/Sections';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnNames = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = e => {
    if (e.target.textContent === 'good') {
      setGood(good + 1);
    }
    if (e.target.textContent === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (e.target.textContent === 'bad') {
      setBad(bad + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.trunc((good / (good + neutral + bad)) * 100);
  };

  return (
    <Div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={btnNames}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification title="There is no feedback"></Notification>
        )}
      </Section>
    </Div>
  );
}
