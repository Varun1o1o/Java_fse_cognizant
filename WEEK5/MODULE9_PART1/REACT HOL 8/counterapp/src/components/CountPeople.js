import React from 'react';
import './CountPeople.css';

class CountPeople extends React.Component {
  constructor() {
    super();
    this.state = {
      entrycount: 0,
      exitcount: 0,
      c: 0
    };
    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState((prevState, props) => {
      return { entrycount: prevState.entrycount + 1 };
    });
  }

  updateExit() {
    this.setState((prevState, props) => {
      return { exitcount: prevState.exitcount + 1 };
    });
  }

  render() {
    return (
      <div className="count-people-container">
        <div className="entry-section">
          <button className="btn-entry" onClick={this.updateEntry}>
            Login
          </button>
          <span className="count-text">
            {this.state.entrycount} People Entered!!!
          </span>
        </div>
        <div className="exit-section">
          <button className="btn-exit" onClick={this.updateExit}>
            Exit
          </button>
          <span className="count-text">
            {this.state.exitcount} People Left!!!
          </span>
        </div>
      </div>
    );
  }
}

export default CountPeople;
