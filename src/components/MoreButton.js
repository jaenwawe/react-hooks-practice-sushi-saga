import React from "react";

function MoreButton({showMore}) {
  console.log({showMore})
  return <button onClick={showMore}>More sushi!</button>;
}

export default MoreButton;
