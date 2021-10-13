import React from "react";
import Keyboard from "../../src/index";

export default function Basic() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <div>
        <textarea value={value} disabled />
      </div>

      <Keyboard value={value} onChange={setValue} />
    </div>
  );
}
