import classes from "./Input.module.css";
import React from "react";

const input = (props) => {
  return (
    <input
      className={classes.input}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.changed}
      name={props.name}
    ></input>
  );
};

export default input;
