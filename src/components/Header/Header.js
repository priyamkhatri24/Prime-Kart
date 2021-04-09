import classes from "./Header.module.css";
import React from "react";
import jewelery from "../../assets/h3.jpg";
import fashion from "../../assets/h4.jpg";
import electronics from "../../assets/h5.jpg";

const header = (props) => {
  let image;
  switch (props.category) {
    case "electronics":
      image = electronics;
      break;
    case "men clothing":
      image = fashion;
      break;
    case "women clothing":
      image = fashion;
      break;
    case "jewelery":
      image = jewelery;
      break;
    default:
      image = fashion;
  }
  return (
    <div className={classes.header}>
      <img src={image} alt="header" className={classes.headerImg}></img>
    </div>
  );
};

export default header;
