import React from "react";
import { clrs, friendList } from "../../DataSheet";
import SingleName from "../Components/SingleName";
import Title from "../Components/Title";

var colr = "red";

export default function Active() {
  return (
    <div style={{ cursor: "pointer" }}>
      <Title val="Messenger" />

      {friendList.map((val, key) => {
        if (val.active) {
          colr = clrs[4];
        } else {
          colr = clrs[0];
        }
        return (
          <div key={key}>
            {val.active && <SingleName val={val.name} colr={colr} />}
          </div>
        );
      })}
      <hr style={{ width: "80%", padding: "2.5px" }} />

      {friendList.map((val, key) => {
        if (val.active) {
          colr = clrs[4];
        } else {
          colr = clrs[5];
        }
        return (
          <div key={key}>
            {!val.active && <SingleName val={val.name} colr={colr} />}
          </div>
        );
      })}
    </div>
  );
}
