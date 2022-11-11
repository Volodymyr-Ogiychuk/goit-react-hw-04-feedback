import PropTypes from 'prop-types'
import s from './FeedBackOptions.module.css'

const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <ul className={s.btnList}>
        {Object.keys(options).map(option => (
            <li key={option}>
                <button className={s.btn} type="button" name={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
            </li>
        ))}
    </ul>
    );
};

FeedBackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;