import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import ThirdClass from "./ThirdClass";
import ThirdFunc from "./ThirdFunc";

export default function() {
  const [someMin, setSomeMin] = useState(-20);
  setTimeout(() => setSomeMin(10), 2000);

  return (
    <div>
      <First min={1} max={20} />
      <Second min={1} max={20} />
      class: <ThirdClass min={someMin} max={20} key={someMin + ":" + 20} />
      func: <ThirdFunc min={-2} max={2} />
    </div>
  );
}
