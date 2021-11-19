import React from "react";
import { links } from "../../DataSheet";
import SingleLink from "../Components/SingleLink";

export default function LinkList() {
  return (
    <div>
      {links.map((val, key) => {
        return (
          <div>
            <SingleLink val={val} key={key}/>
          </div>
        );
      })}
    </div>
  );
}
