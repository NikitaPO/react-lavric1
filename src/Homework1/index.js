import React from "react";
import First from "./First";
import Second from "./Second";
import ThirdClass from "./ThirdClass";
import ThirdFunc from "./ThirdFunc";

export default function() {
  return (
    <div>
      {/* <First min={1} max={20} />
      <Second min={1} max={20} /> */}
      <ThirdClass min={-2} max={2} />
      <ThirdFunc min={-2} max={2} />
    </div>
  );
}
