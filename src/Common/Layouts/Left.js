import React from "react";
import { clrs } from "../../DataSheet";
import AppIcon from "../Components/AppIcon";
import LinkList from "./LinkList";

export default function Left() {
  return (
    <div style={{ height: "100vh", backgroundColor: clrs[0] }}>
      <AppIcon />
      <LinkList />
    </div>
  );
}
