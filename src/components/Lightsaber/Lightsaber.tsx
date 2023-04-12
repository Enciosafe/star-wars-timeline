import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Lightsaber.module.css";
import { TimelineEventType } from "../../data/events";
import TimelineEvent from "../TimelineEvent/TimelineEvent";


interface Props {
  events: TimelineEventType[];
}

const Lightsaber: React.FC<Props> = ({ events }) => {
  const [activeLightsaber, setActiveLightsaber] = useState(false);

  const lightsaberHandRef = useRef<HTMLInputElement>(null);

  const getRandomColor = useCallback(() => {
    if (lightsaberHandRef.current) {
      document.documentElement.style.setProperty(
        "--blade-color",
        `${getRandomInt(10, 1000)}`
      );
    }
  }, []);

  useEffect(() => {
    if (lightsaberHandRef.current) {
      getRandomColor();
    }
  }, [getRandomColor, lightsaberHandRef]);

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleLightsaberClick = () => {
    setActiveLightsaber(!activeLightsaber);
    if (!activeLightsaber) {
      getRandomColor();
    }
  };
    

  return (
    <div className={styles.content}>
      <div className={styles.lightsaber}>
        <div className={styles.lightsaber1} id="saber">
          <input
            type="checkbox"
            id="on-off"
            ref={lightsaberHandRef}
            checked={activeLightsaber}
            onChange={handleLightsaberClick}
            className={styles.hiddenCheckbox}
          />
          <div
            className={styles.blade}
            style={{ transform: activeLightsaber ? "scaleY(1)" : "scaleY(0)" }}
          >
            <div
              className={styles.eventsWrapper}
              style={{ opacity: activeLightsaber ? 1 : 0 }}
            >
              {events.map((event) => (
                <TimelineEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
          <label
            className={styles.handle}
            id="lightsaber"
            htmlFor="on-off"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default Lightsaber;
