import React from "react";
import { clrs } from "../../DataSheet";
import Active from "./Active";

export default function Messenger() {
  return (
    <div
      style={{ backgroundColor: clrs[3], height: "94vh", padding: "20px 0px" }}
    >
      <Active />
    </div>
  );
}
