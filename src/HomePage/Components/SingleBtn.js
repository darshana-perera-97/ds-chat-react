import React from "react";
import { clrs } from "../../DataSheet";

export default function SingleBtn(prop) {
  return (
    <div style={{ marginTop: "5px" }}>
      <button
        style={{ backgroundColor: clrs[5], color: clrs[1], padding: "4px 8px" }}
      >
        {prop.val}
      </button>
    </div>
  );
}
