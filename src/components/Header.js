import React from "react";
import headerImage from "./../img/lol.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={headerImage} alt="A wavy dood." />
    </React.Fragment>
  );
}

export default Header;