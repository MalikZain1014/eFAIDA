import React from "react";
import { LeapFrog } from "@uiball/loaders";

export default function Loader() {
  return (
    <div className="object-center">
      <LeapFrog size={100} speed={2.5} color="black" />
    </div>
  );
}
