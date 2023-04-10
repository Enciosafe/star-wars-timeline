import React from 'react';
import TimelineEvent from '../TimelineEvent/TimelineEvent';
import styles from './Timeline.module.css';
import { events } from '../../data/events';

const Timeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      {events.map((event) => (
        <TimelineEvent
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
};

export default Timeline;
