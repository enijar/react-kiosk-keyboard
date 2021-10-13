# React Kiosk Keyboard

Virtual keyboard for Kiosk apps.

### Installation

```shell
npm add react-kiosk-keyboard
```

### Usage

**Basic**

```jsx
import Keyboard from "react-kiosk-keyboard";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <textarea value={value} disabled />

      <Keyboard value={value} onChange={setValue} />
    </div>
  );
}
```

**Custom**

```jsx
import Keyboard, { Layout, Row, Key } from "react-kiosk-keyboard";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <textarea value={value} disabled />

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
```