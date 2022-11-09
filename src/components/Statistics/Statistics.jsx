import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    console.log('positivePercentage', positivePercentage);
    return (
        <ul className={s.statList}>
            <li className={s.statItem}>Good: {good}</li>
            <li className={s.statItem}>Neutral: {neutral}</li>
            <li className={s.statItem}>Bad: {bad}</li>
            <li className={s.statItem}>Total: {total}</li>
            <li className={s.statItem}>Positive feedback: {Math.ceil(positivePercentage())}%</li>
        </ul>
    );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;