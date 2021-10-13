import React from "react";
import { Value } from "./types";

type Props = {
  children: any;
  value: Value;
  onClick: (value: Value) => void;
};

export default function Key({ children, value, onClick }: Props) {
  return (
    <button
      className="kiosk-keyboard-key"
      type="button"
      onClick={() => onClick(value)}
    >
      {children}
    </button>
  );
}
