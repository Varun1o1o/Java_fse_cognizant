import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const rupees = Number(amount) * 80;
    alert(`Converting to ${currency} Amount is ${rupees}`);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '70px' }}>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '70px' }}>Currency:</label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </div>
        <div style={{ paddingLeft: '70px' }}>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export { CurrencyConvertor, CurrencyConvertor as CurrencyConverter };
export default CurrencyConvertor;
