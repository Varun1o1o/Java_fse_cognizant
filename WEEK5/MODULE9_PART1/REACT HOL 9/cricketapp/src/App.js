import React from 'react';
import './App.css';
import players, { ListofPlayers, Scorebelow70 } from './components/ListofPlayers';
import { OddPlayers, EvenPlayers, IndianPlayers, IndianTeam, ListofIndianPlayers } from './components/IndianPlayers';

function App() {
  var flag = true;

  if (flag === true) {
    return (
      <div className="App">
        <h1> List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1> List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>
          <div>
            <h1> Indian Team </h1>
            <h1> Odd Players </h1>
            {OddPlayers(IndianTeam)}
            <hr />
            <h1> Even Players </h1>
            {EvenPlayers(IndianTeam)}
          </div>
          <hr />
          <div>
            <h1> List of Indian Players Merged:</h1>
            <ListofIndianPlayers IndianPlayers={IndianPlayers} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
