import React from "react";

const ListItem = (props) => {
  const { title, date, recurring, info } = props.eventData;
  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default ListItem;
