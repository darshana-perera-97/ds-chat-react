import React from "react";
import { Link } from "react-router-dom";
import { clrs } from "../../DataSheet";

export default function SingleLink(prop) {
    const{link,name} = prop.val;
  return (
    <div>
      
      <a href={link} style={{ textDecoration: "none" }}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "21px",
            color: clrs[0],
            backgroundColor: clrs[2],
            marginLeft: "20%",
            borderRadius: "20px 0px 0px 20px",
            padding: "4px 4px",
            textDecoration: "none",
          }}
        >
          {name}
        </p>
      </a>
    </div>
  );
}
