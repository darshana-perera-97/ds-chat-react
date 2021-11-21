import React from "react";
import { clrs } from "../../DataSheet";

export default function SingleName(prop) {
  return (
    <div
      style={{
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        marginTop:"10px"
      }}
    >
      <div style={{ display: "flex", width: "80%", marginLeft: "25px" }}>
        <p
          // onClick={
          //   console.log("object")
          // }
          style={{
            margin: "0px",
            marginRight: "10px",
            fontWeight: "bold",
            color: clrs[1],
            backgroundColor: prop.colr,
            padding: "0px 5px",
            borderRadius: "10px 0px",
            fontSize: "20px",
          }}
        >
          {prop.val.charAt(0)}
        </p>
        <p style={{ margin: "0px", fontSize: "18px" }}>{prop.val}</p>
      </div>
    </div>
  );
}
