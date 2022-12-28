import PropTypes from 'prop-types';
import NumberFeild from "../ui/NumberFeild";

const Inputs = ({ value, onChange }) => {
    const style = {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '1rem',
    }

    return (
        <div style={style}>
            <p>Inputs</p>
            <NumberFeild name='a' value={value.a} onChange={onChange} />
            <NumberFeild name="b" value={value.b} onChange={onChange} />
        </div>
    )
}

Inputs.propTypes = {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Inputs;