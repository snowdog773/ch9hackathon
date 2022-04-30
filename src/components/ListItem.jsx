import React, { useEffect, useState } from "react";
import subtractTime from "../utils/subtract-time.js"; 

const ListItem = (props) => {
  const { title, date, recurring, info } = props.eventData;
  const [countdown, setCountdown] = useState()

  const calculateDiff = (currentTime = props.currentTime) => {
    const unixDate = (new Date(date).getTime() - currentTime);
    const convertedTime = subtractTime(unixDate);
    setCountdown(convertedTime)
  }

  const timer = () => { setInterval(() => {
    let updatedTime = new Date().getTime();
    calculateDiff(updatedTime)
  }, 100)}

  useEffect(() => timer(), []);

  return (
    <>
      <div>{title}, {date}, {info}, {recurring}, {countdown && countdown.seconds}</div>
    </>
  );
};

export default ListItem;
