import classes from "./Header.module.css";
import React from "react";
import jewelery from "../../assets/h3.jpg";
import fashion from "../../assets/h4.jpg";
import electronics from "../../assets/h5.jpg";
import def from "../../assets/h2.jpg";

const header = (props) => {
  let image;
  switch (props.category) {
    case "electronics":
      image = electronics;
      break;
    case "men's clothing":
      image = fashion;
      break;
    case "women's clothing":
      image = fashion;
      break;
    case "jewelery":
      image = jewelery;
      break;
    default:
      image = def;
  }
  return (
    <div className={classes.header}>
      <img src={image} alt="header" className={classes.headerImg}></img>
    </div>
  );
};

export default header;
