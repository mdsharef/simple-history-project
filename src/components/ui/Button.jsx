import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, text, customStyle }) => {
    const disabledStyle = {
        color: '#333',
        background: '#999',
        cursor: 'default',
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

Button.defaultProps = {
    customStyle: {},
    disabled: false,
}

export default Button;