import React from "react";
import logo from "./appIcon.png";

export default function AppIcon() {
  return (
    <div>
      <img src={logo} alt="logo" style={{ height: "100px", padding: "30px" }} />
    </div>
  );
}
