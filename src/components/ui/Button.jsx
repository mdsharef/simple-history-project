import PropTypes from 'prop-types';

const Button = ({ onClick, disabled = false, text, customStyle }) => {
    const disabledStyle = {
        color: '#333',
        background: '#999',
    }
    const style = {
        cursor: 'pointer',
        ...customStyle,
        ...(disabled && disabledStyle)
    }

    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            style={style}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    customStyle: PropTypes.object,
}

export default Button;