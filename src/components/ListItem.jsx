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

  return (
    <>
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h3>
          Happening in:
          <span>Years: {countdown && countdown.years} </span>
          <span>Weeks: {countdown && Math.floor(countdown.days / 7)} </span>
          <span>Days: {countdown && countdown.days % 7} </span>
          <span>Hours: {countdown && countdown.hours} </span>
          <span>Minutes: {countdown && countdown.mins} </span>
          <span>Seconds: {countdown && countdown.seconds} </span>
        </h3>
        <p>{info}</p>
      </div>
    </>
  );
};

export default ListItem;
