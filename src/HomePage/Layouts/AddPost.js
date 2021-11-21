import { borderRadius } from "@mui/system";
import React from "react";
import { clrs } from "../../DataSheet";
import AvetarIcn from "../Components/AvetarIcn";
import SingleBtn from "../Components/SingleBtn";
import Text1 from "../Components/Text1";

export default function AddPost() {
  return (
    <div
      style={{
        backgroundColor: clrs[6],
        borderRadius: "8px",
        padding: "20px 50px",
        margin: "40px 20px",
      }}
    >
      <div style={{ display: "flex" }}>
        <AvetarIcn />
        <div style={{ marginLeft: "25px" }}>
          <Text1 />
          <textarea
            type="text"
            rows="4"
            cols="40"
            placeholder="write here what you think"
            style={{ borderRadius: "10px", padding: "4px 5px" }}
          />
        </div>
        <div>
          <button
            style={{
              padding: "4px 12px",
              marginRight: "25px",
              color: clrs[1],
              backgroundColor: clrs[0],
              fontWeight: "bold",
              borderColor: clrs[1],
              borderRadius: "20px",
            }}
          >
            POST
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <SingleBtn val="Add Photo" />
        <SingleBtn val="Add Document" />
        <SingleBtn val="Add Location" />
      </div>
    </div>
  );
}
