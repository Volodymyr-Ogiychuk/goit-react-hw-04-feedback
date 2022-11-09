import PropTypes from 'prop-types'
import s from './FeedBackOptions.module.css'

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    console.log('options', options);
    return (
    <ul className={s.btnList}>
        {options.map(option => (
            <li key={option}>
                <button className={s.btn} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
            </li>
        ))}
    </ul>
    );
};

FeedBackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;