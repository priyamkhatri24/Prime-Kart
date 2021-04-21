import classes from "./Error.module.css";
import React from "react";

const error = (props) => {
  return (
    <div className={classes.error}>
      <h1 className={classes.message}>
        This is not the page you are looking for. Please Login
      </h1>
      <h1 className={classes.fourofour}>404</h1>
    </div>
  );
};

export default error;
