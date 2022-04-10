import React from "react";
import Slider from "./Slider";

function Header() {
  return (
    <header>
      <p>My Profile</p>
      <div className="sec_header">
        <h1> React Native</h1>
        <h2>Test</h2>
      </div>
      <Slider />
    </header>
  );
}

export default Header;
