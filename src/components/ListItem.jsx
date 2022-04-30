import React, { useEffect, useState } from "react";
import subtractTime from "../utils/subtract-time.js";

const ListItem = (props) => {
  const { title, date, info } = props.eventData;
  const [countdown, setCountdown] = useState();
  const [unix, setUnix] = useState();

  const calculateDiff = () => {
    const unixDate = new Date(date).getTime() - props.currentTime;
    const convertedTime = subtractTime(unixDate);
    setCountdown(convertedTime);
    setUnix(unixDate);
  };

  useEffect(() => calculateDiff(), [props.currentTime]);

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
        <button className="event__delete__btn" onClick={() => props.deleteItem(title)}>
          <div>✖</div>
        </button>
        <h1 className="eventCard__heading">{title}</h1>
        <h2 className="eventCard__date">{getDate(date)}</h2>
        {unix > 0 ?
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
        </ul> : <p>This date has happened</p>}
        <p>{info}</p>
      </div>
    </>
  );
};

export default ListItem;
