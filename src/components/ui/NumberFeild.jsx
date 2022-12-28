import PropTypes from 'prop-types';

const NumberFeild = ({ name, value, onChange, customStyle }) => {
    const style = {
        padding: '0.5rem',
        margin: '1rem',
        ...customStyle
    }

    return (
        <input 
            style={style}
            type="number" 
            name={name} 
            value={value} 
            onChange={onChange} 
        />
    )
}

NumberFeild.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    customStyle: PropTypes.object
}

export default NumberFeild;