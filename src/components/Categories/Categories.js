import classes from "./Categories.module.css";
import React from "react";
import Category from "./Category/Category";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";

const categories = () => {
  return (
    <div className={classes.categories}>
      <Category itemName="Electronics" src={img1} />
      <Category itemName="Women's wear" src={img6} />
      <Category itemName="Home" src={img2} />
      <Category itemName="Jewellery" src={img3} />
      <Category itemName="Groceries" src={img4} />
      <Category itemName="Mobile Phones" src={img5} />
      <Category itemName="Men's wear" src={img6} />
    </div>
  );
};

export default categories;
