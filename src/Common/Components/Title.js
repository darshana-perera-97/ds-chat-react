import React from "react";
import { clrs } from "../../DataSheet";

export default function Title(prop) {
    console.log(prop)
  return (
    <div style={{ margin: "0px 20px" }}>
      <p
        style={{
          borderRadius: "25px",
          backgroundColor: clrs[0],
          color: clrs[1],
          fontWeight: "bold",
          padding:"2px 0px"
        }}
      >
        {prop.val}
      </p>
    </div>
  );
}
