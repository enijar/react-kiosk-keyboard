import React from "react";

type Props = {
  children: any;
};

export default function Row({ children }: Props) {
  return <div className="kiosk-keyboard-row">{children}</div>;
}
