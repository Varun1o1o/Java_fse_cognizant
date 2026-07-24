import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

const cohorts = [
  {
    id: 1,
    cohortId: 'INTADMDF10',
    name: '.NET FSD',
    startedOn: '22-Feb-2022',
    currentStatus: 'Scheduled',
    coach: 'Aathma',
    trainer: 'Jojo Jose',
  },
  {
    id: 2,
    cohortId: 'ADM21JF014',
    name: 'Java FSD',
    startedOn: '10-Sep-2021',
    currentStatus: 'Ongoing',
    coach: 'Apoorv',
    trainer: 'Elisa Smith',
  },
  {
    id: 3,
    cohortId: 'CDBJF21025',
    name: 'Java FSD',
    startedOn: '24-Dec-2021',
    currentStatus: 'Ongoing',
    coach: 'Aathma',
    trainer: 'John Doe',
  },
];

function App() {
  return (
    <div className="App">
      <CohortDetails cohorts={cohorts} />
    </div>
  );
}

export default App;
