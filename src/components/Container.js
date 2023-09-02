import React from "react";
import NavBar from "./navBar/NavBar";
import Header from "./header/Header";
import Footer from "./footer/Footer";

class Container extends React.Component {
 
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <body>
          <NavBar/>
        </body>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Container;
