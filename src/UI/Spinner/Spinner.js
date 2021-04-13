import React from "react";
import classes from "./Spinner.module.css";

const spinner = (props) => {
  return (
    <div
      style={{ width: props.width, height: props.height }}
      className={classes.loader}
    >
      Loading...
    </div>
  );
};

export default spinner;
