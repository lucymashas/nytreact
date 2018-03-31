import React from "react";

const styles ={
  hdrStyles:{
    backgroundColor: "#3E444C",
    color: "#FCFBF9"
  }
}

const Header = () => (
    <div style={styles.hdrStyles} className="jumbotron">
      <h1>New York Times Search</h1>
    </div>
);

export default Header;