import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Landing from "../Landing/Landing";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default Layout;
