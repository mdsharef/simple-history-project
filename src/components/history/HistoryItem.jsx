import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../ui/Button';

const HistoryItem = ({histr, handleRestore, restoredHistory}) => {
    const [show, setShow] = useState(false);
    const customStyle = {
        fontSize: '1rem',
        padding: '0.5rem 1rem',
    }

    const handleToggle = () => {
        setShow(!show);
    }

    return (
        <li style={{marginBottom: '1rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <p>
                    operation = {histr.inputValue.a} {histr.operator} {histr.inputValue.b}, result = {histr.result}
                </p>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Button 
                        onClick={handleToggle} 
                        text={show ? 'Hide' : 'Show'} 
                        customStyle={customStyle} 
                    />
                </div>
            </div>
            {show && (
                <>
                    <small>{histr.date.toLocaleString()}</small>
                    <Button 
                        onClick={()=> handleRestore(histr)} 
                        disabled={restoredHistory !== null && restoredHistory === histr.id} 
                        text={'restore'}
                        customStyle={customStyle}
                    />
                </>
            )}
        </li>
    )
}

HistoryItem.propTypes = {
    histr: PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputValue: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired,
        }),
        operator: PropTypes.string.isRequired,
        result: PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,
    }).isRequired,
    handleRestore: PropTypes.func.isRequired,
    restoredHistory: PropTypes.number,
}

export default HistoryItem;