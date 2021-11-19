import React from "react";
import { clrs } from "../../DataSheet";
import Active from "./Active";

export default function Messenger() {
  return (
    <div
      style={{ backgroundColor: clrs[3], height: "100vh", padding: "25px 0px" }}
    >
      <Active />
    </div>
  );
}
