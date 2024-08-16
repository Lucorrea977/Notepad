import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input));
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display bg-gray-100 p-2 mb-4 text-right text-lg">{input}</div>
      <div className="buttons grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((char) => (
          <button
            key={char}
            onClick={() => handleClick(char)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            {char}
          </button>
        ))}
        <button onClick={() => handleClick('C')} className="col-span-2 bg-red-500 text-white p-2 rounded">C</button>
      </div>
    </div>
  );
};

export default Calculator;
