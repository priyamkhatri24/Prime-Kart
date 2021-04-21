import classes from "./Footer.module.css";
import React from "react";

const footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.column}>
        <h3>About</h3>
        <p>
          Flipkart Clone Project Designed and made by Priyam Khatri. This is not
          an antual shopping e-commerce website. This is a clone of already
          exisiting e-commerce website.
        </p>
      </div>
      <div className={classes.column}>
        <h3>Lets be Social</h3>
        <div className={classes.icons}>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default footer;
