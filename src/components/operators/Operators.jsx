import PropTypes from 'prop-types';
import Button from '../ui/Button';

const Operators = ({ handleOperator, handleClr }) => {
    const customStyle = {
        fontSize: '1.2rem',
        padding: '0.4rem 0.8rem',
    }

    const style = {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.5rem',
    }

    return (
        <div style={style}>
            <p>Operations</p>
            <Button onClick={() => handleOperator('+')} text={'+'} customStyle={customStyle} />
            <Button onClick={() => handleOperator('-')} text={'-'} customStyle={customStyle} />
            <Button onClick={() => handleOperator('*')} text={'*'} customStyle={customStyle} />
            <Button onClick={() => handleOperator('/')} text={'/'} customStyle={customStyle} />
            <Button onClick={() => handleOperator('%')} text={'%'} customStyle={customStyle} />
            <Button onClick={handleClr} text={'clear'} customStyle={customStyle} />
        </div>
    )
}

Operators.propTypes = {
    handleOperator: PropTypes.func.isRequired,
    handleClr: PropTypes.func.isRequired,
}

export default Operators;