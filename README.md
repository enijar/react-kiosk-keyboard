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
import Keyboard, { Key } from "react-kiosk-keyboard";

function App() {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <textarea value={value} disabled />

      <Keyboard value={value} onChange={setValue}>
        <Key value="a">A</Key>
        <Key value="b">B</Key>
        <Key value="c">C</Key>
      </Keyboard>
    </div>
  );
}
```
