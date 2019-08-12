import React, { Component } from "react";
import Logo from "../transitions/Logo";

function Title() {
  return (
    <div className="login__logo">
      <Logo />
      <p className="login__sub-header fadeIn">Chiha's Real-Time Trivia!</p>
    </div>
  );
}

export default Title;
