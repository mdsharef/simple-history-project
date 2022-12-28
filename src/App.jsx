import { useState } from 'react';
import './app.css';
import HistoryCard from './components/history/History';
import Inputs from './components/inputs/Inputs';
import Operators from './components/operators/Operators';
import getID from './utils/generateId';


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
        setRestoredHistory(null);
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
        setResult(0);
        setRestoredHistory(null);
    }

    // function for handling the onclick event of the restore button 
    const handleRestore = (histr) => {
        setInputValue({...histr.inputValue});
        setResult(histr.result);
        setRestoredHistory(histr.id);
    }

    return (
        <div className='container'>
            <h1>Result = {result}</h1>
            <Inputs 
                value={inputValue} 
                onChange={handleChange} 
            />
            <Operators 
                handleOperator={handleOperator} 
                handleClr={handleClr} 
            />
            <HistoryCard 
                histories={histories} 
                handleRestore={handleRestore} 
                restoredHistory={restoredHistory} 
            />
        </div>
    )
}

export default App;