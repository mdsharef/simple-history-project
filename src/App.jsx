import { useState } from 'react';
import './app.css';

/**
 * DONE: handle user input fields
 * DONE: handle operations
 * DONE: handle history
 * DONE: render history
 * DONE: restore history
 */

// Initial Input Value for the two input
const initialInput = {
    a: 10,
    b: 15
};

// function to dynamically generate id for history 
function* generateId() {
    let id = 100;
    while (true) {
        yield id++;
    }
}
let getID = generateId();

// History Item Component
const HistoryItem = ({histr, handleRestore, restoredHistory}) => {
    return (
        <li>
            <p>
                operation = {histr.inputValue.a} {histr.operator} {histr.inputValue.b}, result = {histr.result}
            </p>
            <small>{histr.date.toLocaleString()}</small>
            <button 
                onClick={()=> handleRestore(histr)} 
                disabled={restoredHistory !== null && restoredHistory.id === histr.id} 
            >
                restore
            </button>
        </li>
    )
}

// Main App Component
const App = () => {
    // States for total application
    const [inputValue, setInputValue] = useState({...initialInput});
    const [result, setResult] = useState(0);
    const [histories, setHistories] = useState([]);
    const [restoredHistory, setRestoredHistory] = useState(null);

    // function for handling onchange event of the two inputs
    const handleChange = (e) => {
        let v = e.target.value;
        if(e.target.value) {
            v = parseInt(v)
        }
        setInputValue({
            ...inputValue,
            [e.target.name]: v
        })
    }

    // function for handling the onclick event of the operator buttons
    const handleOperator = (operator) => {
        if(!inputValue.a || !inputValue.b) {
            return alert('Input cannot be empty!')
        };

        const f = new Function('operator',
            `return ${inputValue.a} ${operator} ${inputValue.b}`
        );

        const result = f(operator)
        setResult(result);

        // creating history and store it in histories array
        const historyItem = {
            id: getID.next().value,
            inputValue,
            operator,
            result,
            date: new Date(),
        }
        setHistories([historyItem, ...histories])

        // setResult(eval(`${inputValue.a} ${operator} ${inputValue.b}`))
    }

    // function for handling the onclick event of the clear button
    const handleClr = () => {
        setInputValue({...initialInput});
        setResult(0)
    }

    // function for handling the onclick event of the restore button 
    const handleRestore = (histr) => {
        setInputValue({...histr.inputValue});
        setResult(histr.result);
        setRestoredHistory({...histr});
    }

    return (
        <div className='container'>
            <h1>Result = {result}</h1>
            <div className="inputBx">
                <p>Inputs</p>
                <input type="number" name="a" value={inputValue.a} onChange={handleChange} />
                <input type="number" name="b" value={inputValue.b} onChange={handleChange} />
            </div>
            <div className="operator">
                <p>Operations</p>
                <button onClick={() => handleOperator('+')}>+</button>
                <button onClick={() => handleOperator('-')}>-</button>
                <button onClick={() => handleOperator('*')}>*</button>
                <button onClick={() => handleOperator('/')}>/</button>
                <button onClick={() => handleOperator('%')}>%</button>
                <button onClick={handleClr}>clear</button>
            </div>
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
        </div>
    )
}

export default App;