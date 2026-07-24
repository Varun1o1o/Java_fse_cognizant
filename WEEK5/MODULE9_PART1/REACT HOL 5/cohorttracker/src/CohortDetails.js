import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohorts }) => {
  return (
    <div>
      <h2>Cohorts Details</h2>
      {cohorts.map((cohort) => (
        <div key={cohort.id} className={styles.box}>
          <h3 style={{ color: cohort.currentStatus === 'Ongoing' ? 'green' : 'blue' }}>
            {cohort.cohortId} -{cohort.name}
          </h3>
          <dl>
            <dt>Started On</dt>
            <dd>{cohort.startedOn}</dd>
            <dt>Current Status</dt>
            <dd>{cohort.currentStatus}</dd>
            <dt>Coach</dt>
            <dd>{cohort.coach}</dd>
            <dt>Trainer</dt>
            <dd>{cohort.trainer}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
};

export default CohortDetails;
