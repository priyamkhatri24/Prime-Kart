import React, { Component } from "react";
import headerImg2 from "../../assets/h2.jpg";
import headerImg3 from "../../assets/h3.jpg";
import headerImg4 from "../../assets/h4.jpg";
import headerImg5 from "../../assets/h5.jpg";
import classes from "./Header.module.css";

class Header extends Component {
  state = {
    sliderPage: 0,
    headers: [headerImg2, headerImg3, headerImg4, headerImg5],
  };
  rightSlideHandler = () => {
    if (this.state.sliderPage === this.state.headers.length - 1) {
      this.setState({ sliderPage: 0 });
      return;
    }
    this.setState({ sliderPage: this.state.sliderPage + 1 });
  };
  leftSlideHandler = () => {
    if (this.state.sliderPage < 1) {
      this.setState({ sliderPage: this.state.headers.length - 1 });
      return;
    }
    this.setState({ sliderPage: this.state.sliderPage - 1 });
  };

  render() {
    const imageStyle = {
      display: "flex",
      width: "100%",
      transform: `translateX(${-100 * this.state.sliderPage}%)`,
      transition: "transform 0.3s ease-out",
    };

    const images = this.state.headers.map((ele) => {
      return <img style={imageStyle} src={ele} alt="HEADER"></img>;
    });
    return (
      <div className={classes.header}>
        <div style={{ width: "500%", display: "flex" }}>{images}</div>
        <div className={classes.slider}>
          <div className={classes.iconleft} onClick={this.leftSlideHandler}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
          <div className={classes.iconright} onClick={this.rightSlideHandler}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
