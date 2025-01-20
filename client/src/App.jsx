import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C',
    ];

    const handleButtonClick = async (value) => {
        if (value === 'C') {
            setExpression('');
            setResult(null);
        } else if (value === '=') {
            try {
                const evalResult = eval(expression); // Ensure safety with server-side validation
                setResult(evalResult);

                const response = await axios.post('http://localhost:5000/api/calculations', {
                    expression,
                    result: evalResult,
                });

                setHistory([response.data, ...history]);
            } catch (error) {
                console.error('Calculation Error:', error);
            }
        } else {
            setExpression((prev) => prev + value);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="w-80 p-5 bg-gray-800 rounded-lg shadow-lg">
                <div className="text-right mb-4 text-xl font-mono bg-gray-900 p-3 rounded">
                    <div>{expression || '0'}</div>
                    {result !== null && <div className="text-lg text-green-400">{result}</div>}
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            className={`p-4 rounded ${
                                btn === '='
                                    ? 'bg-green-500 hover:bg-green-600'
                                    : btn === 'C'
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-gray-700 hover:bg-gray-600'
                            } text-lg font-bold`}
                            onClick={() => handleButtonClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mt-8 w-80 bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">History</h3>
                <ul className="max-h-40 overflow-y-auto">
                    {history.map((calc) => (
                        <li key={calc._id} className="text-sm border-b border-gray-700 py-1">
                            {calc.expression} = {calc.result}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
