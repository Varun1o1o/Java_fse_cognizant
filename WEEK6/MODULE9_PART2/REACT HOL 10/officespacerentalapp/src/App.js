import React from 'react';
import './App.css';
import sr from './office.jpg';

function App() {
  const element = "Office Space";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Indiqube", Rent: 75000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 45000, Address: "Mumbai" },
    { Name: "Regus", Rent: 65000, Address: "Hyderabad" }
  ];

  return (
    <div className="App">
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />
      <h2>Office Spaces List</h2>
      {officeList.map((office, index) => {
        let itemColors = [];
        if (office.Rent <= 60000) {
          itemColors.push('textRed');
        } else {
          itemColors.push('textGreen');
        }
        return (
          <div key={index} className="office-card">
            <h1>Name: {office.Name}</h1>
            <h3 className={itemColors.join(' ')}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
