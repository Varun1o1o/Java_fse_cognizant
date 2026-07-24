import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(5);

  // Method 1a: Increment the counter value
  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  // Method 1b: Say Hello followed by a static message
  const sayHello = () => {
    alert('Hello! Member1');
  };

  // Method invoked by "Increment" button executing multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement counter value
  const decrement = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  // Method 2: Invoked with argument "welcome"
  const sayWelcome = (message) => {
    alert(message);
  };

  // Method 3: Synthetic event OnPress
  const onPress = (e) => {
    alert('I was clicked');
  };

  return (
    <div style={{ padding: '15px' }}>
      <div style={{ marginBottom: '10px' }}>{counter}</div>
      
      <div style={{ display: 'flex', flexDirection: 'column', width: '110px', gap: '4px', marginBottom: '20px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
        <button onClick={onPress}>Click on me</button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
