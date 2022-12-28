import PropTypes from 'prop-types';
import getID from '../../utils/generateId';
import Button from '../ui/Button';

const Operators = ({ handleOperator, handleClr }) => {
    const operations = [
        {
            id: getID.next().value,
            text: '+',
            onClick: () => handleOperator('+')
        },
        {
            id: getID.next().value,
            text: '-',
            onClick: () => handleOperator('-')
        },
        {
            id: getID.next().value,
            text: '*',
            onClick: () => handleOperator('*')
        },
        {
            id: getID.next().value,
            text: '/',
            onClick: () => handleOperator('/')
        },
        {
            id: getID.next().value,
            text: '%',
            onClick: () => handleOperator('%')
        },
        {
            id: getID.next().value,
            text: '**',
            onClick: () => handleOperator('**')
        },
        {
            id: getID.next().value,
            text: 'clear',
            onClick: handleClr
        }
    ]

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
            {
                operations.map(ops => <Button key={ops.id} onClick={ops.onClick} text={ops.text} customStyle={customStyle} />)
            }
        </div>
    )
}

Operators.propTypes = {
    handleOperator: PropTypes.func.isRequired,
    handleClr: PropTypes.func.isRequired,
}

export default Operators;