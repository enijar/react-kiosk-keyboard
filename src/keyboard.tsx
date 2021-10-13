import React from "react";
import "./styles.css";
import Key from "./key";
import Row from "./row";
import { Value, Layout } from "./types";
import config from "./config";

type Props = {
  value: Value;
  onChange?: (value: Value) => void;
  layout?: Layout;
  children?: any;
};

export default function Keyboard({
  value,
  onChange,
  layout = Layout.standard,
  children,
}: Props) {
  const valueRef = React.useRef(value);
  React.useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const handleClick = React.useCallback(
    (value: Value) => {
      valueRef.current = `${valueRef.current}${value}`;
      if (onChange) {
        onChange(valueRef.current);
      }
    },
    [onChange]
  );

  if (layout === Layout.custom) {
    return <div className="kiosk-keyboard">{children}</div>;
  }

  return (
    <div className="kiosk-keyboard">
      {config.layouts[layout].map((keys, index) => {
        return (
          <Row key={index}>
            {keys.map((key) => {
              return (
                <Key value={key.value} key={key.value} onClick={handleClick}>
                  {key.label}
                </Key>
              );
            })}
          </Row>
        );
      })}
    </div>
  );
}
