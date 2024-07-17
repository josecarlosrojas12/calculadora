import React, { useState } from 'react';
import './App.css'; // Asegúrate de importar tu archivo CSS principal para los estilos

const App = () => {
  const [display, setDisplay] = useState('0'); // Estado para mostrar el número en pantalla
  const [firstOperand, setFirstOperand] = useState(null); // Primer operando
  const [operator, setOperator] = useState(null); // Operador actual
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false); // Flag para esperar el segundo operando

  // Función para manejar los números y operadores
  const handleButtonClick = (value) => {
    if (Number.isInteger(parseInt(value, 10))) {
      // Si el valor es un número
      if (display === '0' || waitingForSecondOperand) {
        setDisplay(String(value));
        setWaitingForSecondOperand(false);
      } else {
        setDisplay(display + value);
      }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Si el valor es un operador
      setOperator(value);
      setFirstOperand(parseFloat(display));
      setWaitingForSecondOperand(true);
    } else if (value === '=') {
      // Si el valor es "=" para calcular el resultado
      const secondOperand = parseFloat(display);
      let result = 0;
      switch (operator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          result = firstOperand / secondOperand;
          break;
        default:
          break;
      }
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    } else if (value === 'C') {
      // Si el valor es "C" para limpiar la pantalla
      setDisplay('0');
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-80">
        <div className="mb-4 text-4xl font-bold text-center bg-gray-200 p-4 rounded">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          <button className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded"
            onClick={() => handleButtonClick('C')}
          >
            C
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded"
            onClick={() => handleButtonClick('*')}
          >
            *
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('4')}
          >
            4
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button className="col-span-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 rounded"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded col-span-2"
            onClick={() => handleButtonClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
