import React from "react";
import Keyboard, { Row, Key, Layout } from "../../src/index";

export default function Custom() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <div>
        <textarea value={value} disabled />
      </div>

      <Keyboard value={value} layout={Layout.custom}>
        <Row>
          <Key
            value="a"
            onClick={(value) => setValue((oldValue) => `${oldValue}${value}`)}
          >
            A
          </Key>
          <Key
            value="b"
            onClick={(value) => setValue((oldValue) => `${oldValue}${value}`)}
          >
            B
          </Key>
          <Key
            value="c"
            onClick={(value) => setValue((oldValue) => `${oldValue}${value}`)}
          >
            C
          </Key>
        </Row>
      </Keyboard>
    </div>
  );
}
