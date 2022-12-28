import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryCard = ({ histories, handleRestore, restoredHistory }) => {
    return (
        <div className="history">
            <h3>History :-</h3>
            {
                histories.length === 0 ? 
                    (<h4>There is no history</h4>) :
                    (
                        <ul>
                            {
                                histories.map(histr => <HistoryItem key={histr.id} histr={histr} handleRestore={handleRestore} restoredHistory={restoredHistory} />)
                            }
                        </ul>
                    )
            }
        </div>
    )
}

HistoryCard.propTypes = {
    histories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        inputValue: PropTypes.shape({
            a: PropTypes.number.isRequired,
            b: PropTypes.number.isRequired,
        }),
        operator: PropTypes.string.isRequired,
        result: PropTypes.number.isRequired,
        date: PropTypes.object.isRequired,
    })).isRequired,
    handleRestore: PropTypes.func.isRequired,
    restoredHistory: PropTypes.number,
}

export default HistoryCard;