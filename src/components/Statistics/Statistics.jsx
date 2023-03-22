import React from 'react';
import { Ul } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>
      Postitive feedback:
      {positivePercentage > 0 ? positivePercentage : 0} %
    </li>
  </Ul>
);

export default Statistics;
