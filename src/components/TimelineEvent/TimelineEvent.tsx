import React from 'react';
import styles from './TimelineEvent.module.css';
import { TimelineEvent as TimelineEventType } from '../../data/events';

interface TimelineEventProps {
  event: TimelineEventType;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event }) => {
  const { type, eventYear, title, description } = event;

  return (
    <div
      className={`${styles.timelineEvent} ${styles[type]}`}
      data-event-type={type}
      data-event-year={eventYear}
    >
      <div className={styles.eventInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
