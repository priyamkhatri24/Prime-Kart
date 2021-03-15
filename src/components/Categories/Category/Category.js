import React from "react";
import classes from "./Category.module.css";

const category = (props) => {
  return (
    <div className={classes.category}>
      <img className={classes.img} src={props.src} alt="img"></img>
      <p className={classes.catName}>{props.itemName}</p>
    </div>
  );
};

export default category;
