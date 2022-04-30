import React, { useEffect, useState } from "react";
import subtractTime from "../utils/subtract-time.js";

const ListItem = (props) => {
  const { title, date, recurring, info } = props.eventData;
  const [countdown, setCountdown] = useState();

  const calculateDiff = (currentTime = props.currentTime) => {
    const unixDate = new Date(date).getTime() - currentTime;
    const convertedTime = subtractTime(unixDate);
    setCountdown(convertedTime);
  };

  const timer = () => {
    setInterval(() => {
      const updatedTime = new Date().getTime();
      calculateDiff(updatedTime);
    }, 100);
  };

  useEffect(() => timer(), []);

  const getDate = (date) => {
    const newFormat = new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return newFormat;
  };

  return (
    <>
      <div className="eventCard__container container">
        <h1 className="eventCard__heading">{title}</h1>
        <h2 className="eventCard__date">{getDate(date)}</h2>
        <ul className="eventCard__countdown">
          <li>
            Years
            <span className="countdown__number">
              {countdown && countdown.years}
            </span>
          </li>
          <li>
            Weeks
            <span className="countdown__number">
              {countdown && Math.floor(countdown.days / 7)}
            </span>
          </li>
          <li>
            Days
            <span className="countdown__number">
              {countdown && countdown.days % 7}
            </span>
          </li>
          <li>
            Hours
            <span className="countdown__number">
              {countdown && countdown.hours}
            </span>
          </li>
          <li>
            Minutes
            <span className="countdown__number">
              {" "}
              {countdown && countdown.mins}{" "}
            </span>
          </li>
          <li>
            Seconds
            <span className="countdown__number">
              {" "}
              {countdown && countdown.seconds}{" "}
            </span>
          </li>
        </ul>
        <p>{info}</p>

        <button className="event__delete__btn">
          <div>✖</div>
        </button>
      </div>
    </>
  );
};

export default ListItem;
