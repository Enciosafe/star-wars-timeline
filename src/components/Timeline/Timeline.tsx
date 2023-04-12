import React from 'react';
import styles from './Timeline.module.css';
import { events } from '../../data/events';
import Lightsaber from '../Lightsaber/Lightsaber';





const Timeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      <Lightsaber events={events} />
    </div>
  );
};

export default Timeline;
