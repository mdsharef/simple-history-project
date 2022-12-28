import PropTypes from 'prop-types';
import HistoryItem from '../ui/HistoryItem';

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
    histories: PropTypes.array.isRequired,
    handleRestore: PropTypes.func.isRequired,
    restoredHistory: PropTypes.object,
}

export default HistoryCard;