import PropTypes from 'prop-types';
import Button from './Button';

const HistoryItem = ({histr, handleRestore, restoredHistory}) => {
    const customStyle = {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
    }

    return (
        <li>
            <p>
                operation = {histr.inputValue.a} {histr.operator} {histr.inputValue.b}, result = {histr.result}
            </p>
            <small>{histr.date.toLocaleString()}</small>
            <Button 
                onClick={()=> handleRestore(histr)} 
                disabled={restoredHistory !== null && restoredHistory.id === histr.id} 
                text={'restore'}
                customStyle={customStyle}
            />
        </li>
    )
}

HistoryItem.propTypes = {
    histr: PropTypes.object.isRequired,
    handleRestore: PropTypes.func.isRequired,
    restoredHistory: PropTypes.object,
}

export default HistoryItem;