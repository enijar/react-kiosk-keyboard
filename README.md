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

### Why?

I build a lot of Kiosk touchscreens at my company. These are Chromium apps running on Ubuntu.

To make sure the app is locked down, the touchscreen keyboard needs to be hidden, so the user
cannot access the OS, thus breaking out of the Kiosk sandbox app.

This component is used to display an on-screen keyboard, in-app, when needed, i.e. data capture form.
