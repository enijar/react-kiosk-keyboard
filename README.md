# React Kiosk Keyboard

Virtual keyboard for Kiosk apps.

### Installation

```shell
npm add react-kiosk-keyboard
```

### Usage

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
